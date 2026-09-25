import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './solution/auth/auth.controller';
import { AuthService } from './solution/auth/auth.service';
import { JwtGuard } from './solution/auth/jwt.guard';

@Module({ imports: [JwtModule.register({ secret: 'dev-only-secret' })], controllers: [AuthController], providers: [AuthService, JwtGuard] })
export class AppModule {}
