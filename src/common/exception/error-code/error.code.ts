export class ErrorCodeVo {
  readonly status: number;
  readonly message: string;

  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }
}

export type ErrorCode = ErrorCodeVo;

export const ALREADY_EXIST = new ErrorCodeVo(409, 'Aleady Existed');
export const USER_NOT_FOUND = new ErrorCodeVo(404, 'User Not Found');
