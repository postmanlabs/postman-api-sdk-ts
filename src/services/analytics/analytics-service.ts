import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GetAnalyticsData, getAnalyticsDataResponse } from './models/get-analytics-data';
import { ErrorTypeTitleDetailStatus } from '../common/error-type-title-detail-status';
import { ErrorTypeTitleDetailStatusInstance } from '../common/error-type-title-detail-status-instance';
import { Common500Error } from '../common/common500-error';
import { GetAnalyticsDataParams, GetAnalyticsMetadataParams } from './request-params';
import {
  GetAnalyticsMetadata,
  getAnalyticsMetadataResponse,
} from './models/get-analytics-metadata';

/**
 * Service class for AnalyticsService operations.
 * Provides methods to interact with AnalyticsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class AnalyticsService extends BaseService {
  protected getAnalyticsDataConfig?: Partial<SdkConfig>;

  protected getAnalyticsMetadataConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getAnalyticsData.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAnalyticsDataConfig(config: Partial<SdkConfig>): this {
    this.getAnalyticsDataConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getAnalyticsMetadata.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAnalyticsMetadataConfig(config: Partial<SdkConfig>): this {
    this.getAnalyticsMetadataConfig = config;
    return this;
  }

  /**
 * Gets analytics data based on the specified resource, metrics, and given filters for team, internal, and public workspaces, as well as Partner Workspaces.
**Note:**

This endpoint only accepts the following resource:metric query parameter combinations:
- `user` — `workspace_active_users`, `active_users`
- `workspace` — `elements_in_workspace`, `active_workspaces`, `api_calls`, `active_collections`, `response_status`, `pending_invites`, `needs_attention`, `success_rate`, `user_requests`, `collection_error_aggregate`
- `team` — `user_api_journey`, `workspace_distribution`, `internal_workspace_distribution`, `license_consumption`, `members`, `last_autoflex_cycle`, `partner_engagement_funnel`
- `ai` — `top_agent_models_by_usage`, `activity_distribution`, `peak_activity`, `usage_leaderboard`, `credit_usage_by_model`, `messages_sent`, `credit_usage`, `agent_mode_sessions`, `new_vs_returning_users`, `agent_mode_users`
- `api_development` — `active_workspaces`, `entity_activity`, `top_entities`
- `api_testing` — `runs`, `functional_test_runs`, `performance_test_runs`
- `api_production` — `monitor_runs`, `flow_executions`
- `api_distribution` — `active_workspaces`, `pvt_network`, `partner`, `public`
- `api_management` — `workspace_activity`

The `view` query parameter only accepts the following values when called with the following resource:metric pairs:
`detailed` or `summary` — `user:active_users`, `workspace:active_workspaces`, `workspace:pending_invites`, `workspace:needs_attention`, `workspace:success_rate`, `team:partner_engagement_funnel`, `api_distribution:pvt_network`, `api_distribution:partner`, `api_distribution:public`
- `detailed`, `summary`, or `trends` — `api_development:entity_activity`, `api_testing:functional_test_runs` , `api_testing:performance_test_runs`, `api_production:monitor_runs`, `api_production:flow_executions`
- `summary` or `trend` — `api_development:active_workspaces`, `api_testing:runs`, `api_distribution:active_workspaces`, `api_management:workspace_activity`
- `summary` only — `workspace:elements_in_workspace`, `workspace:workspace_active_users`, `workspace:api_calls`, `workspace:response_status`, `team:user_api_journey`, `team:workspace_distribution`, `team:internal_workspace_distribution`, `team:license_consumption`
- `detailed` only — `workspace:active_collections`, `workspace:user_requests`, `api_development:top_entities`, `api_management:popular_workspaces`
- `trends` only — No resource:metric pair restrictions.

 * @param {AnalyticsResource} params.resource - Returns metrics and insights for API usage, success, and workspace/team trends in Postman:

- `user` — Data related to individual user activities and engagement within Postman workspaces.
- `team` — Team-level analytics, license consumption, and organizational trends.
- `workspace` — Workspace-level activities, elements, and collaboration patterns.
- `ai` — Analytics related to Agent Mode usage across workspaces, covering user activity, model usage, and credit consumption patterns.
- `api_development` — API development activity metrics that include workspace counts, entity activity by type (collection, flow, mock, specification, sdk), and top entities.
- `api_testing` — API testing metrics such as total test runs, functional test runs (Collection Runner), and performance test runs.
- `api_production` — API production metrics, including monitor run activity and production flow execution activity.
- `api_distribution` — API distribution metrics, such as active workspace counts across distribution channels.
- `api_management` — API management metrics, such as workspace activity, active counts, trends, and top workspaces.

 * @param {AnalyticsMetrics} params.metrics - Filters the response by only the given metrics. The metric must match the given `resource` value.

For a list of metrics and their related `resource` value, call the GET `/analytics-metadata` endpoint.

 * @param {AnalyticsView} [params.view] - The view type for the analytics data:
  - `detailed` — Return extensive information.
  - `summary` — Return aggregated information.
  - `trend` — Return trend information over a duration.

 * @param {string} [params.workspaceType] - A comma-separated list of `internal`, `public`, and `partner` workspace types to filter the results by.
 * @param {string} [params.userId] - A comma-separated list of user IDs to filter the results by. Only pass this parameter when calling the `user_requests` metric for the `workspace` resource.
 * @param {AnalyticsDuration} [params.duration] - Filters the response by the given duration.
 * @param {string} [params.requestId] - A comma-separated list of unique request IDs (`userId`-`requestId`) to filter the response by. Only pass this parameter when using the `user_requests` metric.
 * @param {string} [params.responseStatus] - A comma-separated list of HTTP response status codes to filter the results by. Accepts values `100` through `600`. Only pass this parameter when using the `user_requests` metric.
 * @param {string} [params.attentionType] - A comma-separated list of issues types to filter the results by. Attention types provide details about issues users or partners are facing. Accepts the `high_non_200OK_rate_for_partner` and `no_success_on_tried_request` values. Only pass this parameter when using the `needs_attention` metric.
 * @param {string} [params.period] - Filters results for a given period of time (as opposed to a range) for supported views. Use a YEAR-MONTH value for month filtering or YEAR-MONTH-DAY day filtering.
 * @param {AnalyticsUserType} [params.userType] - Filters results by a specific user type for supported views.
 * @param {AnalyticsEntityType} [params.entityType] - The type of Postman entity to filter results by.
 * @param {number} [params.limit] - The maximum number of rows to return in the response.
 * @param {number} [params.offset] - The zero-based offset of the first item to return.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetAnalyticsData>>} - Successful Response
 */
  async getAnalyticsData(
    params: GetAnalyticsDataParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetAnalyticsData> {
    const resolvedConfig = this.getResolvedConfig(this.getAnalyticsDataConfig, requestConfig);
    z.object({
      resource: z.unknown(),
      metrics: z.unknown(),
      view: z.unknown().optional(),
      workspaceType: z.string().optional(),
      userId: z.string().optional(),
      duration: z.unknown().optional(),
      requestId: z.string().optional(),
      responseStatus: z.string().optional(),
      attentionType: z.string().optional(),
      period: z.string().optional(),
      userType: z.unknown().optional(),
      entityType: z.unknown().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/analytics')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getAnalyticsDataResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addQueryParam({
        key: 'resource',
        value: params?.resource,
      })
      .addQueryParam({
        key: 'metrics',
        value: params?.metrics,
      })
      .addQueryParam({
        key: 'view',
        value: params?.view,
      })
      .addQueryParam({
        key: 'workspaceType',
        value: params?.workspaceType,
      })
      .addQueryParam({
        key: 'userId',
        value: params?.userId,
      })
      .addQueryParam({
        key: 'duration',
        value: params?.duration,
      })
      .addQueryParam({
        key: 'requestId',
        value: params?.requestId,
      })
      .addQueryParam({
        key: 'responseStatus',
        value: params?.responseStatus,
      })
      .addQueryParam({
        key: 'attentionType',
        value: params?.attentionType,
      })
      .addQueryParam({
        key: 'period',
        value: params?.period,
      })
      .addQueryParam({
        key: 'userType',
        value: params?.userType,
      })
      .addQueryParam({
        key: 'entityType',
        value: params?.entityType,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .addQueryParam({
        key: 'offset',
        value: params?.offset,
      })
      .build();
    return this.client.callDirect<GetAnalyticsData>(request);
  }

  /**
 * Returns a catalog of analytics resources and their corresponding metrics for use with the GET /analytics endpoint. These metrics provide insights on API usage, success, workspace, and team trends in Postman.
 * @param {string} [params.include] - A comma-separated list of the additional information to include in the response. Accepts the `parameters` and `response` values.

When you pass this query parameter and its values, the response provides detailed information, including parameters and response schemas for the given metrics.

 * @param {string} [params.resources] - A comma-separated list of resource types to filter the metrics by. Accepts the `user`, `workspace`, `team`, and `ai` values.
 * @param {AnalyticsMetrics} [params.metrics] - A comma-separated list of metrics values to use to filter the response.

If you don't pass this query parameter, then the response returns all metadata for all available metrics.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetAnalyticsMetadata>>} - Successful Response
 */
  async getAnalyticsMetadata(
    params?: GetAnalyticsMetadataParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetAnalyticsMetadata> {
    const resolvedConfig = this.getResolvedConfig(this.getAnalyticsMetadataConfig, requestConfig);
    z.object({
      include: z.string().optional(),
      resources: z.string().optional(),
      metrics: z.unknown().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/analytics-metadata')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getAnalyticsMetadataResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addQueryParam({
        key: 'include',
        value: params?.include,
      })
      .addQueryParam({
        key: 'resources',
        value: params?.resources,
      })
      .addQueryParam({
        key: 'metrics',
        value: params?.metrics,
      })
      .build();
    return this.client.callDirect<GetAnalyticsMetadata>(request);
  }
}
