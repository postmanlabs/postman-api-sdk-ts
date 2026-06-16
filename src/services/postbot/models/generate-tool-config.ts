import { z } from 'zod';
import { ConfigLanguage, configLanguage } from './config-language';
import { AgentFramework, agentFramework } from './agent-framework';

/**
 * Zod schema for the GenerateToolConfig model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const generateToolConfig = z.lazy(() => {
  return z.object({
    language: configLanguage,
    agentFramework: agentFramework,
  });
});

/**
 * Information about the request.
 * @typedef  {GenerateToolConfig} generateToolConfig - Information about the request. - Information about the request.
 * @property {ConfigLanguage} - The programming language to use.
 * @property {AgentFramework} - The AI agent framework to use. Note that the `autogen` framework only supports the `python` language.
 */
export type GenerateToolConfig = z.infer<typeof generateToolConfig>;

/**
 * Zod schema for mapping API responses to the GenerateToolConfig application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateToolConfigResponse = z.lazy(() => {
  return z
    .object({
      language: configLanguage,
      agentFramework: agentFramework,
    })
    .transform((data) => ({
      language: data['language'],
      agentFramework: data['agentFramework'],
    }));
});

/**
 * Zod schema for mapping the GenerateToolConfig application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateToolConfigRequest = z.lazy(() => {
  return z
    .object({
      language: configLanguage,
      agentFramework: agentFramework,
    })
    .transform((data) => ({
      language: data['language'],
      agentFramework: data['agentFramework'],
    }));
});
