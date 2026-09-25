import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Request } from 'express';

type Window = { count: number; resetTime: number };

@Injectable()
export class RateLimitGuard implements CanActivate {
  private readonly requests = new Map<string, Window>();
  private readonly max = 10;
  private readonly windowMs = 60_000;

  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest<Request>();
    const ip = req.ip ?? 'unknown';
    const now = Date.now();
    const current = this.requests.get(ip);
    const item = !current || current.resetTime <= now ? { count: 0, resetTime: now + this.windowMs } : current;
    item.count += 1;
    this.requests.set(ip, item);
    if (item.count > this.max) throw new HttpException('Vượt quá 10 request/phút', HttpStatus.TOO_MANY_REQUESTS);
    return true;
  }
}
