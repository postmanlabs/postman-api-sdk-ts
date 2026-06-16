import { z } from 'zod';

/**
 * Zod schema for the GetMockServerResponses model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getMockServerResponses = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    statusCode: z.number().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    createdBy: z.string().optional(),
    updatedBy: z.string().optional(),
  });
});

/**
 * Information about the server response.
 * @typedef  {GetMockServerResponses} getMockServerResponses - Information about the server response. - Information about the server response.
 * @property {string} - The server response's ID.
 * @property {string} - The server response's name.
 * @property {number} - The server response's 5xx HTTP response code.
 * @property {string} - The date and time at which the server response was created.
 * @property {string} - The date and time at which the server response was last updated.
 * @property {string} - The user ID of the user who created the server response.
 * @property {string} - The user ID of the user who last updated the server response.
 */
export type GetMockServerResponses = z.infer<typeof getMockServerResponses>;

/**
 * Zod schema for mapping API responses to the GetMockServerResponses application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMockServerResponsesResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      statusCode: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      statusCode: data['statusCode'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
    }));
});

/**
 * Zod schema for mapping the GetMockServerResponses application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMockServerResponsesRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      statusCode: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      statusCode: data['statusCode'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
    }));
});
