import { z } from 'zod';
import {
  SuccessfulResponseRequests,
  successfulResponseRequests,
  successfulResponseRequestsRequest,
  successfulResponseRequestsResponse,
} from './successful-response-requests';
import { Meta, meta, metaRequest, metaResponse } from './meta';

/**
 * Zod schema for the ListPrivateNetworkAddRequestsOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const listPrivateNetworkAddRequestsOkResponse = z.lazy(() => {
  return z.object({
    requests: z.array(successfulResponseRequests).optional(),
    meta: meta.optional(),
  });
});

/**
 * @typedef {ListPrivateNetworkAddRequestsOkResponse} listPrivateNetworkAddRequestsOkResponse
 * @property {SuccessfulResponseRequests[]} requests - A list of requests to add elements to the Private API Network.
 * @property {Meta} meta - The response's non-standard meta information.
 */
export type ListPrivateNetworkAddRequestsOkResponse = z.infer<
  typeof listPrivateNetworkAddRequestsOkResponse
>;

/**
 * Zod schema for mapping API responses to the ListPrivateNetworkAddRequestsOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listPrivateNetworkAddRequestsOkResponseResponse = z.lazy(() => {
  return z
    .object({
      requests: z.array(successfulResponseRequestsResponse).optional(),
      meta: metaResponse.optional(),
    })
    .transform((data) => ({
      requests: data['requests'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the ListPrivateNetworkAddRequestsOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listPrivateNetworkAddRequestsOkResponseRequest = z.lazy(() => {
  return z
    .object({
      requests: z.array(successfulResponseRequestsRequest).optional(),
      meta: metaRequest.optional(),
    })
    .transform((data) => ({
      requests: data['requests'],
      meta: data['meta'],
    }));
});
