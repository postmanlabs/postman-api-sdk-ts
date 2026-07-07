import { z } from 'zod';
import {
  UpdateUsernameOperations,
  updateUsernameOperations,
  updateUsernameOperationsRequest,
  updateUsernameOperationsResponse,
} from './update-username-operations';

/**
 * Zod schema for the UpdateUsername model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateUsername = z.lazy(() => {
  return z.object({
    schemas: z.array(z.string()).optional(),
    operations: z.array(updateUsernameOperations).optional(),
  });
});

/**
 *
 * @typedef  {UpdateUsername} updateUsername
 * @property {string[]} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {UpdateUsernameOperations[]} - Information about the user update operation.
 */
export type UpdateUsername = z.infer<typeof updateUsername>;

/**
 * Zod schema for mapping API responses to the UpdateUsername application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateUsernameResponse = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      Operations: z.array(updateUsernameOperationsResponse).optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      operations: data['Operations'],
    }));
});

/**
 * Zod schema for mapping the UpdateUsername application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateUsernameRequest = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      operations: z.array(updateUsernameOperationsRequest).optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      Operations: data['operations'],
    }));
});
