import { z } from 'zod';

/**
 * Zod schema for the OnFailure model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const onFailure = z.lazy(() => {
  return z.object({
    email: z.string().optional(),
  });
});

/**
 *
 * @typedef  {OnFailure} onFailure
 * @property {string} - The email address of the user to notify on monitor failure.
 */
export type OnFailure = z.infer<typeof onFailure>;

/**
 * Zod schema for mapping API responses to the OnFailure application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const onFailureResponse = z.lazy(() => {
  return z
    .object({
      email: z.string().optional(),
    })
    .transform((data) => ({
      email: data['email'],
    }));
});

/**
 * Zod schema for mapping the OnFailure application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const onFailureRequest = z.lazy(() => {
  return z
    .object({
      email: z.string().optional(),
    })
    .transform((data) => ({
      email: data['email'],
    }));
});
