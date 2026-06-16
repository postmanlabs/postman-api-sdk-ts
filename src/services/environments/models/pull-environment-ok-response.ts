import { z } from 'zod';
import {
  SuccessfulResponseEnvironment3,
  successfulResponseEnvironment3,
  successfulResponseEnvironment3Request,
  successfulResponseEnvironment3Response,
} from './successful-response-environment-3';

/**
 * Zod schema for the PullEnvironmentOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const pullEnvironmentOkResponse = z.lazy(() => {
  return z.object({
    environment: successfulResponseEnvironment3.optional(),
  });
});

/**
 *
 * @typedef  {PullEnvironmentOkResponse} pullEnvironmentOkResponse
 * @property {SuccessfulResponseEnvironment3} - Information about the merged environment.
 */
export type PullEnvironmentOkResponse = z.infer<typeof pullEnvironmentOkResponse>;

/**
 * Zod schema for mapping API responses to the PullEnvironmentOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pullEnvironmentOkResponseResponse = z.lazy(() => {
  return z
    .object({
      environment: successfulResponseEnvironment3Response.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});

/**
 * Zod schema for mapping the PullEnvironmentOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pullEnvironmentOkResponseRequest = z.lazy(() => {
  return z
    .object({
      environment: successfulResponseEnvironment3Request.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});
