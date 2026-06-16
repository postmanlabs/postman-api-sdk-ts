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

    const parsedResponse = errorTypeTitleStatusInstanceResponse.parse(response);

    this.type = parsedResponse.type;
    this.title = parsedResponse.title;
    this.status = parsedResponse.status;
    this.instance = parsedResponse.instance;
  }

  public throw() {
    const error = new ErrorTypeTitleStatusInstance(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
