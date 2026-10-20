import { z } from 'zod';

/**
 * Zod schema for the RulesetCreate model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const rulesetCreate = z.lazy(() => {
  return z.object({
    name: z
      .string()
      .max(255)
      .regex(/^[a-zA-Z0-9_.-]+$/),
    description: z.string().max(1000),
    engine: z.string(),
    format: z.string(),
    content: z.string(),
  });
});

/**
 * Information about the ruleset.
 * @typedef {RulesetCreate} rulesetCreate
 * @property {string} name - The ruleset's name. Must be unique within the team and only contain letters, numbers, hyphens, underscores, and periods.
 * @property {string} description - The ruleset's description.
 * @property {RulesetCreateEngine} engine - The governance engine that runs the ruleset.
 * @property {RulesetCreateFormat} format - The type of resource the ruleset governs.
 * @property {string} content - The ruleset's content, up to a maximum of 500 KB (UTF-8).
 */
export type RulesetCreate = z.infer<typeof rulesetCreate>;

/**
 * Zod schema for mapping API responses to the RulesetCreate application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const rulesetCreateResponse = z.lazy(() => {
  return z
    .object({
      name: z
        .string()
        .max(255)
        .regex(/^[a-zA-Z0-9_.-]+$/),
      description: z.string().max(1000),
      engine: z.string(),
      format: z.string(),
      content: z.string(),
    })
    .transform((data) => ({
      name: data['name'],
      description: data['description'],
      engine: data['engine'],
      format: data['format'],
      content: data['content'],
    }));
});

/**
 * Zod schema for mapping the RulesetCreate application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const rulesetCreateRequest = z.lazy(() => {
  return z
    .object({
      name: z
        .string()
        .max(255)
        .regex(/^[a-zA-Z0-9_.-]+$/),
      description: z.string().max(1000),
      engine: z.string(),
      format: z.string(),
      content: z.string(),
    })
    .transform((data) => ({
      name: data['name'],
      description: data['description'],
      engine: data['engine'],
      format: data['format'],
      content: data['content'],
    }));
});
