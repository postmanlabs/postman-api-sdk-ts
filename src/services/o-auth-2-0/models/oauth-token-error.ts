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

    const parsedResponse = oauthTokenErrorResponse.parse(response);

    this.error = parsedResponse.error;
    this.errorDescription = parsedResponse.errorDescription;
  }

  public throw() {
    const error = new OauthTokenError(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
