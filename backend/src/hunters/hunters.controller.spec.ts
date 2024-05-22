import { Test, TestingModule } from '@nestjs/testing';
import { HuntersController } from './hunters.controller';
import { HuntersService } from '../hunters/hunters.service';

describe('huntersController', () => {
  // Déclaration de la variable pour le contrôleur huntersController
  let controller: HuntersController;

  beforeEach(async () => {
    // Configuration des tests avec un nouveau module de test
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HuntersController], // Contrôleur à tester
      providers: [HuntersService], // Service nécessaire au contrôleur
    }).compile(); // Compilation du module de test

    // Récupération du contrôleur huntersController depuis le module
    controller = module.get<HuntersController>(HuntersController);
  });

  // Test : Vérifie si le contrôleur est défini
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
