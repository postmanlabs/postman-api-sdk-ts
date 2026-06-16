import { z } from 'zod';
import {
  ActivityFeed,
  activityFeed,
  activityFeedRequest,
  activityFeedResponse,
} from './activity-feed';

/**
 * Zod schema for the SuccessfulResponseMeta2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseMeta2 = z.lazy(() => {
  return z.object({
    activityFeed: z.array(activityFeed).optional(),
    cursor: z.string().optional(),
    limit: z.number().optional(),
    nextCursor: z.string().optional().nullable(),
    obfuscatedSecret: z.string().optional(),
    secretHash: z.string().optional(),
    secretType: z.string().optional(),
    total: z.number().optional(),
  });
});

/**
 *
 * @typedef  {SuccessfulResponseMeta2} successfulResponseMeta2
 * @property {ActivityFeed[]} - The history of the secret's resolution status changes.
 * @property {string} - The pointer to the first record of the set of paginated results.
 * @property {number} - The maximum number of rows to return in the response.
 * @property {string} - The Base64-encoded value that points to the next record in the results set.
 * @property {string} - The secret's obfuscated value.
 * @property {string} - The secret's SHA-256 hash.
 * @property {string} - The type of thesecret.
 * @property {number} - The total number of discovered secret locations.
 */
export type SuccessfulResponseMeta2 = z.infer<typeof successfulResponseMeta2>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseMeta2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseMeta2Response = z.lazy(() => {
  return z
    .object({
      activityFeed: z.array(activityFeedResponse).optional(),
      cursor: z.string().optional(),
      limit: z.number().optional(),
      nextCursor: z.string().optional().nullable(),
      obfuscatedSecret: z.string().optional(),
      secretHash: z.string().optional(),
      secretType: z.string().optional(),
      total: z.number().optional(),
    })
    .transform((data) => ({
      activityFeed: data['activityFeed'],
      cursor: data['cursor'],
      limit: data['limit'],
      nextCursor: data['nextCursor'],
      obfuscatedSecret: data['obfuscatedSecret'],
      secretHash: data['secretHash'],
      secretType: data['secretType'],
      total: data['total'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseMeta2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseMeta2Request = z.lazy(() => {
  return z
    .object({
      activityFeed: z.array(activityFeedRequest).optional(),
      cursor: z.string().optional(),
      limit: z.number().optional(),
      nextCursor: z.string().optional().nullable(),
      obfuscatedSecret: z.string().optional(),
      secretHash: z.string().optional(),
      secretType: z.string().optional(),
      total: z.number().optional(),
    })
    .transform((data) => ({
      activityFeed: data['activityFeed'],
      cursor: data['cursor'],
      limit: data['limit'],
      nextCursor: data['nextCursor'],
      obfuscatedSecret: data['obfuscatedSecret'],
      secretHash: data['secretHash'],
      secretType: data['secretType'],
      total: data['total'],
    }));
});
