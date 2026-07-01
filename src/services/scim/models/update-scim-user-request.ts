import { z } from 'zod';
import {
  UpdateScimUserName,
  updateScimUserName,
  updateScimUserNameRequest,
  updateScimUserNameResponse,
} from './update-scim-user-name';

/**
 * Zod schema for the UpdateScimUserRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateScimUserRequest = z.lazy(() => {
  return z.object({
    schemas: z.array(z.string()).optional(),
    userName: z.string().optional(),
    name: updateScimUserName.optional(),
    active: z.boolean().optional(),
  });
});

/**
 * 
 * @typedef  {UpdateScimUserRequest} updateScimUserRequest   
 * @property {string[]} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {string} - The user's email address.
 * @property {UpdateScimUserName} - Information about the user's name.
 * @property {boolean} - Sets the user's `active` state:
- `true` — Activates the user. This lets them authenticate in to your Postman team.
- `false` — Removes the user from your Postman team and deactivates the account. This blocks the user from authenticating in to Postman.

 */
export type UpdateScimUserRequest = z.infer<typeof updateScimUserRequest>;

/**
 * Zod schema for mapping API responses to the UpdateScimUserRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateScimUserRequestResponse = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      userName: z.string().optional(),
      name: updateScimUserNameResponse.optional(),
      active: z.boolean().optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      userName: data['userName'],
      name: data['name'],
      active: data['active'],
    }));
});

/**
 * Zod schema for mapping the UpdateScimUserRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateScimUserRequestRequest = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      userName: z.string().optional(),
      name: updateScimUserNameRequest.optional(),
      active: z.boolean().optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      userName: data['userName'],
      name: data['name'],
      active: data['active'],
    }));
});
