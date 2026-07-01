import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  CreateApiClientErrorResponse,
  createApiClientErrorResponseResponse,
} from '../../common/create-api-client-error-response';
import { Api404Error2, api404Error2Response } from './api404-error-2';

export class Api404Error extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  throw() {
    if (createApiClientErrorResponseResponse.safeParse(this.response).success) {
      const error = new CreateApiClientErrorResponse(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    if (api404Error2Response.safeParse(this.response).success) {
      const error = new Api404Error2(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    throw new Error(`UnrecognizedError: ${JSON.stringify(this.response)}`);
  }
}
