import { Controller, Post, Res, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserAuthDto } from './dto/user-auth.dto';
import { LocalAuthGuard } from './guards/local/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(
    @Request() req: { user: UserAuthDto },
    @Res({ passthrough: true }) res,
  ) {
    const { accessToken } = this.authService.login(req.user);

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
    });

    return {
      message: 'Login successful',
    };
  }

  @Get('logout')
  logout(@Request() req, @Res() res) {
    res.clearCookie('accessToken', {
      httpOnly: true,
    });
    return res.json({ message: 'Successfully logged out' });
  }
}
