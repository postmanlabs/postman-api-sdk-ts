import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  ScimErrorSchemasScimTypeDetailStatus,
  scimErrorSchemasScimTypeDetailStatusResponse,
} from './scim-error-schemas-scim-type-detail-status';
import {
  ScimErrorSchemasDetailStatus,
  scimErrorSchemasDetailStatusResponse,
} from './scim-error-schemas-detail-status';

export class Scim400ErrorInvalidSyntax extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  throw() {
    if (scimErrorSchemasScimTypeDetailStatusResponse.safeParse(this.response).success) {
      const error = ScimErrorSchemasScimTypeDetailStatus.from(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    if (scimErrorSchemasDetailStatusResponse.safeParse(this.response).success) {
      const error = ScimErrorSchemasDetailStatus.from(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    throw new Error(`UnrecognizedError: ${JSON.stringify(this.response)}`);
  }
}
