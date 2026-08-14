import { z } from 'zod';

/**
 * Zod schema for the DisabledSystemHeaders model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const disabledSystemHeaders = z.lazy(() => {
  return z.object({
    cacheControl: z.boolean().optional(),
    postmanToken: z.boolean().optional(),
    contentType: z.boolean().optional(),
    contentLength: z.boolean().optional(),
    acceptEncoding: z.boolean().optional(),
    connection: z.boolean().optional(),
    host: z.boolean().optional(),
  });
});

/**
 * Disable the system headers which are added implicitly.
 * @typedef {DisabledSystemHeaders} disabledSystemHeaders
 * @property {boolean} cacheControl
 * @property {boolean} postmanToken
 * @property {boolean} contentType
 * @property {boolean} contentLength
 * @property {boolean} acceptEncoding
 * @property {boolean} connection
 * @property {boolean} host
 */
export type DisabledSystemHeaders = z.infer<typeof disabledSystemHeaders>;

/**
 * Zod schema for mapping API responses to the DisabledSystemHeaders application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const disabledSystemHeadersResponse = z.lazy(() => {
  return z
    .object({
      'cache-control': z.boolean().optional(),
      'postman-token': z.boolean().optional(),
      'content-type': z.boolean().optional(),
      'content-length': z.boolean().optional(),
      'accept-encoding': z.boolean().optional(),
      connection: z.boolean().optional(),
      host: z.boolean().optional(),
    })
    .transform((data) => ({
      cacheControl: data['cache-control'],
      postmanToken: data['postman-token'],
      contentType: data['content-type'],
      contentLength: data['content-length'],
      acceptEncoding: data['accept-encoding'],
      connection: data['connection'],
      host: data['host'],
    }));
});

/**
 * Zod schema for mapping the DisabledSystemHeaders application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const disabledSystemHeadersRequest = z.lazy(() => {
  return z
    .object({
      cacheControl: z.boolean().optional(),
      postmanToken: z.boolean().optional(),
      contentType: z.boolean().optional(),
      contentLength: z.boolean().optional(),
      acceptEncoding: z.boolean().optional(),
      connection: z.boolean().optional(),
      host: z.boolean().optional(),
    })
    .transform((data) => ({
      'cache-control': data['cacheControl'],
      'postman-token': data['postmanToken'],
      'content-type': data['contentType'],
      'content-length': data['contentLength'],
      'accept-encoding': data['acceptEncoding'],
      connection: data['connection'],
      host: data['host'],
    }));
});
