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
  }

  static from(message: string, response?: unknown): ApiTag400Error1 {
    const error = new ApiTag400Error1(message, response);
    const result = apiTag400Error1Response.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof apiTag400Error1Response
    >;

    error.title = parsedResponse.title;
    error.detail = parsedResponse.detail;
    error.status = parsedResponse.status;

    return error;
  }

  public throw() {
    const error = ApiTag400Error1.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
