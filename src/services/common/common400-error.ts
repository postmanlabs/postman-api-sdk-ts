import { z } from 'zod';
import { ThrowableError } from '../../http/errors/throwable-error';
import { ErrorTypeTitleDetail, errorTypeTitleDetailResponse } from './error-type-title-detail';
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
    if (errorTypeTitleDetailResponse.safeParse(this.response).success) {
      const error = new ErrorTypeTitleDetail(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    if (errorTypeTitleDetailStatusResponse.safeParse(this.response).success) {
      const error = new ErrorTypeTitleDetailStatus(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    if (errorNameMessageDetailsResponse.safeParse(this.response).success) {
      const error = new ErrorNameMessageDetails(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    throw new Error(`UnrecognizedError: ${JSON.stringify(this.response)}`);
  }
}
