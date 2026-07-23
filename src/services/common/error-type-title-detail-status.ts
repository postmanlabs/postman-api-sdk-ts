import { z } from 'zod';
import { ThrowableError } from '../../http/errors/throwable-error';
import {
  ErrorTypeTitleDetailStatusType,
  errorTypeTitleDetailStatusType,
  errorTypeTitleDetailStatusTypeRequest,
  errorTypeTitleDetailStatusTypeResponse,
} from '../billing/models/error-type-title-detail-status-type';

export type IErrorTypeTitleDetailStatusSchema = {
  type?: ErrorTypeTitleDetailStatusType;
  title?: string;
  detail?: string;
  status?: number;
};

export const errorTypeTitleDetailStatusResponse = z.lazy(() => {
  return z
    .object({
      type: errorTypeTitleDetailStatusTypeResponse.optional(),
      title: z.string().optional(),
      detail: z.string().optional(),
      status: z.number().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      title: data['title'],
      detail: data['detail'],
      status: data['status'],
    }));
});

export class ErrorTypeTitleDetailStatus extends ThrowableError {
  public type?: ErrorTypeTitleDetailStatusType;
  public title?: string;
  public detail?: string;
  public status?: number;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): ErrorTypeTitleDetailStatus {
    const error = new ErrorTypeTitleDetailStatus(message, response);
    const result = errorTypeTitleDetailStatusResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof errorTypeTitleDetailStatusResponse
    >;

    error.type = parsedResponse.type;
    error.title = parsedResponse.title;
    error.detail = parsedResponse.detail;
    error.status = parsedResponse.status;

    return error;
  }

  public throw() {
    const error = ErrorTypeTitleDetailStatus.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
