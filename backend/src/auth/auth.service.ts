import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  // async signIn(username: string, pass: string): Promise<any> {
  //   const user = await this.userService.findOneByEmail(username);

  //   console.log(user, pass);
  //   if (user?.password !== pass) {
  //     throw new UnauthorizedException();
  //   }

  //   const payload = { sub: user.id, email: user.email };
  //   const token = await this.jwtService.signAsync(payload);

  //   return token;
  // }

  async register(payload: RegisterDto) {
    const user = await this.userService.create(payload);
    return user;
  }
}