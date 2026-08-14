import { z } from 'zod';
import {
  EnvironmentDeletedEnvironment,
  environmentDeletedEnvironment,
  environmentDeletedEnvironmentRequest,
  environmentDeletedEnvironmentResponse,
} from './environment-deleted-environment';

/**
 * Zod schema for the EnvironmentDeleted model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const environmentDeleted = z.lazy(() => {
  return z.object({
    environment: environmentDeletedEnvironment.optional(),
  });
});

/**
 * @typedef {EnvironmentDeleted} environmentDeleted
 * @property {EnvironmentDeletedEnvironment} environment - Information about the environment.
 */
export type EnvironmentDeleted = z.infer<typeof environmentDeleted>;

/**
 * Zod schema for mapping API responses to the EnvironmentDeleted application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const environmentDeletedResponse = z.lazy(() => {
  return z
    .object({
      environment: environmentDeletedEnvironmentResponse.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});

/**
 * Zod schema for mapping the EnvironmentDeleted application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const environmentDeletedRequest = z.lazy(() => {
  return z
    .object({
      environment: environmentDeletedEnvironmentRequest.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});
