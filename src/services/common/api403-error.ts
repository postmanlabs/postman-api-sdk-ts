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
  ErrorTypeTitleMessageDetail,
  errorTypeTitleMessageDetailResponse,
} from '../api/models/error-type-title-message-detail';

export class Api403Error extends ThrowableError {
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
    if (errorTypeTitleMessageDetailResponse.safeParse(this.response).success) {
      const error = ErrorTypeTitleMessageDetail.from(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    throw new Error(`UnrecognizedError: ${JSON.stringify(this.response)}`);
  }
}
