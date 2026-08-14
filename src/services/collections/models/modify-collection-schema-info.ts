import { z } from 'zod';

/**
 * Zod schema for the ModifyCollectionSchemaInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const modifyCollectionSchemaInfo = z.lazy(() => {
  return z.object({
    name: z.string(),
    _postmanId: z.string().optional(),
    description: z.string().optional(),
    schema: z.string(),
    updatedAt: z.string().optional(),
    createdat: z.string().optional(),
    lastUpdatedBy: z.string().optional(),
    uid: z.string().optional(),
  });
});

/**
 * Information about the collection.
 * @typedef {ModifyCollectionSchemaInfo} modifyCollectionSchemaInfo
 * @property {string} name - The collection's name.
 * @property {string} _postmanId - The collection's Postman ID. This field exists for Postman Collection Format v1 compatibility.
 * @property {string} description - The collection's description.
 * @property {InformationSchema2} schema - The "https://schema.postman.com/json/collection/v2.1.0/collection.json" Postman Collection Format v2.1.0 schema.
 * @property {string} updatedAt - The date and time when the collection was last updated.
 * @property {string} createdat - The date and time when the collection was created.
 * @property {string} lastUpdatedBy - The user ID of the person who last updated the collection.
 * @property {string} uid - The collection's unique ID.
 */
export type ModifyCollectionSchemaInfo = z.infer<typeof modifyCollectionSchemaInfo>;

/**
 * Zod schema for mapping API responses to the ModifyCollectionSchemaInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const modifyCollectionSchemaInfoResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      _postman_id: z.string().optional(),
      description: z.string().optional(),
      schema: z.string(),
      updatedAt: z.string().optional(),
      createdat: z.string().optional(),
      lastUpdatedBy: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      _postmanId: data['_postman_id'],
      description: data['description'],
      schema: data['schema'],
      updatedAt: data['updatedAt'],
      createdat: data['createdat'],
      lastUpdatedBy: data['lastUpdatedBy'],
      uid: data['uid'],
    }));
});

/**
 * Zod schema for mapping the ModifyCollectionSchemaInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const modifyCollectionSchemaInfoRequest = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      _postmanId: z.string().optional(),
      description: z.string().optional(),
      schema: z.string(),
      updatedAt: z.string().optional(),
      createdat: z.string().optional(),
      lastUpdatedBy: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      _postman_id: data['_postmanId'],
      description: data['description'],
      schema: data['schema'],
      updatedAt: data['updatedAt'],
      createdat: data['createdat'],
      lastUpdatedBy: data['lastUpdatedBy'],
      uid: data['uid'],
    }));
});
