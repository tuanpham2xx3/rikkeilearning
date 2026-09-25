import { forwardRef, Inject, Injectable, Module } from '@nestjs/common';
import { AuthModule } from './auth.module';
import { AuthService } from './auth.service';

@Module({ imports: [forwardRef(() => AuthModule)], providers: [UsersAuthModule], exports: [UsersAuthModule] })
export class UsersAuthModule {
  constructor(@Inject(forwardRef(() => AuthService)) private readonly auth: AuthService) {}
  passwordIsValid(userId: number, password: string) { return this.auth.issueToken(userId, password === 'secret'); }
}
