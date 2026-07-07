import { z } from 'zod';

/**
 * Zod schema for the CreateCollectionFork model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createCollectionFork = z.lazy(() => {
  return z.object({
    label: z.string(),
  });
});

/**
 *
 * @typedef  {CreateCollectionFork} createCollectionFork
 * @property {string} - The fork's label.
 */
export type CreateCollectionFork = z.infer<typeof createCollectionFork>;

/**
 * Zod schema for mapping API responses to the CreateCollectionFork application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createCollectionForkResponse = z.lazy(() => {
  return z
    .object({
      label: z.string(),
    })
    .transform((data) => ({
      label: data['label'],
    }));
});

/**
 * Zod schema for mapping the CreateCollectionFork application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createCollectionForkRequest = z.lazy(() => {
  return z
    .object({
      label: z.string(),
    })
    .transform((data) => ({
      label: data['label'],
    }));
});
