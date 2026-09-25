import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';

@Injectable()
export class OwnershipGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<{ user: { id: string }; params: { id: string } }>();
    if (request.user?.id !== request.params.id) throw new ForbiddenException('Bạn chỉ được thao tác trên tài nguyên của mình');
    return true;
  }
}
