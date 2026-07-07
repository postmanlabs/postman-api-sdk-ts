import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  ScimErrorSchemasDetailStatus,
  scimErrorSchemasDetailStatusResponse,
} from './scim-error-schemas-detail-status';
import {
  ScimErrorSchemasScimTypeDetailStatus,
  scimErrorSchemasScimTypeDetailStatusResponse,
} from './scim-error-schemas-scim-type-detail-status';

export class ScimUpdateUser400Error extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  throw() {
    if (scimErrorSchemasDetailStatusResponse.safeParse(this.response).success) {
      const error = new ScimErrorSchemasDetailStatus(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    if (scimErrorSchemasScimTypeDetailStatusResponse.safeParse(this.response).success) {
      const error = new ScimErrorSchemasScimTypeDetailStatus(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    throw new Error(`UnrecognizedError: ${JSON.stringify(this.response)}`);
  }
}
