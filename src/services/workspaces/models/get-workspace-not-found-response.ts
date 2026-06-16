import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  NotFoundError2,
  notFoundError2,
  notFoundError2Request,
  notFoundError2Response,
} from './not-found-error-2';

export type IGetWorkspaceNotFoundResponseSchema = {
  error?: NotFoundError2;
};

export const getWorkspaceNotFoundResponseResponse = z.lazy(() => {
  return z
    .object({
      error: notFoundError2Response.optional(),
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

export class GetWorkspaceNotFoundResponse extends ThrowableError {
  public error?: NotFoundError2;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = getWorkspaceNotFoundResponseResponse.parse(response);

    this.error = parsedResponse.error;
  }

  public throw() {
    const error = new GetWorkspaceNotFoundResponse(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
