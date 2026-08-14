import { z } from 'zod';

/**
 * Zod schema for the WorkspaceUpdateCreatedByData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceUpdateCreatedByData = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    name: z.string().optional(),
    username: z.string().optional(),
  });
});

/**
 * Information about the user that created the workspace update.
 * @typedef {WorkspaceUpdateCreatedByData} workspaceUpdateCreatedByData
 * @property {number} id - The user ID of the user that created the workspace update.
 * @property {string} name - The display name of the user that created the workspace update.
 * @property {string} username - The username of the user that created the workspace update.
 */
export type WorkspaceUpdateCreatedByData = z.infer<typeof workspaceUpdateCreatedByData>;

/**
 * Zod schema for mapping API responses to the WorkspaceUpdateCreatedByData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceUpdateCreatedByDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      name: z.string().optional(),
      username: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      username: data['username'],
    }));
});

/**
 * Zod schema for mapping the WorkspaceUpdateCreatedByData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceUpdateCreatedByDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      name: z.string().optional(),
      username: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      username: data['username'],
    }));
});
