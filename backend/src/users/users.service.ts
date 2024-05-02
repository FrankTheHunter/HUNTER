import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  findOneByEmail() {
    throw new Error('Method not implemented.');
  }
  create(user: createUserDto) {
    // TODO Create user
    console.log('TODO UserService.create', user);
  }
}
