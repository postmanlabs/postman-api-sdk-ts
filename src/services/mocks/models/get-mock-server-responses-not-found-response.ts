import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  BadRequestError3,
  badRequestError3,
  badRequestError3Request,
  badRequestError3Response,
} from './bad-request-error-3';

export type IGetMockServerResponsesNotFoundResponseSchema = {
  error?: BadRequestError3;
};

export const getMockServerResponsesNotFoundResponseResponse = z.lazy(() => {
  return z
    .object({
      error: badRequestError3Response.optional(),
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

export class GetMockServerResponsesNotFoundResponse extends ThrowableError {
  public error?: BadRequestError3;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = getMockServerResponsesNotFoundResponseResponse.parse(response);

    this.error = parsedResponse.error;
  }

  public throw() {
    const error = new GetMockServerResponsesNotFoundResponse(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
