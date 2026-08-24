import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import { ApiTag400Error1, apiTag400Error1Response } from './api-tag400-error-1';
import { Tag400Error2, tag400Error2Response } from './tag400-error-2';

export class Tag400Error extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  throw() {
    if (apiTag400Error1Response.safeParse(this.response).success) {
      const error = ApiTag400Error1.from(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    if (tag400Error2Response.safeParse(this.response).success) {
      const error = Tag400Error2.from(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    throw new Error(`UnrecognizedError: ${JSON.stringify(this.response)}`);
  }
}
