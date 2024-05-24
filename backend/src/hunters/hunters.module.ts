import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hunters } from '../hunters/entities/hunters.entities'; // Updated import path
import { HuntersService } from './hunters.service';
import { HuntersController } from './hunters.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Hunters])], // Import the TypeOrmModule and use the forFeature() method to define the entities to be used in this module
  providers: [HuntersService], // Declare the HuntersService as a provider
  controllers: [HuntersController], // Declare the HuntersController as a controller
  exports: [HuntersService], // Export the HuntersService to make it available for other modules
})
export class HuntersModule {}
