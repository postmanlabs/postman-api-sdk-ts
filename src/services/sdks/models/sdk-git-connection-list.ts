import { z } from 'zod';
import {
  SdkGitConnection,
  sdkGitConnection,
  sdkGitConnectionRequest,
  sdkGitConnectionResponse,
} from './sdk-git-connection';
import {
  MetaNextCursorTotal,
  metaNextCursorTotal,
  metaNextCursorTotalRequest,
  metaNextCursorTotalResponse,
} from './meta-next-cursor-total';

/**
 * Zod schema for the SdkGitConnectionList model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const sdkGitConnectionList = z.lazy(() => {
  return z.object({
    data: z.array(sdkGitConnection),
    meta: metaNextCursorTotal,
  });
});

/**
 * @typedef {SdkGitConnectionList} sdkGitConnectionList
 * @property {SdkGitConnection[]} data - A list of SDK Git connections.
 * @property {MetaNextCursorTotal} meta - The response's meta information for paginated results.
 */
export type SdkGitConnectionList = z.infer<typeof sdkGitConnectionList>;

/**
 * Zod schema for mapping API responses to the SdkGitConnectionList application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sdkGitConnectionListResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(sdkGitConnectionResponse),
      meta: metaNextCursorTotalResponse,
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the SdkGitConnectionList application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sdkGitConnectionListRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(sdkGitConnectionRequest),
      meta: metaNextCursorTotalRequest,
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
