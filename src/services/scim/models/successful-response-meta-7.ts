import { z } from 'zod';

/**
 * Zod schema for the SuccessfulResponseMeta7 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseMeta7 = z.lazy(() => {
  return z.object({
    resourceType: z.string().optional(),
    location: z.string().optional(),
  });
});

/**
 * The response's non-standard meta information.
 * @typedef  {SuccessfulResponseMeta7} successfulResponseMeta7 - The response's non-standard meta information. - The response's non-standard meta information.
 * @property {string}
 * @property {string}
 */
export type SuccessfulResponseMeta7 = z.infer<typeof successfulResponseMeta7>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseMeta7 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseMeta7Response = z.lazy(() => {
  return z
    .object({
      resourceType: z.string().optional(),
      location: z.string().optional(),
    })
    .transform((data) => ({
      resourceType: data['resourceType'],
      location: data['location'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseMeta7 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseMeta7Request = z.lazy(() => {
  return z
    .object({
      resourceType: z.string().optional(),
      location: z.string().optional(),
    })
    .transform((data) => ({
      resourceType: data['resourceType'],
      location: data['location'],
    }));
});
