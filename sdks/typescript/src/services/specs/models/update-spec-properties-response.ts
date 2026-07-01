import { z } from 'zod';
import { SpecType, specType } from './spec-type';

/**
 * Zod schema for the UpdateSpecPropertiesResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateSpecPropertiesResponse = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    type: specType.optional(),
    createdBy: z.number().optional(),
    updatedBy: z.number().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    name: z.string().optional(),
  });
});

/**
 *
 * @typedef  {UpdateSpecPropertiesResponse} updateSpecPropertiesResponse
 * @property {string} - The specification's ID.
 * @property {SpecType} - The type of API specification.
 * @property {number} - The ID of the user that created the specification.
 * @property {number} - The ID of the user that last updated the specification.
 * @property {string} - The date and time at which the specification was created.
 * @property {string} - The date and time at which the specification was last updated.
 * @property {string} - The API specification's name.
 */
export type UpdateSpecPropertiesResponse = z.infer<typeof updateSpecPropertiesResponse>;

/**
 * Zod schema for mapping API responses to the UpdateSpecPropertiesResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateSpecPropertiesResponseResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      type: specType.optional(),
      createdBy: z.number().optional(),
      updatedBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      type: data['type'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the UpdateSpecPropertiesResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateSpecPropertiesResponseRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      type: specType.optional(),
      createdBy: z.number().optional(),
      updatedBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      type: data['type'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      name: data['name'],
    }));
});
