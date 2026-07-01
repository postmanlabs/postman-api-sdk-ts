import { z } from 'zod';
import {
  UpdateActiveStateOperations,
  updateActiveStateOperations,
  updateActiveStateOperationsRequest,
  updateActiveStateOperationsResponse,
} from './update-active-state-operations';

/**
 * Zod schema for the UpdateActiveState model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateActiveState = z.lazy(() => {
  return z.object({
    schemas: z.array(z.string()).optional(),
    operations: z.array(updateActiveStateOperations).optional(),
  });
});

/**
 *
 * @typedef  {UpdateActiveState} updateActiveState
 * @property {string[]} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {UpdateActiveStateOperations[]} - Information about the user update operation.
 */
export type UpdateActiveState = z.infer<typeof updateActiveState>;

/**
 * Zod schema for mapping API responses to the UpdateActiveState application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateActiveStateResponse = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      Operations: z.array(updateActiveStateOperationsResponse).optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      operations: data['Operations'],
    }));
});

/**
 * Zod schema for mapping the UpdateActiveState application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateActiveStateRequest = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      operations: z.array(updateActiveStateOperationsRequest).optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      Operations: data['operations'],
    }));
});
