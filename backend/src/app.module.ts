import { Module } from '@nestjs/common'; // Importation du module Nest.js

// Importation des composants de l'application (contrôleur, service, modules supplémentaires)
import { AppController } from './app.controller'; // Contrôleur principal de l'application
import { AppService } from './app.service'; // Service principal de l'application
import { DatabaseModule } from './database/database.module'; // Module pour la connexion à la base de données
//import { AuthModule } from './auth/auth.module'; // Module pour la gestion de l'authentification
import { HuntersModule } from './hunters/hunters.module'; // Module pour la gestion des utilisateurs
import { Hunters } from './hunters/entities/hunters.entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // Déclaration du module principal de l'application
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Type de base de données utilisé
      host: 'database',
      port: 5432,
      username: 'hunters',
      password: 'super',
      database: 'hunters',
      entities: [Hunters],
      synchronize: false,
      autoLoadEntities: true,
      logging: true,
    }),
    DatabaseModule,
    HuntersModule
  ], // Importation des modules supplémentaires utilisés par l'application (connexion à la base de données, authentification)
  controllers: [AppController], // Déclaration des contrôleurs utilisés par l'application
  providers: [AppService], // Déclaration des services utilisés par l'application
})
export class AppModule {} // Définition de la classe AppModule comme module principal de l'application
