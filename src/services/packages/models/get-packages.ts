import { z } from 'zod';
import {
  GetSpecVersionTagsMeta,
  getSpecVersionTagsMeta,
  getSpecVersionTagsMetaRequest,
  getSpecVersionTagsMetaResponse,
} from '../../common/get-spec-version-tags-meta';
import {
  PackageListData,
  packageListData,
  packageListDataRequest,
  packageListDataResponse,
} from './package-list-data';

/**
 * Zod schema for the GetPackages model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getPackages = z.lazy(() => {
  return z.object({
    meta: getSpecVersionTagsMeta,
    data: z.array(packageListData),
  });
});

/**
 * @typedef {GetPackages} getPackages
 * @property {GetSpecVersionTagsMeta} meta - The response's meta information for paginated results.
 * @property {PackageListData[]} data - A list of active packages.
 */
export type GetPackages = z.infer<typeof getPackages>;

/**
 * Zod schema for mapping API responses to the GetPackages application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getPackagesResponse = z.lazy(() => {
  return z
    .object({
      meta: getSpecVersionTagsMetaResponse,
      data: z.array(packageListDataResponse),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the GetPackages application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getPackagesRequest = z.lazy(() => {
  return z
    .object({
      meta: getSpecVersionTagsMetaRequest,
      data: z.array(packageListDataRequest),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});
