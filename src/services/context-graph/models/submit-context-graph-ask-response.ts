import { z } from 'zod';

/**
 * Zod schema for the SubmitContextGraphAskResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const submitContextGraphAskResponse = z.lazy(() => {
  return z.object({
    askId: z.string(),
    status: z.string(),
  });
});

/**
 * @typedef {SubmitContextGraphAskResponse} submitContextGraphAskResponse
 * @property {string} askId - The created ask's ID. Use this value to poll the ask.
 * @property {ContextGraphAskStatus} status - The ask's lifecycle state.
 */
export type SubmitContextGraphAskResponse = z.infer<typeof submitContextGraphAskResponse>;

/**
 * Zod schema for mapping API responses to the SubmitContextGraphAskResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const submitContextGraphAskResponseResponse = z.lazy(() => {
  return z
    .object({
      askId: z.string(),
      status: z.string(),
    })
    .transform((data) => ({
      askId: data['askId'],
      status: data['status'],
    }));
});

/**
 * Zod schema for mapping the SubmitContextGraphAskResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const submitContextGraphAskResponseRequest = z.lazy(() => {
  return z
    .object({
      askId: z.string(),
      status: z.string(),
    })
    .transform((data) => ({
      askId: data['askId'],
      status: data['status'],
    }));
});
