import { z } from 'zod';
import { Element, element, elementRequest, elementResponse } from './element';

/**
 * Zod schema for the RequestApprovedRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const requestApprovedRequest_3 = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    createdAt: z.string().optional(),
    createdBy: z.number().optional(),
    message: z.string().optional(),
    status: z.string().optional(),
    element: element.optional(),
  });
});

/**
 * Information about the Private API Network request.
 * @typedef {RequestApprovedRequest} requestApprovedRequest_3
 * @property {number} id - The request's ID.
 * @property {string} createdAt - The date and time at which the request was created.
 * @property {number} createdBy - The ID of the user who created the request.
 * @property {string} message - The user's optional message included in the request.
 * @property {RequestApprovedRequestStatus} status - The request's status.
 * @property {Element} element - Information about the requested element.
 */
export type RequestApprovedRequest = z.infer<typeof requestApprovedRequest_3>;

/**
 * Zod schema for mapping API responses to the RequestApprovedRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestApprovedRequestResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      createdAt: z.string().optional(),
      createdBy: z.number().optional(),
      message: z.string().optional(),
      status: z.string().optional(),
      element: elementResponse.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      message: data['message'],
      status: data['status'],
      element: data['element'],
    }));
});

/**
 * Zod schema for mapping the RequestApprovedRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestApprovedRequestRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      createdAt: z.string().optional(),
      createdBy: z.number().optional(),
      message: z.string().optional(),
      status: z.string().optional(),
      element: elementRequest.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      message: data['message'],
      status: data['status'],
      element: data['element'],
    }));
});
