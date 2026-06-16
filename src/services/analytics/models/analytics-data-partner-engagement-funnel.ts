import { z } from 'zod';
import {
  PartnersEngagementPartnersData,
  partnersEngagementPartnersData,
  partnersEngagementPartnersDataRequest,
  partnersEngagementPartnersDataResponse,
} from './partners-engagement-partners-data';
import {
  PartnersEngagementWorkspaceVisits,
  partnersEngagementWorkspaceVisits,
  partnersEngagementWorkspaceVisitsRequest,
  partnersEngagementWorkspaceVisitsResponse,
} from './partners-engagement-workspace-visits';
import {
  PartnersEngagementCollectionViews,
  partnersEngagementCollectionViews,
  partnersEngagementCollectionViewsRequest,
  partnersEngagementCollectionViewsResponse,
} from './partners-engagement-collection-views';
import {
  PartnersEngagementRequestsSent,
  partnersEngagementRequestsSent,
  partnersEngagementRequestsSentRequest,
  partnersEngagementRequestsSentResponse,
} from './partners-engagement-requests-sent';
import {
  PartnersEngagementSuccessfulRequestsSent,
  partnersEngagementSuccessfulRequestsSent,
  partnersEngagementSuccessfulRequestsSentRequest,
  partnersEngagementSuccessfulRequestsSentResponse,
} from './partners-engagement-successful-requests-sent';

/**
 * Zod schema for the AnalyticsDataPartnerEngagementFunnel model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const analyticsDataPartnerEngagementFunnel = z.lazy(() => {
  return z.object({
    allPartners: partnersEngagementPartnersData.optional(),
    workspaceVisited: partnersEngagementWorkspaceVisits.optional(),
    viewedCollection: partnersEngagementCollectionViews.optional(),
    requestSent: partnersEngagementRequestsSent.optional(),
    successfulRequests200Ok: partnersEngagementSuccessfulRequestsSent.optional(),
  });
});

/**
 *
 * @typedef  {AnalyticsDataPartnerEngagementFunnel} analyticsDataPartnerEngagementFunnel
 * @property {PartnersEngagementPartnersData} - Information about partner users and their activity.
 * @property {PartnersEngagementWorkspaceVisits} - Information about partner users' workspace visits.
 * @property {PartnersEngagementCollectionViews} - Information about partner users' views of collections in a workspace.
 * @property {PartnersEngagementRequestsSent} - Information about requests sent by partner users.
 * @property {PartnersEngagementSuccessfulRequestsSent} - Information about partner users' successful request calls in a workspace.
 */
export type AnalyticsDataPartnerEngagementFunnel = z.infer<
  typeof analyticsDataPartnerEngagementFunnel
>;

/**
 * Zod schema for mapping API responses to the AnalyticsDataPartnerEngagementFunnel application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const analyticsDataPartnerEngagementFunnelResponse = z.lazy(() => {
  return z
    .object({
      all_partners: partnersEngagementPartnersDataResponse.optional(),
      workspace_visited: partnersEngagementWorkspaceVisitsResponse.optional(),
      viewed_collection: partnersEngagementCollectionViewsResponse.optional(),
      request_sent: partnersEngagementRequestsSentResponse.optional(),
      successful_requests_200OK: partnersEngagementSuccessfulRequestsSentResponse.optional(),
    })
    .transform((data) => ({
      allPartners: data['all_partners'],
      workspaceVisited: data['workspace_visited'],
      viewedCollection: data['viewed_collection'],
      requestSent: data['request_sent'],
      successfulRequests200Ok: data['successful_requests_200OK'],
    }));
});

/**
 * Zod schema for mapping the AnalyticsDataPartnerEngagementFunnel application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const analyticsDataPartnerEngagementFunnelRequest = z.lazy(() => {
  return z
    .object({
      allPartners: partnersEngagementPartnersDataRequest.optional(),
      workspaceVisited: partnersEngagementWorkspaceVisitsRequest.optional(),
      viewedCollection: partnersEngagementCollectionViewsRequest.optional(),
      requestSent: partnersEngagementRequestsSentRequest.optional(),
      successfulRequests200Ok: partnersEngagementSuccessfulRequestsSentRequest.optional(),
    })
    .transform((data) => ({
      all_partners: data['allPartners'],
      workspace_visited: data['workspaceVisited'],
      viewed_collection: data['viewedCollection'],
      request_sent: data['requestSent'],
      successful_requests_200OK: data['successfulRequests200Ok'],
    }));
});
