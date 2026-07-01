import { z } from 'zod';
import {
  updateActiveState,
  updateActiveStateRequest,
  updateActiveStateResponse,
} from './update-active-state';
import { updateUsername, updateUsernameRequest, updateUsernameResponse } from './update-username';

/**
 * Zod schema for the UpdateScimUserPatchRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateScimUserPatchRequest = z.lazy(() => {
  return z.union([updateActiveState, updateUsername]);
});

/**
 *
 * @typedef  {UpdateScimUserPatchRequest} updateScimUserPatchRequest
 * @property {UpdateActiveState}
 * @property {UpdateUsername}
 */
export type UpdateScimUserPatchRequest = z.infer<typeof updateScimUserPatchRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateScimUserPatchRequestResponse = z.lazy(() => {
  return z.union([updateActiveStateResponse, updateUsernameResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updateScimUserPatchRequestRequest = z.lazy(() => {
  return z.union([updateActiveStateRequest, updateUsernameRequest]);
});
