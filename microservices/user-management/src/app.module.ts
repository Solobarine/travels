import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/role.guard';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'your_postgres_username',
      password: 'your_postgres_password',
      database: 'your_database_name',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController, UserController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    UserService,
  ],
})
export class AppModule {}
