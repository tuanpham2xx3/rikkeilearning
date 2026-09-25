import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersAuthModule } from './users-auth.module';

@Injectable()
export class AuthService {
  constructor(@Inject(forwardRef(() => UsersAuthModule)) private readonly users: UsersAuthModule) {}

  issueToken(userId: number, valid: boolean) {
    return valid ? `demo-token-for-${userId}` : null;
  }

  verify(userId: number, password: string) {
    return this.users.passwordIsValid(userId, password);
  }
}
