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
  }

  static from(message: string, response?: unknown): Workspaces400Error1 {
    const error = new Workspaces400Error1(message, response);
    const result = workspaces400Error1Response.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof workspaces400Error1Response
    >;

    error.error = parsedResponse.error;
    error.statusCode = parsedResponse.statusCode;

    return error;
  }

  public throw() {
    const error = Workspaces400Error1.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
