import { z } from 'zod';
import { Url, url, urlRequest, urlResponse } from './url';
import {
  CollectionAuth,
  collectionAuth,
  collectionAuthRequest,
  collectionAuthResponse,
} from './collection-auth';
import {
  ResponseHeader2_2,
  responseHeader2_2,
  responseHeader2_2Request,
  responseHeader2_2Response,
} from '../../common/response-header-2-2';
import {
  CollectionRequestBody2,
  collectionRequestBody2,
  collectionRequestBody2Request,
  collectionRequestBody2Response,
} from './collection-request-body-2';

/**
 * Zod schema for the ResponseOriginalRequest2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const responseOriginalRequest2 = z.lazy(() => {
  return z.object({
    url: url.optional(),
    auth: collectionAuth.optional(),
    method: z.string().optional(),
    description: z.string().optional().nullable(),
    header: z.array(responseHeader2_2).optional(),
    body: collectionRequestBody2.optional(),
  });
});

/**
 * Information about the collection request.
 * @typedef  {ResponseOriginalRequest2} responseOriginalRequest2 - Information about the collection request. - Information about the collection request.
 * @property {Url} - Information about the URL.
 * @property {CollectionAuth} - The [authorization type supported by Postman](https://learning.postman.com/docs/sending-requests/authorization/authorization-types/).
 * @property {string} - The request's standard HTTP method.
 * @property {string} - The request's description.
 * @property {ResponseHeader2_2[]} - A list of headers.
 * @property {CollectionRequestBody2} - Information about the collection's request body.
 */
export type ResponseOriginalRequest2 = z.infer<typeof responseOriginalRequest2>;

/**
 * Zod schema for mapping API responses to the ResponseOriginalRequest2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const responseOriginalRequest2Response = z.lazy(() => {
  return z
    .object({
      url: urlResponse.optional(),
      auth: collectionAuthResponse.optional(),
      method: z.string().optional(),
      description: z.string().optional().nullable(),
      header: z.array(responseHeader2_2Response).optional(),
      body: collectionRequestBody2Response.optional(),
    })
    .transform((data) => ({
      url: data['url'],
      auth: data['auth'],
      method: data['method'],
      description: data['description'],
      header: data['header'],
      body: data['body'],
    }));
});

/**
 * Zod schema for mapping the ResponseOriginalRequest2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const responseOriginalRequest2Request = z.lazy(() => {
  return z
    .object({
      url: urlRequest.optional(),
      auth: collectionAuthRequest.optional(),
      method: z.string().optional(),
      description: z.string().optional().nullable(),
      header: z.array(responseHeader2_2Request).optional(),
      body: collectionRequestBody2Request.optional(),
    })
    .transform((data) => ({
      url: data['url'],
      auth: data['auth'],
      method: data['method'],
      description: data['description'],
      header: data['header'],
      body: data['body'],
    }));
});
