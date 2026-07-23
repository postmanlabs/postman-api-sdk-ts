import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import { ErrorTitleMessage, errorTitleMessageResponse } from './error-title-message';
import {
  ErrorTitleDetailsMessage,
  errorTitleDetailsMessageResponse,
} from './error-title-details-message';
import {
  ErrorTypeNameMessageTitle,
  errorTypeNameMessageTitleResponse,
} from './error-type-name-message-title';

export class MigrateApiToSpecHub400Error extends ThrowableError {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  throw() {
    if (errorTitleMessageResponse.safeParse(this.response).success) {
      const error = ErrorTitleMessage.from(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    if (errorTitleDetailsMessageResponse.safeParse(this.response).success) {
      const error = ErrorTitleDetailsMessage.from(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    if (errorTypeNameMessageTitleResponse.safeParse(this.response).success) {
      const error = ErrorTypeNameMessageTitle.from(this.message, this.response);
      error.metadata = this.metadata;
      error.throw();
    }
    throw new Error(`UnrecognizedError: ${JSON.stringify(this.response)}`);
  }
}
