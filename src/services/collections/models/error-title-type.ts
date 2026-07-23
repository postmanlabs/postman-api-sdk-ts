import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type IErrorTitleTypeSchema = {
  title?: string;
  type?: string;
};

export const errorTitleTypeResponse = z.lazy(() => {
  return z
    .object({
      title: z.string().optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      title: data['title'],
      type: data['type'],
    }));
});

export class ErrorTitleType extends ThrowableError {
  public title?: string;
  public type?: string;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): ErrorTitleType {
    const error = new ErrorTitleType(message, response);
    const result = errorTitleTypeResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof errorTitleTypeResponse
    >;

    error.title = parsedResponse.title;
    error.type = parsedResponse.type;

    return error;
  }

  public throw() {
    const error = ErrorTitleType.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
