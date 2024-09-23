import {
  ALREADY_EXIST,
  USER_NOT_FOUND,
  ErrorCode,
} from './error-code/error.code';

export class ServiceException extends Error {
  readonly errorCode: ErrorCode;

  constructor(errorCode: ErrorCode, message?: string) {
    if (!message) {
      message = errorCode.message;
    }

    super(message);

    this.errorCode = errorCode;
  }
}

export const AlreadyExistException = (
  message?: string | undefined,
): ServiceException => {
  return new ServiceException(ALREADY_EXIST, message);
};
export const UserNotFoundException = (
  message?: string | undefined,
): ServiceException => {
  return new ServiceException(USER_NOT_FOUND, message);
};
