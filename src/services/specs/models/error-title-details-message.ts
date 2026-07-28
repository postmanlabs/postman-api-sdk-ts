import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  ErrorTitleDetailsMessageError,
  errorTitleDetailsMessageError,
  errorTitleDetailsMessageErrorRequest,
  errorTitleDetailsMessageErrorResponse,
} from './error-title-details-message-error';

export type IErrorTitleDetailsMessageSchema = {
  error?: ErrorTitleDetailsMessageError;
};

export const errorTitleDetailsMessageResponse = z.lazy(() => {
  return z
    .object({
      error: errorTitleDetailsMessageErrorResponse.optional(),
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

export class ErrorTitleDetailsMessage extends ThrowableError {
  public error?: ErrorTitleDetailsMessageError;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): ErrorTitleDetailsMessage {
    const error = new ErrorTitleDetailsMessage(message, response);
    const result = errorTitleDetailsMessageResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof errorTitleDetailsMessageResponse
    >;

    error.error = parsedResponse.error;

    return error;
  }

  public throw() {
    const error = ErrorTitleDetailsMessage.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
