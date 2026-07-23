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
  }

  static from(message: string, response?: unknown): DeleteCollectionAccessKeyNotFoundResponse {
    const error = new DeleteCollectionAccessKeyNotFoundResponse(message, response);
    const result = deleteCollectionAccessKeyNotFoundResponseResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof deleteCollectionAccessKeyNotFoundResponseResponse
    >;

    error.type = parsedResponse.type;
    error.title = parsedResponse.title;
    error.status = parsedResponse.status;
    error.detail = parsedResponse.detail;

    return error;
  }

  public throw() {
    const error = DeleteCollectionAccessKeyNotFoundResponse.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
