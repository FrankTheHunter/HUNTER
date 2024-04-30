import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterDto {
  firstName: string;
  lastName: string;
  huntingLicenseNumber: string;
  @IsNotEmpty()
  @IsEmail(null, { message: 'Please provide valid Email.' })
  email: string;

  @IsNotEmpty()
  password: string;
}
