import { z } from 'zod';
import {
  CreateEnvironmentEnvironment,
  createEnvironmentEnvironment,
  createEnvironmentEnvironmentRequest,
  createEnvironmentEnvironmentResponse,
} from './create-environment-environment';

/**
 * Zod schema for the CreateEnvironment model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createEnvironment = z.lazy(() => {
  return z.object({
    environment: createEnvironmentEnvironment.optional(),
  });
});

/**
 *
 * @typedef  {CreateEnvironment} createEnvironment
 * @property {CreateEnvironmentEnvironment} - Information about the environment.
 */
export type CreateEnvironment = z.infer<typeof createEnvironment>;

/**
 * Zod schema for mapping API responses to the CreateEnvironment application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createEnvironmentResponse = z.lazy(() => {
  return z
    .object({
      environment: createEnvironmentEnvironmentResponse.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});

/**
 * Zod schema for mapping the CreateEnvironment application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createEnvironmentRequest = z.lazy(() => {
  return z
    .object({
      environment: createEnvironmentEnvironmentRequest.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});
