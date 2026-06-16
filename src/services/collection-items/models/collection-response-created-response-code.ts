import { z } from 'zod';

/**
 * Zod schema for the CollectionResponseCreatedResponseCode model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionResponseCreatedResponseCode = z.lazy(() => {
  return z.object({
    code: z.number().optional(),
    name: z.string().optional(),
  });
});

/**
 * The response's HTTP response code information.
 * @typedef  {CollectionResponseCreatedResponseCode} collectionResponseCreatedResponseCode - The response's HTTP response code information. - The response's HTTP response code information.
 * @property {number} - The response's HTTP response status code.
 * @property {string} - The name of the status code.
 */
export type CollectionResponseCreatedResponseCode = z.infer<
  typeof collectionResponseCreatedResponseCode
>;

/**
 * Zod schema for mapping API responses to the CollectionResponseCreatedResponseCode application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionResponseCreatedResponseCodeResponse = z.lazy(() => {
  return z
    .object({
      code: z.number().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      code: data['code'],
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the CollectionResponseCreatedResponseCode application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionResponseCreatedResponseCodeRequest = z.lazy(() => {
  return z
    .object({
      code: z.number().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      code: data['code'],
      name: data['name'],
    }));
});
