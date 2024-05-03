import { Module } from '@nestjs/common'; // Importation du module de base de Nest.js
import { AuthController } from './auth.controller'; // Importation du contrôleur d'authentification
import { AuthService } from './auth.service'; // Importation du service d'authentification
import { JwtModule } from '@nestjs/jwt'; // Importation du module JWT de Nest.js
import { jwtConstants } from './constants'; // Importation des constantes JWT
import { HuntersService } from '../hunters/hunters.service'; // Importation du service d'utilisateurs
import { HuntersModule } from '../hunters/hunters.module'; // Importation du module d'utilisateurs
import { APP_GUARD } from '@nestjs/core'; // Constante pour le fournisseur de garde d'accès
import { AuthGuard } from './auth.guard'; // Importation du garde d'accès pour l'authentification

@Module({
  imports: [
    HuntersModule, // Importation du module d'utilisateurs
    JwtModule.register({ 
      // Configuration du module JWT
      global: true, // Le module JWT est global
      secret: jwtConstants.secret, // Utilisation de la clé secrète définie dans les constantes JWT
      signOptions: { expiresIn: '1d' }, // Options de signature pour les jetons JWT (expiration après 1 jour)
    }),
  ],
  controllers: [AuthController], // Déclaration des contrôleurs utilisés dans ce module
  providers: [
    {
      provide: APP_GUARD, // Fournisseur pour l'utilisation de gardes d'accès au niveau de l'application
      useClass: AuthGuard, // Utilisation de la classe AuthGuard comme garde d'accès
    },
    AuthService, // Déclaration du service d'authentification
    HuntersService, // Déclaration du service d'utilisateurs
  ],
})
export class AuthModule {} // Définition du module d'authentification
