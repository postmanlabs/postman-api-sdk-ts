import { z } from 'zod';
import {
  collectionRequestBodyFormdata1_2,
  collectionRequestBodyFormdata1_2Request,
  collectionRequestBodyFormdata1_2Response,
} from './collection-request-body-formdata-1-2';
import {
  collectionRequestBodyFormdata2_2,
  collectionRequestBodyFormdata2_2Request,
  collectionRequestBodyFormdata2_2Response,
} from './collection-request-body-formdata-2-2';

/**
 * Zod schema for the CollectionRequestBodyFormdata4 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRequestBodyFormdata4 = z.lazy(() => {
  return z.union([collectionRequestBodyFormdata1_2, collectionRequestBodyFormdata2_2]);
});

/**
 * @typedef {CollectionRequestBodyFormdata4} collectionRequestBodyFormdata4
 */
export type CollectionRequestBodyFormdata4 = z.infer<typeof collectionRequestBodyFormdata4>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const collectionRequestBodyFormdata4Response = z.lazy(() => {
  return z.union([
    collectionRequestBodyFormdata1_2Response,
    collectionRequestBodyFormdata2_2Response,
  ]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const collectionRequestBodyFormdata4Request = z.lazy(() => {
  return z.union([
    collectionRequestBodyFormdata1_2Request,
    collectionRequestBodyFormdata2_2Request,
  ]);
});
