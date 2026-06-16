import { z } from 'zod';
import {
  GenerateToolResponseData,
  generateToolResponseData,
  generateToolResponseDataRequest,
  generateToolResponseDataResponse,
} from './generate-tool-response-data';

/**
 * Zod schema for the GenerateToolResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const generateToolResponse = z.lazy(() => {
  return z.object({
    data: generateToolResponseData.optional(),
  });
});

/**
 *
 * @typedef  {GenerateToolResponse} generateToolResponse
 * @property {GenerateToolResponseData} - The generated response data.
 */
export type GenerateToolResponse = z.infer<typeof generateToolResponse>;

/**
 * Zod schema for mapping API responses to the GenerateToolResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateToolResponseResponse = z.lazy(() => {
  return z
    .object({
      data: generateToolResponseDataResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the GenerateToolResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateToolResponseRequest = z.lazy(() => {
  return z
    .object({
      data: generateToolResponseDataRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});
