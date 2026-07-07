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

    const parsedResponse = errorTypeTitleDetailCreatedAtResponse.parse(response);

    this.type = parsedResponse.type;
    this.title = parsedResponse.title;
    this.detail = parsedResponse.detail;
    this.createdAt = parsedResponse.createdAt;
  }

  public throw() {
    const error = new ErrorTypeTitleDetailCreatedAt(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
