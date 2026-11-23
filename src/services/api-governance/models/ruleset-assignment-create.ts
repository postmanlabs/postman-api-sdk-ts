import { z } from 'zod';

/**
 * Zod schema for the RulesetAssignmentCreate model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const rulesetAssignmentCreate = z.lazy(() => {
  return z.object({
    targetType: z.string(),
    targetId: z.string(),
  });
});

/**
 * Information about the ruleset assignment.
 * @typedef {RulesetAssignmentCreate} rulesetAssignmentCreate
 * @property {RulesetAssignmentCreateTargetType} targetType - The assignment target type.
 * @property {string} targetId - The target governance group's ID.
 */
export type RulesetAssignmentCreate = z.infer<typeof rulesetAssignmentCreate>;

/**
 * Zod schema for mapping API responses to the RulesetAssignmentCreate application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const rulesetAssignmentCreateResponse = z.lazy(() => {
  return z
    .object({
      targetType: z.string(),
      targetId: z.string(),
    })
    .transform((data) => ({
      targetType: data['targetType'],
      targetId: data['targetId'],
    }));
});

/**
 * Zod schema for mapping the RulesetAssignmentCreate application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const rulesetAssignmentCreateRequest = z.lazy(() => {
  return z
    .object({
      targetType: z.string(),
      targetId: z.string(),
    })
    .transform((data) => ({
      targetType: data['targetType'],
      targetId: data['targetId'],
    }));
});
