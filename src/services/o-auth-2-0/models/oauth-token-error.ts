import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type IOauthTokenErrorSchema = {
  error?: string;
  errorDescription?: string;
};

export const oauthTokenErrorResponse = z.lazy(() => {
  return z
    .object({
      error: z.string().optional(),
      error_description: z.string().optional(),
    })
    .transform((data) => ({
      error: data['error'],
      errorDescription: data['error_description'],
    }));
});

export class OauthTokenError extends ThrowableError {
  public error?: string;
  public errorDescription?: string;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): OauthTokenError {
    const error = new OauthTokenError(message, response);
    const result = oauthTokenErrorResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof oauthTokenErrorResponse
    >;

    error.error = parsedResponse.error;
    error.errorDescription = parsedResponse.errorDescription;

    return error;
  }

  public throw() {
    const error = OauthTokenError.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
