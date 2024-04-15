import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  create(user: CreateUserDto) {
    // TODO Create user
    console.log('TODO UserService.create', user);
  }
}
