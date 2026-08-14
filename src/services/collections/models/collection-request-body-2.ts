import { z } from 'zod';
import {
  CollectionRequestBodyUrlencoded2,
  collectionRequestBodyUrlencoded2,
  collectionRequestBodyUrlencoded2Request,
  collectionRequestBodyUrlencoded2Response,
} from './collection-request-body-urlencoded-2';
import {
  CollectionRequestBodyFormdata4,
  collectionRequestBodyFormdata4,
  collectionRequestBodyFormdata4Request,
  collectionRequestBodyFormdata4Response,
} from './collection-request-body-formdata-4';
import {
  CollectionRequestBodyFile2,
  collectionRequestBodyFile2,
  collectionRequestBodyFile2Request,
  collectionRequestBodyFile2Response,
} from './collection-request-body-file-2';
import {
  CollectionRequestBodyGraphql2,
  collectionRequestBodyGraphql2,
  collectionRequestBodyGraphql2Request,
  collectionRequestBodyGraphql2Response,
} from './collection-request-body-graphql-2';

/**
 * Zod schema for the CollectionRequestBody2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRequestBody2 = z.lazy(() => {
  return z.object({
    mode: z.any().optional(),
    raw: z.string().optional(),
    urlencoded: z.array(collectionRequestBodyUrlencoded2).optional(),
    formdata: z.array(collectionRequestBodyFormdata4).optional(),
    file: collectionRequestBodyFile2.optional(),
    graphql: collectionRequestBodyGraphql2.optional(),
    options: z.any().optional(),
  });
});

/**
 * Information about the collection's request body.
 * @typedef {CollectionRequestBody2} collectionRequestBody2
 * @property {any} mode - The data associated with the request.
 * @property {string} raw - If the `mode` value is `raw`, the raw content of the request body.
 * @property {CollectionRequestBodyUrlencoded2[]} urlencoded - A list of x-www-form-encoded key/value pairs.
 * @property {CollectionRequestBodyFormdata4[]} formdata - If the `mode` value is `formdata`, then a list of form-data key/pair values.
 * @property {CollectionRequestBodyFile2} file - If the `mode` value is `file`, an object containing the file request information.
 * @property {CollectionRequestBodyGraphql2} graphql - If the `mode` value is `graphql`, an object containing the GraphQL request information.
 * @property {any} options - Additional configurations and options set for various modes.
 */
export type CollectionRequestBody2 = z.infer<typeof collectionRequestBody2>;

/**
 * Zod schema for mapping API responses to the CollectionRequestBody2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestBody2Response = z.lazy(() => {
  return z
    .object({
      mode: z.any().optional(),
      raw: z.string().optional(),
      urlencoded: z.array(collectionRequestBodyUrlencoded2Response).optional(),
      formdata: z.array(collectionRequestBodyFormdata4Response).optional(),
      file: collectionRequestBodyFile2Response.optional(),
      graphql: collectionRequestBodyGraphql2Response.optional(),
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
 * Zod schema for mapping the CollectionRequestBody2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestBody2Request = z.lazy(() => {
  return z
    .object({
      mode: z.any().optional(),
      raw: z.string().optional(),
      urlencoded: z.array(collectionRequestBodyUrlencoded2Request).optional(),
      formdata: z.array(collectionRequestBodyFormdata4Request).optional(),
      file: collectionRequestBodyFile2Request.optional(),
      graphql: collectionRequestBodyGraphql2Request.optional(),
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
