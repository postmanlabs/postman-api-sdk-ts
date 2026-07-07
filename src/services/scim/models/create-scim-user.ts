import { z } from 'zod';
import {
  CreateScimUserName,
  createScimUserName,
  createScimUserNameRequest,
  createScimUserNameResponse,
} from './create-scim-user-name';

/**
 * Zod schema for the CreateScimUser model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createScimUser = z.lazy(() => {
  return z.object({
    schemas: z.array(z.string()).optional(),
    userName: z.string().optional(),
    active: z.boolean().optional(),
    externalId: z.string().optional(),
    groups: z.array(z.string()).optional(),
    locale: z.string().optional(),
    name: createScimUserName.optional(),
  });
});

/**
 *
 * @typedef  {CreateScimUser} createScimUser
 * @property {string[]} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {string} - The user's username.
 * @property {boolean} - If true, activates the user. This lets them authenticate in to your Postman team.
 * @property {string} - The user's external ID.
 * @property {string[]} - A list of groups to assign the user to.
 * @property {string} - The user's [IETF language tag](https://datatracker.ietf.org/doc/html/rfc5646).
 * @property {CreateScimUserName} - Information about the user's name.
 */
export type CreateScimUser = z.infer<typeof createScimUser>;

/**
 * Zod schema for mapping API responses to the CreateScimUser application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createScimUserResponse = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      userName: z.string().optional(),
      active: z.boolean().optional(),
      externalId: z.string().optional(),
      groups: z.array(z.string()).optional(),
      locale: z.string().optional(),
      name: createScimUserNameResponse.optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      userName: data['userName'],
      active: data['active'],
      externalId: data['externalId'],
      groups: data['groups'],
      locale: data['locale'],
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the CreateScimUser application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createScimUserRequest = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      userName: z.string().optional(),
      active: z.boolean().optional(),
      externalId: z.string().optional(),
      groups: z.array(z.string()).optional(),
      locale: z.string().optional(),
      name: createScimUserNameRequest.optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      userName: data['userName'],
      active: data['active'],
      externalId: data['externalId'],
      groups: data['groups'],
      locale: data['locale'],
      name: data['name'],
    }));
});
