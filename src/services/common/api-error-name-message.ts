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
  public name!: string;

  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): ApiErrorNameMessage {
    const error = new ApiErrorNameMessage(message, response);
    const result = apiErrorNameMessageResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof apiErrorNameMessageResponse
    >;

    error.name = parsedResponse.name || 'Error';
    error.message = parsedResponse.message || '';

    return error;
  }

  public throw() {
    const error = ApiErrorNameMessage.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
