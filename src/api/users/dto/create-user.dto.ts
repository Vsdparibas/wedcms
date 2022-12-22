import { IsString, IsEnum, IsNotEmpty } from 'class-validator';
import { UserSex } from '../interfaces/user-sex.interface';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(UserSex, { message: 'Sex must be M or F' })
  sex: UserSex;

  @IsString()
  @IsNotEmpty()
  birthday: string;

  @IsString()
  @IsNotEmpty()
  email: string;
}
