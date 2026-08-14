import { z } from 'zod';

/**
 * Zod schema for the RequestEventsScript model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const requestEventsScript = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    type: z.string().optional(),
    exec: z.array(z.string()).optional(),
  });
});

/**
 * Information about the Javascript code that can be used to to perform setup or teardown operations in a response.
 * @typedef {RequestEventsScript} requestEventsScript
 * @property {string} id - The script's ID.
 * @property {string} type - The type of script. For example, `text/javascript`.
 * @property {string[]} exec - A list of script strings, where each line represents a line of code. Separate lines makes it easy to track script changes.
 */
export type RequestEventsScript = z.infer<typeof requestEventsScript>;

/**
 * Zod schema for mapping API responses to the RequestEventsScript application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestEventsScriptResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      type: z.string().optional(),
      exec: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      type: data['type'],
      exec: data['exec'],
    }));
});

/**
 * Zod schema for mapping the RequestEventsScript application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestEventsScriptRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      type: z.string().optional(),
      exec: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      type: data['type'],
      exec: data['exec'],
    }));
});
