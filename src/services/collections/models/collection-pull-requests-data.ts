import { z } from 'zod';

/**
 * Zod schema for the CollectionPullRequestsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionPullRequestsData = z.lazy(() => {
  return z.object({
    createdAt: z.string().optional(),
    createdBy: z.string().optional(),
    description: z.string().optional(),
    destinationId: z.string().optional(),
    href: z.string().optional(),
    id: z.string().optional(),
    sourceId: z.string().optional(),
    status: z.string().optional(),
    comment: z.string().optional(),
    title: z.string().optional(),
    updatedBy: z.string().optional(),
    updatedAt: z.string().optional(),
  });
});

/**
 * Information about the pull request.
 * @typedef  {CollectionPullRequestsData} collectionPullRequestsData - Information about the pull request. - Information about the pull request.
 * @property {string} - The date and time at which the pull request was created.
 * @property {string} - The ID of the user who created the pull request.
 * @property {string} - The pull request's description.
 * @property {string} - The pull request's merge destination ID.
 * @property {string} - A URL where you can view the pull request's details.
 * @property {string} - The pull request's ID.
 * @property {string} - The pull request's source (parent) ID.
 * @property {CollectionPullRequestsDataStatus} - The pull request's current status.
 * @property {string} - If the pull request is declined, a comment about why the pull request was declined.
 * @property {string} - The pull request's title.
 * @property {string} - The ID of the user who updated the pull request.
 * @property {string} - The date and time at which the pull request was updated.
 */
export type CollectionPullRequestsData = z.infer<typeof collectionPullRequestsData>;

/**
 * Zod schema for mapping API responses to the CollectionPullRequestsData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionPullRequestsDataResponse = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      createdBy: z.string().optional(),
      description: z.string().optional(),
      destinationId: z.string().optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      sourceId: z.string().optional(),
      status: z.string().optional(),
      comment: z.string().optional(),
      title: z.string().optional(),
      updatedBy: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      description: data['description'],
      destinationId: data['destinationId'],
      href: data['href'],
      id: data['id'],
      sourceId: data['sourceId'],
      status: data['status'],
      comment: data['comment'],
      title: data['title'],
      updatedBy: data['updatedBy'],
      updatedAt: data['updatedAt'],
    }));
});

/**
 * Zod schema for mapping the CollectionPullRequestsData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionPullRequestsDataRequest = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      createdBy: z.string().optional(),
      description: z.string().optional(),
      destinationId: z.string().optional(),
      href: z.string().optional(),
      id: z.string().optional(),
      sourceId: z.string().optional(),
      status: z.string().optional(),
      comment: z.string().optional(),
      title: z.string().optional(),
      updatedBy: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      description: data['description'],
      destinationId: data['destinationId'],
      href: data['href'],
      id: data['id'],
      sourceId: data['sourceId'],
      status: data['status'],
      comment: data['comment'],
      title: data['title'],
      updatedBy: data['updatedBy'],
      updatedAt: data['updatedAt'],
    }));
});
