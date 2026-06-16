import { z } from 'zod';

/**
 * Zod schema for the UserInformation model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const userInformation = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    name: z.string().optional(),
    username: z.string().optional(),
    email: z.string().optional(),
    roles: z.array(z.string()).optional(),
    joinedAt: z.string().optional(),
  });
});

/**
 * Information about the user.
 * @typedef  {UserInformation} userInformation - Information about the user. - Information about the user.
 * @property {number} - The user's ID.
 * @property {string} - The user's name.
 * @property {string} - The user's username.
 * @property {string} - The user's email address.
 * @property {string[]} - The user's roles.
 * @property {string} - The user's join date.
 */
export type UserInformation = z.infer<typeof userInformation>;

/**
 * Zod schema for mapping API responses to the UserInformation application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const userInformationResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      name: z.string().optional(),
      username: z.string().optional(),
      email: z.string().optional(),
      roles: z.array(z.string()).optional(),
      joinedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      username: data['username'],
      email: data['email'],
      roles: data['roles'],
      joinedAt: data['joinedAt'],
    }));
});

/**
 * Zod schema for mapping the UserInformation application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const userInformationRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      name: z.string().optional(),
      username: z.string().optional(),
      email: z.string().optional(),
      roles: z.array(z.string()).optional(),
      joinedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      username: data['username'],
      email: data['email'],
      roles: data['roles'],
      joinedAt: data['joinedAt'],
    }));
});
