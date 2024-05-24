import {
  Body, // Décorateur pour extraire le corps de la requête HTTP
  Controller, // Décorateur pour définir un contrôleur
  HttpCode, // Décorateur pour spécifier le code de statut HTTP
  HttpStatus, // Enumération des codes de statut HTTP
  Post, // Décorateur pour définir une route POST
  Res, // Décorateur pour injecter l'objet de réponse HTTP
} from '@nestjs/common';
import { Response } from 'express'; // Importation de l'objet de réponse Express
// Remove the duplicate import statement for 'CreateHuntersDto'
import { Public } from './public_strategy'; // Importation du décorateur pour les routes publiques
import { LoginDto } from './dto/login.dto'; // Importation du DTO pour la connexion
import { RegisterDto } from './dto/register.dto'; // Importation du DTO pour l'enregistrement
import { AuthService } from './auth.service';

@Controller('auth') // Définition du chemin de base pour les routes de ce contrôleur
export class AuthController {
  constructor(private authService: AuthService) {} // Injection du service d'authentification via le constructeur

  @Public() // Décorateur pour définir cette route comme publique (accessible sans authentification)
  @HttpCode(HttpStatus.OK) // Définition du code de statut HTTP pour cette route
  @Post('/register') // Définition de la route POST pour l'enregistrement des utilisateurs
  async createHunter(registerData: RegisterDto) {
    // Logic to create a new hunter
  }

  @Public() // Décorateur pour définir cette route comme publique (accessible sans authentification)
  @HttpCode(HttpStatus.OK) // Définition du code de statut HTTP pour cette route
  @Post('login') // Définition de la route POST pour la connexion des utilisateurs
  async signIn(
    @Body() signInDto: LoginDto, // Paramètre de requête pour les données de connexion
    @Res({ passthrough: true }) response: Response, // Injection de l'objet de réponse HTTP
  ) {
    const token = await this.authService.signIn(
      // Appel au service d'authentification pour générer le jeton d'authentification
      signInDto.email, // Email de l'utilisateur
      signInDto.password, // Mot de passe de l'utilisateur
    );
    console.log(token); // Affichage du jeton d'authentification généré dans la console

    // Configuration du cookie JWT dans la réponse HTTP
    response.cookie('token', token, {
      httpOnly: true, // Le cookie ne peut être accédé que par le serveur
      secure: false, // Le cookie est transmis sur des connexions non sécurisées
      maxAge: 1000 * 60 * 15, // Durée de validité du cookie en millisecondes (ici, 15 minutes)
      sameSite: 'none', // Le cookie peut être envoyé avec des requêtes provenant de domaines différents
    });

    // Retourne une réponse indiquant que la connexion a réussi
    return {
      success: true,
    };
  }
}
