import { Body, Controller, Get, Headers, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtGuard, AuthenticatedRequest } from './jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('register') register(@Body() body: { email: string; password: string; departmentId?: string; avatarUrl?: string }) { return this.auth.register(body.email, body.password, body.departmentId, body.avatarUrl); }
  @Post('login') login(@Body() body: { email: string; password: string }) { return this.auth.login(body.email, body.password); }
  @Post('refresh') refresh(@Body() body: { refreshToken: string }) { return this.auth.refresh(body.refreshToken); }
  @Post('logout') @UseGuards(JwtGuard) logout(@Req() req: AuthenticatedRequest) { return this.auth.logout(req.accessToken); }
  @Get('profile') @UseGuards(JwtGuard) profile(@Req() req: AuthenticatedRequest) { const user = this.auth.findById(req.user.id); return this.auth.publicUser(user!); }
}
