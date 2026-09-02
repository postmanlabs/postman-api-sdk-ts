import { z } from 'zod';

/**
 * Zod schema for the SecretActivityFeedData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const secretActivityFeedData = z.lazy(() => {
  return z.object({
    resolvedAt: z.string().optional(),
    resolvedBy: z.number().optional(),
    status: z.string().optional(),
  });
});

/**
 * @typedef {SecretActivityFeedData} secretActivityFeedData
 * @property {string} resolvedAt - The date and time at which the resolution status was last updated.
 * @property {number} resolvedBy - The ID of the user that updated the secret's resolution status.
 * @property {SecretResolutionStatus} status - The secret's resolution status:
- `ACTIVE` — The secret is active.
- `FALSE_POSITIVE` — The discovered secret is not an actual secret.
- `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue.
- `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it.

 */
export type SecretActivityFeedData = z.infer<typeof secretActivityFeedData>;

/**
 * Zod schema for mapping API responses to the SecretActivityFeedData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const secretActivityFeedDataResponse = z.lazy(() => {
  return z
    .object({
      resolvedAt: z.string().optional(),
      resolvedBy: z.number().optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      resolvedAt: data['resolvedAt'],
      resolvedBy: data['resolvedBy'],
      status: data['status'],
    }));
});

/**
 * Zod schema for mapping the SecretActivityFeedData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const secretActivityFeedDataRequest = z.lazy(() => {
  return z
    .object({
      resolvedAt: z.string().optional(),
      resolvedBy: z.number().optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      resolvedAt: data['resolvedAt'],
      resolvedBy: data['resolvedBy'],
      status: data['status'],
    }));
});
