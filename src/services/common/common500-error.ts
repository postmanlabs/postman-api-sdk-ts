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
  GetAuditLogEventActionsClientErrorResponse,
  getAuditLogEventActionsClientErrorResponseResponse,
} from './get-audit-log-event-actions-client-error-response';

export class Common500Error extends ThrowableError {
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
    if (getAuditLogEventActionsClientErrorResponseResponse.safeParse(this.response).success) {
      const error = GetAuditLogEventActionsClientErrorResponse.from(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    throw new Error(`UnrecognizedError: ${JSON.stringify(this.response)}`);
  }
}
