import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type IApiTag400Error1Schema = {
  title?: string;
  detail?: string;
  status?: number;
};

export const apiTag400Error1Response = z.lazy(() => {
  return z
    .object({
      title: z.string().optional(),
      detail: z.string().optional(),
      status: z.number().optional(),
    })
    .transform((data) => ({
      title: data['title'],
      detail: data['detail'],
      status: data['status'],
    }));
});

export class ApiTag400Error1 extends ThrowableError {
  public title?: string;
  public detail?: string;
  public status?: number;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = apiTag400Error1Response.parse(response);

    this.title = parsedResponse.title;
    this.detail = parsedResponse.detail;
    this.status = parsedResponse.status;
  }

  public throw() {
    const error = new ApiTag400Error1(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
