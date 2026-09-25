import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './solution/auth/auth.controller';
import { AuthService } from './solution/auth/auth.service';
import { JwtGuard } from './solution/auth/jwt.guard';
import { SalaryController } from './solution/abac/salary.controller';
import { SalaryOwnershipGuard } from './solution/abac/salary.guard';
@Module({ imports: [JwtModule.register({ secret: 'dev-only-secret' })], controllers: [AuthController, SalaryController], providers: [AuthService, JwtGuard, SalaryOwnershipGuard] })
export class AppModule {}
