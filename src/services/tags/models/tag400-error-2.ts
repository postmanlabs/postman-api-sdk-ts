import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type ITag400Error2Schema = {
  error?: string;
  message?: string;
  statusCode?: number;
};

export const tag400Error2Response = z.lazy(() => {
  return z
    .object({
      error: z.string().optional(),
      message: z.string().optional(),
      statusCode: z.number().optional(),
    })
    .transform((data) => ({
      error: data['error'],
      message: data['message'],
      statusCode: data['statusCode'],
    }));
});

export class Tag400Error2 extends ThrowableError {
  public error?: string;

  public statusCode?: number;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): Tag400Error2 {
    const error = new Tag400Error2(message, response);
    const result = tag400Error2Response.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof tag400Error2Response
    >;

    error.error = parsedResponse.error;
    error.message = parsedResponse.message || '';
    error.statusCode = parsedResponse.statusCode;

    return error;
  }

  public throw() {
    const error = Tag400Error2.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
