import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  ErrorTypeTitleDetailStatus,
  errorTypeTitleDetailStatusResponse,
} from '../../common/error-type-title-detail-status';
import {
  ErrorTypeTitleStatusInstance,
  errorTypeTitleStatusInstanceResponse,
} from './error-type-title-status-instance';

export class SecretScanner403Error extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  throw() {
    if (errorTypeTitleDetailStatusResponse.safeParse(this.response).success) {
      const error = new ErrorTypeTitleDetailStatus(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    if (errorTypeTitleStatusInstanceResponse.safeParse(this.response).success) {
      const error = new ErrorTypeTitleStatusInstance(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    throw new Error(`UnrecognizedError: ${JSON.stringify(this.response)}`);
  }
}
