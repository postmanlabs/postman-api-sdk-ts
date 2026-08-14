import { z } from 'zod';

/**
 * Zod schema for the Entities model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const entities = z.lazy(() => {
  return z.object({
    entityId: z.string().optional(),
    entityType: z.string().optional(),
  });
});

/**
 * @typedef {Entities} entities
 * @property {string} entityId - The element's unique ID.
 * @property {EntitiesEntityType} entityType - The type of Postman element.
 */
export type Entities = z.infer<typeof entities>;

/**
 * Zod schema for mapping API responses to the Entities application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const entitiesResponse = z.lazy(() => {
  return z
    .object({
      entityId: z.string().optional(),
      entityType: z.string().optional(),
    })
    .transform((data) => ({
      entityId: data['entityId'],
      entityType: data['entityType'],
    }));
});

/**
 * Zod schema for mapping the Entities application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const entitiesRequest = z.lazy(() => {
  return z
    .object({
      entityId: z.string().optional(),
      entityType: z.string().optional(),
    })
    .transform((data) => ({
      entityId: data['entityId'],
      entityType: data['entityType'],
    }));
});
