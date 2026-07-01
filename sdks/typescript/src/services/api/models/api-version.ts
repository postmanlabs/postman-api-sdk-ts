import { z } from 'zod';
import { Version, version, versionRequest, versionResponse } from './version';

/**
 * Zod schema for the ApiVersion model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const apiVersion = z.lazy(() => {
  return z.object({
    version: version.optional(),
  });
});

/**
 *
 * @typedef  {ApiVersion} apiVersion
 * @property {Version} - Information about the API version.
 */
export type ApiVersion = z.infer<typeof apiVersion>;

/**
 * Zod schema for mapping API responses to the ApiVersion application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiVersionResponse = z.lazy(() => {
  return z
    .object({
      version: versionResponse.optional(),
    })
    .transform((data) => ({
      version: data['version'],
    }));
});

/**
 * Zod schema for mapping the ApiVersion application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiVersionRequest = z.lazy(() => {
  return z
    .object({
      version: versionRequest.optional(),
    })
    .transform((data) => ({
      version: data['version'],
    }));
});
