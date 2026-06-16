import { z } from 'zod';

/**
 * Zod schema for the WorkspaceMocks model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceMocks = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    uid: z.string().optional(),
    deactivated: z.boolean().optional(),
  });
});

/**
 * Information about the mock server.
 * @typedef  {WorkspaceMocks} workspaceMocks - Information about the mock server. - Information about the mock server.
 * @property {string} - The mock server's ID.
 * @property {string} - The mock server's name.
 * @property {string} - The mock server's unique ID.
 * @property {boolean} - If true, the mock server is not active. Mock servers deactivate when a linked collection or environment is deleted.
 */
export type WorkspaceMocks = z.infer<typeof workspaceMocks>;

/**
 * Zod schema for mapping API responses to the WorkspaceMocks application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceMocksResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      uid: z.string().optional(),
      deactivated: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      uid: data['uid'],
      deactivated: data['deactivated'],
    }));
});

/**
 * Zod schema for mapping the WorkspaceMocks application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceMocksRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      uid: z.string().optional(),
      deactivated: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      uid: data['uid'],
      deactivated: data['deactivated'],
    }));
});
