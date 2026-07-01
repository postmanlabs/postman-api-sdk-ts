import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  GetMigrationStatus400ErrorError,
  getMigrationStatus400ErrorError,
  getMigrationStatus400ErrorErrorRequest,
  getMigrationStatus400ErrorErrorResponse,
} from './get-migration-status400-error-error';

export type IGetMigrationStatus400ErrorSchema = {
  error?: GetMigrationStatus400ErrorError;
};

export const getMigrationStatus400ErrorResponse = z.lazy(() => {
  return z
    .object({
      error: getMigrationStatus400ErrorErrorResponse.optional(),
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

export class GetMigrationStatus400Error extends ThrowableError {
  public error?: GetMigrationStatus400ErrorError;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = getMigrationStatus400ErrorResponse.parse(response);

    this.error = parsedResponse.error;
  }

  public throw() {
    const error = new GetMigrationStatus400Error(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
