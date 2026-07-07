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
  public name: string;

  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = addWorkspaceToPrivateNetworkNotFoundResponseResponse.parse(response);

    this.name = parsedResponse.name || 'Error';
    this.message = parsedResponse.message || '';
  }

  public throw() {
    const error = new AddWorkspaceToPrivateNetworkNotFoundResponse(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
