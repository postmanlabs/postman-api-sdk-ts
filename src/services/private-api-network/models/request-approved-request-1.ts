import { z } from 'zod';
import { Element, element, elementRequest, elementResponse } from './element';

/**
 * Zod schema for the RequestApprovedRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const requestApprovedRequest1 = z.lazy(() => {
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
 * @typedef  {RequestApprovedRequest1} requestApprovedRequest1 - Information about the Private API Network request. - Information about the Private API Network request.
 * @property {number} - The request's ID.
 * @property {string} - The date and time at which the request was created.
 * @property {number} - The ID of the user who created the request.
 * @property {string} - The user's optional message included in the request.
 * @property {RequestApprovedRequestStatus} - The request's status.
 * @property {Element} - Information about the requested element.
 */
export type RequestApprovedRequest1 = z.infer<typeof requestApprovedRequest1>;

/**
 * Zod schema for mapping API responses to the RequestApprovedRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestApprovedRequest1Response = z.lazy(() => {
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
 * Zod schema for mapping the RequestApprovedRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestApprovedRequest1Request = z.lazy(() => {
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
