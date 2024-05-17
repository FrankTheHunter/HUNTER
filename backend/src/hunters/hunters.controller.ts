import { Body, Controller, Post } from '@nestjs/common';
import { HuntersService } from './hunters.service';
import { CreateHuntersDto } from './dto/createHunters.dto'; // Importation ajoutée

@Controller('/hunters_registered')
export class HuntersController {
  constructor(private readonly huntersService: HuntersService) {}

  @Post('/register')
  addhunters(@Body() register: CreateHuntersDto) {
    console.log(register);
    return this.huntersService.createhunters(register);
  }
}