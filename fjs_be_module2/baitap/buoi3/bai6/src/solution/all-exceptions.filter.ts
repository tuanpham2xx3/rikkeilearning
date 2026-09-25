import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    const request = host.switchToHttp().getRequest<Request>();
    const code = (exception as { code?: string }).code;
    if (code === '23505') {
      return response.status(HttpStatus.BAD_REQUEST).json({ statusCode: 400, message: 'Dữ liệu này đã tồn tại trong hệ thống', path: request.url });
    }
    const status = exception instanceof HttpException ? exception.getStatus() : 500;
    const message = exception instanceof HttpException ? exception.getResponse() : 'Internal server error';
    response.status(status).json({ statusCode: status, message, path: request.url });
  }
}
