import { z } from 'zod';

/**
 * Zod schema for the TransferWorkspaceToTeamResponseObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const transferWorkspaceToTeamResponseObject = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    source: z.string().optional(),
    destination: z.string().optional(),
  });
});

/**
 * Information about the workspace transfer.
 * @typedef {TransferWorkspaceToTeamResponseObject} transferWorkspaceToTeamResponseObject
 * @property {string} id - The ID of the transferred workspace.
 * @property {string} source - The ID of the team the workspace was transferred away from.
 * @property {string} destination - The ID of the team that the workspace was transferred to.
 */
export type TransferWorkspaceToTeamResponseObject = z.infer<
  typeof transferWorkspaceToTeamResponseObject
>;

/**
 * Zod schema for mapping API responses to the TransferWorkspaceToTeamResponseObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const transferWorkspaceToTeamResponseObjectResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      source: z.string().optional(),
      destination: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      source: data['source'],
      destination: data['destination'],
    }));
});

/**
 * Zod schema for mapping the TransferWorkspaceToTeamResponseObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const transferWorkspaceToTeamResponseObjectRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      source: z.string().optional(),
      destination: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      source: data['source'],
      destination: data['destination'],
    }));
});
