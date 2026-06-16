import { z } from 'zod';

/**
 * Zod schema for the ElementTransfers model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const elementTransfers = z.lazy(() => {
  return z.object({
    type: z.string().optional(),
    from: z.string().optional(),
    id: z.string().optional(),
    to: z.string().optional(),
  });
});

/**
 * Information about the element transfer.
 * @typedef  {ElementTransfers} elementTransfers - Information about the element transfer. - Information about the element transfer.
 * @property {string} - The type of element transferred.
 * @property {string} - The ID of the workspace the element was transferred from.
 * @property {string} - The element's ID.
 * @property {string} - The ID of the workspace the element was transferred to.
 */
export type ElementTransfers = z.infer<typeof elementTransfers>;

/**
 * Zod schema for mapping API responses to the ElementTransfers application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const elementTransfersResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      from: z.string().optional(),
      id: z.string().optional(),
      to: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      from: data['from'],
      id: data['id'],
      to: data['to'],
    }));
});

/**
 * Zod schema for mapping the ElementTransfers application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const elementTransfersRequest = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      from: z.string().optional(),
      id: z.string().optional(),
      to: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      from: data['from'],
      id: data['id'],
      to: data['to'],
    }));
});
