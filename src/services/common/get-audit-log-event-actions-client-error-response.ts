import { z } from 'zod';
import { ThrowableError } from '../../http/errors/throwable-error';
import {
  ErrorNameMessageError1,
  errorNameMessageError1,
  errorNameMessageError1Request,
  errorNameMessageError1Response,
} from '../billing/models/error-name-message-error-1';

export type IGetAuditLogEventActionsClientErrorResponseSchema = {
  error?: ErrorNameMessageError1;
};

export const getAuditLogEventActionsClientErrorResponseResponse = z.lazy(() => {
  return z
    .object({
      error: errorNameMessageError1Response.optional(),
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

export class GetAuditLogEventActionsClientErrorResponse extends ThrowableError {
  public error?: ErrorNameMessageError1;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = getAuditLogEventActionsClientErrorResponseResponse.parse(response);

    this.error = parsedResponse.error;
  }

  public throw() {
    const error = new GetAuditLogEventActionsClientErrorResponse(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
