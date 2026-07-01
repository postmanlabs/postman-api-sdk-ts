import { z } from 'zod';

/**
 * Zod schema for the ApiCatalogErrorPathMessage model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const apiCatalogErrorPathMessage = z.lazy(() => {
  return z.object({
    path: z.string().optional(),
    message: z.string().optional(),
  });
});

/**
 * Information about the error.
 * @typedef  {ApiCatalogErrorPathMessage} apiCatalogErrorPathMessage - Information about the error. - Information about the error.
 * @property {string} - The path in which the error occurred.
 * @property {string} - The error message.
 */
export type ApiCatalogErrorPathMessage = z.infer<typeof apiCatalogErrorPathMessage>;

/**
 * Zod schema for mapping API responses to the ApiCatalogErrorPathMessage application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogErrorPathMessageResponse = z.lazy(() => {
  return z
    .object({
      path: z.string().optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      path: data['path'],
      message: data['message'],
    }));
});

/**
 * Zod schema for mapping the ApiCatalogErrorPathMessage application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogErrorPathMessageRequest = z.lazy(() => {
  return z
    .object({
      path: z.string().optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      path: data['path'],
      message: data['message'],
    }));
});
