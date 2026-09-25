import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class BearerTokenGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();
    if (request.headers.authorization !== 'Bearer e2e-test-token') throw new UnauthorizedException('Thiếu access token');
    return true;
  }
}
