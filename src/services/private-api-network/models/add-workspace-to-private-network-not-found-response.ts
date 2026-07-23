import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type IAddWorkspaceToPrivateNetworkNotFoundResponseSchema = {
  name?: string;
  message?: string;
};

export const addWorkspaceToPrivateNetworkNotFoundResponseResponse = z.lazy(() => {
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

export class AddWorkspaceToPrivateNetworkNotFoundResponse extends ThrowableError {
  public name!: string;

  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): AddWorkspaceToPrivateNetworkNotFoundResponse {
    const error = new AddWorkspaceToPrivateNetworkNotFoundResponse(message, response);
    const result = addWorkspaceToPrivateNetworkNotFoundResponseResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof addWorkspaceToPrivateNetworkNotFoundResponseResponse
    >;

    error.name = parsedResponse.name || 'Error';
    error.message = parsedResponse.message || '';

    return error;
  }

  public throw() {
    const error = AddWorkspaceToPrivateNetworkNotFoundResponse.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
