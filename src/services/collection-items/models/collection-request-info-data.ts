import { z } from 'zod';

/**
 * Zod schema for the CollectionRequestInfoData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRequestInfoData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    owner: z.string().optional(),
    lastRevision: z.number().optional(),
    lastUpdatedBy: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    additionalProperties: z.record(z.string(), z.unknown()).optional(),
  });
});

/**
 * Information about the request. For a complete list of properties, refer to the **Request** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 * @typedef {CollectionRequestInfoData} collectionRequestInfoData
 * @property {string} id - The request's ID.
 * @property {string} name - The request's name.
 * @property {string} owner - The user ID of the request's owner.
 * @property {number} lastRevision - An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource.
 * @property {string} lastUpdatedBy - The user ID of the user that last updated the request.
 * @property {string} createdAt - The request's creation date and time.
 * @property {string} updatedAt - The date and time at which the request was last updated.
 */
export type CollectionRequestInfoData = z.infer<typeof collectionRequestInfoData>;

/**
 * Zod schema for mapping API responses to the CollectionRequestInfoData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestInfoDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      owner: z.string().optional(),
      lastRevision: z.number().optional(),
      lastUpdatedBy: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>([
        'id',
        'name',
        'owner',
        'lastRevision',
        'lastUpdatedBy',
        'createdAt',
        'updatedAt',
      ]);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        id: data['id'],
        name: data['name'],
        owner: data['owner'],
        lastRevision: data['lastRevision'],
        lastUpdatedBy: data['lastUpdatedBy'],
        createdAt: data['createdAt'],
        updatedAt: data['updatedAt'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the CollectionRequestInfoData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestInfoDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      owner: z.string().optional(),
      lastRevision: z.number().optional(),
      lastUpdatedBy: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      additionalProperties: z.record(z.string(), z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      id: data['id'],
      name: data['name'],
      owner: data['owner'],
      lastRevision: data['lastRevision'],
      lastUpdatedBy: data['lastUpdatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});
