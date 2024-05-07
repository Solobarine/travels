import {
  Controller,
  Get,
  Post,
  Body,
  SetMetadata,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { RolesGuard } from 'src/auth/role.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(
      user.firstName,
      user.lastName,
      user.email,
      user.password,
    );
  }

  @UseGuards(LocalAuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }

  @UseGuards(RolesGuard)
  @SetMetadata('roles', ['admin'])
  @Get()
  async findByEmail(@Request() req: User) {
    return this.userService.findByEmail(req.email);
  }
}
