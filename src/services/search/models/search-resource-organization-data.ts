import { z } from 'zod';

/**
 * Zod schema for the SearchResourceOrganizationData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchResourceOrganizationData = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    isVerified: z.boolean().optional(),
  });
});

/**
 * Information about the organization that published the resource. This returns a null value for the `user` publisher type.
 * @typedef  {SearchResourceOrganizationData} searchResourceOrganizationData - Information about the organization that published the resource. This returns a null value for the `user` publisher type. - Information about the organization that published the resource. This returns a null value for the `user` publisher type.
 * @property {string} - The organization's ID.
 * @property {string} - The organization's name.
 * @property {boolean} - If true, the organization is verified by Postman.
 */
export type SearchResourceOrganizationData = z.infer<typeof searchResourceOrganizationData>;

/**
 * Zod schema for mapping API responses to the SearchResourceOrganizationData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchResourceOrganizationDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      isVerified: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      isVerified: data['isVerified'],
    }));
});

/**
 * Zod schema for mapping the SearchResourceOrganizationData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchResourceOrganizationDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      isVerified: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      isVerified: data['isVerified'],
    }));
});
