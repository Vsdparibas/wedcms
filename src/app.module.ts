import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsModule } from './api/rooms/rooms.module';
import { User } from './api/users/entities/user.entity';
import { UsersModule } from './api/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'kepler141',
      entities: [User],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    RoomsModule,
  ],
})
export class AppModule {}
