import { z } from 'zod';
import {
  CollectionRequestBodyUrlencoded1,
  collectionRequestBodyUrlencoded1,
  collectionRequestBodyUrlencoded1Request,
  collectionRequestBodyUrlencoded1Response,
} from './collection-request-body-urlencoded-1';
import {
  CollectionRequestBodyFormdata3,
  collectionRequestBodyFormdata3,
  collectionRequestBodyFormdata3Request,
  collectionRequestBodyFormdata3Response,
} from './collection-request-body-formdata-3';
import {
  CollectionRequestBodyFile1,
  collectionRequestBodyFile1,
  collectionRequestBodyFile1Request,
  collectionRequestBodyFile1Response,
} from './collection-request-body-file-1';
import {
  CollectionRequestBodyGraphql1,
  collectionRequestBodyGraphql1,
  collectionRequestBodyGraphql1Request,
  collectionRequestBodyGraphql1Response,
} from './collection-request-body-graphql-1';

/**
 * Zod schema for the CollectionRequestBody1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRequestBody1 = z.lazy(() => {
  return z.object({
    mode: z.any().optional(),
    raw: z.string().optional(),
    urlencoded: z.array(collectionRequestBodyUrlencoded1).optional(),
    formdata: z.array(collectionRequestBodyFormdata3).optional(),
    file: collectionRequestBodyFile1.optional(),
    graphql: collectionRequestBodyGraphql1.optional(),
    options: z.any().optional(),
  });
});

/**
 * Information about the collection's request body. To set this to "none", pass an empty object.
 * @typedef {CollectionRequestBody1} collectionRequestBody1
 * @property {any} mode - The data associated with the request.
 * @property {string} raw - If the `mode` value is `raw`, the raw content of the request body.
 * @property {CollectionRequestBodyUrlencoded1[]} urlencoded - A list of x-www-form-encoded key/value pairs.
 * @property {CollectionRequestBodyFormdata3[]} formdata - If the `mode` value is `formdata`, then a list of form-data key/pair values.
 * @property {CollectionRequestBodyFile1} file - If the `mode` value is `file`, an object containing the file request information.
 * @property {CollectionRequestBodyGraphql1} graphql - If the `mode` value is `graphql`, an object containing the GraphQL request information.
 * @property {any} options - Additional configurations and options set for various modes.
 */
export type CollectionRequestBody1 = z.infer<typeof collectionRequestBody1>;

/**
 * Zod schema for mapping API responses to the CollectionRequestBody1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestBody1Response = z.lazy(() => {
  return z
    .object({
      mode: z.any().optional(),
      raw: z.string().optional(),
      urlencoded: z.array(collectionRequestBodyUrlencoded1Response).optional(),
      formdata: z.array(collectionRequestBodyFormdata3Response).optional(),
      file: collectionRequestBodyFile1Response.optional(),
      graphql: collectionRequestBodyGraphql1Response.optional(),
      options: z.any().optional(),
    })
    .transform((data) => ({
      mode: data['mode'],
      raw: data['raw'],
      urlencoded: data['urlencoded'],
      formdata: data['formdata'],
      file: data['file'],
      graphql: data['graphql'],
      options: data['options'],
    }));
});

/**
 * Zod schema for mapping the CollectionRequestBody1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestBody1Request = z.lazy(() => {
  return z
    .object({
      mode: z.any().optional(),
      raw: z.string().optional(),
      urlencoded: z.array(collectionRequestBodyUrlencoded1Request).optional(),
      formdata: z.array(collectionRequestBodyFormdata3Request).optional(),
      file: collectionRequestBodyFile1Request.optional(),
      graphql: collectionRequestBodyGraphql1Request.optional(),
      options: z.any().optional(),
    })
    .transform((data) => ({
      mode: data['mode'],
      raw: data['raw'],
      urlencoded: data['urlencoded'],
      formdata: data['formdata'],
      file: data['file'],
      graphql: data['graphql'],
      options: data['options'],
    }));
});
