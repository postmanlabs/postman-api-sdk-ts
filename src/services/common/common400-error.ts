import { z } from 'zod';
import { ThrowableError } from '../../http/errors/throwable-error';
import {
  CreateApiClientErrorResponse,
  createApiClientErrorResponseResponse,
} from './create-api-client-error-response';
import {
  ErrorTypeTitleDetailStatus,
  errorTypeTitleDetailStatusResponse,
} from './error-type-title-detail-status';
import {
  ErrorNameMessageDetails,
  errorNameMessageDetailsResponse,
} from './error-name-message-details';

export class Common400Error extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  throw() {
    if (createApiClientErrorResponseResponse.safeParse(this.response).success) {
      const error = CreateApiClientErrorResponse.from(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    if (errorTypeTitleDetailStatusResponse.safeParse(this.response).success) {
      const error = ErrorTypeTitleDetailStatus.from(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    if (errorNameMessageDetailsResponse.safeParse(this.response).success) {
      const error = ErrorNameMessageDetails.from(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    throw new Error(`UnrecognizedError: ${JSON.stringify(this.response)}`);
  }
}
