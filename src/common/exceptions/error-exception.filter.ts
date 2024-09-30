import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { ErrorExceptionDto } from './error-exception.dto';
import { Request, Response } from 'express';

@Catch(ErrorExceptionDto)
export class ErrorExceptionFilter implements ExceptionFilter {
  catch(errorExceptionDto: ErrorExceptionDto, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = errorExceptionDto.status;
    const message = errorExceptionDto.message;

    response.status(status).json({
      statusCode: status,
      message,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}
