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

    const parsedResponse = getTaggedEntitiesBadRequestResponseResponse.parse(response);

    this.error = parsedResponse.error;
    this.message = parsedResponse.message || '';
    this.statusCode = parsedResponse.statusCode;
  }

  public throw() {
    const error = new GetTaggedEntitiesBadRequestResponse(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
