<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
=======
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
>>>>>>> 3130ac3263d985a9860438a64dd8618915eb6009
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
<<<<<<< HEAD
      port: 5433,
      username: 'myuser',
      password: 'mypassword',
      database: 'my_database',
      entities: [User],
=======
      port: 5432,
      username: 'postgres',
      password: 'super',
      database: 'hunters',
      entities: [Hunters],
>>>>>>> 3130ac3263d985a9860438a64dd8618915eb6009
      synchronize: false,
      autoLoadEntities: true,
      logging: true,
    }),
<<<<<<< HEAD
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
=======
    DatabaseModule,
    HuntersModule
  ], // Importation des modules supplémentaires utilisés par l'application (connexion à la base de données, authentification)
  controllers: [AppController], // Déclaration des contrôleurs utilisés par l'application
  providers: [AppService], // Déclaration des services utilisés par l'application
>>>>>>> 3130ac3263d985a9860438a64dd8618915eb6009
})
export class AppModule {} // Définition de la classe AppModule comme module principal de l'application
