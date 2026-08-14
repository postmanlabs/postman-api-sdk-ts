import { z } from 'zod';

/**
 * Zod schema for the CreateComponentVersionResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createComponentVersionResponse = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
  });
});

/**
 * Information about the component version.
 * @typedef {CreateComponentVersionResponse} createComponentVersionResponse
 * @property {string} id - The component version's ID.
 */
export type CreateComponentVersionResponse = z.infer<typeof createComponentVersionResponse>;

/**
 * Zod schema for mapping API responses to the CreateComponentVersionResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createComponentVersionResponseResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the CreateComponentVersionResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createComponentVersionResponseRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
