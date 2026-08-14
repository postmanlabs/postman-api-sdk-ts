import { z } from 'zod';

/**
 * Zod schema for the UpdateCollectionResponseResponseCode model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateCollectionResponseResponseCode = z.lazy(() => {
  return z.object({
    code: z.number().optional(),
    name: z.string().optional(),
  });
});

/**
 * The response's HTTP response code information.
 * @typedef {UpdateCollectionResponseResponseCode} updateCollectionResponseResponseCode
 * @property {number} code - The response's HTTP response status code.
 * @property {string} name - The name of the status code.
 */
export type UpdateCollectionResponseResponseCode = z.infer<
  typeof updateCollectionResponseResponseCode
>;

/**
 * Zod schema for mapping API responses to the UpdateCollectionResponseResponseCode application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateCollectionResponseResponseCodeResponse = z.lazy(() => {
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
 * Zod schema for mapping the UpdateCollectionResponseResponseCode application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateCollectionResponseResponseCodeRequest = z.lazy(() => {
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
