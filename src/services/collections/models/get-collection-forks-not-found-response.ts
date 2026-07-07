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

    const parsedResponse = getCollectionForksNotFoundResponseResponse.parse(response);

    this.error = parsedResponse.error;
  }

  public throw() {
    const error = new GetCollectionForksNotFoundResponse(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
