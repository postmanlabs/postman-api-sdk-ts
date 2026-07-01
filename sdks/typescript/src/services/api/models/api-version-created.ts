import { z } from 'zod';

/**
 * Zod schema for the ApiVersionCreated model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const apiVersionCreated = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    name: z.string().optional(),
    releaseNotes: z.string().optional(),
  });
});

/**
 *
 * @typedef  {ApiVersionCreated} apiVersionCreated
 * @property {string} - The version's ID.
 * @property {string} - The date and time at which the version was created.
 * @property {string} - The date and time at which the version was last updated.
 * @property {string} - The version's name.
 * @property {string} - Information about the API version release. For example, changelog notes.
 */
export type ApiVersionCreated = z.infer<typeof apiVersionCreated>;

/**
 * Zod schema for mapping API responses to the ApiVersionCreated application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiVersionCreatedResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      name: z.string().optional(),
      releaseNotes: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      name: data['name'],
      releaseNotes: data['releaseNotes'],
    }));
});

/**
 * Zod schema for mapping the ApiVersionCreated application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiVersionCreatedRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      name: z.string().optional(),
      releaseNotes: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      name: data['name'],
      releaseNotes: data['releaseNotes'],
    }));
});
