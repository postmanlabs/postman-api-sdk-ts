import { z } from 'zod';

/**
 * Zod schema for the SdkSource model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const sdkSource = z.lazy(() => {
  return z.object({
    type: z.string(),
    id: z.string(),
  });
});

/**
 * The collection or specification that the SDK is generated from.
 * @typedef {SdkSource} sdkSource
 * @property {ElementType2} type - The type of Postman element.
 * @property {string} id - The ID of the Postman Collection or specification in Postman.
 */
export type SdkSource = z.infer<typeof sdkSource>;

/**
 * Zod schema for mapping API responses to the SdkSource application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sdkSourceResponse = z.lazy(() => {
  return z
    .object({
      type: z.string(),
      id: z.string(),
    })
    .transform((data) => ({
      type: data['type'],
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the SdkSource application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sdkSourceRequest = z.lazy(() => {
  return z
    .object({
      type: z.string(),
      id: z.string(),
    })
    .transform((data) => ({
      type: data['type'],
      id: data['id'],
    }));
});
