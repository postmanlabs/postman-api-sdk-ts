import { z } from 'zod';
import { RequestsStatus, requestsStatus } from './requests-status';
import {
  PanRequestElement,
  panRequestElement,
  panRequestElementRequest,
  panRequestElementResponse,
} from './pan-request-element';
import {
  PanRequestResponse,
  panRequestResponse,
  panRequestResponseRequest,
  panRequestResponseResponse,
} from './pan-request-response';

/**
 * Zod schema for the SuccessfulResponseRequests model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseRequests = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    createdAt: z.string().optional(),
    createdBy: z.number().optional(),
    message: z.string().optional(),
    status: requestsStatus.optional(),
    element: panRequestElement.optional(),
    response: panRequestResponse.optional(),
  });
});

/**
 * Information about the request.
 * @typedef  {SuccessfulResponseRequests} successfulResponseRequests - Information about the request. - Information about the request.
 * @property {number} - The request's ID.
 * @property {string} - The date and time at which the request was created.
 * @property {number} - The ID of the user who created the request.
 * @property {string} - The user's optional message included in the request.
 * @property {RequestsStatus} - The request's status.
 * @property {PanRequestElement} - Information about the requested element.
 * @property {PanRequestResponse} - Information about the response to the element's request. This object only returns when the request is denied with a message.
 */
export type SuccessfulResponseRequests = z.infer<typeof successfulResponseRequests>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseRequests application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseRequestsResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      createdAt: z.string().optional(),
      createdBy: z.number().optional(),
      message: z.string().optional(),
      status: requestsStatus.optional(),
      element: panRequestElementResponse.optional(),
      response: panRequestResponseResponse.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      message: data['message'],
      status: data['status'],
      element: data['element'],
      response: data['response'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseRequests application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseRequestsRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      createdAt: z.string().optional(),
      createdBy: z.number().optional(),
      message: z.string().optional(),
      status: requestsStatus.optional(),
      element: panRequestElementRequest.optional(),
      response: panRequestResponseRequest.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      message: data['message'],
      status: data['status'],
      element: data['element'],
      response: data['response'],
    }));
});
