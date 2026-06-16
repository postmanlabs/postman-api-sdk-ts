import { z } from 'zod';
import {
  SuccessfulResponseEnvironment2,
  successfulResponseEnvironment2,
  successfulResponseEnvironment2Request,
  successfulResponseEnvironment2Response,
} from './successful-response-environment-2';

/**
 * Zod schema for the MergeEnvironmentForkOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mergeEnvironmentForkOkResponse = z.lazy(() => {
  return z.object({
    environment: successfulResponseEnvironment2.optional(),
  });
});

/**
 *
 * @typedef  {MergeEnvironmentForkOkResponse} mergeEnvironmentForkOkResponse
 * @property {SuccessfulResponseEnvironment2} - Information about the merged environment.
 */
export type MergeEnvironmentForkOkResponse = z.infer<typeof mergeEnvironmentForkOkResponse>;

/**
 * Zod schema for mapping API responses to the MergeEnvironmentForkOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mergeEnvironmentForkOkResponseResponse = z.lazy(() => {
  return z
    .object({
      environment: successfulResponseEnvironment2Response.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});

/**
 * Zod schema for mapping the MergeEnvironmentForkOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mergeEnvironmentForkOkResponseRequest = z.lazy(() => {
  return z
    .object({
      environment: successfulResponseEnvironment2Request.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});
