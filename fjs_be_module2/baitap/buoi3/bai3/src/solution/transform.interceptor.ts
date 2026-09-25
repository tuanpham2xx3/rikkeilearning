import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, { statusCode: number; data: T; timestamp: string }> {
  intercept(_context: ExecutionContext, next: CallHandler<T>): Observable<{ statusCode: number; data: T; timestamp: string }> {
    return next.handle().pipe(map(data => ({ statusCode: 200, data, timestamp: new Date().toISOString() })));
  }
}
