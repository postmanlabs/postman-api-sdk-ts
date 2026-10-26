import { z } from 'zod';
import {
  RulesetAssignmentSummary,
  rulesetAssignmentSummary,
  rulesetAssignmentSummaryRequest,
  rulesetAssignmentSummaryResponse,
} from './ruleset-assignment-summary';

/**
 * Zod schema for the RulesetAssignmentList model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const rulesetAssignmentList = z.lazy(() => {
  return z.object({
    data: z.array(rulesetAssignmentSummary).optional(),
  });
});

/**
 * A list of ruleset assignments.
 * @typedef {RulesetAssignmentList} rulesetAssignmentList
 * @property {RulesetAssignmentSummary[]} data - The ruleset assignments.
 */
export type RulesetAssignmentList = z.infer<typeof rulesetAssignmentList>;

/**
 * Zod schema for mapping API responses to the RulesetAssignmentList application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const rulesetAssignmentListResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(rulesetAssignmentSummaryResponse).optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the RulesetAssignmentList application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const rulesetAssignmentListRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(rulesetAssignmentSummaryRequest).optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});
