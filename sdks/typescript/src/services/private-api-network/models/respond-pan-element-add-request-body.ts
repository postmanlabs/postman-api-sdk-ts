import { z } from 'zod';
import {
  RespondPanElementAddRequestBodyStatus,
  respondPanElementAddRequestBodyStatus,
} from './respond-pan-element-add-request-body-status';
import {
  RespondPanElementAddRequestBodyResponse1,
  respondPanElementAddRequestBodyResponse1,
  respondPanElementAddRequestBodyResponse1Request,
  respondPanElementAddRequestBodyResponse1Response,
} from './respond-pan-element-add-request-body-response-1';

/**
 * Zod schema for the RespondPanElementAddRequestBody model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const respondPanElementAddRequestBody = z.lazy(() => {
  return z.object({
    status: respondPanElementAddRequestBodyStatus,
    response: respondPanElementAddRequestBodyResponse1.optional(),
  });
});

/**
 *
 * @typedef  {RespondPanElementAddRequestBody} respondPanElementAddRequestBody
 * @property {RespondPanElementAddRequestBodyStatus} - The request's approval status.
 * @property {RespondPanElementAddRequestBodyResponse1} - If the request is denied, the response to the user's request.
 */
export type RespondPanElementAddRequestBody = z.infer<typeof respondPanElementAddRequestBody>;

/**
 * Zod schema for mapping API responses to the RespondPanElementAddRequestBody application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const respondPanElementAddRequestBodyResponse = z.lazy(() => {
  return z
    .object({
      status: respondPanElementAddRequestBodyStatus,
      response: respondPanElementAddRequestBodyResponse1Response.optional(),
    })
    .transform((data) => ({
      status: data['status'],
      response: data['response'],
    }));
});

/**
 * Zod schema for mapping the RespondPanElementAddRequestBody application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const respondPanElementAddRequestBodyRequest = z.lazy(() => {
  return z
    .object({
      status: respondPanElementAddRequestBodyStatus,
      response: respondPanElementAddRequestBodyResponse1Request.optional(),
    })
    .transform((data) => ({
      status: data['status'],
      response: data['response'],
    }));
});
