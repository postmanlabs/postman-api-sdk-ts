import { z } from 'zod';
import { Sdk, sdk, sdkRequest, sdkResponse } from './sdk';
import {
  MetaNextCursorTotal,
  metaNextCursorTotal,
  metaNextCursorTotalRequest,
  metaNextCursorTotalResponse,
} from './meta-next-cursor-total';

/**
 * Zod schema for the SdkList model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const sdkList = z.lazy(() => {
  return z.object({
    data: z.array(sdk),
    meta: metaNextCursorTotal,
  });
});

/**
 * @typedef {SdkList} sdkList
 * @property {Sdk[]} data - A list of SDKs.
 * @property {MetaNextCursorTotal} meta - The response's meta information for paginated results.
 */
export type SdkList = z.infer<typeof sdkList>;

/**
 * Zod schema for mapping API responses to the SdkList application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sdkListResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(sdkResponse),
      meta: metaNextCursorTotalResponse,
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the SdkList application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sdkListRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(sdkRequest),
      meta: metaNextCursorTotalRequest,
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
