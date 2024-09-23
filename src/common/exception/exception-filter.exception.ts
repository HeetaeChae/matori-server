import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { ServiceException } from './service.exception';
import { Request, Response } from 'express';

@Catch(ServiceException)
export class ServiceExceptionFilter implements ExceptionFilter {
  catch(serviceException: ServiceException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const status = serviceException.errorCode.status;
    const message = serviceException.message;

    response.status(status).json({
      statusCode: status,
      message,
      path: request.url,
    });
  }
}
