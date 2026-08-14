import { z } from 'zod';
import {
  responseHeader2_1,
  responseHeader2_1Request,
  responseHeader2_1Response,
} from './response-header-2-1';

/**
 * Zod schema for the ResponseHeader1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const responseHeader1 = z.lazy(() => {
  return z.union([z.string(), z.array(responseHeader2_1)]);
});

/**
 * @typedef {ResponseHeader1} responseHeader1
 */
export type ResponseHeader1 = z.infer<typeof responseHeader1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const responseHeader1Response = z.lazy(() => {
  return z.union([z.string(), z.array(responseHeader2_1)]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const responseHeader1Request = z.lazy(() => {
  return z.union([z.string(), z.array(responseHeader2_1)]);
});
