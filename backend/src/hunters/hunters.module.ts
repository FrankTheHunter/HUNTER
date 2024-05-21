import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hunters } from '../hunters/entities/hunters.entities'; // Updated import path
import { HuntersService } from './hunters.service';
import { HuntersController } from './hunters.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Hunters])],
  providers: [HuntersService],
  controllers: [HuntersController],
  exports: [HuntersService],
})
export class HuntersModule {}
