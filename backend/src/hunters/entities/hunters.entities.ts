import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('hunters_registered')
export class Hunters {
  // Identifiant unique auto-incrémenté de l'utilisateur
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'license_number' })
  licenseNumber: string;

  // prenom de l'utilisateur
  @Column({ name: 'lastname' })
  lastname: string;

  // Nom d'utilisateur de l'utilisateur
  @Column({ name: 'firstname' })
  firstname: string;

  // Adresse email de l'utilisateur, unique dans la base de données
  @Column({ name: 'email_address' })
  email: string;
  
  // Mot de passe de l'utilisateur
  @Column({ name: 'password', type: 'varchar' })
  password: string;
}