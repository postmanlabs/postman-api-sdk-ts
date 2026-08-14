import { z } from 'zod';
import {
  ReplaceEnvironmentDataEnvironmentValues,
  replaceEnvironmentDataEnvironmentValues,
  replaceEnvironmentDataEnvironmentValuesRequest,
  replaceEnvironmentDataEnvironmentValuesResponse,
} from './replace-environment-data-environment-values';

/**
 * Zod schema for the ReplaceEnvironmentDataEnvironment model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const replaceEnvironmentDataEnvironment = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    values: z.array(replaceEnvironmentDataEnvironmentValues).optional(),
  });
});

/**
 * Information about the environment.
 * @typedef {ReplaceEnvironmentDataEnvironment} replaceEnvironmentDataEnvironment
 * @property {string} name - The environment's name.
 * @property {ReplaceEnvironmentDataEnvironmentValues[]} values - Information about the environment's variables.
 */
export type ReplaceEnvironmentDataEnvironment = z.infer<typeof replaceEnvironmentDataEnvironment>;

/**
 * Zod schema for mapping API responses to the ReplaceEnvironmentDataEnvironment application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const replaceEnvironmentDataEnvironmentResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      values: z.array(replaceEnvironmentDataEnvironmentValuesResponse).optional(),
    })
    .transform((data) => ({
      name: data['name'],
      values: data['values'],
    }));
});

/**
 * Zod schema for mapping the ReplaceEnvironmentDataEnvironment application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const replaceEnvironmentDataEnvironmentRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      values: z.array(replaceEnvironmentDataEnvironmentValuesRequest).optional(),
    })
    .transform((data) => ({
      name: data['name'],
      values: data['values'],
    }));
});
