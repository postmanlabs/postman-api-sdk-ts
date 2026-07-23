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
  public type!: string;
  public title!: string;
  public status!: number;
  public detail?: string;
  public instance?: string;
  public requestId?: string;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): SdkError {
    const error = new SdkError(message, response);
    const result = sdkErrorResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof sdkErrorResponse
    >;

    error.type = parsedResponse.type;
    error.title = parsedResponse.title;
    error.status = parsedResponse.status;
    error.detail = parsedResponse.detail;
    error.instance = parsedResponse.instance;
    error.requestId = parsedResponse.requestId;

    return error;
  }

  public throw() {
    const error = SdkError.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
