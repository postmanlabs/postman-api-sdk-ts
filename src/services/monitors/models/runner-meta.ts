import { z } from 'zod';

/**
 * Zod schema for the RunnerMeta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const runnerMeta = z.lazy(() => {
  return z.object({
    model: z.string().optional(),
    action: z.string().optional(),
    url: z.string().optional(),
    nextCursor: z.string().optional(),
  });
});

/**
 * The response's meta information for paginated results.
 * @typedef {RunnerMeta} runnerMeta
 * @property {string} model - The `runnerInstance` value.
 * @property {string} action - The `find` value.
 * @property {string} url - The reference URL to the resource.
 * @property {string} nextCursor - The pagination cursor that points to the next record in the results set.
 */
export type RunnerMeta = z.infer<typeof runnerMeta>;

/**
 * Zod schema for mapping API responses to the RunnerMeta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const runnerMetaResponse = z.lazy(() => {
  return z
    .object({
      model: z.string().optional(),
      action: z.string().optional(),
      url: z.string().optional(),
      nextCursor: z.string().optional(),
    })
    .transform((data) => ({
      model: data['model'],
      action: data['action'],
      url: data['url'],
      nextCursor: data['nextCursor'],
    }));
});

/**
 * Zod schema for mapping the RunnerMeta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const runnerMetaRequest = z.lazy(() => {
  return z
    .object({
      model: z.string().optional(),
      action: z.string().optional(),
      url: z.string().optional(),
      nextCursor: z.string().optional(),
    })
    .transform((data) => ({
      model: data['model'],
      action: data['action'],
      url: data['url'],
      nextCursor: data['nextCursor'],
    }));
});
