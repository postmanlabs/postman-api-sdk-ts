import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type ISdkErrorSchema = {
  type: string;
  title: string;
  status: number;
  detail?: string;
  instance?: string;
  requestId?: string;
};

export const sdkErrorResponse = z.lazy(() => {
  return z
    .object({
      type: z.string(),
      title: z.string(),
      status: z.number(),
      detail: z.string().optional(),
      instance: z.string().optional(),
      requestId: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      title: data['title'],
      status: data['status'],
      detail: data['detail'],
      instance: data['instance'],
      requestId: data['requestId'],
    }));
});

export class SdkError extends ThrowableError {
  public type: string;
  public title: string;
  public status: number;
  public detail?: string;
  public instance?: string;
  public requestId?: string;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = sdkErrorResponse.parse(response);

    this.type = parsedResponse.type;
    this.title = parsedResponse.title;
    this.status = parsedResponse.status;
    this.detail = parsedResponse.detail;
    this.instance = parsedResponse.instance;
    this.requestId = parsedResponse.requestId;
  }

  public throw() {
    const error = new SdkError(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
