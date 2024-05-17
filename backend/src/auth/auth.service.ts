<<<<<<< HEAD
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createUserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByEmail(username);

    console.log(user, pass);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload);

    return token;
  }

  async register(payload: createUserDto) {
    const user = await this.userService.createUser(payload);
    return user;
  }
=======
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

 /*  async register(payload: RegisterDto) { // Définition de la méthode d'inscription
    const { huntersname, creationDate, email, password } = payload; // Extraction des données du payload
    const hunters = await this.huntersService.create({ // Création d'un nouvel utilisateur
      email,
      password,
      huntersname,
      creationDate,
    });
    return hunters; // Retourne l'utilisateur créé
  } */
>>>>>>> 3130ac3263d985a9860438a64dd8618915eb6009
}
