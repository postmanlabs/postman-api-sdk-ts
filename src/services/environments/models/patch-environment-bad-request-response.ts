import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  BadRequestDetail,
  badRequestDetail,
  badRequestDetailRequest,
  badRequestDetailResponse,
} from './bad-request-detail';

export type IPatchEnvironmentBadRequestResponseSchema = {
  title?: string;
  status?: number;
  detail?: BadRequestDetail;
  type?: string;
  instance?: string;
};

export const patchEnvironmentBadRequestResponseResponse = z.lazy(() => {
  return z
    .object({
      title: z.string().optional(),
      status: z.number().optional(),
      detail: badRequestDetailResponse.optional(),
      type: z.string().optional(),
      instance: z.string().optional(),
    })
    .transform((data) => ({
      title: data['title'],
      status: data['status'],
      detail: data['detail'],
      type: data['type'],
      instance: data['instance'],
    }));
});

export class PatchEnvironmentBadRequestResponse extends ThrowableError {
  public title?: string;
  public status?: number;
  public detail?: BadRequestDetail;
  public type?: string;
  public instance?: string;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): PatchEnvironmentBadRequestResponse {
    const error = new PatchEnvironmentBadRequestResponse(message, response);
    const result = patchEnvironmentBadRequestResponseResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof patchEnvironmentBadRequestResponseResponse
    >;

    error.title = parsedResponse.title;
    error.status = parsedResponse.status;
    error.detail = parsedResponse.detail;
    error.type = parsedResponse.type;
    error.instance = parsedResponse.instance;

    return error;
  }

  public throw() {
    const error = PatchEnvironmentBadRequestResponse.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
