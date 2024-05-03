import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("hunters")
export class Hunters {
  // Identifiant unique auto-incrémenté de l'utilisateur
  @PrimaryGeneratedColumn()
  id: number;
  // prenom de l'utilisateur
  @Column()
  lastname: string;

  // Nom d'utilisateur de l'utilisateur
  @Column()
  firstname: string;

  // Adresse email de l'utilisateur, unique dans la base de données
  @Column()
  email: string;
  huntersname: any;
  creationDate: any;
  password: any;
}
