import { z } from 'zod';
import { ThrowableError } from '../../http/errors/throwable-error';
import {
  ErrorNameMessageDetailsError,
  errorNameMessageDetailsError,
  errorNameMessageDetailsErrorRequest,
  errorNameMessageDetailsErrorResponse,
} from '../collection-access-keys/models/error-name-message-details-error';

export type IErrorNameMessageDetailsSchema = {
  error?: ErrorNameMessageDetailsError;
};

export const errorNameMessageDetailsResponse = z.lazy(() => {
  return z
    .object({
      error: errorNameMessageDetailsErrorResponse.optional(),
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

export class ErrorNameMessageDetails extends ThrowableError {
  public error?: ErrorNameMessageDetailsError;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): ErrorNameMessageDetails {
    const error = new ErrorNameMessageDetails(message, response);
    const result = errorNameMessageDetailsResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof errorNameMessageDetailsResponse
    >;

    error.error = parsedResponse.error;

    return error;
  }

  public throw() {
    const error = ErrorNameMessageDetails.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
