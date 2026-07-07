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

    const parsedResponse = errorTypeNameMessageTitleResponse.parse(response);

    this.error = parsedResponse.error;
  }

  public throw() {
    const error = new ErrorTypeNameMessageTitle(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
