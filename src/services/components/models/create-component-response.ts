import { z } from 'zod';

/**
 * Zod schema for the CreateComponentResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createComponentResponse = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
  });
});

/**
 * Information about the component.
 * @typedef  {CreateComponentResponse} createComponentResponse - Information about the component. - Information about the component.
 * @property {string} - The component's ID.
 */
export type CreateComponentResponse = z.infer<typeof createComponentResponse>;

/**
 * Zod schema for mapping API responses to the CreateComponentResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createComponentResponseResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the CreateComponentResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createComponentResponseRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
