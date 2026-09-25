import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { AbilityBuilder, createMongoAbility, subject } from '@casl/ability';
import { AuthenticatedRequest } from '../auth/jwt.guard';

@Injectable()
export class SalaryOwnershipGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest & { params: { ownerId: string } }>();
    const { can, build } = new AbilityBuilder(createMongoAbility);
    can('read', 'Salary', { ownerId: request.user.id });
    const ability = build();
    if (!ability.can('read', subject('Salary', { ownerId: request.params.ownerId }))) throw new ForbiddenException('Bạn không có quyền xem salary của user khác');
    return true;
  }
}
