import { z } from 'zod';
import {
  GovernanceGroupSummary,
  governanceGroupSummary,
  governanceGroupSummaryRequest,
  governanceGroupSummaryResponse,
} from './governance-group-summary';
import {
  GetSpecVersionTagsMeta,
  getSpecVersionTagsMeta,
  getSpecVersionTagsMetaRequest,
  getSpecVersionTagsMetaResponse,
} from '../../common/get-spec-version-tags-meta';

/**
 * Zod schema for the GovernanceGroupList model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const governanceGroupList = z.lazy(() => {
  return z.object({
    data: z.array(governanceGroupSummary).optional(),
    meta: getSpecVersionTagsMeta.optional(),
  });
});

/**
 * A paginated list of governance groups.
 * @typedef {GovernanceGroupList} governanceGroupList
 * @property {GovernanceGroupSummary[]} data - A list of governance groups.
 * @property {GetSpecVersionTagsMeta} meta - The response's meta information for paginated results.
 */
export type GovernanceGroupList = z.infer<typeof governanceGroupList>;

/**
 * Zod schema for mapping API responses to the GovernanceGroupList application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const governanceGroupListResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(governanceGroupSummaryResponse).optional(),
      meta: getSpecVersionTagsMetaResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the GovernanceGroupList application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const governanceGroupListRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(governanceGroupSummaryRequest).optional(),
      meta: getSpecVersionTagsMetaRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
