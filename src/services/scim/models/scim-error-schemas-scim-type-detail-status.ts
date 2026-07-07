import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type IScimErrorSchemasScimTypeDetailStatusSchema = {
  schemas?: string[];
  scimType?: string;
  detail?: string;
  status?: string;
};

export const scimErrorSchemasScimTypeDetailStatusResponse = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      scimType: z.string().optional(),
      detail: z.string().optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      scimType: data['scimType'],
      detail: data['detail'],
      status: data['status'],
    }));
});

export class ScimErrorSchemasScimTypeDetailStatus extends ThrowableError {
  public schemas?: string[];
  public scimType?: string;
  public detail?: string;
  public status?: string;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = scimErrorSchemasScimTypeDetailStatusResponse.parse(response);

    this.schemas = parsedResponse.schemas;
    this.scimType = parsedResponse.scimType;
    this.detail = parsedResponse.detail;
    this.status = parsedResponse.status;
  }

  public throw() {
    const error = new ScimErrorSchemasScimTypeDetailStatus(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
