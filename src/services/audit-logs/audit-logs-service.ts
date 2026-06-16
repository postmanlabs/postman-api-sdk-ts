import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GetAuditLogs, getAuditLogsResponse } from './models/get-audit-logs';
import { GetAuditLogEventActionsClientErrorResponse } from '../common/get-audit-log-event-actions-client-error-response';
import { Common401Error } from '../common/common401-error';
import { Common500Error } from '../common/common500-error';
import { GetAuditLogsParams } from './request-params';
import { AuditLogAction, auditLogActionResponse } from './models/audit-log-action';

/**
 * Service class for AuditLogsService operations.
 * Provides methods to interact with AuditLogsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class AuditLogsService extends BaseService {
  protected getAuditLogsConfig?: Partial<SdkConfig>;

  protected getAuditLogEventActionsConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getAuditLogs.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAuditLogsConfig(config: Partial<SdkConfig>): this {
    this.getAuditLogsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getAuditLogEventActions.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAuditLogEventActionsConfig(config: Partial<SdkConfig>): this {
    this.getAuditLogEventActionsConfig = config;
    return this;
  }

  /**
   * Gets a list of your team's generated audit events. For a complete list of all audit events, see [Audit logs](https://learning.postman.com/docs/administration/audit-logs/).
   * @param {number} [params.userId] - Return only results that match the given user ID.
   * @param {string} [params.action] - Filter results by an audit log action.
   * @param {string} [params.since] - Return logs created after the given time, in `YYYY-MM-DD` format.
   * @param {string} [params.until] - Return logs created before the given time, in `YYYY-MM-DD` format.
   * @param {number} [params.limit] - The maximum number of audit events to return at once.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {AscDescDefaultDesc} [params.orderBy] - Return the records in ascending (`asc`) or descending (`desc`) order.
   * @param {AscDescDefaultDesc} [params.orderBy1] - Return the records in ascending (`asc`) or descending (`desc`) order.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetAuditLogs>>} - Successful Response
   */
  async getAuditLogs(
    params?: GetAuditLogsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetAuditLogs> {
    const resolvedConfig = this.getResolvedConfig(this.getAuditLogsConfig, requestConfig);
    z.object({
      userId: z.number().optional(),
      action: z.string().optional(),
      since: z.string().optional(),
      until: z.string().optional(),
      limit: z.number().optional(),
      cursor: z.string().optional(),
      orderBy: z.unknown().optional(),
      orderBy1: z.unknown().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/audit/logs')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getAuditLogsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: GetAuditLogEventActionsClientErrorResponse,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addQueryParam({
        key: 'userId',
        value: params?.userId,
      })
      .addQueryParam({
        key: 'action',
        value: params?.action,
      })
      .addQueryParam({
        key: 'since',
        value: params?.since,
      })
      .addQueryParam({
        key: 'until',
        value: params?.until,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .addQueryParam({
        key: 'cursor',
        value: params?.cursor,
      })
      .addQueryParam({
        key: 'orderBy',
        value: params?.orderBy,
      })
      .addQueryParam({
        key: 'order_by',
        value: params?.orderBy1,
      })
      .build();
    return this.client.callDirect<GetAuditLogs>(request);
  }

  /**
   * Gets a complete list of all available audit log event actions.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<AuditLogAction[]>>} - Successful Response
   */
  async getAuditLogEventActions(requestConfig?: Partial<SdkConfig>): Promise<AuditLogAction[]> {
    const resolvedConfig = this.getResolvedConfig(
      this.getAuditLogEventActionsConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/audit-actions')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.array(auditLogActionResponse),
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: GetAuditLogEventActionsClientErrorResponse,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: GetAuditLogEventActionsClientErrorResponse,
        contentType: ContentType.Json,
        status: 403,
      })
      .build();
    return this.client.callDirect<AuditLogAction[]>(request);
  }
}
