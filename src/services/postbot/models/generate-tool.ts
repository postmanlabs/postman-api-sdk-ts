import { z } from 'zod';
import { Config, config, configRequest, configResponse } from './config';

/**
 * Zod schema for the GenerateTool model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const generateTool = z.lazy(() => {
  return z.object({
    requestId: z.string(),
    collectionId: z.string(),
    config: config,
  });
});

/**
 * @typedef {GenerateTool} generateTool
 * @property {string} requestId - The public collection's request ID.
 * @property {string} collectionId - The Public API Network collection's ID.
 * @property {Config} config - Information about the request.
 */
export type GenerateTool = z.infer<typeof generateTool>;

/**
 * Zod schema for mapping API responses to the GenerateTool application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateToolResponse1 = z.lazy(() => {
  return z
    .object({
      requestId: z.string(),
      collectionId: z.string(),
      config: configResponse,
    })
    .transform((data) => ({
      requestId: data['requestId'],
      collectionId: data['collectionId'],
      config: data['config'],
    }));
});

/**
 * Zod schema for mapping the GenerateTool application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateToolRequest = z.lazy(() => {
  return z
    .object({
      requestId: z.string(),
      collectionId: z.string(),
      config: configRequest,
    })
    .transform((data) => ({
      requestId: data['requestId'],
      collectionId: data['collectionId'],
      config: data['config'],
    }));
});
