import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersAuthModule } from './users-auth.module';

@Module({ imports: [forwardRef(() => UsersAuthModule)], providers: [AuthService], exports: [AuthService] })
export class AuthModule {}
