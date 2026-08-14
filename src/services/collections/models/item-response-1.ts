import { z } from 'zod';
import {
  ResponseOriginalRequest1,
  responseOriginalRequest1,
  responseOriginalRequest1Request,
  responseOriginalRequest1Response,
} from './response-original-request-1';
import {
  ResponseHeader1,
  responseHeader1,
  responseHeader1Request,
  responseHeader1Response,
} from './response-header-1';

/**
 * Zod schema for the ItemResponse1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const itemResponse1 = z.lazy(() => {
  return z.object({
    originalRequest: responseOriginalRequest1.optional(),
    responseTime: z.number().optional().nullable(),
    header: responseHeader1.optional(),
    body: z.string().optional().nullable(),
    status: z.string().optional(),
    code: z.number().optional(),
  });
});

/**
 * Information about the request's response.
 * @typedef {ItemResponse1} itemResponse1
 * @property {ResponseOriginalRequest1} originalRequest - Information about the collection request.
 * @property {number} responseTime - The time taken by the request to complete. If a number, the unit is milliseconds. If the response is manually created, this can be set as null.
 * @property {ResponseHeader1} header
 * @property {string} body - The raw text of the response.
 * @property {string} status - The response's status.
 * @property {number} code - The response status code.
 */
export type ItemResponse1 = z.infer<typeof itemResponse1>;

/**
 * Zod schema for mapping API responses to the ItemResponse1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const itemResponse1Response = z.lazy(() => {
  return z
    .object({
      originalRequest: responseOriginalRequest1Response.optional(),
      responseTime: z.number().optional().nullable(),
      header: responseHeader1Response.optional(),
      body: z.string().optional().nullable(),
      status: z.string().optional(),
      code: z.number().optional(),
    })
    .transform((data) => ({
      originalRequest: data['originalRequest'],
      responseTime: data['responseTime'],
      header: data['header'],
      body: data['body'],
      status: data['status'],
      code: data['code'],
    }));
});

/**
 * Zod schema for mapping the ItemResponse1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const itemResponse1Request = z.lazy(() => {
  return z
    .object({
      originalRequest: responseOriginalRequest1Request.optional(),
      responseTime: z.number().optional().nullable(),
      header: responseHeader1Request.optional(),
      body: z.string().optional().nullable(),
      status: z.string().optional(),
      code: z.number().optional(),
    })
    .transform((data) => ({
      originalRequest: data['originalRequest'],
      responseTime: data['responseTime'],
      header: data['header'],
      body: data['body'],
      status: data['status'],
      code: data['code'],
    }));
});
