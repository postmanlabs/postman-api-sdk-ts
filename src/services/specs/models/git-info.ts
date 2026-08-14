import { z } from 'zod';

/**
 * Zod schema for the GitInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const gitInfo = z.lazy(() => {
  return z.object({
    path: z.string(),
  });
});

/**
 * Information about the connected remote Git mono-repo.
 * @typedef {GitInfo} gitInfo
 * @property {string} path - The directory path in the remote mono-repo containing the API's collections and definitions. This property expects an absolute path and only contains alphanumeric characters, slashes, hyphens, underscores, and periods. It cannot contain  path traversal sequences (\..\).
 */
export type GitInfo = z.infer<typeof gitInfo>;

/**
 * Zod schema for mapping API responses to the GitInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const gitInfoResponse = z.lazy(() => {
  return z
    .object({
      path: z.string(),
    })
    .transform((data) => ({
      path: data['path'],
    }));
});

/**
 * Zod schema for mapping the GitInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const gitInfoRequest = z.lazy(() => {
  return z
    .object({
      path: z.string(),
    })
    .transform((data) => ({
      path: data['path'],
    }));
});
