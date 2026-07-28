import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import { ApiTag400Error1, apiTag400Error1Response } from './api-tag400-error-1';
import {
  ApiErrorNameMessage,
  apiErrorNameMessageResponse,
} from '../../common/api-error-name-message';

export class ApiTag400Error extends ThrowableError {
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
    if (apiErrorNameMessageResponse.safeParse(this.response).success) {
      const error = ApiErrorNameMessage.from(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    throw new Error(`UnrecognizedError: ${JSON.stringify(this.response)}`);
  }
}
