import { IsEmail, IsNotEmpty, Matches, MinLength } from 'class-validator';

export class CreateHuntersDto {

  @IsNotEmpty()
  licenseNumber: string;

  @IsNotEmpty()
  @MinLength(3, { message: 'Last name must have at least 3 characters.' })
  lastname: string;

  @IsNotEmpty()
  @MinLength(3, { message: 'First name must have at least 3 characters.' })
  firstname: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please provide a valid email address.' })
  email: string;

  @IsNotEmpty()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message:
      'Password must be at least 8 characters long and contain at least one letter and one number.',
  })
  password: string;

}
