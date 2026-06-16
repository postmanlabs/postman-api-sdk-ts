import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import { Workspaces400Error1, workspaces400Error1Response } from './workspaces400-error-1';
import { Workspaces400Error2, workspaces400Error2Response } from './workspaces400-error-2';
import {
  GetAuditLogEventActionsClientErrorResponse,
  getAuditLogEventActionsClientErrorResponseResponse,
} from '../../common/get-audit-log-event-actions-client-error-response';

export class Workspaces400Error extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  throw() {
    if (workspaces400Error1Response.safeParse(this.response).success) {
      const error = new Workspaces400Error1(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    if (workspaces400Error2Response.safeParse(this.response).success) {
      const error = new Workspaces400Error2(this.message, this.response);
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
