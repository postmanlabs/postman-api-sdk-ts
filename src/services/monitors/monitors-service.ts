import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  GetMonitorsOkResponse,
  getMonitorsOkResponseResponse,
} from './models/get-monitors-ok-response';
import { Monitors400Errors } from './models/monitors400-errors';
import { Common401Error } from '../common/common401-error';
import { Common403Error } from '../common/common403-error';
import { GetAuditLogEventActionsClientErrorResponse } from '../common/get-audit-log-event-actions-client-error-response';
import { Common500Error } from '../common/common500-error';
import {
  CreateMonitorParams,
  GetMonitorsParams,
  GetRunnerInstancesParams,
  RunMonitorParams,
} from './request-params';
import { CreateMonitor, createMonitorRequest } from './models/create-monitor';
import {
  CreateUpdateMonitorResponse,
  createUpdateMonitorResponseResponse,
} from './models/create-update-monitor-response';
import {
  GetMonitorOkResponse,
  getMonitorOkResponseResponse,
} from './models/get-monitor-ok-response';
import { UpdateMonitor, updateMonitorRequest } from './models/update-monitor';
import { MonitorDeleted, monitorDeletedResponse } from './models/monitor-deleted';
import {
  RunMonitorOkResponse,
  runMonitorOkResponseResponse,
} from './models/run-monitor-ok-response';
import {
  RunExceeds300Seconds,
  runExceeds300SecondsResponse,
} from './models/run-exceeds-300-seconds';
import { GetRunnerInstances, getRunnerInstancesResponse } from './models/get-runner-instances';
import { ErrorTypeTitleDetailCreatedAt } from './models/error-type-title-detail-created-at';
import { GetRunnerMetrics, getRunnerMetricsResponse } from './models/get-runner-metrics';

