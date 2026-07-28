import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  BadRequestCollection,
  badRequestCollection,
  badRequestCollectionRequest,
  badRequestCollectionResponse,
} from './bad-request-collection';

export type IGetSourceCollectionStatusBadRequestResponseSchema = {
  collection?: BadRequestCollection;
};

export const getSourceCollectionStatusBadRequestResponseResponse = z.lazy(() => {
  return z
    .object({
      collection: badRequestCollectionResponse.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});

export class GetSourceCollectionStatusBadRequestResponse extends ThrowableError {
  public collection?: BadRequestCollection;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): GetSourceCollectionStatusBadRequestResponse {
    const error = new GetSourceCollectionStatusBadRequestResponse(message, response);
    const result = getSourceCollectionStatusBadRequestResponseResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof getSourceCollectionStatusBadRequestResponseResponse
    >;

    error.collection = parsedResponse.collection;

    return error;
  }

  public throw() {
    const error = GetSourceCollectionStatusBadRequestResponse.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
