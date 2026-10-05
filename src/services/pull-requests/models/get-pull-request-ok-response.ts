import { z } from 'zod';
import {
  PullRequestSourceData,
  pullRequestSourceData,
  pullRequestSourceDataRequest,
  pullRequestSourceDataResponse,
} from './pull-request-source-data';
import {
  PullRequestDestinationData,
  pullRequestDestinationData,
  pullRequestDestinationDataRequest,
  pullRequestDestinationDataResponse,
} from './pull-request-destination-data';
import {
  PullRequestMergeData,
  pullRequestMergeData,
  pullRequestMergeDataRequest,
  pullRequestMergeDataResponse,
} from './pull-request-merge-data';
import {
  PullRequestReviewersData,
  pullRequestReviewersData,
  pullRequestReviewersDataRequest,
  pullRequestReviewersDataResponse,
} from './pull-request-reviewers-data';

/**
 * Zod schema for the GetPullRequestOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getPullRequestOkResponse = z.lazy(() => {
  return z.object({
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    id: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    createdBy: z.string().optional(),
    updatedBy: z.string().optional(),
    comment: z.string().optional(),
    fortkType: z.string().optional(),
    source: pullRequestSourceData.optional(),
    destination: pullRequestDestinationData.optional(),
    status: z.string().optional(),
    merge: pullRequestMergeData.optional(),
    reviewers: z.array(pullRequestReviewersData).optional(),
  });
});

/**
 * @typedef {GetPullRequestOkResponse} getPullRequestOkResponse
 * @property {string} createdAt - The date and time at which the pull request was created.
 * @property {string} updatedAt - The date and time at which the pull request was updated.
 * @property {string} id - The pull request's ID.
 * @property {string} title - The pull request's title.
 * @property {string} description - The pull request's description.
 * @property {string} createdBy - The ID of the user who created the pull request.
 * @property {string} updatedBy - The ID of the user who last updated the pull request.
 * @property {string} comment - If the pull request is a `decline` status, an optional comment about why the pull request was declined.
 * @property {string} fortkType - The type of element the pull request was forked from.
 * @property {PullRequestSourceData} source - Information about the pull request's source (parent) element.
 * @property {PullRequestDestinationData} destination - Information about the pull request destination element.
 * @property {string} status - The pull request's current review status:
- `open` — The pull request is still open.
- `approved` — The pull request was approved by its reviewers.
- `declined` — The pull request was not approved by its reviewers.

 * @property {PullRequestMergeData} merge - Information about the current progress of the pull request's merge.
 * @property {PullRequestReviewersData[]} reviewers - Information about the reviewers assigned to the pull request.
 */
export type GetPullRequestOkResponse = z.infer<typeof getPullRequestOkResponse>;

/**
 * Zod schema for mapping API responses to the GetPullRequestOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getPullRequestOkResponseResponse = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      id: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
      comment: z.string().optional(),
      fortkType: z.string().optional(),
      source: pullRequestSourceDataResponse.optional(),
      destination: pullRequestDestinationDataResponse.optional(),
      status: z.string().optional(),
      merge: pullRequestMergeDataResponse.optional(),
      reviewers: z.array(pullRequestReviewersDataResponse).optional(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      id: data['id'],
      title: data['title'],
      description: data['description'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      comment: data['comment'],
      fortkType: data['fortkType'],
      source: data['source'],
      destination: data['destination'],
      status: data['status'],
      merge: data['merge'],
      reviewers: data['reviewers'],
    }));
});

/**
 * Zod schema for mapping the GetPullRequestOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getPullRequestOkResponseRequest = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      id: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
      comment: z.string().optional(),
      fortkType: z.string().optional(),
      source: pullRequestSourceDataRequest.optional(),
      destination: pullRequestDestinationDataRequest.optional(),
      status: z.string().optional(),
      merge: pullRequestMergeDataRequest.optional(),
      reviewers: z.array(pullRequestReviewersDataRequest).optional(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      id: data['id'],
      title: data['title'],
      description: data['description'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      comment: data['comment'],
      fortkType: data['fortkType'],
      source: data['source'],
      destination: data['destination'],
      status: data['status'],
      merge: data['merge'],
      reviewers: data['reviewers'],
    }));
});
