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

    const parsedResponse = errorTitleDetailsMessageResponse.parse(response);

    this.error = parsedResponse.error;
  }

  public throw() {
    const error = new ErrorTitleDetailsMessage(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
