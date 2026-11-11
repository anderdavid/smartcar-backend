import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from "class-validator";

export class createUserDto {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Max(100)
  age: number;
}
