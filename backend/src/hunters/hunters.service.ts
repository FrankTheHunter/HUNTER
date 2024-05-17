import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hunters } from '../hunters/entities/hunters.entities';
import { Repository } from 'typeorm';
import { CreateHuntersDto } from './dto/createHunters.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HuntersService {
  constructor(
    @InjectRepository(Hunters) private readonly huntersRepository: Repository<Hunters>,
  ) {}

  async createhunters(createhuntersDto: CreateHuntersDto) {
    let hunters: Hunters; // Declare the variable 'hunters' with the type 'Hunters'.
    hunters = new Hunters();
    hunters.licenseNumber = createhuntersDto.licenseNumber;
    hunters.firstname = createhuntersDto.firstname;
    hunters.lastname = createhuntersDto.lastname;
    hunters.email = createhuntersDto.email;
    const rawPassword = createhuntersDto.password;
    const salt = await bcrypt.genSalt(10); // Generate a random salt.
    const hashedPassword = await bcrypt.hash(rawPassword, salt); // Use the salt to hash the password.
    hunters.password = hashedPassword;

    await this.huntersRepository.save(hunters);
    return hunters;
  }

  async validateUser(email: string, password: string): Promise<boolean> {
    const hunters = await this.huntersRepository.findOne({ where: { email } });
    if (hunters && hunters.password) {
      const isMatch = await bcrypt.compare(password, hunters.password);
      return isMatch;
    }
    return false;
  }
}