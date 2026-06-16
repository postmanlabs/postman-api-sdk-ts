import { z } from 'zod';
import {
  RequestDeniedRequestStatus,
  requestDeniedRequestStatus,
} from './request-denied-request-status';
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
 * Zod schema for the RequestDeniedRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const requestDeniedRequest1 = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    createdAt: z.string().optional(),
    createdBy: z.number().optional(),
    message: z.string().optional(),
    status: requestDeniedRequestStatus.optional(),
    element: panRequestElement.optional(),
    response: panRequestResponse.optional(),
  });
});

/**
 * Information about the Private API Network request.
 * @typedef  {RequestDeniedRequest1} requestDeniedRequest1 - Information about the Private API Network request. - Information about the Private API Network request.
 * @property {number} - The request's ID.
 * @property {string} - The date and time at which the request was created.
 * @property {number} - The ID of the user who created the request.
 * @property {string} - The user's optional message included in the request.
 * @property {RequestDeniedRequestStatus} - The request's status.
 * @property {PanRequestElement} - Information about the requested element.
 * @property {PanRequestResponse} - Information about the response to the element's request. This object only returns when the request is denied with a message.
 */
export type RequestDeniedRequest1 = z.infer<typeof requestDeniedRequest1>;

/**
 * Zod schema for mapping API responses to the RequestDeniedRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestDeniedRequest1Response = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      createdAt: z.string().optional(),
      createdBy: z.number().optional(),
      message: z.string().optional(),
      status: requestDeniedRequestStatus.optional(),
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
 * Zod schema for mapping the RequestDeniedRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestDeniedRequest1Request = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      createdAt: z.string().optional(),
      createdBy: z.number().optional(),
      message: z.string().optional(),
      status: requestDeniedRequestStatus.optional(),
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
