import { z } from 'zod';

/**
 * Zod schema for the DataUser model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const dataUser = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    username: z.string().optional(),
    isPartner: z.boolean().optional(),
    name: z.string().optional(),
  });
});

/**
 * Information about the user that performed the activity.
 * @typedef {DataUser} dataUser
 * @property {number} id - The user's ID.
 * @property {string} username - The user's Postman username.
 * @property {boolean} isPartner - If true, the user is a [Partner](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#partner-team-and-partner-workspace-roles) in the workspace.
 * @property {string} name - The user's name.
 */
export type DataUser = z.infer<typeof dataUser>;

/**
 * Zod schema for mapping API responses to the DataUser application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const dataUserResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      username: z.string().optional(),
      isPartner: z.boolean().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      username: data['username'],
      isPartner: data['isPartner'],
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the DataUser application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const dataUserRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      username: z.string().optional(),
      isPartner: z.boolean().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      username: data['username'],
      isPartner: data['isPartner'],
      name: data['name'],
    }));
});
