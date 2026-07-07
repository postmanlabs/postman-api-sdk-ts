import { AnalyticsResource } from './models/analytics-resource';
import { AnalyticsMetrics } from './models/analytics-metrics';
import { AnalyticsView } from './models/analytics-view';
import { AnalyticsDuration } from './models/analytics-duration';
import { AnalyticsUserType } from './models/analytics-user-type';
import { AnalyticsEntityType } from './models/analytics-entity-type';

export interface GetAnalyticsDataParams {
  resource: AnalyticsResource;
  metrics: AnalyticsMetrics;
  view?: AnalyticsView;
  workspaceType?: string;
  userId?: string;
  duration?: AnalyticsDuration;
  requestId?: string;
  responseStatus?: string;
  attentionType?: string;
  period?: string;
  userType?: AnalyticsUserType;
  entityType?: AnalyticsEntityType;
  limit?: number;
  offset?: number;
}

export interface GetAnalyticsMetadataParams {
  include?: string;
  resources?: string;
  metrics?: AnalyticsMetrics;
}
