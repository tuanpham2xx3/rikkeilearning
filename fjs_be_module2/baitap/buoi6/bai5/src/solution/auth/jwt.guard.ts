import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { AuthService } from './auth.service';

export type AuthenticatedRequest = Request & { user: { id: string; email: string; departmentId: string; avatarUrl: string }; accessToken: string };

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private readonly jwt: JwtService, private readonly auth: AuthService) {}
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const header = request.headers.authorization;
    const token = header?.startsWith('Bearer ') ? header.slice(7) : undefined;
    if (!token || this.auth.isBlacklisted(token)) throw new UnauthorizedException('Token không hợp lệ');
    try { request.user = this.jwt.verify(token); request.accessToken = token; return true; } catch { throw new UnauthorizedException('Token không hợp lệ'); }
  }
}
