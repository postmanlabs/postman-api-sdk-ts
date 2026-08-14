import { z } from 'zod';

/**
 * Zod schema for the EnvironmentCreatedEnvironment model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const environmentCreatedEnvironment = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    uid: z.string().optional(),
  });
});

/**
 * Information about the environment.
 * @typedef {EnvironmentCreatedEnvironment} environmentCreatedEnvironment
 * @property {string} id - The environment's ID.
 * @property {string} name - The environment's name.
 * @property {string} uid - The environment's unique ID.
 */
export type EnvironmentCreatedEnvironment = z.infer<typeof environmentCreatedEnvironment>;

/**
 * Zod schema for mapping API responses to the EnvironmentCreatedEnvironment application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const environmentCreatedEnvironmentResponse = z.lazy(() => {
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
 * Zod schema for mapping the EnvironmentCreatedEnvironment application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const environmentCreatedEnvironmentRequest = z.lazy(() => {
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
