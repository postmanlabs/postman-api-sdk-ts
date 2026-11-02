import { z } from 'zod';

/**
 * Zod schema for the RulesetAssignmentSummary model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const rulesetAssignmentSummary = z.lazy(() => {
  return z.object({
    rulesetId: z.string(),
    targetType: z.string(),
    targetId: z.string(),
  });
});

/**
 * Information about the ruleset assignment.
 * @typedef {RulesetAssignmentSummary} rulesetAssignmentSummary
 * @property {string} rulesetId - The assigned ruleset's ID.
 * @property {RulesetAssignmentSummaryTargetType} targetType - The assignment target type.
 * @property {string} targetId - The target governance group's ID.
 */
export type RulesetAssignmentSummary = z.infer<typeof rulesetAssignmentSummary>;

/**
 * Zod schema for mapping API responses to the RulesetAssignmentSummary application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const rulesetAssignmentSummaryResponse = z.lazy(() => {
  return z
    .object({
      rulesetId: z.string(),
      targetType: z.string(),
      targetId: z.string(),
    })
    .transform((data) => ({
      rulesetId: data['rulesetId'],
      targetType: data['targetType'],
      targetId: data['targetId'],
    }));
});

/**
 * Zod schema for mapping the RulesetAssignmentSummary application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const rulesetAssignmentSummaryRequest = z.lazy(() => {
  return z
    .object({
      rulesetId: z.string(),
      targetType: z.string(),
      targetId: z.string(),
    })
    .transform((data) => ({
      rulesetId: data['rulesetId'],
      targetType: data['targetType'],
      targetId: data['targetId'],
    }));
});
