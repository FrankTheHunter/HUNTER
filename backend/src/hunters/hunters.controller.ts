import {
  Body,
  Controller,
  Post,
  HttpCode,
  UnauthorizedException,
} from '@nestjs/common';
import { HuntersService } from './hunters.service';
import { CreateHuntersDto } from './dto/createHunters.dto';
import { sign } from 'jsonwebtoken';
@Controller('/hunters_registered')
export class HuntersController {
  constructor(private readonly huntersService: HuntersService) {}

  @Post('/register')
  @HttpCode(201)
  async addhunters(@Body() register: CreateHuntersDto) {
    await this.huntersService.createhunters(register);
    return { message: 'Hunters crées avec succées ' };
  }

  @Post('/login') // Définition de la route de connexion
  @HttpCode(200)
  async login(@Body() login: CreateHuntersDto) {
    const hunters = await this.huntersService.validateUser(
      login.email,
      login.password,
    ); // Add closing parenthesis here

    // Vérifiez si l'utilisateur est valide
    if (!hunters) {
      throw new UnauthorizedException('Email ou mot de passe incorrect');
    }

    // Générer un token
    const accessToken = sign({ sub: (hunters as any).id }, 'secretKey', {
      expiresIn: '1h',
    });

    return { message: 'Chasseur connecté avec succées', hunters, accessToken };
  }
}
