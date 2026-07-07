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

    const parsedResponse = getSourceCollectionStatusBadRequestResponseResponse.parse(response);

    this.collection = parsedResponse.collection;
  }

  public throw() {
    const error = new GetSourceCollectionStatusBadRequestResponse(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
