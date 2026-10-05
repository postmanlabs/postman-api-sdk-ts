import { z } from 'zod';

/**
 * Zod schema for the SecretResolutionsHistoryData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const secretResolutionsHistoryData = z.lazy(() => {
  return z.object({
    actor: z.number().optional(),
    createdAt: z.string().optional(),
    resolution: z.string().optional(),
  });
});

/**
 * @typedef {SecretResolutionsHistoryData} secretResolutionsHistoryData
 * @property {number} actor - The ID of the user that updated the secret's resolution status.
 * @property {string} createdAt - The date and time at which the resolution status was updated.
 * @property {SecretResolutionStatus} resolution - The secret's resolution status:
- `ACTIVE` — The secret is active.
- `FALSE_POSITIVE` — The discovered secret is not an actual secret.
- `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue.
- `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it.

 */
export type SecretResolutionsHistoryData = z.infer<typeof secretResolutionsHistoryData>;

/**
 * Zod schema for mapping API responses to the SecretResolutionsHistoryData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const secretResolutionsHistoryDataResponse = z.lazy(() => {
  return z
    .object({
      actor: z.number().optional(),
      createdAt: z.string().optional(),
      resolution: z.string().optional(),
    })
    .transform((data) => ({
      actor: data['actor'],
      createdAt: data['createdAt'],
      resolution: data['resolution'],
    }));
});

/**
 * Zod schema for mapping the SecretResolutionsHistoryData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const secretResolutionsHistoryDataRequest = z.lazy(() => {
  return z
    .object({
      actor: z.number().optional(),
      createdAt: z.string().optional(),
      resolution: z.string().optional(),
    })
    .transform((data) => ({
      actor: data['actor'],
      createdAt: data['createdAt'],
      resolution: data['resolution'],
    }));
});
