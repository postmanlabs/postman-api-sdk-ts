import { z } from 'zod';
import {
  analyticsDataSummary,
  analyticsDataSummaryRequest,
  analyticsDataSummaryResponse,
} from './analytics-data-summary';
import {
  analyticsDataPartnerEngagementFunnel,
  analyticsDataPartnerEngagementFunnelRequest,
  analyticsDataPartnerEngagementFunnelResponse,
} from './analytics-data-partner-engagement-funnel';

/**
 * Zod schema for the GetAnalyticsDataData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAnalyticsDataData = z.lazy(() => {
  return z.union([analyticsDataSummary, analyticsDataPartnerEngagementFunnel]);
});

/**
 * @typedef {GetAnalyticsDataData} getAnalyticsDataData
 */
export type GetAnalyticsDataData = z.infer<typeof getAnalyticsDataData>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getAnalyticsDataDataResponse = z.lazy(() => {
  return z.union([analyticsDataSummaryResponse, analyticsDataPartnerEngagementFunnelResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getAnalyticsDataDataRequest = z.lazy(() => {
  return z.union([analyticsDataSummaryRequest, analyticsDataPartnerEngagementFunnelRequest]);
});
