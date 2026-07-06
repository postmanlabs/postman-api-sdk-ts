import { z } from 'zod';

/**
 * Zod schema for the PullRequestUpdated model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const pullRequestUpdated = z.lazy(() => {
  return z.object({
    createdAt: z.string().optional(),
    createdBy: z.string().optional(),
    description: z.string().optional(),
    destinationId: z.string().optional(),
    forkType: z.string().optional(),
    id: z.string().optional(),
    sourceId: z.string().optional(),
    status: z.string().optional(),
    title: z.string().optional(),
    updatedAt: z.string().optional(),
  });
});

/**
 *
 * @typedef  {PullRequestUpdated} pullRequestUpdated
 * @property {string} - The date and time at which the pull request was created.
 * @property {string} - The ID of the user who created the pull request.
 * @property {string} - The pull request's description.
 * @property {string} - The pull request's merge destination ID.
 * @property {string} - The type of forked element.
 * @property {string} - The pull request's ID.
 * @property {string} - The unique ID of the source element.
 * @property {PullRequestUpdatedStatus} - The pull request's status.
 * @property {string} - The pull request's title.
 * @property {string} - The date and time at which the pull request was updated.
 */
export type PullRequestUpdated = z.infer<typeof pullRequestUpdated>;

/**
 * Zod schema for mapping API responses to the PullRequestUpdated application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pullRequestUpdatedResponse = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      createdBy: z.string().optional(),
      description: z.string().optional(),
      destinationId: z.string().optional(),
      forkType: z.string().optional(),
      id: z.string().optional(),
      sourceId: z.string().optional(),
      status: z.string().optional(),
      title: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      description: data['description'],
      destinationId: data['destinationId'],
      forkType: data['forkType'],
      id: data['id'],
      sourceId: data['sourceId'],
      status: data['status'],
      title: data['title'],
      updatedAt: data['updatedAt'],
    }));
});

/**
 * Zod schema for mapping the PullRequestUpdated application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pullRequestUpdatedRequest = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      createdBy: z.string().optional(),
      description: z.string().optional(),
      destinationId: z.string().optional(),
      forkType: z.string().optional(),
      id: z.string().optional(),
      sourceId: z.string().optional(),
      status: z.string().optional(),
      title: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      description: data['description'],
      destinationId: data['destinationId'],
      forkType: data['forkType'],
      id: data['id'],
      sourceId: data['sourceId'],
      status: data['status'],
      title: data['title'],
      updatedAt: data['updatedAt'],
    }));
});
