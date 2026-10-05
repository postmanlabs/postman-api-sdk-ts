import { z } from 'zod';

/**
 * Zod schema for the WorkspaceMocksData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceMocksData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    uid: z.string().optional(),
    deactivated: z.boolean().optional(),
  });
});

/**
 * Information about the mock server.
 * @typedef {WorkspaceMocksData} workspaceMocksData
 * @property {string} id - The mock server's ID.
 * @property {string} name - The mock server's name.
 * @property {string} uid - The mock server's unique ID.
 * @property {boolean} deactivated - If true, the mock server is not active. Mock servers deactivate when a linked collection or environment is deleted.
 */
export type WorkspaceMocksData = z.infer<typeof workspaceMocksData>;

/**
 * Zod schema for mapping API responses to the WorkspaceMocksData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceMocksDataResponse = z.lazy(() => {
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
 * Zod schema for mapping the WorkspaceMocksData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceMocksDataRequest = z.lazy(() => {
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
