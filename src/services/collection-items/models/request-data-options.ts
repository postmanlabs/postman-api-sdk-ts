import { z } from 'zod';
import { Raw, raw, rawRequest, rawResponse } from './raw';

/**
 * Zod schema for the RequestDataOptions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const requestDataOptions = z.lazy(() => {
  return z.object({
    raw: raw.optional(),
    urlencoded: z.any().optional(),
    params: z.any().optional(),
    binary: z.any().optional(),
    graphql: z.any().optional(),
  });
});

/**
 * Additional configurations and options set for the request body's various data modes.
 * @typedef {RequestDataOptions} requestDataOptions
 * @property {Raw} raw - Options for the `raw` data mode.
 * @property {any} urlencoded - Options for the `urlencoded` data mode.
 * @property {any} params - Options for the `params` data mode.
 * @property {any} binary - Options for the `binary` data mode.
 * @property {any} graphql - Options for the `graphql` data mode.
 */
export type RequestDataOptions = z.infer<typeof requestDataOptions>;

/**
 * Zod schema for mapping API responses to the RequestDataOptions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestDataOptionsResponse = z.lazy(() => {
  return z
    .object({
      raw: rawResponse.optional(),
      urlencoded: z.any().optional(),
      params: z.any().optional(),
      binary: z.any().optional(),
      graphql: z.any().optional(),
    })
    .transform((data) => ({
      raw: data['raw'],
      urlencoded: data['urlencoded'],
      params: data['params'],
      binary: data['binary'],
      graphql: data['graphql'],
    }));
});

/**
 * Zod schema for mapping the RequestDataOptions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestDataOptionsRequest = z.lazy(() => {
  return z
    .object({
      raw: rawRequest.optional(),
      urlencoded: z.any().optional(),
      params: z.any().optional(),
      binary: z.any().optional(),
      graphql: z.any().optional(),
    })
    .transform((data) => ({
      raw: data['raw'],
      urlencoded: data['urlencoded'],
      params: data['params'],
      binary: data['binary'],
      graphql: data['graphql'],
    }));
});
