import { z } from 'zod';

/**
 * Zod schema for the BulkWorkspacesRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const bulkWorkspacesRequest = z.lazy(() => {
  return z.object({
    create: z.array(z.string()).optional(),
    delete: z.array(z.string()).optional(),
  });
});

/**
 * The workspaces to assign to and unassign from the governance group.
 * @typedef {BulkWorkspacesRequest} bulkWorkspacesRequest
 * @property {string[]} create - The IDs of the workspaces to assign to the group.
 * @property {string[]} delete - The IDs of the workspaces to unassign from the group.
 */
export type BulkWorkspacesRequest = z.infer<typeof bulkWorkspacesRequest>;

/**
 * Zod schema for mapping API responses to the BulkWorkspacesRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const bulkWorkspacesRequestResponse = z.lazy(() => {
  return z
    .object({
      create: z.array(z.string()).optional(),
      delete: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      create: data['create'],
      delete: data['delete'],
    }));
});

/**
 * Zod schema for mapping the BulkWorkspacesRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const bulkWorkspacesRequestRequest = z.lazy(() => {
  return z
    .object({
      create: z.array(z.string()).optional(),
      delete: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      create: data['create'],
      delete: data['delete'],
    }));
});
