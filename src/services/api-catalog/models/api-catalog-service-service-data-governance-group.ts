import { z } from 'zod';

/**
 * Zod schema for the ApiCatalogServiceServiceDataGovernanceGroup model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const apiCatalogServiceServiceDataGovernanceGroup = z.lazy(() => {
  return z.object({
    id: z.string(),
    name: z.string(),
  });
});

/**
 * The governance group that the workspace belongs to. If no governance group is assigned, this returns a null value.
 * @typedef  {ApiCatalogServiceServiceDataGovernanceGroup} apiCatalogServiceServiceDataGovernanceGroup - The governance group that the workspace belongs to. If no governance group is assigned, this returns a null value. - The governance group that the workspace belongs to. If no governance group is assigned, this returns a null value.
 * @property {string} - The governance group's ID.
 * @property {string} - The governance group's name.
 */
export type ApiCatalogServiceServiceDataGovernanceGroup = z.infer<
  typeof apiCatalogServiceServiceDataGovernanceGroup
>;

/**
 * Zod schema for mapping API responses to the ApiCatalogServiceServiceDataGovernanceGroup application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogServiceServiceDataGovernanceGroupResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the ApiCatalogServiceServiceDataGovernanceGroup application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogServiceServiceDataGovernanceGroupRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});
