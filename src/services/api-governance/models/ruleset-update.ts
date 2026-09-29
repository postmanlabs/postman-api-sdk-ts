import { z } from 'zod';

/**
 * Zod schema for the RulesetUpdate model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const rulesetUpdate = z.lazy(() => {
  return z.object({
    name: z
      .string()
      .max(255)
      .regex(/^[a-zA-Z0-9_.-]+$/)
      .optional(),
    description: z.string().max(1000).optional(),
    content: z.string().optional(),
  });
});

/**
 * The fields to update on a ruleset.
 * @typedef {RulesetUpdate} rulesetUpdate
 * @property {string} name - The ruleset's name.
 * @property {string} description - The ruleset's description.
 * @property {string} content - The ruleset's content, up to a maximum of 500 KB (UTF-8).
 */
export type RulesetUpdate = z.infer<typeof rulesetUpdate>;

/**
 * Zod schema for mapping API responses to the RulesetUpdate application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const rulesetUpdateResponse = z.lazy(() => {
  return z
    .object({
      name: z
        .string()
        .max(255)
        .regex(/^[a-zA-Z0-9_.-]+$/)
        .optional(),
      description: z.string().max(1000).optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      description: data['description'],
      content: data['content'],
    }));
});

/**
 * Zod schema for mapping the RulesetUpdate application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const rulesetUpdateRequest = z.lazy(() => {
  return z
    .object({
      name: z
        .string()
        .max(255)
        .regex(/^[a-zA-Z0-9_.-]+$/)
        .optional(),
      description: z.string().max(1000).optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      description: data['description'],
      content: data['content'],
    }));
});
