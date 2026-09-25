import { Module } from '@nestjs/common';
import { AuthModule } from './solution/auth.module';
import { UsersAuthModule } from './solution/users-auth.module';
@Module({ imports: [AuthModule, UsersAuthModule] })
export class AppModule {}
