import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  NotFoundException,
  BadRequestException,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { PaginationData } from '../../interfaces/pagination-data.interface';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const user = await this.usersService.create(createUserDto);
    if (!user) throw new NotFoundException();
    return user;
  }

  @Get('search')
  search(
    @Query('query') query: string,
    @Query('page', ParseIntPipe) page?: number,
  ): Promise<PaginationData<User[]>> {
    if (!query) throw new BadRequestException('You need to provide query.');
    return this.usersService.search(query, page);
  }

  @Get()
  findAll(
    @Query('page', ParseIntPipe) page?: number,
  ): Promise<PaginationData<User[]>> {
    return this.usersService.findAll(page);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    const user = await this.usersService.findOneById(+id);
    if (!user) throw new NotFoundException();
    return user;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const user = await this.usersService.update(+id, updateUserDto);
    if (!user) throw new NotFoundException();
    return user;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<User[]> {
    const users = await this.usersService.remove(+id);
    if (!users) throw new NotFoundException();
    return users;
  }
}
