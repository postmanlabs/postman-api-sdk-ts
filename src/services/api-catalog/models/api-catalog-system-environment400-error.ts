import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  ErrorTypeStatusTitleDetailErrors,
  errorTypeStatusTitleDetailErrorsResponse,
} from './error-type-status-title-detail-errors';
import {
  ErrorTypeTitleDetailStatus,
  errorTypeTitleDetailStatusResponse,
} from '../../common/error-type-title-detail-status';

export class ApiCatalogSystemEnvironment400Error extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  throw() {
    if (errorTypeStatusTitleDetailErrorsResponse.safeParse(this.response).success) {
      const error = new ErrorTypeStatusTitleDetailErrors(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    if (errorTypeTitleDetailStatusResponse.safeParse(this.response).success) {
      const error = new ErrorTypeTitleDetailStatus(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    throw new Error(`UnrecognizedError: ${JSON.stringify(this.response)}`);
  }
}
