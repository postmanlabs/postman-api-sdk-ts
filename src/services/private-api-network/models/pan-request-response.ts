import { z } from 'zod';

/**
 * Zod schema for the PanRequestResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const panRequestResponse = z.lazy(() => {
  return z.object({
    createdAt: z.string().optional(),
    createdBy: z.number().optional(),
    message: z.string().optional(),
  });
});

/**
 * Information about the response to the element's request. This object only returns when the request is denied with a message.
 * @typedef {PanRequestResponse} panRequestResponse
 * @property {string} createdAt - The date and time at which request was denied.
 * @property {number} createdBy - The ID of the user who denied the request.
 * @property {string} message - The request's response message.
 */
export type PanRequestResponse = z.infer<typeof panRequestResponse>;

/**
 * Zod schema for mapping API responses to the PanRequestResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const panRequestResponseResponse = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      createdBy: z.number().optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      message: data['message'],
    }));
});

/**
 * Zod schema for mapping the PanRequestResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const panRequestResponseRequest = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      createdBy: z.number().optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      message: data['message'],
    }));
});
