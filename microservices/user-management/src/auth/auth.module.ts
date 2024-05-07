import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { OAuth2ClientPasswordStrategy } from './oauth.strategy';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'your_secret_key', // Replace with your secret key
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    OAuth2ClientPasswordStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
