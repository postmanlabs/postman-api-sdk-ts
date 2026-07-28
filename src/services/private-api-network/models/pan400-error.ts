import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  AddWorkspaceToPrivateNetworkNotFoundResponse,
  addWorkspaceToPrivateNetworkNotFoundResponseResponse,
} from './add-workspace-to-private-network-not-found-response';
import {
  GetAuditLogEventActionsClientErrorResponse,
  getAuditLogEventActionsClientErrorResponseResponse,
} from '../../common/get-audit-log-event-actions-client-error-response';

export class Pan400Error extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  throw() {
    if (addWorkspaceToPrivateNetworkNotFoundResponseResponse.safeParse(this.response).success) {
      const error = AddWorkspaceToPrivateNetworkNotFoundResponse.from(this.message, this.response);
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
