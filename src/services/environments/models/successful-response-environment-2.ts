import { z } from 'zod';

/**
 * Zod schema for the SuccessfulResponseEnvironment2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseEnvironment2 = z.lazy(() => {
  return z.object({
    uid: z.string().optional(),
  });
});

/**
 * Information about the merged environment.
 * @typedef  {SuccessfulResponseEnvironment2} successfulResponseEnvironment2 - Information about the merged environment. - Information about the merged environment.
 * @property {string} - The merged environment's ID.
 */
export type SuccessfulResponseEnvironment2 = z.infer<typeof successfulResponseEnvironment2>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseEnvironment2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseEnvironment2Response = z.lazy(() => {
  return z
    .object({
      uid: z.string().optional(),
    })
    .transform((data) => ({
      uid: data['uid'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseEnvironment2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseEnvironment2Request = z.lazy(() => {
  return z
    .object({
      uid: z.string().optional(),
    })
    .transform((data) => ({
      uid: data['uid'],
    }));
});
