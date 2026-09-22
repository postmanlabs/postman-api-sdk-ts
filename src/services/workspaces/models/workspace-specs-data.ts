import { z } from 'zod';

/**
 * Zod schema for the WorkspaceSpecsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceSpecsData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    uid: z.string().optional(),
  });
});

/**
 * Information about the API specification.
 * @typedef {WorkspaceSpecsData} workspaceSpecsData
 * @property {string} id - The API specification's ID.
 * @property {string} name - The API specification's name.
 * @property {string} uid - The API specification's unique ID.
 */
export type WorkspaceSpecsData = z.infer<typeof workspaceSpecsData>;

/**
 * Zod schema for mapping API responses to the WorkspaceSpecsData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceSpecsDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      uid: data['uid'],
    }));
});

/**
 * Zod schema for mapping the WorkspaceSpecsData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceSpecsDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      uid: data['uid'],
    }));
});
