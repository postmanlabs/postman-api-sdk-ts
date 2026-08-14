import { z } from 'zod';

/**
 * Zod schema for the GenerateToolResponseData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const generateToolResponseData = z.lazy(() => {
  return z.object({
    text: z.string().optional(),
  });
});

/**
 * The generated response data.
 * @typedef {GenerateToolResponseData} generateToolResponseData
 * @property {string} text - The generated tool code.
 */
export type GenerateToolResponseData = z.infer<typeof generateToolResponseData>;

/**
 * Zod schema for mapping API responses to the GenerateToolResponseData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateToolResponseDataResponse = z.lazy(() => {
  return z
    .object({
      text: z.string().optional(),
    })
    .transform((data) => ({
      text: data['text'],
    }));
});

/**
 * Zod schema for mapping the GenerateToolResponseData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateToolResponseDataRequest = z.lazy(() => {
  return z
    .object({
      text: z.string().optional(),
    })
    .transform((data) => ({
      text: data['text'],
    }));
});
