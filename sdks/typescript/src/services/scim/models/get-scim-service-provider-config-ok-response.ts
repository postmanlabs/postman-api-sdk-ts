import { z } from 'zod';
import { Patch, patch, patchRequest, patchResponse } from './patch';
import { Bulk, bulk, bulkRequest, bulkResponse } from './bulk';
import { Filter, filter, filterRequest, filterResponse } from './filter';
import {
  ChangePassword,
  changePassword,
  changePasswordRequest,
  changePasswordResponse,
} from './change-password';
import { Sort, sort, sortRequest, sortResponse } from './sort';
import {
  AuthenticationSchemes,
  authenticationSchemes,
  authenticationSchemesRequest,
  authenticationSchemesResponse,
} from './authentication-schemes';
import { Etag, etag, etagRequest, etagResponse } from './etag';
import {
  SuccessfulResponseMeta7,
  successfulResponseMeta7,
  successfulResponseMeta7Request,
  successfulResponseMeta7Response,
} from './successful-response-meta-7';

/**
 * Zod schema for the GetScimServiceProviderConfigOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getScimServiceProviderConfigOkResponse = z.lazy(() => {
  return z.object({
    schemas: z.array(z.string()).optional(),
    documentationUri: z.string().optional(),
    patch: patch.optional(),
    bulk: bulk.optional(),
    filter: filter.optional(),
    changePassword: changePassword.optional(),
    sort: sort.optional(),
    authenticationSchemes: z.array(authenticationSchemes).optional(),
    etag: etag.optional(),
    meta: successfulResponseMeta7.optional(),
  });
});

/**
 * Information about Postman's SCIM API configurations and supported operations.
 * @typedef  {GetScimServiceProviderConfigOkResponse} getScimServiceProviderConfigOkResponse - Information about Postman's SCIM API configurations and supported operations. - Information about Postman's SCIM API configurations and supported operations.
 * @property {string[]} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {string} - A link to the URI's documentation.
 * @property {Patch} - Information about patch configuration.
 * @property {Bulk} - Information about bulk configuration.
 * @property {Filter} - Information about the filter configuration.
 * @property {ChangePassword} - Information about the change password configuration.
 * @property {Sort} - Information about the sort configuration.
 * @property {AuthenticationSchemes[]} - A list of authentication schemes.
 * @property {Etag} - Information about the [entity tag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) (Etag) HTTP response header configuration.
 * @property {SuccessfulResponseMeta7} - The response's non-standard meta information.
 */
export type GetScimServiceProviderConfigOkResponse = z.infer<
  typeof getScimServiceProviderConfigOkResponse
>;

/**
 * Zod schema for mapping API responses to the GetScimServiceProviderConfigOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getScimServiceProviderConfigOkResponseResponse = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      documentationUri: z.string().optional(),
      patch: patchResponse.optional(),
      bulk: bulkResponse.optional(),
      filter: filterResponse.optional(),
      changePassword: changePasswordResponse.optional(),
      sort: sortResponse.optional(),
      authenticationSchemes: z.array(authenticationSchemesResponse).optional(),
      etag: etagResponse.optional(),
      meta: successfulResponseMeta7Response.optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      documentationUri: data['documentationUri'],
      patch: data['patch'],
      bulk: data['bulk'],
      filter: data['filter'],
      changePassword: data['changePassword'],
      sort: data['sort'],
      authenticationSchemes: data['authenticationSchemes'],
      etag: data['etag'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the GetScimServiceProviderConfigOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getScimServiceProviderConfigOkResponseRequest = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      documentationUri: z.string().optional(),
      patch: patchRequest.optional(),
      bulk: bulkRequest.optional(),
      filter: filterRequest.optional(),
      changePassword: changePasswordRequest.optional(),
      sort: sortRequest.optional(),
      authenticationSchemes: z.array(authenticationSchemesRequest).optional(),
      etag: etagRequest.optional(),
      meta: successfulResponseMeta7Request.optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      documentationUri: data['documentationUri'],
      patch: data['patch'],
      bulk: data['bulk'],
      filter: data['filter'],
      changePassword: data['changePassword'],
      sort: data['sort'],
      authenticationSchemes: data['authenticationSchemes'],
      etag: data['etag'],
      meta: data['meta'],
    }));
});
