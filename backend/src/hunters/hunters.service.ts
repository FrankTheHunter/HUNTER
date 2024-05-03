import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hunters } from '../hunters/entities/hunters.entities';
import { Repository } from 'typeorm';
import { CreateHuntersDto } from './dto/createHunters.dto';

@Injectable()
export class HuntersService {
  async create(arg0: { email: string; password: string; huntersname: string; creationDate: Date; }) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Hunters) private readonly huntersRepository: Repository<Hunters>,
  ) {}

  async createhunters(createhuntersDto: CreateHuntersDto) {
    let hunters: Hunters; // Declare the variable 'hunters' with the type 'Hunters'.
    hunters = new Hunters();
    hunters.email = createhuntersDto.emailAddress;
    hunters.password = createhuntersDto.password;
    hunters.creationDate = new Date();

    await this.huntersRepository.save(hunters);
    return hunters;
  }

  async findOneByEmail(email: string): Promise<Hunters | null> {
    console.log(email);
    const hunters = await this.huntersRepository.findOne({ where: { email } });

    return hunters;
  }
}
