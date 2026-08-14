import { z } from 'zod';

/**
 * Zod schema for the CollectionRequestBodyFormdata1_1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRequestBodyFormdata1_1 = z.lazy(() => {
  return z.object({
    key: z.string().optional(),
    value: z.string().optional(),
    type: z.string().optional(),
    contentType: z.string().optional(),
    description: z.string().optional().nullable(),
  });
});

/**
 * @typedef {CollectionRequestBodyFormdata1_1} collectionRequestBodyFormdata1_1
 * @property {string} key - The key value.
 * @property {string} value - The key's value.
 * @property {CollectionRequestBodyFormdata1Type1} type - The `text` value.
 * @property {string} contentType - The form-data Content-Type header.
 * @property {string} description - The key's description.
 */
export type CollectionRequestBodyFormdata1_1 = z.infer<typeof collectionRequestBodyFormdata1_1>;

/**
 * Zod schema for mapping API responses to the CollectionRequestBodyFormdata1_1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestBodyFormdata1_1Response = z.lazy(() => {
  return z
    .object({
      key: z.string().optional(),
      value: z.string().optional(),
      type: z.string().optional(),
      contentType: z.string().optional(),
      description: z.string().optional().nullable(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
      type: data['type'],
      contentType: data['contentType'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the CollectionRequestBodyFormdata1_1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestBodyFormdata1_1Request = z.lazy(() => {
  return z
    .object({
      key: z.string().optional(),
      value: z.string().optional(),
      type: z.string().optional(),
      contentType: z.string().optional(),
      description: z.string().optional().nullable(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
      type: data['type'],
      contentType: data['contentType'],
      description: data['description'],
    }));
});
