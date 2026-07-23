import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type IGetTaggedEntitiesBadRequestResponseSchema = {
  error?: string;
  message?: string;
  statusCode?: number;
};

export const getTaggedEntitiesBadRequestResponseResponse = z.lazy(() => {
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

export class GetTaggedEntitiesBadRequestResponse extends ThrowableError {
  public error?: string;

  public statusCode?: number;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): GetTaggedEntitiesBadRequestResponse {
    const error = new GetTaggedEntitiesBadRequestResponse(message, response);
    const result = getTaggedEntitiesBadRequestResponseResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof getTaggedEntitiesBadRequestResponseResponse
    >;

    error.error = parsedResponse.error;
    error.message = parsedResponse.message || '';
    error.statusCode = parsedResponse.statusCode;

    return error;
  }

  public throw() {
    const error = GetTaggedEntitiesBadRequestResponse.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
