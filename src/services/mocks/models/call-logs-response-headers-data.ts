import { z } from 'zod';
import { Description, description, descriptionRequest, descriptionResponse } from './description';

/**
 * Zod schema for the CallLogsResponseHeadersData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const callLogsResponseHeadersData = z.lazy(() => {
  return z.object({
    description: description.optional(),
    key: z.string().optional(),
    value: z.string().optional(),
  });
});

/**
 * @typedef {CallLogsResponseHeadersData} callLogsResponseHeadersData
 * @property {Description} description - The response header's description information.
 * @property {string} key - The response header's name.
 * @property {string} value - The response header's value.
 */
export type CallLogsResponseHeadersData = z.infer<typeof callLogsResponseHeadersData>;

/**
 * Zod schema for mapping API responses to the CallLogsResponseHeadersData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const callLogsResponseHeadersDataResponse = z.lazy(() => {
  return z
    .object({
      description: descriptionResponse.optional(),
      key: z.string().optional(),
      value: z.string().optional(),
    })
    .transform((data) => ({
      description: data['description'],
      key: data['key'],
      value: data['value'],
    }));
});

/**
 * Zod schema for mapping the CallLogsResponseHeadersData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const callLogsResponseHeadersDataRequest = z.lazy(() => {
  return z
    .object({
      description: descriptionRequest.optional(),
      key: z.string().optional(),
      value: z.string().optional(),
    })
    .transform((data) => ({
      description: data['description'],
      key: data['key'],
      value: data['value'],
    }));
});
