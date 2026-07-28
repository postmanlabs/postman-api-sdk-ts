import { z } from 'zod';

/**
 * Zod schema for the SuccessfulResponseWorkspace3 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseWorkspace3 = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
  });
});

/**
 * The Private API Network `workspace` element type.
 * @typedef  {SuccessfulResponseWorkspace3} successfulResponseWorkspace3 - The Private API Network `workspace` element type. - The Private API Network `workspace` element type.
 * @property {string} - The element's ID.
 */
export type SuccessfulResponseWorkspace3 = z.infer<typeof successfulResponseWorkspace3>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseWorkspace3 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseWorkspace3Response = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseWorkspace3 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseWorkspace3Request = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
