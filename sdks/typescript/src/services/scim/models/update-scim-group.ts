import { z } from 'zod';
import {
  UpdateScimGroupOperations,
  updateScimGroupOperations,
  updateScimGroupOperationsRequest,
  updateScimGroupOperationsResponse,
} from './update-scim-group-operations';

/**
 * Zod schema for the UpdateScimGroup model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateScimGroup = z.lazy(() => {
  return z.object({
    schemas: z.array(z.string()).optional(),
    operations: z.array(updateScimGroupOperations).optional(),
  });
});

/**
 *
 * @typedef  {UpdateScimGroup} updateScimGroup
 * @property {string[]} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {UpdateScimGroupOperations[]} - Information about the group update operation.
 */
export type UpdateScimGroup = z.infer<typeof updateScimGroup>;

/**
 * Zod schema for mapping API responses to the UpdateScimGroup application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateScimGroupResponse = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      Operations: z.array(updateScimGroupOperationsResponse).optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      operations: data['Operations'],
    }));
});

/**
 * Zod schema for mapping the UpdateScimGroup application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateScimGroupRequest = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      operations: z.array(updateScimGroupOperationsRequest).optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      Operations: data['operations'],
    }));
});
