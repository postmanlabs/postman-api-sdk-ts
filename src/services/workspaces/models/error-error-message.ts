import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type IErrorErrorMessageSchema = {
  error?: string;
  message?: string;
};

export const errorErrorMessageResponse = z.lazy(() => {
  return z
    .object({
      error: z.string().optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      error: data['error'],
      message: data['message'],
    }));
});

export class ErrorErrorMessage extends ThrowableError {
  public error?: string;

  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): ErrorErrorMessage {
    const error = new ErrorErrorMessage(message, response);
    const result = errorErrorMessageResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof errorErrorMessageResponse
    >;

    error.error = parsedResponse.error;
    error.message = parsedResponse.message || '';

    return error;
  }

  public throw() {
    const error = ErrorErrorMessage.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
