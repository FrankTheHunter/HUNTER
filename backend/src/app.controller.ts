import { Controller, Get } from '@nestjs/common'; // Importation des décorateurs Controller et Get de Nest.js
import { AppService } from './app.service'; // Importation du service AppService

@Controller() // Décorateur pour marquer la classe comme contrôleur
export class AppController {
  constructor(private readonly appService: AppService) {} // Injection du service AppService via le constructeur

  @Get() // Décorateur pour définir la route HTTP GET associée à cette méthode
  getHello(): string {
    // Méthode qui gère les requêtes GET sur la route racine de l'application
    return 'test'; // Renvoie une réponse avec la chaîne "test"
  }
}
