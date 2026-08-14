import { z } from 'zod';
import {
  ApproveDenyAccessRequestResponseResult,
  approveDenyAccessRequestResponseResult,
  approveDenyAccessRequestResponseResultRequest,
  approveDenyAccessRequestResponseResultResponse,
} from './approve-deny-access-request-response-result';

/**
 * Zod schema for the ApproveDenyAccessRequestResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const approveDenyAccessRequestResponse = z.lazy(() => {
  return z.object({
    result: approveDenyAccessRequestResponseResult.optional(),
  });
});

/**
 * @typedef {ApproveDenyAccessRequestResponse} approveDenyAccessRequestResponse
 * @property {ApproveDenyAccessRequestResponseResult} result - Information about the approved or denied access request.
 */
export type ApproveDenyAccessRequestResponse = z.infer<typeof approveDenyAccessRequestResponse>;

/**
 * Zod schema for mapping API responses to the ApproveDenyAccessRequestResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const approveDenyAccessRequestResponseResponse = z.lazy(() => {
  return z
    .object({
      result: approveDenyAccessRequestResponseResultResponse.optional(),
    })
    .transform((data) => ({
      result: data['result'],
    }));
});

/**
 * Zod schema for mapping the ApproveDenyAccessRequestResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const approveDenyAccessRequestResponseRequest = z.lazy(() => {
  return z
    .object({
      result: approveDenyAccessRequestResponseResultRequest.optional(),
    })
    .transform((data) => ({
      result: data['result'],
    }));
});
