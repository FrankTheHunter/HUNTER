import { Injectable } from '@nestjs/common'; // Importation du module Injectable de Nest.js
import { JwtService } from '@nestjs/jwt'; // Importation du service JWT de Nest.js
import { HuntersService } from '../hunters/hunters.service';
import { LoginDto } from './dto/login.dto'; // Importation du DTO pour la connexion
@Injectable() // Décorateur Injectable pour définir le service comme injectable
export class AuthService {
  // Définition de la classe AuthService
  async signIn(signInDto: LoginDto) {

    return 'token';
    // Définition de la méthode de connexion
  }
  constructor(
    // Injection des dépendances requises pour le service d'authentification
    private huntersService: HuntersService, // Injection du service utilisateur
    private jwtService: JwtService, // Injection du service JWT
  ) {}
}
