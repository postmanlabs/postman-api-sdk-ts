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

    const parsedResponse = errorTitleTypeResponse.parse(response);

    this.title = parsedResponse.title;
    this.type = parsedResponse.type;
  }

  public throw() {
    const error = new ErrorTitleType(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
