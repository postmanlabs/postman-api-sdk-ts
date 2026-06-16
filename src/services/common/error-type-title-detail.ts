import { z } from 'zod';
import { ThrowableError } from '../../http/errors/throwable-error';
import {
  ErrorTypeTitleDetailDetail,
  errorTypeTitleDetailDetail,
  errorTypeTitleDetailDetailRequest,
  errorTypeTitleDetailDetailResponse,
} from '../billing/models/error-type-title-detail-detail';

export type IErrorTypeTitleDetailSchema = {
  type?: string;
  title?: string;
  detail?: ErrorTypeTitleDetailDetail;
};

export const errorTypeTitleDetailResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      title: z.string().optional(),
      detail: errorTypeTitleDetailDetailResponse.optional(),
    })
    .transform((data) => ({
      type: data['type'],
      title: data['title'],
      detail: data['detail'],
    }));
});

export class ErrorTypeTitleDetail extends ThrowableError {
  public type?: string;
  public title?: string;
  public detail?: ErrorTypeTitleDetailDetail;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = errorTypeTitleDetailResponse.parse(response);

    this.type = parsedResponse.type;
    this.title = parsedResponse.title;
    this.detail = parsedResponse.detail;
  }

  public throw() {
    const error = new ErrorTypeTitleDetail(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
