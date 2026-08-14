import { z } from 'zod';

/**
 * Zod schema for the SearchResourceWorkspacesData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchResourceWorkspacesData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
  });
});

/**
 * Information about the workspace containing the resource.
 * @typedef {SearchResourceWorkspacesData} searchResourceWorkspacesData
 * @property {string} id - The workspace's ID.
 * @property {string} name - The workspace's name.
 */
export type SearchResourceWorkspacesData = z.infer<typeof searchResourceWorkspacesData>;

/**
 * Zod schema for mapping API responses to the SearchResourceWorkspacesData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchResourceWorkspacesDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the SearchResourceWorkspacesData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchResourceWorkspacesDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});
