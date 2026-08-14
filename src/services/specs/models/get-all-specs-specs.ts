import { z } from 'zod';

/**
 * Zod schema for the GetAllSpecsSpecs model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAllSpecsSpecs = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    type: z.string().optional(),
    createdBy: z.number().optional(),
    updatedBy: z.number().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
  });
});

/**
 * Information about the API specification.
 * @typedef {GetAllSpecsSpecs} getAllSpecsSpecs
 * @property {string} id - The specification's ID.
 * @property {string} name - The specification's name.
 * @property {SpecType} type - The type of API specification.
 * @property {number} createdBy - The user ID of the user that created the specification.
 * @property {number} updatedBy - The ID of the user who updated the specification.
 * @property {string} createdAt - The date and time at which the specification was created.
 * @property {string} updatedAt - The date and time at which the specification was updated.
 */
export type GetAllSpecsSpecs = z.infer<typeof getAllSpecsSpecs>;

/**
 * Zod schema for mapping API responses to the GetAllSpecsSpecs application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAllSpecsSpecsResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      type: z.string().optional(),
      createdBy: z.number().optional(),
      updatedBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      type: data['type'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});

/**
 * Zod schema for mapping the GetAllSpecsSpecs application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAllSpecsSpecsRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      type: z.string().optional(),
      createdBy: z.number().optional(),
      updatedBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      type: data['type'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});
