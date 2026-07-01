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
  public name: string;

  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = workspaces400Error2Response.parse(response);

    this.name = parsedResponse.name || 'Error';
    this.message = parsedResponse.message || '';
  }

  public throw() {
    const error = new Workspaces400Error2(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
