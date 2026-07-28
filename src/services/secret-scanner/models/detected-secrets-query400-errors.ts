import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  ErrorTypeTitleStatusInstance,
  errorTypeTitleStatusInstanceResponse,
} from './error-type-title-status-instance';
import {
  ErrorTypeTitleDetailStatusInstance,
  errorTypeTitleDetailStatusInstanceResponse,
} from '../../common/error-type-title-detail-status-instance';

export class DetectedSecretsQuery400Errors extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  throw() {
    if (errorTypeTitleStatusInstanceResponse.safeParse(this.response).success) {
      const error = ErrorTypeTitleStatusInstance.from(this.message, this.response);
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
