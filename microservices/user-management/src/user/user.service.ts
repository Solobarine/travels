import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  async findById(id: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { id } });
  }

  async createUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.userRepository.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    return this.userRepository.save(newUser);
  }

  // Implement other CRUD operations as needed
}
