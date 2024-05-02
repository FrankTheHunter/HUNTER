import { Module, Global } from '@nestjs/common'; // Importation des modules Nest.js nécessaires
import { Kysely, PostgresDialect } from 'kysely'; // Importation des modules de Kysely pour l'accès à la base de données
import { Pool } from 'pg'; // Importation du module Pool de pg pour gérer les connexions à la base de données

const DATABASE_PROVIDERS = [
  // Définition des fournisseurs de services pour la connexion à la base de données
  {
    provide: 'DATABASE_CONNECTION', // Clé pour l'injection de dépendances
    useFactory: async () => {
      // Fonction factory pour créer et configurer la connexion à la base de données
      const db = new Kysely({
        // Création d'une instance de Kysely pour l'accès à la base de données
        dialect: new PostgresDialect({
          // Utilisation du dialecte PostgreSQL
          pool: new Pool({
            // Création d'un pool de connexions PostgreSQL
            host: '127.0.0.1:5432', // Hôte de la base de données
            database: 'hunters', // Nom de la base de données
            user: 'hunter', // Nom d'utilisateur de la base de données
            password: 'super', // Mot de passe de la base de données
          }),
        }),
      });
      return db; // Retourne l'instance de Kysely configurée
    },
  },
];

@Global() // Marquage du module comme global pour pouvoir être partagé entre plusieurs modules
@Module({
  providers: [...DATABASE_PROVIDERS], // Déclaration des fournisseurs de services pour ce module
  exports: [...DATABASE_PROVIDERS], // Exportation des fournisseurs de services pour être utilisés par d'autres modules
})
export class DatabaseModule {} // Définition du module de base de données
