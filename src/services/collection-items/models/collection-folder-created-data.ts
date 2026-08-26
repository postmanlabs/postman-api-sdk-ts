import { z } from 'zod';

/**
 * Zod schema for the CollectionFolderCreatedData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionFolderCreatedData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    order: z
      .array(z.string())
      .refine((items) => new Set(items.map((item) => JSON.stringify(item))).size === items.length, {
        message: 'Array items must be unique',
      })
      .optional(),
    owner: z.string().optional(),
    folder: z.string().optional().nullable(),
    folders: z.array(z.string()).optional(),
    requests: z.array(z.string()).optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    collection: z.string().optional(),
    description: z.string().optional(),
    foldersOrder: z
      .array(z.string())
      .refine((items) => new Set(items.map((item) => JSON.stringify(item))).size === items.length, {
        message: 'Array items must be unique',
      })
      .optional(),
    lastUpdatedBy: z.string().optional(),
    additionalProperties: z.record(z.string(), z.unknown()).optional(),
  });
});

/**
 * Information about the collection folder. For a complete list of properties, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 * @typedef {CollectionFolderCreatedData} collectionFolderCreatedData
 * @property {string} id - The folder's ID.
 * @property {string} name - The folder's name.
 * @property {string[]} order - A list of request IDs and their order in the created folder.
 * @property {string} owner - The user ID of the folder's owner.
 * @property {string} folder - Information about the folder.
 * @property {string[]} folders - A list of folders.
 * @property {string[]} requests - A list of requests.
 * @property {string} createdAt - The folder's creation date and time.
 * @property {string} updatedAt - The date and time at which the folder was last updated.
 * @property {string} collection - The collection ID that the folder belongs to.
 * @property {string} description - The folder's description.
 * @property {string[]} foldersOrder - A list of folder IDs and their order in the collection.
 * @property {string} lastUpdatedBy - The user ID of the user that last updated the folder.
 */
export type CollectionFolderCreatedData = z.infer<typeof collectionFolderCreatedData>;

/**
 * Zod schema for mapping API responses to the CollectionFolderCreatedData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionFolderCreatedDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      order: z
        .array(z.string())
        .refine(
          (items) => new Set(items.map((item) => JSON.stringify(item))).size === items.length,
          { message: 'Array items must be unique' },
        )
        .optional(),
      owner: z.string().optional(),
      folder: z.string().optional().nullable(),
      folders: z.array(z.string()).optional(),
      requests: z.array(z.string()).optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      collection: z.string().optional(),
      description: z.string().optional(),
      folders_order: z
        .array(z.string())
        .refine(
          (items) => new Set(items.map((item) => JSON.stringify(item))).size === items.length,
          { message: 'Array items must be unique' },
        )
        .optional(),
      lastUpdatedBy: z.string().optional(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>([
        'id',
        'name',
        'order',
        'owner',
        'folder',
        'folders',
        'requests',
        'createdAt',
        'updatedAt',
        'collection',
        'description',
        'folders_order',
        'lastUpdatedBy',
      ]);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        id: data['id'],
        name: data['name'],
        order: data['order'],
        owner: data['owner'],
        folder: data['folder'],
        folders: data['folders'],
        requests: data['requests'],
        createdAt: data['createdAt'],
        updatedAt: data['updatedAt'],
        collection: data['collection'],
        description: data['description'],
        foldersOrder: data['folders_order'],
        lastUpdatedBy: data['lastUpdatedBy'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the CollectionFolderCreatedData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionFolderCreatedDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      order: z
        .array(z.string())
        .refine(
          (items) => new Set(items.map((item) => JSON.stringify(item))).size === items.length,
          { message: 'Array items must be unique' },
        )
        .optional(),
      owner: z.string().optional(),
      folder: z.string().optional().nullable(),
      folders: z.array(z.string()).optional(),
      requests: z.array(z.string()).optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      collection: z.string().optional(),
      description: z.string().optional(),
      foldersOrder: z
        .array(z.string())
        .refine(
          (items) => new Set(items.map((item) => JSON.stringify(item))).size === items.length,
          { message: 'Array items must be unique' },
        )
        .optional(),
      lastUpdatedBy: z.string().optional(),
      additionalProperties: z.record(z.string(), z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      id: data['id'],
      name: data['name'],
      order: data['order'],
      owner: data['owner'],
      folder: data['folder'],
      folders: data['folders'],
      requests: data['requests'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      collection: data['collection'],
      description: data['description'],
      folders_order: data['foldersOrder'],
      lastUpdatedBy: data['lastUpdatedBy'],
    }));
});
