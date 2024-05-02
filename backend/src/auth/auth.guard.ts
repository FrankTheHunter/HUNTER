import {
  CanActivate, // Interface pour les gardes d'accès
  ExecutionContext, // Contexte d'exécution de la requête
  HttpException, // Exception HTTP
  HttpStatus, // Codes de statut HTTP
  Injectable, // Décorateur pour marquer la classe comme injectable
  UnauthorizedException, // Exception pour les accès non autorisés
} from '@nestjs/common';
import { Reflector } from '@nestjs/core'; // Reflector pour accéder aux métadonnées
import { JwtService } from '@nestjs/jwt'; // Service JWT de NestJS
import { IS_PUBLIC_KEY } from './public_strategy'; // Clé pour les routes publiques
import { jwtConstants } from './constants'; // Constantes JWT
import { Request } from 'express'; // Interface pour l'objet de requête HTTP d'Express

@Injectable() // Marque la classe comme injectable
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService, // Service JWT injecté
    private reflector: Reflector, // Reflector pour accéder aux métadonnées des routes
  ) {}

  // Méthode de la CanActivate interface, vérifie si l'accès est autorisé
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(), // Le gestionnaire de la requête
      context.getClass(), // La classe du contrôleur
    ]);
    if (isPublic) {
      return true; // Si la route est marquée comme publique, autoriser l'accès
    }

    const request = context.switchToHttp().getRequest(); // Obtenir l'objet de requête HTTP
    if (!request.user) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED); // Si l'utilisateur n'est pas authentifié, renvoyer une exception HTTP 401
    }
    const token = this.extractTokenFromHeader(request); // Extraire le jeton d'authentification du header
    if (!token) {
      throw new UnauthorizedException(); // Si le jeton n'est pas présent, renvoyer une exception d'accès non autorisé
    }
    try {
      // Vérifier et décoder le jeton JWT
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret, // Utiliser la clé secrète pour vérifier la signature
      });
      request['user'] = payload; // Ajouter les données utilisateur décodées à la requête
    } catch {
      throw new UnauthorizedException(); // Si la vérification échoue, renvoyer une exception d'accès non autorisé
    }
    return true; // Si toutes les vérifications sont réussies, autoriser l'accès
  }

  // Méthode privée pour extraire le jeton d'authentification du header
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined; // Retourner le jeton s'il est présent et s'il est de type Bearer
  }
}
