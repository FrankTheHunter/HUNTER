import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  // Identifiant unique auto-incrémenté de l'utilisateur
  @PrimaryGeneratedColumn()
  id: number;

  // Adresse email de l'utilisateur, unique dans la base de données
  @Column({ unique: true })
  email: string;

  // Date de création de l'utilisateur, définie par défaut à la date et heure actuelles
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  creationDate: Date;

  // Nom d'utilisateur de l'utilisateur
  @Column()
  username: string;

  // Mot de passe de l'utilisateur
  @Column()
  password: string;
}
