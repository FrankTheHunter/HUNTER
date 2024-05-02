import { IsEmail, IsNotEmpty } from 'class-validator';

// Définition du DTO (Data Transfer Object) pour la connexion
export class LoginDto {
  // Décorateurs pour valider les champs de la classe

  // Assure que le champ n'est pas vide
  @IsNotEmpty()
  // Assure que le champ est un email valide, avec un message d'erreur personnalisé en cas d'invalidité
  @IsEmail(null, { message: 'Veuillez fournir une adresse e-mail valide.' })
  email: string; // Champ pour l'email

  // Assure que le champ n'est pas vide
  @IsNotEmpty()
  password: string; // Champ pour le mot de passe
}
