import { z } from 'zod';
import {
  collectionRequestBodyFormdata1_1,
  collectionRequestBodyFormdata1_1Request,
  collectionRequestBodyFormdata1_1Response,
} from './collection-request-body-formdata-1-1';
import {
  collectionRequestBodyFormdata2_1,
  collectionRequestBodyFormdata2_1Request,
  collectionRequestBodyFormdata2_1Response,
} from './collection-request-body-formdata-2-1';

/**
 * Zod schema for the CollectionRequestBodyFormdata3 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRequestBodyFormdata3 = z.lazy(() => {
  return z.union([collectionRequestBodyFormdata1_1, collectionRequestBodyFormdata2_1]);
});

/**
 * @typedef {CollectionRequestBodyFormdata3} collectionRequestBodyFormdata3
 */
export type CollectionRequestBodyFormdata3 = z.infer<typeof collectionRequestBodyFormdata3>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const collectionRequestBodyFormdata3Response = z.lazy(() => {
  return z.union([
    collectionRequestBodyFormdata1_1Response,
    collectionRequestBodyFormdata2_1Response,
  ]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const collectionRequestBodyFormdata3Request = z.lazy(() => {
  return z.union([
    collectionRequestBodyFormdata1_1Request,
    collectionRequestBodyFormdata2_1Request,
  ]);
});
