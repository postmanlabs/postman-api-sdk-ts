import { z } from 'zod';
import { Query, query, queryRequest, queryResponse } from './query';

/**
 * Zod schema for the Url2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const url2 = z.lazy(() => {
  return z.object({
    raw: z.string().optional(),
    protocol: z.string().optional(),
    host: z.array(z.string()).optional(),
    path: z.array(z.string()).optional(),
    port: z.string().optional(),
    query: z.array(query).optional(),
  });
});

/**
 * @typedef {Url2} url2
 * @property {string} raw - The request's raw URL.
 * @property {string} protocol - The request protocol.
 * @property {string[]} host - The host's URL.
 * @property {string[]} path - A list of the URL's path components.
 * @property {string} port - The URL's port number. An empty value indicates port `80` (http) or `443` (https).
 * @property {Query[]} query - A list of query parameters. These are the query string parts of the URL, parsed as separate variables.
 */
export type Url2 = z.infer<typeof url2>;

/**
 * Zod schema for mapping API responses to the Url2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const url2Response = z.lazy(() => {
  return z
    .object({
      raw: z.string().optional(),
      protocol: z.string().optional(),
      host: z.array(z.string()).optional(),
      path: z.array(z.string()).optional(),
      port: z.string().optional(),
      query: z.array(queryResponse).optional(),
    })
    .transform((data) => ({
      raw: data['raw'],
      protocol: data['protocol'],
      host: data['host'],
      path: data['path'],
      port: data['port'],
      query: data['query'],
    }));
});

/**
 * Zod schema for mapping the Url2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const url2Request = z.lazy(() => {
  return z
    .object({
      raw: z.string().optional(),
      protocol: z.string().optional(),
      host: z.array(z.string()).optional(),
      path: z.array(z.string()).optional(),
      port: z.string().optional(),
      query: z.array(queryRequest).optional(),
    })
    .transform((data) => ({
      raw: data['raw'],
      protocol: data['protocol'],
      host: data['host'],
      path: data['path'],
      port: data['port'],
      query: data['query'],
    }));
});
