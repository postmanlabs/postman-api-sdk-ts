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
  }

  static from(message: string, response?: unknown): GetMigrationStatus400Error {
    const error = new GetMigrationStatus400Error(message, response);
    const result = getMigrationStatus400ErrorResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof getMigrationStatus400ErrorResponse
    >;

    error.error = parsedResponse.error;

    return error;
  }

  public throw() {
    const error = GetMigrationStatus400Error.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
