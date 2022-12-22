import {
  IsOptional,
  IsString,
  IsEnum,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';
import { UserSex } from '../interfaces/user-sex.interface';

export class UpdateUserDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsEnum(UserSex, { message: 'Sex must be M or F' })
  @IsOptional()
  sex?: UserSex;

  @IsString()
  @IsOptional()
  birthday?: string;

  @IsString()
  @IsOptional()
  email?: string;
}
