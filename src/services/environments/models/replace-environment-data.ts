import { z } from 'zod';
import {
  ReplaceEnvironmentDataEnvironment,
  replaceEnvironmentDataEnvironment,
  replaceEnvironmentDataEnvironmentRequest,
  replaceEnvironmentDataEnvironmentResponse,
} from './replace-environment-data-environment';

/**
 * Zod schema for the ReplaceEnvironmentData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const replaceEnvironmentData = z.lazy(() => {
  return z.object({
    environment: replaceEnvironmentDataEnvironment.optional(),
  });
});

/**
 *
 * @typedef  {ReplaceEnvironmentData} replaceEnvironmentData
 * @property {ReplaceEnvironmentDataEnvironment} - Information about the environment.
 */
export type ReplaceEnvironmentData = z.infer<typeof replaceEnvironmentData>;

/**
 * Zod schema for mapping API responses to the ReplaceEnvironmentData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const replaceEnvironmentDataResponse = z.lazy(() => {
  return z
    .object({
      environment: replaceEnvironmentDataEnvironmentResponse.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});

/**
 * Zod schema for mapping the ReplaceEnvironmentData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const replaceEnvironmentDataRequest = z.lazy(() => {
  return z
    .object({
      environment: replaceEnvironmentDataEnvironmentRequest.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});
