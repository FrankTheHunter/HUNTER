import { IsDate, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
// Définition d'un DTO (Objet de Transfert de Données) pour la création d'un utilisateur
export class createUserDto {
  // Assure que l'e-mail n'est pas vide et est une adresse e-mail valide
  @IsNotEmpty()
  @IsEmail(null, { message: 'Please provide valid Email.' })
  email: string;
  // Assure que le nom d'utilisateur n'est pas vide et a une longueur minimale de 3 caractères
  @IsNotEmpty()
  @MinLength(3, { message: 'pseudo must have atleast 3 characters.' })
  username: string;
  // Assure que le mot de passe n'est pas vide
  @IsNotEmpty()
  password: string;
  // Assure que la date de création n'est pas vide et est un objet Date valide
  @IsNotEmpty()
  @IsDate()
  creationDate: Date;
}
