import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as argon2 from 'argon2';
import { PaginationData } from '../../interfaces/pagination-data.interface';
import { getPagination } from 'src/utils/get-pagination.utils';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User(createUserDto);
    user.password = await argon2.hash(createUserDto.password);
    return this.usersRepository.save(user);
  }

  async search(query: string, page?: number): Promise<PaginationData<User[]>> {
    return getPagination(this.usersRepository, page, {
      username: Like(`%${query}%`),
    });
  }

  async findAll(page?: number): Promise<PaginationData<User[]>> {
    return getPagination(this.usersRepository, page);
  }

  findOneById(id: number): Promise<User | null> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
    const user = await this.findOneById(id);
    if (!user) return null;
    if (updateUserDto.username) user.username = updateUserDto.username;
    if (updateUserDto.password)
      user.password = await argon2.hash(updateUserDto.password);
    if (updateUserDto.email) user.email = updateUserDto.email;
    if (updateUserDto.birthday) user.birthday = updateUserDto.birthday;
    if (updateUserDto.sex) user.sex = updateUserDto.sex;
    return this.usersRepository.save(user);
  }

  async remove(id: number): Promise<User[] | null> {
    const user = await this.findOneById(id);
    if (!user) return null;
    return this.usersRepository.remove([user]);
  }
}
