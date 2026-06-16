import { z } from 'zod';
import { ActivityFeedStatus, activityFeedStatus } from './activity-feed-status';

/**
 * Zod schema for the ActivityFeed model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const activityFeed = z.lazy(() => {
  return z.object({
    resolvedAt: z.string().optional(),
    resolvedBy: z.number().optional(),
    status: activityFeedStatus.optional(),
  });
});

/**
 * 
 * @typedef  {ActivityFeed} activityFeed   
 * @property {string} - The date and time at which the resolution status was last updated.
 * @property {number} - The ID of the user that updated the secret's resolution status.
 * @property {ActivityFeedStatus} - The secret's current resolution status:
- `ACTIVE` — The secret is active.
- `FALSE_POSITIVE` — The discovered secret is not an actual secret.
- `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue.
- `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it.

 */
export type ActivityFeed = z.infer<typeof activityFeed>;

/**
 * Zod schema for mapping API responses to the ActivityFeed application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const activityFeedResponse = z.lazy(() => {
  return z
    .object({
      resolvedAt: z.string().optional(),
      resolvedBy: z.number().optional(),
      status: activityFeedStatus.optional(),
    })
    .transform((data) => ({
      resolvedAt: data['resolvedAt'],
      resolvedBy: data['resolvedBy'],
      status: data['status'],
    }));
});

/**
 * Zod schema for mapping the ActivityFeed application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const activityFeedRequest = z.lazy(() => {
  return z
    .object({
      resolvedAt: z.string().optional(),
      resolvedBy: z.number().optional(),
      status: activityFeedStatus.optional(),
    })
    .transform((data) => ({
      resolvedAt: data['resolvedAt'],
      resolvedBy: data['resolvedBy'],
      status: data['status'],
    }));
});
