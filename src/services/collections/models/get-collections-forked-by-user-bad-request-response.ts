import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  BadRequestError1,
  badRequestError1,
  badRequestError1Request,
  badRequestError1Response,
} from './bad-request-error-1';

export type IGetCollectionsForkedByUserBadRequestResponseSchema = {
  error?: BadRequestError1;
};

export const getCollectionsForkedByUserBadRequestResponseResponse = z.lazy(() => {
  return z
    .object({
      error: badRequestError1Response.optional(),
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

export class GetCollectionsForkedByUserBadRequestResponse extends ThrowableError {
  public error?: BadRequestError1;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = getCollectionsForkedByUserBadRequestResponseResponse.parse(response);

    this.error = parsedResponse.error;
  }

  public throw() {
    const error = new GetCollectionsForkedByUserBadRequestResponse(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
