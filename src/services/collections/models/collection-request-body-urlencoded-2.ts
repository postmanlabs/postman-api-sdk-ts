import { z } from 'zod';

/**
 * Zod schema for the CollectionRequestBodyUrlencoded2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRequestBodyUrlencoded2 = z.lazy(() => {
  return z.object({
    key: z.string(),
    value: z.string().optional(),
    description: z.string().optional().nullable(),
  });
});

/**
 * @typedef {CollectionRequestBodyUrlencoded2} collectionRequestBodyUrlencoded2
 * @property {string} key - The key value.
 * @property {string} value - The key's value.
 * @property {string} description - The key's description.
 */
export type CollectionRequestBodyUrlencoded2 = z.infer<typeof collectionRequestBodyUrlencoded2>;

/**
 * Zod schema for mapping API responses to the CollectionRequestBodyUrlencoded2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestBodyUrlencoded2Response = z.lazy(() => {
  return z
    .object({
      key: z.string(),
      value: z.string().optional(),
      description: z.string().optional().nullable(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the CollectionRequestBodyUrlencoded2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestBodyUrlencoded2Request = z.lazy(() => {
  return z
    .object({
      key: z.string(),
      value: z.string().optional(),
      description: z.string().optional().nullable(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
      description: data['description'],
    }));
});
