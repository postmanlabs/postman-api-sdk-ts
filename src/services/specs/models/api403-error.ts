import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  ErrorTypeTitleDetail,
  errorTypeTitleDetailResponse,
} from '../../common/error-type-title-detail';
import {
  ErrorTypeTitleDetailStatus,
  errorTypeTitleDetailStatusResponse,
} from '../../common/error-type-title-detail-status';
import {
  ErrorTypeTitleMessageDetail,
  errorTypeTitleMessageDetailResponse,
} from './error-type-title-message-detail';

export class Api403Error extends ThrowableError {
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
    if (errorTypeTitleMessageDetailResponse.safeParse(this.response).success) {
      const error = new ErrorTypeTitleMessageDetail(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    throw new Error(`UnrecognizedError: ${JSON.stringify(this.response)}`);
  }
}
