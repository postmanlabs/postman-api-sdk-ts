import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type IErrorTypeTitleMessageDetailSchema = {
  type?: string;
  title?: string;
  message?: string;
  detail?: any;
};

export const errorTypeTitleMessageDetailResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      title: z.string().optional(),
      message: z.string().optional(),
      detail: z.any().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      title: data['title'],
      message: data['message'],
      detail: data['detail'],
    }));
});

export class ErrorTypeTitleMessageDetail extends ThrowableError {
  public type?: string;
  public title?: string;

  public detail?: any;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = errorTypeTitleMessageDetailResponse.parse(response);

    this.type = parsedResponse.type;
    this.title = parsedResponse.title;
    this.message = parsedResponse.message || '';
    this.detail = parsedResponse.detail;
  }

  public throw() {
    const error = new ErrorTypeTitleMessageDetail(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
