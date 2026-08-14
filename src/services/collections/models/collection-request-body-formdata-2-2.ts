import { z } from 'zod';
import {
  CollectionRequestBodyFormdata2Src2,
  collectionRequestBodyFormdata2Src2,
  collectionRequestBodyFormdata2Src2Request,
  collectionRequestBodyFormdata2Src2Response,
} from './collection-request-body-formdata-2-src-2';

/**
 * Zod schema for the CollectionRequestBodyFormdata2_2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRequestBodyFormdata2_2 = z.lazy(() => {
  return z.object({
    key: z.string().optional(),
    src: collectionRequestBodyFormdata2Src2.optional(),
    type: z.string().optional(),
    contentType: z.string().optional(),
    description: z.string().optional().nullable(),
  });
});

/**
 * @typedef {CollectionRequestBodyFormdata2_2} collectionRequestBodyFormdata2_2
 * @property {string} key - The key value.
 * @property {CollectionRequestBodyFormdata2Src2} src
 * @property {CollectionRequestBodyFormdata2Type2} type - The `file` value.
 * @property {string} contentType - The form-data Content-Type header.
 * @property {string} description - The key's description.
 */
export type CollectionRequestBodyFormdata2_2 = z.infer<typeof collectionRequestBodyFormdata2_2>;

/**
 * Zod schema for mapping API responses to the CollectionRequestBodyFormdata2_2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestBodyFormdata2_2Response = z.lazy(() => {
  return z
    .object({
      key: z.string().optional(),
      src: collectionRequestBodyFormdata2Src2Response.optional(),
      type: z.string().optional(),
      contentType: z.string().optional(),
      description: z.string().optional().nullable(),
    })
    .transform((data) => ({
      key: data['key'],
      src: data['src'],
      type: data['type'],
      contentType: data['contentType'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the CollectionRequestBodyFormdata2_2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestBodyFormdata2_2Request = z.lazy(() => {
  return z
    .object({
      key: z.string().optional(),
      src: collectionRequestBodyFormdata2Src2Request.optional(),
      type: z.string().optional(),
      contentType: z.string().optional(),
      description: z.string().optional().nullable(),
    })
    .transform((data) => ({
      key: data['key'],
      src: data['src'],
      type: data['type'],
      contentType: data['contentType'],
      description: data['description'],
    }));
});
