import { z } from 'zod';

/**
 * Zod schema for the ErrorTitleDetailsMessageErrorDetails model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const errorTitleDetailsMessageErrorDetails = z.lazy(() => {
  return z.object({
    workspaceId: z.string().optional(),
  });
});

/**
 * Information about the error.
 * @typedef  {ErrorTitleDetailsMessageErrorDetails} errorTitleDetailsMessageErrorDetails - Information about the error. - Information about the error.
 * @property {string} - The workspace's ID.
 */
export type ErrorTitleDetailsMessageErrorDetails = z.infer<
  typeof errorTitleDetailsMessageErrorDetails
>;

/**
 * Zod schema for mapping API responses to the ErrorTitleDetailsMessageErrorDetails application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorTitleDetailsMessageErrorDetailsResponse = z.lazy(() => {
  return z
    .object({
      workspaceId: z.string().optional(),
    })
    .transform((data) => ({
      workspaceId: data['workspaceId'],
    }));
});

/**
 * Zod schema for mapping the ErrorTitleDetailsMessageErrorDetails application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorTitleDetailsMessageErrorDetailsRequest = z.lazy(() => {
  return z
    .object({
      workspaceId: z.string().optional(),
    })
    .transform((data) => ({
      workspaceId: data['workspaceId'],
    }));
});
