import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  ForbiddenError,
  forbiddenError,
  forbiddenErrorRequest,
  forbiddenErrorResponse,
} from './forbidden-error';

export type IForbiddenSchema = {
  error?: ForbiddenError;
};

export const forbiddenResponse = z.lazy(() => {
  return z
    .object({
      error: forbiddenErrorResponse.optional(),
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

export class Forbidden extends ThrowableError {
  public error?: ForbiddenError;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): Forbidden {
    const error = new Forbidden(message, response);
    const result = forbiddenResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof forbiddenResponse
    >;

    error.error = parsedResponse.error;

    return error;
  }

  public throw() {
    const error = Forbidden.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
