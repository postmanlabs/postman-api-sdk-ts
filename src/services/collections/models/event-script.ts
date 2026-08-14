import { z } from 'zod';

/**
 * Zod schema for the EventScript model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const eventScript = z.lazy(() => {
  return z.object({
    type: z.string().optional(),
    exec: z.array(z.string()).optional(),
  });
});

/**
 * Information about the Javascript code that can be used to to perform setup or teardown operations in a response.
 * @typedef {EventScript} eventScript
 * @property {string} type - The type of script. For example, `text/javascript`.
 * @property {string[]} exec - A list of script strings, where each line represents a line of code. Separate lines makes it easy to track script changes.
 */
export type EventScript = z.infer<typeof eventScript>;

/**
 * Zod schema for mapping API responses to the EventScript application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const eventScriptResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      exec: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      type: data['type'],
      exec: data['exec'],
    }));
});

/**
 * Zod schema for mapping the EventScript application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const eventScriptRequest = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      exec: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      type: data['type'],
      exec: data['exec'],
    }));
});
