import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type IUpdateCollectionTagsBadRequestResponseSchema = {
  title?: string;
  detail?: string;
  status?: number;
};

export const updateCollectionTagsBadRequestResponseResponse = z.lazy(() => {
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

export class UpdateCollectionTagsBadRequestResponse extends ThrowableError {
  public title?: string;
  public detail?: string;
  public status?: number;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = updateCollectionTagsBadRequestResponseResponse.parse(response);

    this.title = parsedResponse.title;
    this.detail = parsedResponse.detail;
    this.status = parsedResponse.status;
  }

  public throw() {
    const error = new UpdateCollectionTagsBadRequestResponse(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
