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
  }

  static from(message: string, response?: unknown): GenerateToolBadRequestResponse {
    const error = new GenerateToolBadRequestResponse(message, response);
    const result = generateToolBadRequestResponseResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof generateToolBadRequestResponseResponse
    >;

    error.detail = parsedResponse.detail;
    error.status = parsedResponse.status;
    error.title = parsedResponse.title;
    error.type = parsedResponse.type;

    return error;
  }

  public throw() {
    const error = GenerateToolBadRequestResponse.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
