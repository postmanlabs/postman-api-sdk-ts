import { z } from 'zod';
import { ThrowableError } from '../../http/errors/throwable-error';

export type IApiErrorNameMessageSchema = {
  name?: string;
  message?: string;
};

export const apiErrorNameMessageResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      message: data['message'],
    }));
});

export class ApiErrorNameMessage extends ThrowableError {
  public name: string;

  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = apiErrorNameMessageResponse.parse(response);

    this.name = parsedResponse.name || 'Error';
    this.message = parsedResponse.message || '';
  }

  public throw() {
    const error = new ApiErrorNameMessage(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
