import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  ErrorNameMessageError2,
  errorNameMessageError2,
  errorNameMessageError2Request,
  errorNameMessageError2Response,
} from './error-name-message-error-2';

export type ISchemaSecurityValidationBadRequestResponseSchema = {
  error?: ErrorNameMessageError2;
};

export const schemaSecurityValidationBadRequestResponseResponse = z.lazy(() => {
  return z
    .object({
      error: errorNameMessageError2Response.optional(),
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

export class SchemaSecurityValidationBadRequestResponse extends ThrowableError {
  public error?: ErrorNameMessageError2;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): SchemaSecurityValidationBadRequestResponse {
    const error = new SchemaSecurityValidationBadRequestResponse(message, response);
    const result = schemaSecurityValidationBadRequestResponseResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof schemaSecurityValidationBadRequestResponseResponse
    >;

    error.error = parsedResponse.error;

    return error;
  }

  public throw() {
    const error = SchemaSecurityValidationBadRequestResponse.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
