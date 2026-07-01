import { z } from 'zod';

/**
 * Zod schema for the BadRequestCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const badRequestCollection = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    message: z.string().optional(),
  });
});

/**
 *
 * @typedef  {BadRequestCollection} badRequestCollection
 * @property {string} - The error name.
 * @property {string} - The error message.
 */
export type BadRequestCollection = z.infer<typeof badRequestCollection>;

/**
 * Zod schema for mapping API responses to the BadRequestCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const badRequestCollectionResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      message: data['message'],
    }));
});

/**
 * Zod schema for mapping the BadRequestCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const badRequestCollectionRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      message: data['message'],
    }));
});
