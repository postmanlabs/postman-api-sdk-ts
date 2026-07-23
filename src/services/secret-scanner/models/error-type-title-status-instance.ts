import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';

export type IErrorTypeTitleStatusInstanceSchema = {
  type?: string;
  title?: string;
  status?: number;
  instance?: string;
};

export const errorTypeTitleStatusInstanceResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      title: z.string().optional(),
      status: z.number().optional(),
      instance: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      title: data['title'],
      status: data['status'],
      instance: data['instance'],
    }));
});

export class ErrorTypeTitleStatusInstance extends ThrowableError {
  public type?: string;
  public title?: string;
  public status?: number;
  public instance?: string;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  static from(message: string, response?: unknown): ErrorTypeTitleStatusInstance {
    const error = new ErrorTypeTitleStatusInstance(message, response);
    const result = errorTypeTitleStatusInstanceResponse.safeParse(response);
    const parsedResponse = (result.success ? result.data : response || {}) as z.infer<
      typeof errorTypeTitleStatusInstanceResponse
    >;

    error.type = parsedResponse.type;
    error.title = parsedResponse.title;
    error.status = parsedResponse.status;
    error.instance = parsedResponse.instance;

    return error;
  }

  public throw() {
    const error = ErrorTypeTitleStatusInstance.from(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
