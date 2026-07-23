import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  GetAuditLogEventActionsClientErrorResponse,
  getAuditLogEventActionsClientErrorResponseResponse,
} from '../../common/get-audit-log-event-actions-client-error-response';
import {
  ErrorNameMessageDetails,
  errorNameMessageDetailsResponse,
} from '../../common/error-name-message-details';

export class CollectionPatch400Errors extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  throw() {
    if (getAuditLogEventActionsClientErrorResponseResponse.safeParse(this.response).success) {
      const error = GetAuditLogEventActionsClientErrorResponse.from(this.message, this.response);
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
