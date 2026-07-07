import { z } from 'zod';

/**
 * Zod schema for the CollectionAccessKeysData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionAccessKeysData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    token: z.string().optional(),
    status: z.string().optional(),
    teamId: z.number().optional(),
    userId: z.number().optional(),
    collectionId: z.string().optional(),
    expiresAfter: z.string().optional(),
    lastUsedAt: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    deletedAt: z.string().optional().nullable(),
  });
});

/**
 * Information about the collection access key.
 * @typedef  {CollectionAccessKeysData} collectionAccessKeysData - Information about the collection access key. - Information about the collection access key.
 * @property {string} - The collection access key's ID.
 * @property {string} - The masked collection access key.
 * @property {CollectionAccessKeysDataStatus} - The token's active status.
 * @property {number} - The team ID of the collection access key's owner.
 * @property {number} - The user ID of the collection access key's owner.
 * @property {string} - The collection access key's associated collection ID.
 * @property {string} - The date and time at which the collection access key expires. Collection access keys are valid for 60 days. If unused, the access key expires after 60 days. If someone uses the access key, then its expiration date increases by another 60 days.
 * @property {string} - The date and time at which the collection access key was used. If the collection key is unused, this returns an empty string value.
 * @property {string} - The date and time at which the collection access key was created.
 * @property {string} - The date and time at which the collection access key was updated.
 * @property {string} - The date and time at which the collection access key was revoked.
 */
export type CollectionAccessKeysData = z.infer<typeof collectionAccessKeysData>;

/**
 * Zod schema for mapping API responses to the CollectionAccessKeysData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionAccessKeysDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      token: z.string().optional(),
      status: z.string().optional(),
      teamId: z.number().optional(),
      userId: z.number().optional(),
      collectionId: z.string().optional(),
      expiresAfter: z.string().optional(),
      lastUsedAt: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      deletedAt: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      token: data['token'],
      status: data['status'],
      teamId: data['teamId'],
      userId: data['userId'],
      collectionId: data['collectionId'],
      expiresAfter: data['expiresAfter'],
      lastUsedAt: data['lastUsedAt'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      deletedAt: data['deletedAt'],
    }));
});

/**
 * Zod schema for mapping the CollectionAccessKeysData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionAccessKeysDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      token: z.string().optional(),
      status: z.string().optional(),
      teamId: z.number().optional(),
      userId: z.number().optional(),
      collectionId: z.string().optional(),
      expiresAfter: z.string().optional(),
      lastUsedAt: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      deletedAt: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      token: data['token'],
      status: data['status'],
      teamId: data['teamId'],
      userId: data['userId'],
      collectionId: data['collectionId'],
      expiresAfter: data['expiresAfter'],
      lastUsedAt: data['lastUsedAt'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      deletedAt: data['deletedAt'],
    }));
});
