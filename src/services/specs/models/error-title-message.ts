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

    const parsedResponse = errorTitleMessageResponse.parse(response);

    this.error = parsedResponse.error;
  }

  public throw() {
    const error = new ErrorTitleMessage(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
