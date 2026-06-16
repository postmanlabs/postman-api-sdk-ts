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

    const parsedResponse = errorTypeTitleDetailStatusResponse.parse(response);

    this.type = parsedResponse.type;
    this.title = parsedResponse.title;
    this.detail = parsedResponse.detail;
    this.status = parsedResponse.status;
  }

  public throw() {
    const error = new ErrorTypeTitleDetailStatus(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
