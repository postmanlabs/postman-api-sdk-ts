import { z } from 'zod';

/**
 * Zod schema for the WorkspaceAssignmentSummary model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceAssignmentSummary = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
  });
});

/**
 * Information about a workspace assigned to a governance group.
 * @typedef {WorkspaceAssignmentSummary} workspaceAssignmentSummary
 * @property {string} id - The workspace's ID.
 */
export type WorkspaceAssignmentSummary = z.infer<typeof workspaceAssignmentSummary>;

/**
 * Zod schema for mapping API responses to the WorkspaceAssignmentSummary application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceAssignmentSummaryResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the WorkspaceAssignmentSummary application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceAssignmentSummaryRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
