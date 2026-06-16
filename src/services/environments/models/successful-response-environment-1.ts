import { z } from 'zod';

/**
 * Zod schema for the SuccessfulResponseEnvironment1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseEnvironment1 = z.lazy(() => {
  return z.object({
    uid: z.string().optional(),
    name: z.string().optional(),
    forkName: z.string().optional(),
  });
});

/**
 * Information about the forked environment.
 * @typedef  {SuccessfulResponseEnvironment1} successfulResponseEnvironment1 - Information about the forked environment. - Information about the forked environment.
 * @property {string} - The forked environment's ID.
 * @property {string} - The name of the forked environment.
 * @property {string} - The forked environment's label.
 */
export type SuccessfulResponseEnvironment1 = z.infer<typeof successfulResponseEnvironment1>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseEnvironment1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseEnvironment1Response = z.lazy(() => {
  return z
    .object({
      uid: z.string().optional(),
      name: z.string().optional(),
      forkName: z.string().optional(),
    })
    .transform((data) => ({
      uid: data['uid'],
      name: data['name'],
      forkName: data['forkName'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseEnvironment1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseEnvironment1Request = z.lazy(() => {
  return z
    .object({
      uid: z.string().optional(),
      name: z.string().optional(),
      forkName: z.string().optional(),
    })
    .transform((data) => ({
      uid: data['uid'],
      name: data['name'],
      forkName: data['forkName'],
    }));
});
