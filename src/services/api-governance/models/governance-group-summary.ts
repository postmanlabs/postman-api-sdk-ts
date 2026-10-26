import { z } from 'zod';

/**
 * Zod schema for the GovernanceGroupSummary model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const governanceGroupSummary = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    description: z.string().optional(),
    type: z.string().optional(),
    createdBy: z.string().optional(),
    updatedBy: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
  });
});

/**
 * Information about a governance group.
 * @typedef {GovernanceGroupSummary} governanceGroupSummary
 * @property {string} id - The governance group's ID.
 * @property {string} name - The governance group's name.
 * @property {string} description - The governance group's description.
 * @property {GovernanceGroupSummaryType} type - The governance group type:
- `system` — Groups managed by Postman (for example, the default group that applies to all workspaces) and can't be updated or deleted.
- `custom` — Groups created and managed by your team.

 * @property {string} createdBy - The ID of the user who created the governance group.
 * @property {string} updatedBy - The ID of the user who last updated the governance group.
 * @property {string} createdAt - The date and time at which the governance group was created.
 * @property {string} updatedAt - The date and time at which the governance group was last updated.
 */
export type GovernanceGroupSummary = z.infer<typeof governanceGroupSummary>;

/**
 * Zod schema for mapping API responses to the GovernanceGroupSummary application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const governanceGroupSummaryResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      description: z.string().optional(),
      type: z.string().optional(),
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      description: data['description'],
      type: data['type'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});

/**
 * Zod schema for mapping the GovernanceGroupSummary application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const governanceGroupSummaryRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      description: z.string().optional(),
      type: z.string().optional(),
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      description: data['description'],
      type: data['type'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});
