import { z } from 'zod';
import {
  EnvironmentUpdatedEnvironment,
  environmentUpdatedEnvironment,
  environmentUpdatedEnvironmentRequest,
  environmentUpdatedEnvironmentResponse,
} from './environment-updated-environment';

/**
 * Zod schema for the PutEnvironmentOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const putEnvironmentOkResponse = z.lazy(() => {
  return z.object({
    environment: environmentUpdatedEnvironment.optional(),
  });
});

/**
 *
 * @typedef  {PutEnvironmentOkResponse} putEnvironmentOkResponse
 * @property {EnvironmentUpdatedEnvironment} - Information about the environment.
 */
export type PutEnvironmentOkResponse = z.infer<typeof putEnvironmentOkResponse>;

/**
 * Zod schema for mapping API responses to the PutEnvironmentOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const putEnvironmentOkResponseResponse = z.lazy(() => {
  return z
    .object({
      environment: environmentUpdatedEnvironmentResponse.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});

/**
 * Zod schema for mapping the PutEnvironmentOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const putEnvironmentOkResponseRequest = z.lazy(() => {
  return z
    .object({
      environment: environmentUpdatedEnvironmentRequest.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});
