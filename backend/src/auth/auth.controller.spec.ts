import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';

// Déclaration d'une suite de tests pour le contrôleur AuthController
describe('AuthController', () => {
  let controller: AuthController; // Déclaration d'une variable pour stocker le contrôleur

  // Fonction exécutée avant chaque test
  beforeEach(async () => {
    // Création d'un module de test avec le contrôleur AuthController
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController], // Déclaration du contrôleur à tester
    }).compile();

    controller = module.get<AuthController>(AuthController); // Récupération d'une instance du contrôleur
  });

  // Test pour vérifier que le contrôleur est défini
  it('should be defined', () => {
    expect(controller).toBeDefined(); // Vérification que le contrôleur est défini
  });
});
