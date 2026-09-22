import { z } from 'zod';

/**
 * Zod schema for the UpdateMockConfigData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateMockConfigData = z.lazy(() => {
  return z.object({
    serverResponseId: z.string().optional().nullable(),
  });
});

/**
 * The mock server's configuration settings.
 * @typedef {UpdateMockConfigData} updateMockConfigData
 * @property {string} serverResponseId - The server response ID. This sets the given server response as the default response for each request. To deactivate a server response, pass a null value.
 */
export type UpdateMockConfigData = z.infer<typeof updateMockConfigData>;

/**
 * Zod schema for mapping API responses to the UpdateMockConfigData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateMockConfigDataResponse = z.lazy(() => {
  return z
    .object({
      serverResponseId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      serverResponseId: data['serverResponseId'],
    }));
});

/**
 * Zod schema for mapping the UpdateMockConfigData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateMockConfigDataRequest = z.lazy(() => {
  return z
    .object({
      serverResponseId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      serverResponseId: data['serverResponseId'],
    }));
});
