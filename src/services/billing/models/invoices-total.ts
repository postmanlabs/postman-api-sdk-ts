import { z } from 'zod';

/**
 * Zod schema for the InvoicesTotal model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const invoicesTotal = z.lazy(() => {
  return z.object({
    value: z.number().optional(),
    currency: z.string().optional(),
  });
});

/**
 * Information about the invoice's total billed amount.
 * @typedef  {InvoicesTotal} invoicesTotal - Information about the invoice's total billed amount. - Information about the invoice's total billed amount.
 * @property {number} - The amount billed.
 * @property {string} - The currency of the billed amount. Currently only supports the `USD` value.
 */
export type InvoicesTotal = z.infer<typeof invoicesTotal>;

/**
 * Zod schema for mapping API responses to the InvoicesTotal application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const invoicesTotalResponse = z.lazy(() => {
  return z
    .object({
      value: z.number().optional(),
      currency: z.string().optional(),
    })
    .transform((data) => ({
      value: data['value'],
      currency: data['currency'],
    }));
});

/**
 * Zod schema for mapping the InvoicesTotal application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const invoicesTotalRequest = z.lazy(() => {
  return z
    .object({
      value: z.number().optional(),
      currency: z.string().optional(),
    })
    .transform((data) => ({
      value: data['value'],
      currency: data['currency'],
    }));
});
