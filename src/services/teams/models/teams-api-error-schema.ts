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

    const parsedResponse = teamsApiErrorSchemaResponse.parse(response);

    this.type = parsedResponse.type;
    this.status = parsedResponse.status;
    this.title = parsedResponse.title;
    this.detail = parsedResponse.detail;
    this.instance = parsedResponse.instance;
  }

  public throw() {
    const error = new TeamsApiErrorSchema(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
