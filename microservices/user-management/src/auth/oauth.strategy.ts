import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-oauth2-client-password';
import { AuthService } from './auth.service';

@Injectable()
export class OAuth2ClientPasswordStrategy extends PassportStrategy(
  Strategy,
  'oauth2-client-password',
) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(clientId: string, clientSecret: string): Promise<any> {
    const client = await this.authService.validateOAuthClient(
      clientId,
      clientSecret,
    );
    if (!client) {
      throw new UnauthorizedException();
    }
    return client;
  }
}
