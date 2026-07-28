import { z } from 'zod';
import {
  EnvironmentCreatedEnvironment,
  environmentCreatedEnvironment,
  environmentCreatedEnvironmentRequest,
  environmentCreatedEnvironmentResponse,
} from './environment-created-environment';

/**
 * Zod schema for the EnvironmentCreated model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const environmentCreated = z.lazy(() => {
  return z.object({
    environment: environmentCreatedEnvironment.optional(),
  });
});

/**
 *
 * @typedef  {EnvironmentCreated} environmentCreated
 * @property {EnvironmentCreatedEnvironment} - Information about the environment.
 */
export type EnvironmentCreated = z.infer<typeof environmentCreated>;

/**
 * Zod schema for mapping API responses to the EnvironmentCreated application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const environmentCreatedResponse = z.lazy(() => {
  return z
    .object({
      environment: environmentCreatedEnvironmentResponse.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});

/**
 * Zod schema for mapping the EnvironmentCreated application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const environmentCreatedRequest = z.lazy(() => {
  return z
    .object({
      environment: environmentCreatedEnvironmentRequest.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});
