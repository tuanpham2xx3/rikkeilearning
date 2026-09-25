import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}
  @Post('login')
  @ApiOperation({ summary: 'Đăng nhập lấy access token' })
  @ApiBody({ schema: { example: { email: 'test@example.com', password: 'secret' } } })
  @ApiResponse({ status: 200 })
  login(@Body() body: { email: string; password: string }) { return this.auth.login(body.email, body.password); }
}
