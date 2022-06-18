import { ErrorType } from './error.type';

export class BaseError extends Error {
  public readonly type: ErrorType;

  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly debugInfo = {},
    public readonly cause?: any
  ) {
    super(message);
    this.cause = cause;
    this.debugInfo = debugInfo;
    this.statusCode = statusCode;
  }
}
