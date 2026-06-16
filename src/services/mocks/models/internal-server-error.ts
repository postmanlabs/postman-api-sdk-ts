import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  InternalServerErrorError,
  internalServerErrorError,
  internalServerErrorErrorRequest,
  internalServerErrorErrorResponse,
} from './internal-server-error-error';

export type IInternalServerErrorSchema = {
  error?: InternalServerErrorError;
};

export const internalServerErrorResponse = z.lazy(() => {
  return z
    .object({
      error: internalServerErrorErrorResponse.optional(),
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

export class InternalServerError extends ThrowableError {
  public error?: InternalServerErrorError;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = internalServerErrorResponse.parse(response);

    this.error = parsedResponse.error;
  }

  public throw() {
    const error = new InternalServerError(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
