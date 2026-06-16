import { z } from 'zod';

/**
 * Zod schema for the RespondPanElementAddRequestBodyResponse1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const respondPanElementAddRequestBodyResponse1 = z.lazy(() => {
  return z.object({
    message: z.string().optional(),
  });
});

/**
 * If the request is denied, the response to the user's request.
 * @typedef  {RespondPanElementAddRequestBodyResponse1} respondPanElementAddRequestBodyResponse1 - If the request is denied, the response to the user's request. - If the request is denied, the response to the user's request.
 * @property {string} - A message that details why the user's request was denied.
 */
export type RespondPanElementAddRequestBodyResponse1 = z.infer<
  typeof respondPanElementAddRequestBodyResponse1
>;

/**
 * Zod schema for mapping API responses to the RespondPanElementAddRequestBodyResponse1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const respondPanElementAddRequestBodyResponse1Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

/**
 * Zod schema for mapping the RespondPanElementAddRequestBodyResponse1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const respondPanElementAddRequestBodyResponse1Request = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});
