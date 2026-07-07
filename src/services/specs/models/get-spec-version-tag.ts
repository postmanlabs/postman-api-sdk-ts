import { z } from 'zod';
import {
  GetSpecVersionTagData,
  getSpecVersionTagData,
  getSpecVersionTagDataRequest,
  getSpecVersionTagDataResponse,
} from './get-spec-version-tag-data';

/**
 * Zod schema for the GetSpecVersionTag model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getSpecVersionTag = z.lazy(() => {
  return z.object({
    data: z.array(getSpecVersionTagData).optional(),
  });
});

/**
 *
 * @typedef  {GetSpecVersionTag} getSpecVersionTag
 * @property {GetSpecVersionTagData[]} - A list of the version tag's files and folders.
 */
export type GetSpecVersionTag = z.infer<typeof getSpecVersionTag>;

/**
 * Zod schema for mapping API responses to the GetSpecVersionTag application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSpecVersionTagResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(getSpecVersionTagDataResponse).optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the GetSpecVersionTag application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSpecVersionTagRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(getSpecVersionTagDataRequest).optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});
