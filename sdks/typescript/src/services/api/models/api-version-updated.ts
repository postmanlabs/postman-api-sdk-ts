import { z } from 'zod';

/**
 * Zod schema for the ApiVersionUpdated model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const apiVersionUpdated = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    releaseNotes: z.string().optional(),
  });
});

/**
 * Information about the API version.
 * @typedef  {ApiVersionUpdated} apiVersionUpdated - Information about the API version. - Information about the API version.
 * @property {string} - The version's ID.
 * @property {string} - The version's name.
 * @property {string} - The date and time at which the version was created.
 * @property {string} - The date and time at which the version was last updated.
 * @property {string} - The version's release notes.
 */
export type ApiVersionUpdated = z.infer<typeof apiVersionUpdated>;

/**
 * Zod schema for mapping API responses to the ApiVersionUpdated application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiVersionUpdatedResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      releaseNotes: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      releaseNotes: data['releaseNotes'],
    }));
});

/**
 * Zod schema for mapping the ApiVersionUpdated application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiVersionUpdatedRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      releaseNotes: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      releaseNotes: data['releaseNotes'],
    }));
});
