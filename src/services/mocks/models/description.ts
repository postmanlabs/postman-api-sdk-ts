import { z } from 'zod';

/**
 * Zod schema for the Description model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const description = z.lazy(() => {
  return z.object({
    content: z.string().optional(),
    type: z.string().optional(),
  });
});

/**
 * The response header's description information.
 * @typedef  {Description} description - The response header's description information. - The response header's description information.
 * @property {string} - The response header description's content.
 * @property {string} - The response header description's media type.
 */
export type Description = z.infer<typeof description>;

/**
 * Zod schema for mapping API responses to the Description application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const descriptionResponse = z.lazy(() => {
  return z
    .object({
      content: z.string().optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      content: data['content'],
      type: data['type'],
    }));
});

/**
 * Zod schema for mapping the Description application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const descriptionRequest = z.lazy(() => {
  return z
    .object({
      content: z.string().optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      content: data['content'],
      type: data['type'],
    }));
});
