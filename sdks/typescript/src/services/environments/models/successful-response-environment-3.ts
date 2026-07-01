import { z } from 'zod';

/**
 * Zod schema for the SuccessfulResponseEnvironment3 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseEnvironment3 = z.lazy(() => {
  return z.object({
    uid: z.string().optional(),
  });
});

/**
 * Information about the merged environment.
 * @typedef  {SuccessfulResponseEnvironment3} successfulResponseEnvironment3 - Information about the merged environment. - Information about the merged environment.
 * @property {string} - The merged environment's unique ID.
 */
export type SuccessfulResponseEnvironment3 = z.infer<typeof successfulResponseEnvironment3>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseEnvironment3 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseEnvironment3Response = z.lazy(() => {
  return z
    .object({
      uid: z.string().optional(),
    })
    .transform((data) => ({
      uid: data['uid'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseEnvironment3 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseEnvironment3Request = z.lazy(() => {
  return z
    .object({
      uid: z.string().optional(),
    })
    .transform((data) => ({
      uid: data['uid'],
    }));
});
