import { z } from 'zod';
import {
  SecretActivityFeedData,
  secretActivityFeedData,
  secretActivityFeedDataRequest,
  secretActivityFeedDataResponse,
} from './secret-activity-feed-data';

/**
 * Zod schema for the SecretScannerMetaData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const secretScannerMetaData = z.lazy(() => {
  return z.object({
    activityFeed: z.array(secretActivityFeedData).optional(),
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
 * The response's meta information for paginated results.
 * @typedef {SecretScannerMetaData} secretScannerMetaData
 * @property {SecretActivityFeedData[]} activityFeed - The history of the secret's resolution status changes.
 * @property {string} cursor - The pointer to the first record of the set of paginated results.
 * @property {number} limit - The maximum number of rows to return in the response.
 * @property {string} nextCursor - The Base64-encoded value that points to the next record in the results set.
 * @property {string} obfuscatedSecret - The secret's obfuscated value.
 * @property {string} secretHash - The secret's SHA-256 hash.
 * @property {string} secretType - The type of thesecret.
 * @property {number} total - The total number of discovered secret locations.
 */
export type SecretScannerMetaData = z.infer<typeof secretScannerMetaData>;

/**
 * Zod schema for mapping API responses to the SecretScannerMetaData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const secretScannerMetaDataResponse = z.lazy(() => {
  return z
    .object({
      activityFeed: z.array(secretActivityFeedDataResponse).optional(),
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
 * Zod schema for mapping the SecretScannerMetaData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const secretScannerMetaDataRequest = z.lazy(() => {
  return z
    .object({
      activityFeed: z.array(secretActivityFeedDataRequest).optional(),
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
