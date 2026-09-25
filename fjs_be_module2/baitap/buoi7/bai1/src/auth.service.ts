import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(email: string, password: string) {
    if (email !== 'test@example.com' || password !== 'secret') throw new Error('Invalid credentials');
    return { access_token: 'e2e-test-token', userId: 'user-1' };
  }
}
