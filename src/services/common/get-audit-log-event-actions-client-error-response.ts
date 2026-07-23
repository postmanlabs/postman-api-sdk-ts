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
  }

  static from(message: string, response?: unknown): GetAuditLogEventActionsClientErrorResponse {
    const error = new GetAuditLogEventActionsClientErrorResponse(message, response);
    const result = getAuditLogEventActionsClientErrorResponseResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof getAuditLogEventActionsClientErrorResponseResponse
    >;

    error.error = parsedResponse.error;

    return error;
  }

  public throw() {
    const error = GetAuditLogEventActionsClientErrorResponse.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
