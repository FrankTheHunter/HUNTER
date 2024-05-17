<<<<<<< HEAD
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
=======
import { Test, TestingModule } from '@nestjs/testing'; // Importation des modules de test de Nest.js
import { AppController } from './app.controller'; // Importation du contrôleur à tester
import { AppService } from './app.service'; // Importation du service nécessaire
>>>>>>> 3130ac3263d985a9860438a64dd8618915eb6009

describe('AppController', () => {
  let appController: AppController; // Déclaration de la variable pour le contrôleur

  beforeEach(async () => {
    // Configuration des tests avec un nouveau module de test
    const app: TestingModule = await Test.createTestingModule({
<<<<<<< HEAD
      controllers: [AppController, UserController],
      providers: [AppService, UserService],
    }).compile();
=======
      controllers: [AppController], // Contrôleur à tester
      providers: [AppService], // Service nécessaire au contrôleur
    }).compile(); // Compilation du module de test
>>>>>>> 3130ac3263d985a9860438a64dd8618915eb6009

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
