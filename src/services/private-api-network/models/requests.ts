import { z } from 'zod';
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
 * Zod schema for the Requests model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const requests = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    createdAt: z.string().optional(),
    createdBy: z.number().optional(),
    message: z.string().optional(),
    status: z.string().optional(),
    element: panRequestElement.optional(),
    response: panRequestResponse.optional(),
  });
});

/**
 * Information about the request.
 * @typedef {Requests} requests
 * @property {number} id - The request's ID.
 * @property {string} createdAt - The date and time at which the request was created.
 * @property {number} createdBy - The ID of the user who created the request.
 * @property {string} message - The user's optional message included in the request.
 * @property {RequestsStatus} status - The request's status.
 * @property {PanRequestElement} element - Information about the requested element.
 * @property {PanRequestResponse} response - Information about the response to the element's request. This object only returns when the request is denied with a message.
 */
export type Requests = z.infer<typeof requests>;

/**
 * Zod schema for mapping API responses to the Requests application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestsResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      createdAt: z.string().optional(),
      createdBy: z.number().optional(),
      message: z.string().optional(),
      status: z.string().optional(),
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
 * Zod schema for mapping the Requests application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestsRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      createdAt: z.string().optional(),
      createdBy: z.number().optional(),
      message: z.string().optional(),
      status: z.string().optional(),
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
