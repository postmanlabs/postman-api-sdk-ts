import { z } from 'zod';
import {
  SuccessfulResponseUser,
  successfulResponseUser,
  successfulResponseUserRequest,
  successfulResponseUserResponse,
} from './successful-response-user';
import { Operations, operations, operationsRequest, operationsResponse } from './operations';

/**
 * Zod schema for the GetAuthenticatedUserOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAuthenticatedUserOkResponse = z.lazy(() => {
  return z.object({
    user: successfulResponseUser.optional(),
    operations: z.array(operations).optional(),
  });
});

/**
 * @typedef {GetAuthenticatedUserOkResponse} getAuthenticatedUserOkResponse
 * @property {SuccessfulResponseUser} user - Information about the authenticated user.
 * @property {Operations[]} operations - Information about operations and their usage limits. This object does not return for users with the [Guest and Partner role](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles).
 */
export type GetAuthenticatedUserOkResponse = z.infer<typeof getAuthenticatedUserOkResponse>;

/**
 * Zod schema for mapping API responses to the GetAuthenticatedUserOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAuthenticatedUserOkResponseResponse = z.lazy(() => {
  return z
    .object({
      user: successfulResponseUserResponse.optional(),
      operations: z.array(operationsResponse).optional(),
    })
    .transform((data) => ({
      user: data['user'],
      operations: data['operations'],
    }));
});

/**
 * Zod schema for mapping the GetAuthenticatedUserOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAuthenticatedUserOkResponseRequest = z.lazy(() => {
  return z
    .object({
      user: successfulResponseUserRequest.optional(),
      operations: z.array(operationsRequest).optional(),
    })
    .transform((data) => ({
      user: data['user'],
      operations: data['operations'],
    }));
});
