import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from './dto/createUser.dto'; // Importation ajoutée

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  addUser(@Body() register: createUserDto) {
    console.log(register);
    return this.userService.createUser(register);
  }
}
