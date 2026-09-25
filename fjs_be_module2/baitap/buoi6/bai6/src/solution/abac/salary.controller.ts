import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { AuthenticatedRequest, JwtGuard } from '../auth/jwt.guard';
import { SalaryOwnershipGuard } from './salary.guard';

@Controller('salary')
export class SalaryController {
  @Get(':ownerId')
  @UseGuards(JwtGuard, SalaryOwnershipGuard)
  get(@Param('ownerId') ownerId: string, @Req() req: AuthenticatedRequest) { return { ownerId, requestedBy: req.user.id, salary: 1000 }; }
}
