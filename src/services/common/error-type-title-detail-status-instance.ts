import { z } from 'zod';
import { ThrowableError } from '../../http/errors/throwable-error';

export type IErrorTypeTitleDetailStatusInstanceSchema = {
  type?: string;
  title?: string;
  detail?: string;
  status?: number;
  instance?: string;
};

export const errorTypeTitleDetailStatusInstanceResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      title: z.string().optional(),
      detail: z.string().optional(),
      status: z.number().optional(),
      instance: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      title: data['title'],
      detail: data['detail'],
      status: data['status'],
      instance: data['instance'],
    }));
});

export class ErrorTypeTitleDetailStatusInstance extends ThrowableError {
  public type?: string;
  public title?: string;
  public detail?: string;
  public status?: number;
  public instance?: string;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = errorTypeTitleDetailStatusInstanceResponse.parse(response);

    this.type = parsedResponse.type;
    this.title = parsedResponse.title;
    this.detail = parsedResponse.detail;
    this.status = parsedResponse.status;
    this.instance = parsedResponse.instance;
  }

  public throw() {
    const error = new ErrorTypeTitleDetailStatusInstance(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
