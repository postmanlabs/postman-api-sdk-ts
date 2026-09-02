import { z } from 'zod';

/**
 * Zod schema for the ScimOperationsUsersActiveListValue model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimOperationsUsersActiveListValue = z.lazy(() => {
  return z.object({
    active: z.boolean().optional(),
  });
});

/**
 * The performed operation's value.
 * @typedef {ScimOperationsUsersActiveListValue} scimOperationsUsersActiveListValue
 * @property {boolean} active - Sets the user's `active` state:
- `true` — Activates the user. This lets them authenticate in to your Postman team.
- `false` — Removes the user from your Postman team and deactivates the account. This blocks the user from authenticating in to Postman.

 */
export type ScimOperationsUsersActiveListValue = z.infer<typeof scimOperationsUsersActiveListValue>;

/**
 * Zod schema for mapping API responses to the ScimOperationsUsersActiveListValue application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimOperationsUsersActiveListValueResponse = z.lazy(() => {
  return z
    .object({
      active: z.boolean().optional(),
    })
    .transform((data) => ({
      active: data['active'],
    }));
});

/**
 * Zod schema for mapping the ScimOperationsUsersActiveListValue application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimOperationsUsersActiveListValueRequest = z.lazy(() => {
  return z
    .object({
      active: z.boolean().optional(),
    })
    .transform((data) => ({
      active: data['active'],
    }));
});
