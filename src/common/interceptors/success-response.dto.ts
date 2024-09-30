export class SuccessResponseDto {
  readonly data: any;
  readonly statusCode: number;
  readonly path: string;
  readonly timestamp: string;

  constructor(data: any, statusCode: number, path: string) {
    this.data = data;
    this.statusCode = statusCode;
    this.path = path;
    this.timestamp = new Date().toISOString();
  }
}
