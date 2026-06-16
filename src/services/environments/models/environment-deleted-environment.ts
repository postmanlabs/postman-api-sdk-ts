import { z } from 'zod';

/**
 * Zod schema for the EnvironmentDeletedEnvironment model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const environmentDeletedEnvironment = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    uid: z.string().optional(),
  });
});

/**
 * Information about the environment.
 * @typedef  {EnvironmentDeletedEnvironment} environmentDeletedEnvironment - Information about the environment. - Information about the environment.
 * @property {string} - The deleted environment's ID.
 * @property {string} - The deleted environment's unique ID.
 */
export type EnvironmentDeletedEnvironment = z.infer<typeof environmentDeletedEnvironment>;

/**
 * Zod schema for mapping API responses to the EnvironmentDeletedEnvironment application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const environmentDeletedEnvironmentResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      uid: data['uid'],
    }));
});

/**
 * Zod schema for mapping the EnvironmentDeletedEnvironment application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const environmentDeletedEnvironmentRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      uid: data['uid'],
    }));
});
