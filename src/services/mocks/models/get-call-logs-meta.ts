import { z } from 'zod';

/**
 * Zod schema for the GetCallLogsMeta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getCallLogsMeta = z.lazy(() => {
  return z.object({
    nextCursor: z.string().optional().nullable(),
  });
});

/**
 * The response's non-standard meta information.
 * @typedef  {GetCallLogsMeta} getCallLogsMeta - The response's non-standard meta information. - The response's non-standard meta information.
 * @property {string} - The pagination cursor that points to the next record in the results set.
 */
export type GetCallLogsMeta = z.infer<typeof getCallLogsMeta>;

/**
 * Zod schema for mapping API responses to the GetCallLogsMeta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getCallLogsMetaResponse = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional().nullable(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
    }));
});

/**
 * Zod schema for mapping the GetCallLogsMeta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getCallLogsMetaRequest = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional().nullable(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
    }));
});
