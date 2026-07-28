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
  }

  static from(message: string, response?: unknown): PartnerAndPersonalWorkspaceRolesUnsupported {
    const error = new PartnerAndPersonalWorkspaceRolesUnsupported(message, response);
    const result = partnerAndPersonalWorkspaceRolesUnsupportedResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof partnerAndPersonalWorkspaceRolesUnsupportedResponse
    >;

    error.detail = parsedResponse.detail;
    error.link = parsedResponse.link;
    error.status = parsedResponse.status;
    error.title = parsedResponse.title;

    return error;
  }

  public throw() {
    const error = PartnerAndPersonalWorkspaceRolesUnsupported.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
