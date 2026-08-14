import { z } from 'zod';
import {
  CreatePackageResponse,
  createPackageResponse,
  createPackageResponseRequest,
  createPackageResponseResponse,
} from './create-package-response';

/**
 * Zod schema for the UnifiedPackage model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const unifiedPackage = z.lazy(() => {
  return z.object({
    data: createPackageResponse.optional(),
  });
});

/**
 * Information about the created package and its index script content.
 * @typedef {UnifiedPackage} unifiedPackage
 * @property {CreatePackageResponse} data - Information about the package.
 */
export type UnifiedPackage = z.infer<typeof unifiedPackage>;

/**
 * Zod schema for mapping API responses to the UnifiedPackage application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const unifiedPackageResponse = z.lazy(() => {
  return z
    .object({
      data: createPackageResponseResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the UnifiedPackage application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const unifiedPackageRequest = z.lazy(() => {
  return z
    .object({
      data: createPackageResponseRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});
