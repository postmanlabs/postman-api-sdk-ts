import { z } from 'zod';
import {
  CollectionPullRequestsData,
  collectionPullRequestsData,
  collectionPullRequestsDataRequest,
  collectionPullRequestsDataResponse,
} from './collection-pull-requests-data';

/**
 * Zod schema for the CollectionPullRequests model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionPullRequests = z.lazy(() => {
  return z.object({
    data: z.array(collectionPullRequestsData).optional(),
  });
});

/**
 *
 * @typedef  {CollectionPullRequests} collectionPullRequests
 * @property {CollectionPullRequestsData[]}
 */
export type CollectionPullRequests = z.infer<typeof collectionPullRequests>;

/**
 * Zod schema for mapping API responses to the CollectionPullRequests application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionPullRequestsResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(collectionPullRequestsDataResponse).optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the CollectionPullRequests application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionPullRequestsRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(collectionPullRequestsDataRequest).optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});
