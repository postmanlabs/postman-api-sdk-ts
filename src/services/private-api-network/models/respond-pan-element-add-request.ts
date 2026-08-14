import { z } from 'zod';
import {
  requestApproved,
  requestApprovedRequest,
  requestApprovedResponse,
} from './request-approved';
import { requestDenied, requestDeniedRequest, requestDeniedResponse } from './request-denied';

/**
 * Zod schema for the RespondPanElementAddRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const respondPanElementAddRequest = z.lazy(() => {
  return z.union([requestApproved, requestDenied]);
});

/**
 * @typedef {RespondPanElementAddRequest} respondPanElementAddRequest
 */
export type RespondPanElementAddRequest = z.infer<typeof respondPanElementAddRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const respondPanElementAddRequestResponse = z.lazy(() => {
  return z.union([requestApprovedResponse, requestDeniedResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const respondPanElementAddRequestRequest = z.lazy(() => {
  return z.union([requestApprovedRequest, requestDeniedRequest]);
});
