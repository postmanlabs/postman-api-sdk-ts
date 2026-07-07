import { z } from 'zod';
import {
  RequestApprovedRequest1,
  requestApprovedRequest1,
  requestApprovedRequest1Request,
  requestApprovedRequest1Response,
} from './request-approved-request-1';

/**
 * Zod schema for the RequestApproved model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const requestApproved = z.lazy(() => {
  return z.object({
    request: z.array(requestApprovedRequest1).optional(),
  });
});

/**
 *
 * @typedef  {RequestApproved} requestApproved
 * @property {RequestApprovedRequest1[]} - A list of Private API Network requests.
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
      request: z.array(requestApprovedRequest1Response).optional(),
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
      request: z.array(requestApprovedRequest1Request).optional(),
    })
    .transform((data) => ({
      request: data['request'],
    }));
});
