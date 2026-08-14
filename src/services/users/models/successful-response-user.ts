import { z } from 'zod';

/**
 * Zod schema for the SuccessfulResponseUser model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseUser = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    sub: z.string().optional(),
    username: z.string().optional(),
    email: z.string().optional(),
    fullName: z.string().optional(),
    avatar: z.string().optional().nullable(),
    isPublic: z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    teamId: z.number().optional(),
    teamName: z.string().optional(),
    teamDomain: z.string().optional(),
    roles: z.array(z.string()).optional(),
  });
});

/**
 * Information about the authenticated user.
 * @typedef {SuccessfulResponseUser} successfulResponseUser
 * @property {number} id - The user's Postman ID.
 * @property {string} sub - The authenticated user's ID. This ID is unique to the user and isn't associated with any Postman teams. Can return in UUID or ID format.
 * @property {string} username - The user's username.
 * @property {string} email - The user's email address.
 * @property {string} fullName - The user's full name.
 * @property {string} avatar - The user's avatar image URL.
 * @property {boolean} isPublic - If true, the user's information is public and visible to all users.
 * @property {boolean} emailVerified - If true, the user email address is verified by Postman.
 * @property {number} teamId - The team ID the user is assigned to. This returns a `0` value if the user is not assigned to a team.
 * @property {string} teamName - The name of the team the user is assigned to.
 * @property {string} teamDomain - The team's Postman domain ID.
 * @property {string[]} roles - A list of the user's assigned [roles](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles).
 */
export type SuccessfulResponseUser = z.infer<typeof successfulResponseUser>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseUser application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseUserResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      sub: z.string().optional(),
      username: z.string().optional(),
      email: z.string().optional(),
      fullName: z.string().optional(),
      avatar: z.string().optional().nullable(),
      isPublic: z.boolean().optional(),
      emailVerified: z.boolean().optional(),
      teamId: z.number().optional(),
      teamName: z.string().optional(),
      teamDomain: z.string().optional(),
      roles: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      sub: data['sub'],
      username: data['username'],
      email: data['email'],
      fullName: data['fullName'],
      avatar: data['avatar'],
      isPublic: data['isPublic'],
      emailVerified: data['emailVerified'],
      teamId: data['teamId'],
      teamName: data['teamName'],
      teamDomain: data['teamDomain'],
      roles: data['roles'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseUser application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseUserRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      sub: z.string().optional(),
      username: z.string().optional(),
      email: z.string().optional(),
      fullName: z.string().optional(),
      avatar: z.string().optional().nullable(),
      isPublic: z.boolean().optional(),
      emailVerified: z.boolean().optional(),
      teamId: z.number().optional(),
      teamName: z.string().optional(),
      teamDomain: z.string().optional(),
      roles: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      sub: data['sub'],
      username: data['username'],
      email: data['email'],
      fullName: data['fullName'],
      avatar: data['avatar'],
      isPublic: data['isPublic'],
      emailVerified: data['emailVerified'],
      teamId: data['teamId'],
      teamName: data['teamName'],
      teamDomain: data['teamDomain'],
      roles: data['roles'],
    }));
});
