import { z } from 'zod';
import {
  CreateSpecVersionTagResponseData,
  createSpecVersionTagResponseData,
  createSpecVersionTagResponseDataRequest,
  createSpecVersionTagResponseDataResponse,
} from './create-spec-version-tag-response-data';

/**
 * Zod schema for the CreateSpecVersionTagResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createSpecVersionTagResponse = z.lazy(() => {
  return z.object({
    data: createSpecVersionTagResponseData.optional(),
  });
});

/**
 * @typedef {CreateSpecVersionTagResponse} createSpecVersionTagResponse
 * @property {CreateSpecVersionTagResponseData} data - Information about the created version tag.
 */
export type CreateSpecVersionTagResponse = z.infer<typeof createSpecVersionTagResponse>;

/**
 * Zod schema for mapping API responses to the CreateSpecVersionTagResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createSpecVersionTagResponseResponse = z.lazy(() => {
  return z
    .object({
      data: createSpecVersionTagResponseDataResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the CreateSpecVersionTagResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createSpecVersionTagResponseRequest = z.lazy(() => {
  return z
    .object({
      data: createSpecVersionTagResponseDataRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});
