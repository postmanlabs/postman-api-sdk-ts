import { z } from 'zod';
import {
  RulesetSummary,
  rulesetSummary,
  rulesetSummaryRequest,
  rulesetSummaryResponse,
} from './ruleset-summary';
import {
  GetSpecVersionTagsMeta,
  getSpecVersionTagsMeta,
  getSpecVersionTagsMetaRequest,
  getSpecVersionTagsMetaResponse,
} from '../../common/get-spec-version-tags-meta';

/**
 * Zod schema for the RulesetList model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const rulesetList = z.lazy(() => {
  return z.object({
    data: z.array(rulesetSummary).optional(),
    meta: getSpecVersionTagsMeta.optional(),
  });
});

/**
 * A paginated list of ruleset summaries.
 * @typedef {RulesetList} rulesetList
 * @property {RulesetSummary[]} data - A list of rulesets.
 * @property {GetSpecVersionTagsMeta} meta - The response's meta information for paginated results.
 */
export type RulesetList = z.infer<typeof rulesetList>;

/**
 * Zod schema for mapping API responses to the RulesetList application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const rulesetListResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(rulesetSummaryResponse).optional(),
      meta: getSpecVersionTagsMetaResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the RulesetList application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const rulesetListRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(rulesetSummaryRequest).optional(),
      meta: getSpecVersionTagsMetaRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
