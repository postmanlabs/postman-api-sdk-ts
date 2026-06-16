import { z } from 'zod';

/**
 * Zod schema for the RemoveFromWorkspace model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const removeFromWorkspace = z.lazy(() => {
  return z.object({
    userIds: z
      .array(z.string())
      .min(1)
      .refine((items) => new Set(items.map((item) => JSON.stringify(item))).size === items.length, {
        message: 'Array items must be unique',
      }),
  });
});

/**
 * The target on which to perform the action.
 * @typedef  {RemoveFromWorkspace} removeFromWorkspace - The target on which to perform the action. - The target on which to perform the action.
 * @property {string[]} - A list of partner user IDs to remove from the Partner Workspace.
 */
export type RemoveFromWorkspace = z.infer<typeof removeFromWorkspace>;

/**
 * Zod schema for mapping API responses to the RemoveFromWorkspace application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removeFromWorkspaceResponse = z.lazy(() => {
  return z
    .object({
      userIds: z
        .array(z.string())
        .min(1)
        .refine(
          (items) => new Set(items.map((item) => JSON.stringify(item))).size === items.length,
          { message: 'Array items must be unique' },
        ),
    })
    .transform((data) => ({
      userIds: data['userIds'],
    }));
});

/**
 * Zod schema for mapping the RemoveFromWorkspace application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removeFromWorkspaceRequest = z.lazy(() => {
  return z
    .object({
      userIds: z
        .array(z.string())
        .min(1)
        .refine(
          (items) => new Set(items.map((item) => JSON.stringify(item))).size === items.length,
          { message: 'Array items must be unique' },
        ),
    })
    .transform((data) => ({
      userIds: data['userIds'],
    }));
});
