import { z } from 'zod';

/**
 * Zod schema for the CollectionRequestUpdatedData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRequestUpdatedData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    description: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    owner: z.string().optional(),
    lastUpdatedBy: z.string().optional(),
    lastRevision: z.number().optional(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 * Information about the updated request. For a complete list of properties, refer to the **Request** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 * @typedef  {CollectionRequestUpdatedData} collectionRequestUpdatedData - Information about the updated request. For a complete list of properties, refer to the **Request** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). - Information about the updated request. For a complete list of properties, refer to the **Request** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 * @property {string} - The request's ID.
 * @property {string} - The request's name.
 * @property {string} - The request's description.
 * @property {string} - The request's creation date and time.
 * @property {string} - The date and time at which the request was last updated.
 * @property {string} - The user ID of the request's owner.
 * @property {string} - The user ID of the user that last updated the request.
 * @property {number} - An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource.
 */
export type CollectionRequestUpdatedData = z.infer<typeof collectionRequestUpdatedData>;

/**
 * Zod schema for mapping API responses to the CollectionRequestUpdatedData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestUpdatedDataResponse = z.lazy(() => {
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
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the CollectionRequestUpdatedData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestUpdatedDataRequest = z.lazy(() => {
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
    }));
});
