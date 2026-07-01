import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  ApiCatalogErrorPathMessage,
  apiCatalogErrorPathMessage,
  apiCatalogErrorPathMessageRequest,
  apiCatalogErrorPathMessageResponse,
} from './api-catalog-error-path-message';

export type IErrorTypeStatusTitleDetailErrorsSchema = {
  type?: string;
  status?: number;
  title?: string;
  detail?: string;
  errors?: ApiCatalogErrorPathMessage[];
};

export const errorTypeStatusTitleDetailErrorsResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      status: z.number().optional(),
      title: z.string().optional(),
      detail: z.string().optional(),
      errors: z.array(apiCatalogErrorPathMessageResponse).optional(),
    })
    .transform((data) => ({
      type: data['type'],
      status: data['status'],
      title: data['title'],
      detail: data['detail'],
      errors: data['errors'],
    }));
});

export class ErrorTypeStatusTitleDetailErrors extends ThrowableError {
  public type?: string;
  public status?: number;
  public title?: string;
  public detail?: string;
  public errors?: ApiCatalogErrorPathMessage[];
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = errorTypeStatusTitleDetailErrorsResponse.parse(response);

    this.type = parsedResponse.type;
    this.status = parsedResponse.status;
    this.title = parsedResponse.title;
    this.detail = parsedResponse.detail;
    this.errors = parsedResponse.errors;
  }

  public throw() {
    const error = new ErrorTypeStatusTitleDetailErrors(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
