import { z } from 'zod';

/**
 * Zod schema for the Scim model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scim = z.lazy(() => {
  return z.object({
    createdBy: z.string().optional(),
    updatedBy: z.string().optional(),
  });
});

/**
 * An object containing SCIM user IDs. This object only returns if you pass the `include=scim` query parameter.
 * @typedef  {Scim} scim - An object containing SCIM user IDs. This object only returns if you pass the `include=scim` query parameter. - An object containing SCIM user IDs. This object only returns if you pass the `include=scim` query parameter.
 * @property {string} - The SCIM user ID of the user who created the workspace.
 * @property {string} - The SCIM user ID of the user who last updated the workspace.
 */
export type Scim = z.infer<typeof scim>;

/**
 * Zod schema for mapping API responses to the Scim application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimResponse = z.lazy(() => {
  return z
    .object({
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
    })
    .transform((data) => ({
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
    }));
});

/**
 * Zod schema for mapping the Scim application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimRequest = z.lazy(() => {
  return z
    .object({
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
    })
    .transform((data) => ({
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
    }));
});
