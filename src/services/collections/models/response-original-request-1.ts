import { z } from 'zod';
import { Url, url, urlRequest, urlResponse } from './url';
import {
  CreateCollectionSchemaAuth,
  createCollectionSchemaAuth,
  createCollectionSchemaAuthRequest,
  createCollectionSchemaAuthResponse,
} from './create-collection-schema-auth';
import {
  ResponseHeader2_1,
  responseHeader2_1,
  responseHeader2_1Request,
  responseHeader2_1Response,
} from './response-header-2-1';
import {
  CollectionRequestBody1,
  collectionRequestBody1,
  collectionRequestBody1Request,
  collectionRequestBody1Response,
} from './collection-request-body-1';

/**
 * Zod schema for the ResponseOriginalRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const responseOriginalRequest1 = z.lazy(() => {
  return z.object({
    url: url.optional(),
    auth: createCollectionSchemaAuth.optional(),
    method: z.string().optional(),
    description: z.string().optional().nullable(),
    header: z.array(responseHeader2_1).optional(),
    body: collectionRequestBody1.optional(),
  });
});

/**
 * Information about the collection request.
 * @typedef  {ResponseOriginalRequest1} responseOriginalRequest1 - Information about the collection request. - Information about the collection request.
 * @property {Url} - Information about the URL.
 * @property {CreateCollectionSchemaAuth} - The [authorization type supported by Postman](https://learning.postman.com/docs/sending-requests/authorization/authorization-types/).
 * @property {string} - The request's standard HTTP method.
 * @property {string} - The request's description.
 * @property {ResponseHeader2_1[]} - A list of headers.
 * @property {CollectionRequestBody1} - Information about the collection's request body. To set this to "none", pass an empty object.
 */
export type ResponseOriginalRequest1 = z.infer<typeof responseOriginalRequest1>;

/**
 * Zod schema for mapping API responses to the ResponseOriginalRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const responseOriginalRequest1Response = z.lazy(() => {
  return z
    .object({
      url: urlResponse.optional(),
      auth: createCollectionSchemaAuthResponse.optional(),
      method: z.string().optional(),
      description: z.string().optional().nullable(),
      header: z.array(responseHeader2_1Response).optional(),
      body: collectionRequestBody1Response.optional(),
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
 * Zod schema for mapping the ResponseOriginalRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const responseOriginalRequest1Request = z.lazy(() => {
  return z
    .object({
      url: urlRequest.optional(),
      auth: createCollectionSchemaAuthRequest.optional(),
      method: z.string().optional(),
      description: z.string().optional().nullable(),
      header: z.array(responseHeader2_1Request).optional(),
      body: collectionRequestBody1Request.optional(),
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
