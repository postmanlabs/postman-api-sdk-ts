import { z } from 'zod';

/**
 * Zod schema for the CollectionRequestBodyFormdata2Src1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRequestBodyFormdata2Src1 = z.lazy(() => {
  return z.union([z.string(), z.array(z.string())]);
});

/**
 * @typedef {CollectionRequestBodyFormdata2Src1} collectionRequestBodyFormdata2Src1
 */
export type CollectionRequestBodyFormdata2Src1 = z.infer<typeof collectionRequestBodyFormdata2Src1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const collectionRequestBodyFormdata2Src1Response = z.lazy(() => {
  return z.union([z.string(), z.array(z.string())]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const collectionRequestBodyFormdata2Src1Request = z.lazy(() => {
  return z.union([z.string(), z.array(z.string())]);
});
