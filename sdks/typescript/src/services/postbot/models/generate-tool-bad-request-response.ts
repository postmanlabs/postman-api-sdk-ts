import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type IGenerateToolBadRequestResponseSchema = {
  detail?: string;
  status?: number;
  title?: string;
  type?: string;
};

export const generateToolBadRequestResponseResponse = z.lazy(() => {
  return z
    .object({
      detail: z.string().optional(),
      status: z.number().optional(),
      title: z.string().optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      detail: data['detail'],
      status: data['status'],
      title: data['title'],
      type: data['type'],
    }));
});

export class GenerateToolBadRequestResponse extends ThrowableError {
  public detail?: string;
  public status?: number;
  public title?: string;
  public type?: string;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = generateToolBadRequestResponseResponse.parse(response);

    this.detail = parsedResponse.detail;
    this.status = parsedResponse.status;
    this.title = parsedResponse.title;
    this.type = parsedResponse.type;
  }

  public throw() {
    const error = new GenerateToolBadRequestResponse(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
