import { z } from 'zod';
import {
  CreateEnvironmentEnvironmentValues,
  createEnvironmentEnvironmentValues,
  createEnvironmentEnvironmentValuesRequest,
  createEnvironmentEnvironmentValuesResponse,
} from './create-environment-environment-values';

/**
 * Zod schema for the CreateEnvironmentEnvironment model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createEnvironmentEnvironment = z.lazy(() => {
  return z.object({
    name: z.string(),
    values: z.array(createEnvironmentEnvironmentValues).optional(),
  });
});

/**
 * Information about the environment.
 * @typedef {CreateEnvironmentEnvironment} createEnvironmentEnvironment
 * @property {string} name - The environment's name.
 * @property {CreateEnvironmentEnvironmentValues[]} values - Information about the environment's variables.
 */
export type CreateEnvironmentEnvironment = z.infer<typeof createEnvironmentEnvironment>;

/**
 * Zod schema for mapping API responses to the CreateEnvironmentEnvironment application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createEnvironmentEnvironmentResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      values: z.array(createEnvironmentEnvironmentValuesResponse).optional(),
    })
    .transform((data) => ({
      name: data['name'],
      values: data['values'],
    }));
});

/**
 * Zod schema for mapping the CreateEnvironmentEnvironment application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createEnvironmentEnvironmentRequest = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      values: z.array(createEnvironmentEnvironmentValuesRequest).optional(),
    })
    .transform((data) => ({
      name: data['name'],
      values: data['values'],
    }));
});
