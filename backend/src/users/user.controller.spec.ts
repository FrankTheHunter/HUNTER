import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  // Déclaration de la variable pour le contrôleur UserController
  let controller: UserController;

  beforeEach(async () => {
    // Configuration des tests avec un nouveau module de test
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController], // Contrôleur à tester
      providers: [UserService], // Service nécessaire au contrôleur
    }).compile(); // Compilation du module de test

    // Récupération du contrôleur UserController depuis le module
    controller = module.get<UserController>(UserController);
  });

  // Test : Vérifie si le contrôleur est défini
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
