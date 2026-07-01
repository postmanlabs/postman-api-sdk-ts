import { z } from 'zod';
import {
  responseHeader2_2,
  responseHeader2_2Request,
  responseHeader2_2Response,
} from '../../common/response-header-2-2';

/**
 * Zod schema for the ResponseHeader2_3 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const responseHeader2_3 = z.lazy(() => {
  return z.union([z.string(), z.array(responseHeader2_2)]);
});

/**
 *
 * @typedef  {ResponseHeader2_3} responseHeader2_3
 * @property {string}
 * @property {ResponseHeader2_2[]}
 */
export type ResponseHeader2_3 = z.infer<typeof responseHeader2_3>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const responseHeader2_3Response = z.lazy(() => {
  return z.union([z.string(), z.array(responseHeader2_2)]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const responseHeader2_3Request = z.lazy(() => {
  return z.union([z.string(), z.array(responseHeader2_2)]);
});
