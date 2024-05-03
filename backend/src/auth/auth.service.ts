import { Injectable } from '@nestjs/common'; // Importation du module Injectable de Nest.js
import { JwtService } from '@nestjs/jwt'; // Importation du service JWT de Nest.js
import { HuntersService } from '../hunters/hunters.service';
import { Model } from 'mongoose'; // Importation du modèle depuis mongoose

interface RegisterDto { // Définition de l'interface RegisterDto
  huntersname: string; // Ajout de la propriété 'huntersname'
  creationDate: Date;  // Ajout de la propriété 'creationDate'
  email: string; // Ajout de la propriété 'email'
  password: string; // Ajout de la propriété 'password'
}

@Injectable() // Décorateur Injectable pour définir le service comme injectable
export class AuthService { // Définition de la classe AuthService
  signIn(email: string, password: string) { // Définition de la méthode de connexion
    throw new Error('Method not implemented.'); // Implémenter la méthode de connexion
  }
  constructor( // Injection des dépendances requises pour le service d'authentification
    private huntersService: HuntersService, // Injection du service utilisateur
    private jwtService: JwtService, // Injection du service JWT
    private huntersModel: Model<any>, // Injection du modèle utilisateur
  ) {}

  async register(payload: RegisterDto) { // Définition de la méthode d'inscription
    const { huntersname, creationDate, email, password } = payload; // Extraction des données du payload
    const hunters = await this.huntersService.create({ // Création d'un nouvel utilisateur
      email,
      password,
      huntersname,
      creationDate,
    });
    return hunters; // Retourne l'utilisateur créé
  }
}
