import { Test, TestingModule } from '@nestjs/testing'; // Importation des modules de test de Nest.js
import { AuthService } from './auth.service'; // Importation du service à tester

describe('AuthService', () => {
  // Déclaration d'une suite de tests pour le service AuthService
  let service: AuthService; // Déclaration d'une variable pour stocker l'instance du service

  beforeEach(async () => {
    // Fonction exécutée avant chaque test
    const module: TestingModule = await Test.createTestingModule({
      // Création d'un module de test
      providers: [AuthService], // Déclaration des fournisseurs de service pour le module de test
    }).compile(); // Compilation du module de test

    service = module.get<AuthService>(AuthService); // Récupération d'une instance du service
  });

  it('should be defined', () => {
    // Test pour vérifier si le service est défini
    expect(service).toBeDefined(); // Assertion pour vérifier que le service est défini
  });
});
