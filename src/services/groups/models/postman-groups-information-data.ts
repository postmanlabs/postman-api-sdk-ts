import { z } from 'zod';

/**
 * Zod schema for the PostmanGroupsInformationData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const postmanGroupsInformationData = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    teamId: z.number().optional(),
    name: z.string().optional(),
    summary: z.string().optional(),
    createdBy: z.number().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    members: z.array(z.number()).optional(),
    roles: z.array(z.string()).optional(),
  });
});

/**
 * Information about the group.
 * @typedef {PostmanGroupsInformationData} postmanGroupsInformationData
 * @property {number} id - The group's ID.
 * @property {number} teamId - The group's Postman team ID.
 * @property {string} name - The group's name.
 * @property {string} summary - The group's summary.
 * @property {number} createdBy - The ID of ther user who created the group.
 * @property {string} createdAt - The date and time at which the group was created.
 * @property {string} updatedAt - The date and time at which the group was updated.
 * @property {number[]} members - The group members' IDs.
 * @property {string[]} roles - The group's roles.
 */
export type PostmanGroupsInformationData = z.infer<typeof postmanGroupsInformationData>;

/**
 * Zod schema for mapping API responses to the PostmanGroupsInformationData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postmanGroupsInformationDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      teamId: z.number().optional(),
      name: z.string().optional(),
      summary: z.string().optional(),
      createdBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      members: z.array(z.number()).optional(),
      roles: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      teamId: data['teamId'],
      name: data['name'],
      summary: data['summary'],
      createdBy: data['createdBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      members: data['members'],
      roles: data['roles'],
    }));
});

/**
 * Zod schema for mapping the PostmanGroupsInformationData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postmanGroupsInformationDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      teamId: z.number().optional(),
      name: z.string().optional(),
      summary: z.string().optional(),
      createdBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      members: z.array(z.number()).optional(),
      roles: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      teamId: data['teamId'],
      name: data['name'],
      summary: data['summary'],
      createdBy: data['createdBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      members: data['members'],
      roles: data['roles'],
    }));
});
