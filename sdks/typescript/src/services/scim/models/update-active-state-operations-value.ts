import { z } from 'zod';

/**
 * Zod schema for the UpdateActiveStateOperationsValue model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateActiveStateOperationsValue = z.lazy(() => {
  return z.object({
    active: z.boolean().optional(),
  });
});

/**
 * The performed operation's value.
 * @typedef  {UpdateActiveStateOperationsValue} updateActiveStateOperationsValue - The performed operation's value. - The performed operation's value.
 * @property {boolean} - Sets the user's `active` state:
- `true` — Activates the user. This lets them authenticate in to your Postman team.
- `false` — Removes the user from your Postman team and deactivates the account. This blocks the user from authenticating in to Postman.

 */
export type UpdateActiveStateOperationsValue = z.infer<typeof updateActiveStateOperationsValue>;

/**
 * Zod schema for mapping API responses to the UpdateActiveStateOperationsValue application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateActiveStateOperationsValueResponse = z.lazy(() => {
  return z
    .object({
      active: z.boolean().optional(),
    })
    .transform((data) => ({
      active: data['active'],
    }));
});

/**
 * Zod schema for mapping the UpdateActiveStateOperationsValue application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateActiveStateOperationsValueRequest = z.lazy(() => {
  return z
    .object({
      active: z.boolean().optional(),
    })
    .transform((data) => ({
      active: data['active'],
    }));
});
