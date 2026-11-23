import { z } from 'zod';
import {
  RequestApprovedRequest,
  requestApprovedRequestRequest,
  requestApprovedRequestResponse,
  requestApprovedRequest_3,
} from './request-approved-request';

/**
 * Zod schema for the RequestApproved model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const requestApproved = z.lazy(() => {
  return z.object({
    request: z.array(requestApprovedRequest_3).optional(),
  });
});

/**
 * @typedef {RequestApproved} requestApproved
 * @property {RequestApprovedRequest[]} request - A list of Private API Network requests.
 */
export type RequestApproved = z.infer<typeof requestApproved>;

/**
 * Zod schema for mapping API responses to the RequestApproved application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestApprovedResponse = z.lazy(() => {
  return z
    .object({
      request: z.array(requestApprovedRequestResponse).optional(),
    })
    .transform((data) => ({
      request: data['request'],
    }));
});

/**
 * Zod schema for mapping the RequestApproved application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestApprovedRequest = z.lazy(() => {
  return z
    .object({
      request: z.array(requestApprovedRequestRequest).optional(),
    })
    .transform((data) => ({
      request: data['request'],
    }));
});
