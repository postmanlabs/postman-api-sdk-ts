import { z } from 'zod';

/**
 * Zod schema for the UpdateApiVersion model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateApiVersion = z.lazy(() => {
  return z.object({
    name: z.string(),
    releaseNotes: z.string().optional(),
  });
});

/**
 * Information about the API version.
 * @typedef  {UpdateApiVersion} updateApiVersion - Information about the API version. - Information about the API version.
 * @property {string} - The version's name.
 * @property {string} - The version's Markdown-supported release notes.
 */
export type UpdateApiVersion = z.infer<typeof updateApiVersion>;

/**
 * Zod schema for mapping API responses to the UpdateApiVersion application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateApiVersionResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      releaseNotes: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      releaseNotes: data['releaseNotes'],
    }));
});

/**
 * Zod schema for mapping the UpdateApiVersion application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateApiVersionRequest = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      releaseNotes: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      releaseNotes: data['releaseNotes'],
    }));
});
