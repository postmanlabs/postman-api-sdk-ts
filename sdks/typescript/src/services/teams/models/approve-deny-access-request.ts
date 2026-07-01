import { z } from 'zod';
import {
  ApproveDenyAccessRequestAction,
  approveDenyAccessRequestAction,
} from './approve-deny-access-request-action';

/**
 * Zod schema for the ApproveDenyAccessRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const approveDenyAccessRequest = z.lazy(() => {
  return z.object({
    action: approveDenyAccessRequestAction,
  });
});

/**
 *
 * @typedef  {ApproveDenyAccessRequest} approveDenyAccessRequest
 * @property {ApproveDenyAccessRequestAction} - Whether to approve or deny the access request.
 */
export type ApproveDenyAccessRequest = z.infer<typeof approveDenyAccessRequest>;

/**
 * Zod schema for mapping API responses to the ApproveDenyAccessRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const approveDenyAccessRequestResponse1 = z.lazy(() => {
  return z
    .object({
      action: approveDenyAccessRequestAction,
    })
    .transform((data) => ({
      action: data['action'],
    }));
});

/**
 * Zod schema for mapping the ApproveDenyAccessRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const approveDenyAccessRequestRequest = z.lazy(() => {
  return z
    .object({
      action: approveDenyAccessRequestAction,
    })
    .transform((data) => ({
      action: data['action'],
    }));
});
