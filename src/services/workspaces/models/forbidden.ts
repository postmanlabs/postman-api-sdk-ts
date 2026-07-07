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

    const parsedResponse = forbiddenResponse.parse(response);

    this.error = parsedResponse.error;
  }

  public throw() {
    const error = new Forbidden(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
