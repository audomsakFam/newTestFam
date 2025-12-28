import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User, UserDocument } from '../users/schema/user.schema';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UserAuthDto } from './dto/user-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<UserAuthDto> {
    const user = await this.userModel.findOne({ email }).exec();
    if (user && (await bcrypt.compare(pass, user.password))) {
      const currentUser: UserAuthDto = {
        userId: user._id.toString(),
        email: user.email,
        name: user.name,
        age: user.age,
        telephone: user.telephone,
        role: user.role,
      };
      return currentUser;
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  login(user: UserAuthDto) {
    const payload = {
      sub: user.userId,
      email: user.email,
      role: user.role,
      name: user.name,
      age: user.age,
      telephone: user.telephone,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
