import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  NotFoundError1,
  notFoundError1,
  notFoundError1Request,
  notFoundError1Response,
} from './not-found-error-1';

export type IGetCollectionForksNotFoundResponseSchema = {
  error?: NotFoundError1;
};

export const getCollectionForksNotFoundResponseResponse = z.lazy(() => {
  return z
    .object({
      error: notFoundError1Response.optional(),
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

export class GetCollectionForksNotFoundResponse extends ThrowableError {
  public error?: NotFoundError1;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): GetCollectionForksNotFoundResponse {
    const error = new GetCollectionForksNotFoundResponse(message, response);
    const result = getCollectionForksNotFoundResponseResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof getCollectionForksNotFoundResponseResponse
    >;

    error.error = parsedResponse.error;

    return error;
  }

  public throw() {
    const error = GetCollectionForksNotFoundResponse.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
