import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import { TeamsApiErrorSchema, teamsApiErrorSchemaResponse } from './teams-api-error-schema';
import {
  ErrorTypeTitleDetailStatusInstance,
  errorTypeTitleDetailStatusInstanceResponse,
} from '../../common/error-type-title-detail-status-instance';

export class Teams400Error extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  throw() {
    if (teamsApiErrorSchemaResponse.safeParse(this.response).success) {
      const error = TeamsApiErrorSchema.from(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    if (errorTypeTitleDetailStatusInstanceResponse.safeParse(this.response).success) {
      const error = ErrorTypeTitleDetailStatusInstance.from(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    throw new Error(`UnrecognizedError: ${JSON.stringify(this.response)}`);
  }
}
