import { z } from 'zod';

/**
 * Zod schema for the CollectionResponseUpdatedData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionResponseUpdatedData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    owner: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    lastRevision: z.number().optional(),
    lastUpdatedBy: z.string().optional(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 * Information about the updated response. For a complete list of response properties, refer to the **Response** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 * @typedef  {CollectionResponseUpdatedData} collectionResponseUpdatedData - Information about the updated response. For a complete list of response properties, refer to the **Response** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). - Information about the updated response. For a complete list of response properties, refer to the **Response** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 * @property {string} - The response's ID.
 * @property {string} - The response's name.
 * @property {string} - The user ID of the response's owner.
 * @property {string} - The response's creation date and time.
 * @property {string} - The date and time at which the response was last updated.
 * @property {number} - An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource.
 * @property {string} - The user ID of the user that last updated the response.
 */
export type CollectionResponseUpdatedData = z.infer<typeof collectionResponseUpdatedData>;

/**
 * Zod schema for mapping API responses to the CollectionResponseUpdatedData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionResponseUpdatedDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      owner: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      lastRevision: z.number().optional(),
      lastUpdatedBy: z.string().optional(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>([
        'id',
        'name',
        'owner',
        'createdAt',
        'updatedAt',
        'lastRevision',
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
        owner: data['owner'],
        createdAt: data['createdAt'],
        updatedAt: data['updatedAt'],
        lastRevision: data['lastRevision'],
        lastUpdatedBy: data['lastUpdatedBy'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the CollectionResponseUpdatedData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionResponseUpdatedDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      owner: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      lastRevision: z.number().optional(),
      lastUpdatedBy: z.string().optional(),
      additionalProperties: z.record(z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      id: data['id'],
      name: data['name'],
      owner: data['owner'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      lastRevision: data['lastRevision'],
      lastUpdatedBy: data['lastUpdatedBy'],
    }));
});
