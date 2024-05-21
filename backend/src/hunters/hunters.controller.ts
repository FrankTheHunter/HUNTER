import { Body, Controller, Post, HttpCode } from '@nestjs/common';
import { HuntersService } from './hunters.service';
import { CreateHuntersDto } from './dto/createHunters.dto'; // Importation ajoutée

//import { createhunters } from './hunters.service';
@Controller('/hunters_registered')
export class HuntersController {
  constructor(private readonly huntersService: HuntersService) {}

  @Post('/register')
  @HttpCode(201)
  async addhunters(@Body() register: CreateHuntersDto) {
    await this.huntersService.createhunters(register);
    return { message: 'Hunters crées avec succées ' };
  }

  @Post('/login')
  @HttpCode(200)
  async login(@Body() login: CreateHuntersDto) {
    const hunters = await this.huntersService.validateUser(login.email, login.password);
    return { message: 'Hunters connecté avec succées', hunters };
  }
}
