import { z } from 'zod';

/**
 * Zod schema for the ForkEnvironment model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const forkEnvironment = z.lazy(() => {
  return z.object({
    forkName: z.string(),
  });
});

/**
 * @typedef {ForkEnvironment} forkEnvironment
 * @property {string} forkName - The forked environment's label.
 */
export type ForkEnvironment = z.infer<typeof forkEnvironment>;

/**
 * Zod schema for mapping API responses to the ForkEnvironment application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const forkEnvironmentResponse = z.lazy(() => {
  return z
    .object({
      forkName: z.string(),
    })
    .transform((data) => ({
      forkName: data['forkName'],
    }));
});

/**
 * Zod schema for mapping the ForkEnvironment application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const forkEnvironmentRequest = z.lazy(() => {
  return z
    .object({
      forkName: z.string(),
    })
    .transform((data) => ({
      forkName: data['forkName'],
    }));
});
