import { z } from 'zod';
import { Target, target, targetRequest, targetResponse } from './target';
import { Location, location, locationRequest, locationResponse } from './location';

/**
 * Zod schema for the TransferCollectionItems model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const transferCollectionItems = z.lazy(() => {
  return z.object({
    ids: z.array(z.string()),
    mode: z.string(),
    target: target,
    location: location,
  });
});

/**
 * 
 * @typedef  {TransferCollectionItems} transferCollectionItems   
 * @property {string[]} - A list of collection request, response, or folder UIDs to transfer.
 * @property {Mode} - The transfer operation to perform.
 * @property {Target} - Information about the item transfer's destination location.
 * @property {Location} - The transferred items' placement in the target destination:
- For `start` or `end` — Do not include the `model` and `id` values.
- For `before` or `after` — Include the `model` and `id` properties.

 */
export type TransferCollectionItems = z.infer<typeof transferCollectionItems>;

/**
 * Zod schema for mapping API responses to the TransferCollectionItems application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const transferCollectionItemsResponse = z.lazy(() => {
  return z
    .object({
      ids: z.array(z.string()),
      mode: z.string(),
      target: targetResponse,
      location: locationResponse,
    })
    .transform((data) => ({
      ids: data['ids'],
      mode: data['mode'],
      target: data['target'],
      location: data['location'],
    }));
});

/**
 * Zod schema for mapping the TransferCollectionItems application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const transferCollectionItemsRequest = z.lazy(() => {
  return z
    .object({
      ids: z.array(z.string()),
      mode: z.string(),
      target: targetRequest,
      location: locationRequest,
    })
    .transform((data) => ({
      ids: data['ids'],
      mode: data['mode'],
      target: data['target'],
      location: data['location'],
    }));
});
