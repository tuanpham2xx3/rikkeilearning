import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class IpBlockMiddleware implements NestMiddleware {
  private readonly blacklist = new Set(['::1']);

  use(req: Request, res: Response, next: NextFunction) {
    if (this.blacklist.has(req.ip ?? '')) {
      return res.status(403).send({ statusCode: 403, message: 'IP bị chặn' });
    }
    next();
  }
}
