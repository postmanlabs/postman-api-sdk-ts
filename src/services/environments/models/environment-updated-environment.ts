import { z } from 'zod';

/**
 * Zod schema for the EnvironmentUpdatedEnvironment model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const environmentUpdatedEnvironment = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    uid: z.string().optional(),
  });
});

/**
 * Information about the environment.
 * @typedef  {EnvironmentUpdatedEnvironment} environmentUpdatedEnvironment - Information about the environment. - Information about the environment.
 * @property {string} - The environment's ID.
 * @property {string} - The environment's name.
 * @property {string} - The environment's unique ID.
 */
export type EnvironmentUpdatedEnvironment = z.infer<typeof environmentUpdatedEnvironment>;

/**
 * Zod schema for mapping API responses to the EnvironmentUpdatedEnvironment application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const environmentUpdatedEnvironmentResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      uid: data['uid'],
    }));
});

/**
 * Zod schema for mapping the EnvironmentUpdatedEnvironment application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const environmentUpdatedEnvironmentRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      uid: data['uid'],
    }));
});
