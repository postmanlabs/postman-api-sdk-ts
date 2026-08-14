import { z } from 'zod';

/**
 * Zod schema for the CollectionFolderUpdatedData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionFolderUpdatedData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    description: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    owner: z.string().optional(),
    lastUpdatedBy: z.string().optional(),
    lastRevision: z.number().optional(),
    collection: z.string().optional(),
    folder: z.string().optional().nullable(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 * The folder's updated information, including the updated properties. For a complete list of properties, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v1.0.0/draft-07/collection.json).
 * @typedef {CollectionFolderUpdatedData} collectionFolderUpdatedData
 * @property {string} id - The folder's ID.
 * @property {string} name - The folder's name.
 * @property {string} description - The folder's description.
 * @property {string} createdAt - The folder's creation date and time.
 * @property {string} updatedAt - The date and time at which the folder was last updated.
 * @property {string} owner - The user ID of the folder's owner.
 * @property {string} lastUpdatedBy - The user ID of the user that last updated the folder.
 * @property {number} lastRevision - An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource.
 * @property {string} collection - The collection ID that the folder belongs to.
 * @property {string} folder - Information about the folder.
 */
export type CollectionFolderUpdatedData = z.infer<typeof collectionFolderUpdatedData>;

/**
 * Zod schema for mapping API responses to the CollectionFolderUpdatedData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionFolderUpdatedDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      description: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      owner: z.string().optional(),
      lastUpdatedBy: z.string().optional(),
      lastRevision: z.number().optional(),
      collection: z.string().optional(),
      folder: z.string().optional().nullable(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>([
        'id',
        'name',
        'description',
        'createdAt',
        'updatedAt',
        'owner',
        'lastUpdatedBy',
        'lastRevision',
        'collection',
        'folder',
      ]);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        id: data['id'],
        name: data['name'],
        description: data['description'],
        createdAt: data['createdAt'],
        updatedAt: data['updatedAt'],
        owner: data['owner'],
        lastUpdatedBy: data['lastUpdatedBy'],
        lastRevision: data['lastRevision'],
        collection: data['collection'],
        folder: data['folder'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the CollectionFolderUpdatedData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionFolderUpdatedDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      description: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      owner: z.string().optional(),
      lastUpdatedBy: z.string().optional(),
      lastRevision: z.number().optional(),
      collection: z.string().optional(),
      folder: z.string().optional().nullable(),
      additionalProperties: z.record(z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      id: data['id'],
      name: data['name'],
      description: data['description'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      owner: data['owner'],
      lastUpdatedBy: data['lastUpdatedBy'],
      lastRevision: data['lastRevision'],
      collection: data['collection'],
      folder: data['folder'],
    }));
});
