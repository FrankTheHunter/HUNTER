import { Injectable } from '@nestjs/common'; // Importation du décorateur Injectable de Nest.js

@Injectable() // Marquage de la classe comme un service injectable
export class AppService {
  // Définition de la classe AppService
  getHello(): string {
    // Méthode pour obtenir un message de salutation
    return 'Hello World!'; // Retourne une chaîne de caractères "Hello World!"
  }
}
