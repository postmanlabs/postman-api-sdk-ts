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
  }

  static from(message: string, response?: unknown): GetWorkspaceNotFoundResponse {
    const error = new GetWorkspaceNotFoundResponse(message, response);
    const result = getWorkspaceNotFoundResponseResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof getWorkspaceNotFoundResponseResponse
    >;

    error.error = parsedResponse.error;

    return error;
  }

  public throw() {
    const error = GetWorkspaceNotFoundResponse.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
