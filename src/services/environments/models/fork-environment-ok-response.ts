import { z } from 'zod';
import {
  SuccessfulResponseEnvironment1,
  successfulResponseEnvironment1,
  successfulResponseEnvironment1Request,
  successfulResponseEnvironment1Response,
} from './successful-response-environment-1';

/**
 * Zod schema for the ForkEnvironmentOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const forkEnvironmentOkResponse = z.lazy(() => {
  return z.object({
    environment: successfulResponseEnvironment1.optional(),
  });
});

/**
 *
 * @typedef  {ForkEnvironmentOkResponse} forkEnvironmentOkResponse
 * @property {SuccessfulResponseEnvironment1} - Information about the forked environment.
 */
export type ForkEnvironmentOkResponse = z.infer<typeof forkEnvironmentOkResponse>;

/**
 * Zod schema for mapping API responses to the ForkEnvironmentOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const forkEnvironmentOkResponseResponse = z.lazy(() => {
  return z
    .object({
      environment: successfulResponseEnvironment1Response.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});

/**
 * Zod schema for mapping the ForkEnvironmentOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const forkEnvironmentOkResponseRequest = z.lazy(() => {
  return z
    .object({
      environment: successfulResponseEnvironment1Request.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});
