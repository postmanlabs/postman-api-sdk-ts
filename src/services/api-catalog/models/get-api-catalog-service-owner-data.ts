import { z } from 'zod';
import {
  GetApiCatalogServiceOwnerDataType,
  getApiCatalogServiceOwnerDataType,
} from './get-api-catalog-service-owner-data-type';

/**
 * Zod schema for the GetApiCatalogServiceOwnerData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceOwnerData = z.lazy(() => {
  return z.object({
    type: getApiCatalogServiceOwnerDataType,
    id: z.string(),
    name: z.string().nullable(),
    profilePicUrl: z.string().nullable(),
    publicHandle: z.string().nullable(),
  });
});

/**
 * The service's owner. If no owner is assigned, this returns a null value.
 * @typedef  {GetApiCatalogServiceOwnerData} getApiCatalogServiceOwnerData - The service's owner. If no owner is assigned, this returns a null value. - The service's owner. If no owner is assigned, this returns a null value.
 * @property {GetApiCatalogServiceOwnerDataType} - The type of owner.
 * @property {string} - The owner's ID.
 * @property {string} - The owner's display name.
 * @property {string} - The URL of the owner's profile picture.
 * @property {string} - The URL of the owner's public profile.
 */
export type GetApiCatalogServiceOwnerData = z.infer<typeof getApiCatalogServiceOwnerData>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceOwnerData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceOwnerDataResponse = z.lazy(() => {
  return z
    .object({
      type: getApiCatalogServiceOwnerDataType,
      id: z.string(),
      name: z.string().nullable(),
      profilePicUrl: z.string().nullable(),
      publicHandle: z.string().nullable(),
    })
    .transform((data) => ({
      type: data['type'],
      id: data['id'],
      name: data['name'],
      profilePicUrl: data['profilePicUrl'],
      publicHandle: data['publicHandle'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServiceOwnerData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceOwnerDataRequest = z.lazy(() => {
  return z
    .object({
      type: getApiCatalogServiceOwnerDataType,
      id: z.string(),
      name: z.string().nullable(),
      profilePicUrl: z.string().nullable(),
      publicHandle: z.string().nullable(),
    })
    .transform((data) => ({
      type: data['type'],
      id: data['id'],
      name: data['name'],
      profilePicUrl: data['profilePicUrl'],
      publicHandle: data['publicHandle'],
    }));
});
