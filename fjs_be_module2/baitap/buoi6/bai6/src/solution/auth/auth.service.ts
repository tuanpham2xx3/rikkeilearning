import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { randomBytes } from 'crypto';
import { plainToInstance } from 'class-transformer';
import { UserEntity } from './user.entity';

type StoredUser = UserEntity & { refreshToken?: string };

@Injectable()
export class AuthService {
  private readonly users = new Map<string, StoredUser>();
  private readonly refreshTokens = new Map<string, { userId: string; expiresAt: number }>();
  private readonly blacklist = new Set<string>();

  constructor(private readonly jwt: JwtService) {}

  async register(email: string, password: string, departmentId = 'engineering', avatarUrl = '/avatars/default.png') {
    if ([...this.users.values()].some(user => user.email === email)) throw new BadRequestException('Email đã tồn tại');
    const user = Object.assign(new UserEntity(), { id: randomBytes(8).toString('hex'), email, password: await argon2.hash(password), departmentId, avatarUrl, salary: 1000 });
    this.users.set(user.id, user);
    return this.publicUser(user);
  }

  async login(email: string, password: string) {
    const user = [...this.users.values()].find(item => item.email === email);
    if (!user || !(await argon2.verify(user.password, password))) throw new UnauthorizedException('Email hoặc mật khẩu không đúng');
    return this.issueTokens(user);
  }

  private issueTokens(user: StoredUser) {
    // Không bao giờ đưa password vào JWT payload.
    const payload = { sub: user.id, email: user.email, departmentId: user.departmentId, avatarUrl: user.avatarUrl };
    const accessToken = this.jwt.sign(payload);
    const refreshToken = randomBytes(32).toString('hex');
    this.refreshTokens.set(refreshToken, { userId: user.id, expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000 });
    return { accessToken, refreshToken };
  }

  refresh(refreshToken: string) {
    const saved = this.refreshTokens.get(refreshToken);
    if (!saved || saved.expiresAt <= Date.now()) throw new UnauthorizedException('Refresh token không hợp lệ hoặc đã hết hạn');
    this.refreshTokens.delete(refreshToken); // rotation: token cũ dùng một lần
    const user = this.users.get(saved.userId);
    if (!user) throw new UnauthorizedException();
    return this.issueTokens(user);
  }

  logout(accessToken: string) { this.blacklist.add(accessToken); return { loggedOut: true }; }
  isBlacklisted(token: string) { return this.blacklist.has(token); }
  findById(id: string) { return this.users.get(id); }
  publicUser(user: StoredUser) { return plainToInstance(UserEntity, user); }
}
