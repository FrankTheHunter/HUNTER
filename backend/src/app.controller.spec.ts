import { Test, TestingModule } from '@nestjs/testing'; // Importation des modules de test de Nest.js
import { AppController } from './app.controller'; // Importation du contrôleur à tester
import { AppService } from './app.service'; // Importation du service nécessaire

describe('AppController', () => {
  let appController: AppController; // Déclaration de la variable pour le contrôleur

  beforeEach(async () => {
    // Configuration des tests avec un nouveau module de test
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController], // Contrôleur à tester
      providers: [AppService], // Service nécessaire au contrôleur
    }).compile(); // Compilation du module de test

    // Récupération du contrôleur AppController depuis le module
    appController = app.get<AppController>(AppController);
  });

  // Description du groupe de tests pour la méthode 'root' du contrôleur
  describe('root', () => {
    // Test : Vérifie si la méthode 'getHello' retourne 'Hello World!'
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
