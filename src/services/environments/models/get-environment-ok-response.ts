import { z } from 'zod';
import {
  GetEnvironmentInfo,
  getEnvironmentInfo,
  getEnvironmentInfoRequest,
  getEnvironmentInfoResponse,
} from './get-environment-info';

/**
 * Zod schema for the GetEnvironmentOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getEnvironmentOkResponse = z.lazy(() => {
  return z.object({
    environment: getEnvironmentInfo.optional(),
  });
});

/**
 *
 * @typedef  {GetEnvironmentOkResponse} getEnvironmentOkResponse
 * @property {GetEnvironmentInfo} - Information about the environment.
 */
export type GetEnvironmentOkResponse = z.infer<typeof getEnvironmentOkResponse>;

/**
 * Zod schema for mapping API responses to the GetEnvironmentOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getEnvironmentOkResponseResponse = z.lazy(() => {
  return z
    .object({
      environment: getEnvironmentInfoResponse.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});

/**
 * Zod schema for mapping the GetEnvironmentOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getEnvironmentOkResponseRequest = z.lazy(() => {
  return z
    .object({
      environment: getEnvironmentInfoRequest.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});
