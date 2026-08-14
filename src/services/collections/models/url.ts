import { z } from 'zod';
import { url2, url2Request, url2Response } from './url-2';

/**
 * Zod schema for the Url model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const url = z.lazy(() => {
  return z.union([z.string(), url2]);
});

/**
 * Information about the URL.
 * @typedef {Url} url
 */
export type Url = z.infer<typeof url>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const urlResponse = z.lazy(() => {
  return z.union([z.string(), url2Response]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const urlRequest = z.lazy(() => {
  return z.union([z.string(), url2Request]);
});
