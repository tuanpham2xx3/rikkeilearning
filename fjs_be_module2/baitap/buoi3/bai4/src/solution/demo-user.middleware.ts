import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class DemoUserMiddleware implements NestMiddleware {
  use(req: Request & { user?: { id: string } }, _res: Response, next: NextFunction) {
    req.user = { id: String(req.header('x-user-id') ?? '1') };
    next();
  }
}
