import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  ErrorTitleMessageError,
  errorTitleMessageError,
  errorTitleMessageErrorRequest,
  errorTitleMessageErrorResponse,
} from './error-title-message-error';

export type IErrorTitleMessageSchema = {
  error?: ErrorTitleMessageError;
};

export const errorTitleMessageResponse = z.lazy(() => {
  return z
    .object({
      error: errorTitleMessageErrorResponse.optional(),
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

export class ErrorTitleMessage extends ThrowableError {
  public error?: ErrorTitleMessageError;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): ErrorTitleMessage {
    const error = new ErrorTitleMessage(message, response);
    const result = errorTitleMessageResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof errorTitleMessageResponse
    >;

    error.error = parsedResponse.error;

    return error;
  }

  public throw() {
    const error = ErrorTitleMessage.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
