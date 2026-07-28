import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  ErrorTypeTitleDetailStatusInstance,
  errorTypeTitleDetailStatusInstanceResponse,
} from '../../common/error-type-title-detail-status-instance';
import {
  GetAuditLogEventActionsClientErrorResponse,
  getAuditLogEventActionsClientErrorResponseResponse,
} from '../../common/get-audit-log-event-actions-client-error-response';

export class Environments404Error extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  throw() {
    if (errorTypeTitleDetailStatusInstanceResponse.safeParse(this.response).success) {
      const error = ErrorTypeTitleDetailStatusInstance.from(this.message, this.response);
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
