import { z } from 'zod';

/**
 * Zod schema for the Config model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const config = z.lazy(() => {
  return z.object({
    language: z.string(),
    agentFramework: z.string(),
  });
});

/**
 * Information about the request.
 * @typedef {Config} config
 * @property {ConfigLanguage} language - The programming language to use.
 * @property {AgentFramework} agentFramework - The AI agent framework to use. Note that the `autogen` framework only supports the `python` language.
 */
export type Config = z.infer<typeof config>;

/**
 * Zod schema for mapping API responses to the Config application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const configResponse = z.lazy(() => {
  return z
    .object({
      language: z.string(),
      agentFramework: z.string(),
    })
    .transform((data) => ({
      language: data['language'],
      agentFramework: data['agentFramework'],
    }));
});

/**
 * Zod schema for mapping the Config application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const configRequest = z.lazy(() => {
  return z
    .object({
      language: z.string(),
      agentFramework: z.string(),
    })
    .transform((data) => ({
      language: data['language'],
      agentFramework: data['agentFramework'],
    }));
});
