import { z } from 'zod';

/**
 * Zod schema for the TransferWorkspaceToTeam model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const transferWorkspaceToTeam = z.lazy(() => {
  return z.object({
    destination: z.string(),
    source: z.string(),
  });
});

/**
 *
 * @typedef  {TransferWorkspaceToTeam} transferWorkspaceToTeam
 * @property {string} - The ID of the team to transfer the workspace to.
 * @property {string} - The ID of the team to transfer the workspace from.
 */
export type TransferWorkspaceToTeam = z.infer<typeof transferWorkspaceToTeam>;

/**
 * Zod schema for mapping API responses to the TransferWorkspaceToTeam application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const transferWorkspaceToTeamResponse1 = z.lazy(() => {
  return z
    .object({
      destination: z.string(),
      source: z.string(),
    })
    .transform((data) => ({
      destination: data['destination'],
      source: data['source'],
    }));
});

/**
 * Zod schema for mapping the TransferWorkspaceToTeam application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const transferWorkspaceToTeamRequest = z.lazy(() => {
  return z
    .object({
      destination: z.string(),
      source: z.string(),
    })
    .transform((data) => ({
      destination: data['destination'],
      source: data['source'],
    }));
});
