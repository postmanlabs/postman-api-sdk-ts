import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type IErrorTypeTitleDetailCreatedAtSchema = {
  type?: string;
  title?: string;
  detail?: string;
  createdAt?: string;
};

export const errorTypeTitleDetailCreatedAtResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      title: z.string().optional(),
      detail: z.string().optional(),
      createdAt: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      title: data['title'],
      detail: data['detail'],
      createdAt: data['createdAt'],
    }));
});

export class ErrorTypeTitleDetailCreatedAt extends ThrowableError {
  public type?: string;
  public title?: string;
  public detail?: string;
  public createdAt?: string;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): ErrorTypeTitleDetailCreatedAt {
    const error = new ErrorTypeTitleDetailCreatedAt(message, response);
    const result = errorTypeTitleDetailCreatedAtResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof errorTypeTitleDetailCreatedAtResponse
    >;

    error.type = parsedResponse.type;
    error.title = parsedResponse.title;
    error.detail = parsedResponse.detail;
    error.createdAt = parsedResponse.createdAt;

    return error;
  }

  public throw() {
    const error = ErrorTypeTitleDetailCreatedAt.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
