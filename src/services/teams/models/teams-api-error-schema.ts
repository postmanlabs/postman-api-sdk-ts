import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  TeamsApiErrorSchemaDetail,
  teamsApiErrorSchemaDetail,
  teamsApiErrorSchemaDetailRequest,
  teamsApiErrorSchemaDetailResponse,
} from './teams-api-error-schema-detail';

export type ITeamsApiErrorSchemaSchema = {
  type?: string;
  status?: number;
  title?: string;
  detail?: TeamsApiErrorSchemaDetail;
  instance?: string;
};

export const teamsApiErrorSchemaResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      status: z.number().optional(),
      title: z.string().optional(),
      detail: teamsApiErrorSchemaDetailResponse.optional(),
      instance: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      status: data['status'],
      title: data['title'],
      detail: data['detail'],
      instance: data['instance'],
    }));
});

export class TeamsApiErrorSchema extends ThrowableError {
  public type?: string;
  public status?: number;
  public title?: string;
  public detail?: TeamsApiErrorSchemaDetail;
  public instance?: string;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): TeamsApiErrorSchema {
    const error = new TeamsApiErrorSchema(message, response);
    const result = teamsApiErrorSchemaResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof teamsApiErrorSchemaResponse
    >;

    error.type = parsedResponse.type;
    error.status = parsedResponse.status;
    error.title = parsedResponse.title;
    error.detail = parsedResponse.detail;
    error.instance = parsedResponse.instance;

    return error;
  }

  public throw() {
    const error = TeamsApiErrorSchema.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
