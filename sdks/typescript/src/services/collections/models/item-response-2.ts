import { z } from 'zod';
import {
  ResponseOriginalRequest2,
  responseOriginalRequest2,
  responseOriginalRequest2Request,
  responseOriginalRequest2Response,
} from './response-original-request-2';
import {
  ResponseHeader2_3,
  responseHeader2_3,
  responseHeader2_3Request,
  responseHeader2_3Response,
} from './response-header-2-3';

/**
 * Zod schema for the ItemResponse2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const itemResponse2 = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    originalRequest: responseOriginalRequest2.optional(),
    responseTime: z.number().optional().nullable(),
    header: responseHeader2_3.optional(),
    body: z.string().optional().nullable(),
    status: z.string().optional(),
    code: z.number().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    uid: z.string().optional(),
  });
});

/**
 * Information about the request's response.
 * @typedef  {ItemResponse2} itemResponse2 - Information about the request's response. - Information about the request's response.
 * @property {string} - The response's ID.
 * @property {ResponseOriginalRequest2} - Information about the collection request.
 * @property {number} - The time taken by the request to complete. The unit is milliseconds.
 * @property {ResponseHeader2_3}
 * @property {string} - The raw text of the response.
 * @property {string} - The response's status.
 * @property {number} - The response status code.
 * @property {string} - The date and time at which the response was created.
 * @property {string} - The date and time at which the response was updated.
 * @property {string} - The item's unique ID.
 */
export type ItemResponse2 = z.infer<typeof itemResponse2>;

/**
 * Zod schema for mapping API responses to the ItemResponse2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const itemResponse2Response = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      originalRequest: responseOriginalRequest2Response.optional(),
      responseTime: z.number().optional().nullable(),
      header: responseHeader2_3Response.optional(),
      body: z.string().optional().nullable(),
      status: z.string().optional(),
      code: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      originalRequest: data['originalRequest'],
      responseTime: data['responseTime'],
      header: data['header'],
      body: data['body'],
      status: data['status'],
      code: data['code'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      uid: data['uid'],
    }));
});

/**
 * Zod schema for mapping the ItemResponse2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const itemResponse2Request = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      originalRequest: responseOriginalRequest2Request.optional(),
      responseTime: z.number().optional().nullable(),
      header: responseHeader2_3Request.optional(),
      body: z.string().optional().nullable(),
      status: z.string().optional(),
      code: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      originalRequest: data['originalRequest'],
      responseTime: data['responseTime'],
      header: data['header'],
      body: data['body'],
      status: data['status'],
      code: data['code'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      uid: data['uid'],
    }));
});