/**
 * Service class for MonitorsService operations.
 * Provides methods to interact with MonitorsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class MonitorsService extends BaseService {
  protected getMonitorsConfig?: Partial<SdkConfig>;

  protected createMonitorConfig?: Partial<SdkConfig>;

  protected getMonitorConfig?: Partial<SdkConfig>;

  protected updateMonitorConfig?: Partial<SdkConfig>;

  protected deleteMonitorConfig?: Partial<SdkConfig>;

  protected runMonitorConfig?: Partial<SdkConfig>;

  protected getRunnerInstancesConfig?: Partial<SdkConfig>;

  protected getRunnerMetricsConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getMonitors.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetMonitorsConfig(config: Partial<SdkConfig>): this {
    this.getMonitorsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createMonitor.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateMonitorConfig(config: Partial<SdkConfig>): this {
    this.createMonitorConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getMonitor.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetMonitorConfig(config: Partial<SdkConfig>): this {
    this.getMonitorConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateMonitor.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateMonitorConfig(config: Partial<SdkConfig>): this {
    this.updateMonitorConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteMonitor.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteMonitorConfig(config: Partial<SdkConfig>): this {
    this.deleteMonitorConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for runMonitor.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRunMonitorConfig(config: Partial<SdkConfig>): this {
    this.runMonitorConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getRunnerInstances.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetRunnerInstancesConfig(config: Partial<SdkConfig>): this {
    this.getRunnerInstancesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getRunnerMetrics.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetRunnerMetricsConfig(config: Partial<SdkConfig>): this {
    this.getRunnerMetricsConfig = config;
    return this;
  }

  /**
   * Gets all monitors.
   * @param {string} [params.workspace] - Return only results found in the given workspace ID.
   * @param {boolean} [params.active] - If true, return only active monitors.
   * @param {number} [params.owner] - Return only results that belong to the given user ID.
   * @param {string} [params.collectionUid] - Filter the results by a collection's unique ID.
   * @param {string} [params.environmentUid] - Filter the results by an environment's unique ID.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {number} [params.limit] - The maximum number of rows to return in the response, up to a maximum value of 25. Any value greater than 25 returns a 400 Bad Request response.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetMonitorsOkResponse>>} - Successful Response
   */
  async getMonitors(
    params?: GetMonitorsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetMonitorsOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getMonitorsConfig, requestConfig);
    z.object({
      workspace: z.string().optional(),
      active: z.boolean().optional(),
      owner: z.number().optional(),
      collectionUid: z.string().optional(),
      environmentUid: z.string().optional(),
      cursor: z.string().optional(),
      limit: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/monitors')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getMonitorsOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Monitors400Errors,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Common403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: GetAuditLogEventActionsClientErrorResponse,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addQueryParam({
        key: 'workspace',
        value: params?.workspace,
      })
      .addQueryParam({
        key: 'active',
        value: params?.active,
      })
      .addQueryParam({
        key: 'owner',
        value: params?.owner,
      })
      .addQueryParam({
        key: 'collectionUid',
        value: params?.collectionUid,
      })
      .addQueryParam({
        key: 'environmentUid',
        value: params?.environmentUid,
      })
      .addQueryParam({
        key: 'cursor',
        value: params?.cursor,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .build();
    return this.client.callDirect<GetMonitorsOkResponse>(request);
  }

  /**
 * Creates a monitor.
**Note:**

- You cannot create monitors for collections added to an API definition.
- If you do not pass the `workspace` query parameter, the system creates the monitor in the oldest personal Internal workspace you own.

 * @param {string} params.workspace - The workspace's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CreateUpdateMonitorResponse>>} - Successful Response
 */
  async createMonitor(
    body: CreateMonitor,
    params: CreateMonitorParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreateUpdateMonitorResponse> {
    const resolvedConfig = this.getResolvedConfig(this.createMonitorConfig, requestConfig);
    z.object({ workspace: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/monitors')
      .setRequestSchema(createMonitorRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createUpdateMonitorResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Monitors400Errors,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Common403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addQueryParam({
        key: 'workspace',
        value: params?.workspace,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CreateUpdateMonitorResponse>(request);
  }

  /**
   * Gets information about a monitor.
   * @param {string} monitorId - The monitor's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetMonitorOkResponse>>} - Successful Response
   */
  async getMonitor(
    monitorId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetMonitorOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getMonitorConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/monitors/{monitorId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getMonitorOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Common403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: GetAuditLogEventActionsClientErrorResponse,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'monitorId',
        value: monitorId,
      })
      .build();
    return this.client.callDirect<GetMonitorOkResponse>(request);
  }

  /**
   * Updates a monitor's [configurations](https://learning.postman.com/docs/monitoring-your-api/setting-up-monitor/#configure-a-monitor).
   * @param {string} monitorId - The monitor's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CreateUpdateMonitorResponse>>} - Successful Response
   */
  async updateMonitor(
    monitorId: string,
    body: UpdateMonitor,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreateUpdateMonitorResponse> {
    const resolvedConfig = this.getResolvedConfig(this.updateMonitorConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/monitors/{monitorId}')
      .setRequestSchema(updateMonitorRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createUpdateMonitorResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Monitors400Errors,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Common403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: GetAuditLogEventActionsClientErrorResponse,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'monitorId',
        value: monitorId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CreateUpdateMonitorResponse>(request);
  }

  /**
   * Deletes a monitor.
   * @param {string} monitorId - The monitor's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<MonitorDeleted>>} - Successful Response
   */
  async deleteMonitor(
    monitorId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<MonitorDeleted> {
    const resolvedConfig = this.getResolvedConfig(this.deleteMonitorConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/monitors/{monitorId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: monitorDeletedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Common403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: GetAuditLogEventActionsClientErrorResponse,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'monitorId',
        value: monitorId,
      })
      .build();
    return this.client.callDirect<MonitorDeleted>(request);
  }

  /**
 * Runs a monitor and returns its run results.
**Note:**

- If you pass the `async=true` query parameter, the response does not return the `stats`, `executions`, and `failures` responses. To get this information for an asynchronous run, call the GET `/monitors/{id}` endpoint.
- If the call exceeds 300 seconds, the endpoint returns an HTTP `202 Accepted` response. Use the GET `/monitors/{id}` endpoint to check the run's status in the response's `lastRun` property. To avoid this, it is recommended that you include the `async=true` query parameter when using this endpoint.

 * @param {string} monitorId - The monitor's ID.
 * @param {boolean} [params.async] - If true, runs the monitor asynchronously from the created monitor run task. By default, the server will not respond until the task finishes (`false`).
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<RunMonitorOkResponse>>} - Successful Response
 */
  async runMonitor(
    monitorId: string,
    params?: RunMonitorParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<RunMonitorOkResponse | RunExceeds300Seconds> {
    const resolvedConfig = this.getResolvedConfig(this.runMonitorConfig, requestConfig);
    z.object({ async: z.boolean().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/monitors/{monitorId}/run')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: runMonitorOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addResponse({
        schema: runExceeds300SecondsResponse,
        contentType: ContentType.Json,
        status: 202,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Common403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: GetAuditLogEventActionsClientErrorResponse,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'monitorId',
        value: monitorId,
      })
      .addQueryParam({
        key: 'async',
        value: params?.async,
      })
      .build();
    return this.client.callDirect<RunMonitorOkResponse | RunExceeds300Seconds>(request);
  }

  /**
 * Gets all instances of the runner polling Postman for upcoming monitor runs. Instances are runner executions that share the same runner ID and key.
**Note:**

You can get a runner's ID in the Postman UI if you have an Admin or Super Admin role. To do this, click **Team > Team Settings** in Postman, then click **Runners**. Click the runner you want to get the ID of, then copy its ID from the URL.

 * @param {string} runnerId - The runner's ID.
 * @param {number} [params.limit] - The maximum number of rows to return in the response, up to a maximum value of 25. Any value greater than 25 returns a 400 Bad Request response.
 * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetRunnerInstances>>} - Successful Response
 */
  async getRunnerInstances(
    runnerId: string,
    params?: GetRunnerInstancesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetRunnerInstances> {
    const resolvedConfig = this.getResolvedConfig(this.getRunnerInstancesConfig, requestConfig);
    z.object({ limit: z.number().optional(), cursor: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/runners/{runnerId}/instances')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getRunnerInstancesResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailCreatedAt,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Common403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ErrorTypeTitleDetailCreatedAt,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'runnerId',
        value: runnerId,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .addQueryParam({
        key: 'cursor',
        value: params?.cursor,
      })
      .build();
    return this.client.callDirect<GetRunnerInstances>(request);
  }

  /**
 * Gets the Postman server-side metrics for a runner instance. Metrics include information such as monitor run queues and last polling date.
**Note:**

You can get a runner's ID in the Postman UI if you have a Team Admin or Super Admin role. To do this, click **Team > Team Settings** in Postman, then click **Runners**. Click the runner you want to get the ID of, then copy its ID from the URL.

 * @param {string} runnerId - The runner's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetRunnerMetrics>>} - Successful Response
 */
  async getRunnerMetrics(
    runnerId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetRunnerMetrics> {
    const resolvedConfig = this.getResolvedConfig(this.getRunnerMetricsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/runners/{runnerId}/metrics')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getRunnerMetricsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Common403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ErrorTypeTitleDetailCreatedAt,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'runnerId',
        value: runnerId,
      })
      .build();
    return this.client.callDirect<GetRunnerMetrics>(request);
  }
}
