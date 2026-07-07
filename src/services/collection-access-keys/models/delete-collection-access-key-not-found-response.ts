import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type IDeleteCollectionAccessKeyNotFoundResponseSchema = {
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
};

export const deleteCollectionAccessKeyNotFoundResponseResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      title: z.string().optional(),
      status: z.number().optional(),
      detail: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      title: data['title'],
      status: data['status'],
      detail: data['detail'],
    }));
});

export class DeleteCollectionAccessKeyNotFoundResponse extends ThrowableError {
  public type?: string;
  public title?: string;
  public status?: number;
  public detail?: string;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = deleteCollectionAccessKeyNotFoundResponseResponse.parse(response);

    this.type = parsedResponse.type;
    this.title = parsedResponse.title;
    this.status = parsedResponse.status;
    this.detail = parsedResponse.detail;
  }

  public throw() {
    const error = new DeleteCollectionAccessKeyNotFoundResponse(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
