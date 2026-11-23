import { z } from 'zod';
import {
  RulesetSummary,
  rulesetSummary,
  rulesetSummaryRequest,
  rulesetSummaryResponse,
} from './ruleset-summary';

/**
 * Zod schema for the Ruleset model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const ruleset = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    description: z.string().optional(),
    engine: z.string().optional(),
    format: z.string().optional(),
    type: z.string().optional(),
    createdBy: z.string().optional(),
    updatedBy: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    content: z.string().optional(),
  });
});

/**
 * @typedef {Ruleset} ruleset
 * @property {string} id - The ruleset's ID.
 * @property {string} name - The ruleset's name.
 * @property {string} description - The ruleset's description.
 * @property {RulesetEngine} engine - The governance engine the ruleset targets.
 * @property {RulesetFormat} format - The resource the ruleset governs.
 * @property {RulesetType} type - The ruleset's type:

- `system` — Rulesets managed by Postman (for example, the Postman standard and OWASP rulesets that ship with governance) and can't be updated or deleted.
- `custom` — Rulesets created and managed by your team.

 * @property {string} createdBy - The ID of the user who created the ruleset.
 * @property {string} updatedBy - The ID of the user who last updated the ruleset.
 * @property {string} createdAt - The date and time at which the ruleset was created.
 * @property {string} updatedAt - The date and time at which the ruleset was last updated.
 * @property {string} content - The ruleset's content, up to a maximum of 500 KB (UTF-8).
 */
export type Ruleset = z.infer<typeof ruleset>;

/**
 * Zod schema for mapping API responses to the Ruleset application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const rulesetResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      description: z.string().optional(),
      engine: z.string().optional(),
      format: z.string().optional(),
      type: z.string().optional(),
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      description: data['description'],
      engine: data['engine'],
      format: data['format'],
      type: data['type'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      content: data['content'],
    }));
});

/**
 * Zod schema for mapping the Ruleset application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const rulesetRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      description: z.string().optional(),
      engine: z.string().optional(),
      format: z.string().optional(),
      type: z.string().optional(),
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      description: data['description'],
      engine: data['engine'],
      format: data['format'],
      type: data['type'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      content: data['content'],
    }));
});
