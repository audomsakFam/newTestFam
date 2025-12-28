import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserAuthDto } from '../dto/user-auth.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => {
          return req?.cookies?.accessToken;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET')!,
    });
  }

  validate(payload: any): Promise<UserAuthDto> {
    return Promise.resolve({
      userId: payload.sub,
      email: payload.email,
      role: payload.role,
      name: payload.name,
      age: payload.age,
      telephone: payload.telephone,
    });
  }
}
