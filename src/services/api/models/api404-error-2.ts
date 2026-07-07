import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  ErrorTypeTitleDetailError,
  errorTypeTitleDetailError,
  errorTypeTitleDetailErrorRequest,
  errorTypeTitleDetailErrorResponse,
} from './error-type-title-detail-error';

export type IApi404Error2Schema = {
  error?: ErrorTypeTitleDetailError;
};

export const api404Error2Response = z.lazy(() => {
  return z
    .object({
      error: errorTypeTitleDetailErrorResponse.optional(),
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

export class Api404Error2 extends ThrowableError {
  public error?: ErrorTypeTitleDetailError;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = api404Error2Response.parse(response);

    this.error = parsedResponse.error;
  }

  public throw() {
    const error = new Api404Error2(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
