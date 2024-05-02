import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { Model } from 'mongoose'; // Importation du modèle depuis mongoose

interface RegisterDto {
  username: string;
  creationDate: Date;
  email: string; // Ajout de la propriété 'email'
  password: string; // Ajout de la propriété 'password'
}

@Injectable()
export class AuthService {
  signIn(email: string, password: string) {
    throw new Error('Method not implemented.');
  }
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private userModel: Model<any>, // Injection du modèle utilisateur
  ) {}

  async register(payload: RegisterDto) {
    const { username, creationDate, email, password } = payload;
    const user = await this.userService.create({
      email,
      password,
      username,
      creationDate,
    });
    return user;
  }
}
