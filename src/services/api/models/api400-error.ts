import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  CreateApiClientErrorResponse,
  createApiClientErrorResponseResponse,
} from '../../common/create-api-client-error-response';
import {
  ApiErrorNameMessage,
  apiErrorNameMessageResponse,
} from '../../common/api-error-name-message';
import {
  GetAuditLogEventActionsClientErrorResponse,
  getAuditLogEventActionsClientErrorResponseResponse,
} from '../../common/get-audit-log-event-actions-client-error-response';

export class Api400Error extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  throw() {
    if (createApiClientErrorResponseResponse.safeParse(this.response).success) {
      const error = new CreateApiClientErrorResponse(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    if (apiErrorNameMessageResponse.safeParse(this.response).success) {
      const error = new ApiErrorNameMessage(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    if (getAuditLogEventActionsClientErrorResponseResponse.safeParse(this.response).success) {
      const error = new GetAuditLogEventActionsClientErrorResponse(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    throw new Error(`UnrecognizedError: ${JSON.stringify(this.response)}`);
  }
}
