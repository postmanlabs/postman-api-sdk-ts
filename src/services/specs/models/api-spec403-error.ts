import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  ErrorTypeTitleDetailStatus,
  errorTypeTitleDetailStatusResponse,
} from '../../common/error-type-title-detail-status';
import {
  ErrorTypeTitleDetailStatusInstance,
  errorTypeTitleDetailStatusInstanceResponse,
} from '../../common/error-type-title-detail-status-instance';

export class ApiSpec403Error extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  throw() {
    if (errorTypeTitleDetailStatusResponse.safeParse(this.response).success) {
      const error = ErrorTypeTitleDetailStatus.from(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    if (errorTypeTitleDetailStatusInstanceResponse.safeParse(this.response).success) {
      const error = ErrorTypeTitleDetailStatusInstance.from(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    throw new Error(`UnrecognizedError: ${JSON.stringify(this.response)}`);
  }
}
