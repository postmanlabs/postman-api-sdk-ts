import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type IWorkspaces400Error2Schema = {
  name?: string;
  message?: string;
};

export const workspaces400Error2Response = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      message: data['message'],
    }));
});

export class Workspaces400Error2 extends ThrowableError {
  public name!: string;

  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): Workspaces400Error2 {
    const error = new Workspaces400Error2(message, response);
    const result = workspaces400Error2Response.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof workspaces400Error2Response
    >;

    error.name = parsedResponse.name || 'Error';
    error.message = parsedResponse.message || '';

    return error;
  }

  public throw() {
    const error = Workspaces400Error2.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
