import { z } from 'zod';
import { Elements, elements, elementsRequest, elementsResponse } from './elements';
import { Meta, meta, metaRequest, metaResponse } from './meta';

/**
 * Zod schema for the ListPrivateNetworkWorkspacesOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const listPrivateNetworkWorkspacesOkResponse = z.lazy(() => {
  return z.object({
    elements: z.array(elements).optional(),
    folders: z.array(z.any()).optional(),
    meta: meta.optional(),
  });
});

/**
 *
 * @typedef  {ListPrivateNetworkWorkspacesOkResponse} listPrivateNetworkWorkspacesOkResponse
 * @property {Elements[]} - A list of Private API Network elements.
 * @property {any[]} - This property is deprecated and only returns an empty array.
 * @property {Meta} - The response's non-standard meta information.
 */
export type ListPrivateNetworkWorkspacesOkResponse = z.infer<
  typeof listPrivateNetworkWorkspacesOkResponse
>;

/**
 * Zod schema for mapping API responses to the ListPrivateNetworkWorkspacesOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listPrivateNetworkWorkspacesOkResponseResponse = z.lazy(() => {
  return z
    .object({
      elements: z.array(elementsResponse).optional(),
      folders: z.array(z.any()).optional(),
      meta: metaResponse.optional(),
    })
    .transform((data) => ({
      elements: data['elements'],
      folders: data['folders'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the ListPrivateNetworkWorkspacesOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listPrivateNetworkWorkspacesOkResponseRequest = z.lazy(() => {
  return z
    .object({
      elements: z.array(elementsRequest).optional(),
      folders: z.array(z.any()).optional(),
      meta: metaRequest.optional(),
    })
    .transform((data) => ({
      elements: data['elements'],
      folders: data['folders'],
      meta: data['meta'],
    }));
});
