import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  ErrorTypeNameMessageTitleError,
  errorTypeNameMessageTitleError,
  errorTypeNameMessageTitleErrorRequest,
  errorTypeNameMessageTitleErrorResponse,
} from './error-type-name-message-title-error';

export type IErrorTypeNameMessageTitleSchema = {
  error?: ErrorTypeNameMessageTitleError;
};

export const errorTypeNameMessageTitleResponse = z.lazy(() => {
  return z
    .object({
      error: errorTypeNameMessageTitleErrorResponse.optional(),
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

export class ErrorTypeNameMessageTitle extends ThrowableError {
  public error?: ErrorTypeNameMessageTitleError;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): ErrorTypeNameMessageTitle {
    const error = new ErrorTypeNameMessageTitle(message, response);
    const result = errorTypeNameMessageTitleResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof errorTypeNameMessageTitleResponse
    >;

    error.error = parsedResponse.error;

    return error;
  }

  public throw() {
    const error = ErrorTypeNameMessageTitle.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
