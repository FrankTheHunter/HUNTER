import { IsEmail, IsNotEmpty } from 'class-validator';

// Importation des validateurs de la bibliothèque class-validator

// Définition du DTO (Data Transfer Object) pour l'enregistrement
export class RegisterDto {
  firstName: string; // Champ pour le prénom
  lastName: string; // Champ pour le nom de famille
  huntingLicenseNumber: string; // Champ pour le numéro de permis de chasse

  // Décorateurs de validation pour s'assurer que le champ n'est pas vide et qu'il contient une adresse e-mail valide,
  // avec un message d'erreur personnalisé en cas d'invalidité
  @IsNotEmpty()
  @IsEmail(null, { message: 'Veuillez fournir une adresse e-mail valide.' })
  email: string; // Champ pour l'e-mail

  // Décorateur de validation pour s'assurer que le champ n'est pas vide
  @IsNotEmpty()
  password: string; // Champ pour le mot de passe
}
