import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  BadRequestError2,
  badRequestError2,
  badRequestError2Request,
  badRequestError2Response,
} from './bad-request-error-2';

export type IWorkspaces400Error1Schema = {
  error?: BadRequestError2;
  statusCode?: number;
};

export const workspaces400Error1Response = z.lazy(() => {
  return z
    .object({
      error: badRequestError2Response.optional(),
      statusCode: z.number().optional(),
    })
    .transform((data) => ({
      error: data['error'],
      statusCode: data['statusCode'],
    }));
});

export class Workspaces400Error1 extends ThrowableError {
  public error?: BadRequestError2;
  public statusCode?: number;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = workspaces400Error1Response.parse(response);

    this.error = parsedResponse.error;
    this.statusCode = parsedResponse.statusCode;
  }

  public throw() {
    const error = new Workspaces400Error1(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
