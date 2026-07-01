import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type IScimErrorSchemasDetailStatusSchema = {
  schemas?: string[];
  detail?: string;
  status?: string;
};

export const scimErrorSchemasDetailStatusResponse = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      detail: z.string().optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      detail: data['detail'],
      status: data['status'],
    }));
});

export class ScimErrorSchemasDetailStatus extends ThrowableError {
  public schemas?: string[];
  public detail?: string;
  public status?: string;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = scimErrorSchemasDetailStatusResponse.parse(response);

    this.schemas = parsedResponse.schemas;
    this.detail = parsedResponse.detail;
    this.status = parsedResponse.status;
  }

  public throw() {
    const error = new ScimErrorSchemasDetailStatus(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
