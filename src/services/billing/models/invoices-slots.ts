import { z } from 'zod';

/**
 * Zod schema for the InvoicesSlots model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const invoicesSlots = z.lazy(() => {
  return z.object({
    available: z.number().optional(),
    consumed: z.number().optional(),
    total: z.number().optional(),
    unbilled: z.number().optional(),
  });
});

/**
 * Information about the team's slots.
 * @typedef  {InvoicesSlots} invoicesSlots - Information about the team's slots. - Information about the team's slots.
 * @property {number} - The number of the team's available slots.
 * @property {number} - The number of currently-billed team members.
 * @property {number} - The total number of slots available to the team.
 * @property {number} - The number of unbilled slots if [auto-flex billing](https://learning.postman.com/auto-flex-policy/) is available.
 */
export type InvoicesSlots = z.infer<typeof invoicesSlots>;

/**
 * Zod schema for mapping API responses to the InvoicesSlots application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const invoicesSlotsResponse = z.lazy(() => {
  return z
    .object({
      available: z.number().optional(),
      consumed: z.number().optional(),
      total: z.number().optional(),
      unbilled: z.number().optional(),
    })
    .transform((data) => ({
      available: data['available'],
      consumed: data['consumed'],
      total: data['total'],
      unbilled: data['unbilled'],
    }));
});

/**
 * Zod schema for mapping the InvoicesSlots application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const invoicesSlotsRequest = z.lazy(() => {
  return z
    .object({
      available: z.number().optional(),
      consumed: z.number().optional(),
      total: z.number().optional(),
      unbilled: z.number().optional(),
    })
    .transform((data) => ({
      available: data['available'],
      consumed: data['consumed'],
      total: data['total'],
      unbilled: data['unbilled'],
    }));
});
