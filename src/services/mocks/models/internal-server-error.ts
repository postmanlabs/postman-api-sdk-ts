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
  }

  static from(message: string, response?: unknown): InternalServerError {
    const error = new InternalServerError(message, response);
    const result = internalServerErrorResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof internalServerErrorResponse
    >;

    error.error = parsedResponse.error;

    return error;
  }

  public throw() {
    const error = InternalServerError.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
