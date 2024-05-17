import { NestFactory } from '@nestjs/core';
<<<<<<< HEAD
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Origin', 'Authorization'],
    credentials: true,
  });
  app.use(cookieParser());
  await app.listen(3000);
=======
import { AppModule } from './app.module'; // Importation du module principal de l'application depuis le fichier 'app.module.ts'

async function bootstrap() {
  // Définition d'une fonction asynchrone 'bootstrap', responsable du démarrage de l'application
  const app = await NestFactory.create(AppModule); // Création d'une instance de l'application en utilisant le module principal 'AppModule'
  app.enableCors({
    // Configuration de la prise en charge des requêtes CORS (Cross-Origin Resource Sharing)
    origin: 'http://localhost:5173', // Spécification de l'origine autorisée
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Spécification des méthodes HTTP autorisées
    allowedHeaders: ['Content-Type', 'Origin', 'Authorization'], // Spécification des en-têtes autorisés
    credentials: true, // Activation de la prise en charge des cookies et de l'authentification avec des identifiants
  });
  await app.listen(3000); // Démarrage de l'application en écoutant sur le port 3000
>>>>>>> 3130ac3263d985a9860438a64dd8618915eb6009
}

bootstrap(); // Appel de la fonction 'bootstrap' pour démarrer l'application
