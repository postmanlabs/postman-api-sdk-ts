import { z } from 'zod';
import { ThrowableError } from '../../http/errors/throwable-error';
import {
  ErrorTypeTitleDetailDetail,
  errorTypeTitleDetailDetail,
  errorTypeTitleDetailDetailRequest,
  errorTypeTitleDetailDetailResponse,
} from '../billing/models/error-type-title-detail-detail';

export type ICreateApiClientErrorResponseSchema = {
  type?: string;
  title?: string;
  detail?: ErrorTypeTitleDetailDetail;
};

export const createApiClientErrorResponseResponse = z.lazy(() => {
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

export class CreateApiClientErrorResponse extends ThrowableError {
  public type?: string;
  public title?: string;
  public detail?: ErrorTypeTitleDetailDetail;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = createApiClientErrorResponseResponse.parse(response);

    this.type = parsedResponse.type;
    this.title = parsedResponse.title;
    this.detail = parsedResponse.detail;
  }

  public throw() {
    const error = new CreateApiClientErrorResponse(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
