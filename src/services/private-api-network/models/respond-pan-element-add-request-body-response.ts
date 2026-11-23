import { z } from 'zod';

/**
 * Zod schema for the RespondPanElementAddRequestBodyResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const respondPanElementAddRequestBodyResponse_3 = z.lazy(() => {
  return z.object({
    message: z.string().optional(),
  });
});

/**
 * If the request is denied, the response to the user's request.
 * @typedef {RespondPanElementAddRequestBodyResponse} respondPanElementAddRequestBodyResponse_3
 * @property {string} message - A message that details why the user's request was denied.
 */
export type RespondPanElementAddRequestBodyResponse = z.infer<
  typeof respondPanElementAddRequestBodyResponse_3
>;

/**
 * Zod schema for mapping API responses to the RespondPanElementAddRequestBodyResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const respondPanElementAddRequestBodyResponseResponse = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

/**
 * Zod schema for mapping the RespondPanElementAddRequestBodyResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const respondPanElementAddRequestBodyResponseRequest = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});
