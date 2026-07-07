import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type IPartnerAndPersonalWorkspaceRolesUnsupportedSchema = {
  detail?: string;
  link?: string;
  status?: number;
  title?: string;
};

export const partnerAndPersonalWorkspaceRolesUnsupportedResponse = z.lazy(() => {
  return z
    .object({
      detail: z.string().optional(),
      link: z.string().optional(),
      status: z.number().optional(),
      title: z.string().optional(),
    })
    .transform((data) => ({
      detail: data['detail'],
      link: data['link'],
      status: data['status'],
      title: data['title'],
    }));
});

export class PartnerAndPersonalWorkspaceRolesUnsupported extends ThrowableError {
  public detail?: string;
  public link?: string;
  public status?: number;
  public title?: string;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = partnerAndPersonalWorkspaceRolesUnsupportedResponse.parse(response);

    this.detail = parsedResponse.detail;
    this.link = parsedResponse.link;
    this.status = parsedResponse.status;
    this.title = parsedResponse.title;
  }

  public throw() {
    const error = new PartnerAndPersonalWorkspaceRolesUnsupported(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
