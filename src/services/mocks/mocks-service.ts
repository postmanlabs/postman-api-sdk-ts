import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GetMockServers, getMockServersResponse } from './models/get-mock-servers';
import { Common401Error } from '../common/common401-error';
import { InternalServerError } from './models/internal-server-error';
import { CreateMockParams, GetMockCallLogsParams, GetMocksParams } from './request-params';
import { CreateMock, createMockRequest } from './models/create-mock';
import {
  MockCreateUpdateResponse,
  mockCreateUpdateResponseResponse,
} from './models/mock-create-update-response';
import { Common400Error } from '../common/common400-error';
import { GetMockServer, getMockServerResponse } from './models/get-mock-server';
import { ErrorNameMessageDetails } from '../common/error-name-message-details';
import { UpdateMock, updateMockRequest } from './models/update-mock';
import { Mock400Error } from './models/mock400-error';
import { MockDeleted, mockDeletedResponse } from './models/mock-deleted';
import { GetCallLogs, getCallLogsResponse } from './models/get-call-logs';
import { Common500Error } from '../common/common500-error';
import {
  MockPublishedUnpublished,
  mockPublishedUnpublishedResponse,
} from './models/mock-published-unpublished';
import {
  GetMockServerResponses,
  getMockServerResponsesResponse,
} from './models/get-mock-server-responses';
import { GetMockServerResponsesNotFoundResponse } from './models/get-mock-server-responses-not-found-response';
import {
  CreateMockServerResponse,
  createMockServerResponseRequest,
} from './models/create-mock-server-response';
import {
  CreateMockServerResponseOkResponse,
  createMockServerResponseOkResponseResponse,
} from './models/create-mock-server-response-ok-response';
import {
  UpdateMockServerResponse,
  updateMockServerResponseRequest,
} from './models/update-mock-server-response';
import {
  ServerResponseDeleted,
  serverResponseDeletedResponse,
} from './models/server-response-deleted';

/**
 * Service class for MocksService operations.
 * Provides methods to interact with MocksService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class MocksService extends BaseService {
  protected getMocksConfig?: Partial<SdkConfig>;

  protected createMockConfig?: Partial<SdkConfig>;

  protected getMockConfig?: Partial<SdkConfig>;

  protected updateMockConfig?: Partial<SdkConfig>;

  protected deleteMockConfig?: Partial<SdkConfig>;

  protected getMockCallLogsConfig?: Partial<SdkConfig>;

  protected publishMockConfig?: Partial<SdkConfig>;

  protected unpublishMockConfig?: Partial<SdkConfig>;

  protected getMockServerResponsesConfig?: Partial<SdkConfig>;

  protected createMockServerResponseConfig?: Partial<SdkConfig>;

  protected getMockServerResponseConfig?: Partial<SdkConfig>;

  protected updateMockServerResponseConfig?: Partial<SdkConfig>;

  protected deleteMockServerResponseConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getMocks.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetMocksConfig(config: Partial<SdkConfig>): this {
    this.getMocksConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createMock.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateMockConfig(config: Partial<SdkConfig>): this {
    this.createMockConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getMock.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetMockConfig(config: Partial<SdkConfig>): this {
    this.getMockConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateMock.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateMockConfig(config: Partial<SdkConfig>): this {
    this.updateMockConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteMock.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteMockConfig(config: Partial<SdkConfig>): this {
    this.deleteMockConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getMockCallLogs.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetMockCallLogsConfig(config: Partial<SdkConfig>): this {
    this.getMockCallLogsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for publishMock.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPublishMockConfig(config: Partial<SdkConfig>): this {
    this.publishMockConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for unpublishMock.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUnpublishMockConfig(config: Partial<SdkConfig>): this {
    this.unpublishMockConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getMockServerResponses.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetMockServerResponsesConfig(config: Partial<SdkConfig>): this {
    this.getMockServerResponsesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createMockServerResponse.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateMockServerResponseConfig(config: Partial<SdkConfig>): this {
    this.createMockServerResponseConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getMockServerResponse.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetMockServerResponseConfig(config: Partial<SdkConfig>): this {
    this.getMockServerResponseConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateMockServerResponse.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateMockServerResponseConfig(config: Partial<SdkConfig>): this {
    this.updateMockServerResponseConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteMockServerResponse.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteMockServerResponseConfig(config: Partial<SdkConfig>): this {
    this.deleteMockServerResponseConfig = config;
    return this;
  }

  /**
 * Gets all active mock servers. By default, this endpoint returns only mock servers you created across all workspaces.
**Note:**

If you pass both the `teamId` and `workspace` query parameters, this endpoint only accepts the `workspace` query.

 * @param {string} [params.teamId] - Return only results that belong to the given team ID.
 * @param {string} [params.workspace] - Return only results found in the given workspace ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetMockServers>>} - Successful Response
 */
  async getMocks(
    params?: GetMocksParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetMockServers> {
    const resolvedConfig = this.getResolvedConfig(this.getMocksConfig, requestConfig);
    z.object({ teamId: z.string().optional(), workspace: z.string().optional() }).parse(
      params ?? {},
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/mocks')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getMockServersResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: InternalServerError,
        contentType: ContentType.Json,
        status: 500,
      })
      .addQueryParam({
        key: 'teamId',
        value: params?.teamId,
      })
      .addQueryParam({
        key: 'workspace',
        value: params?.workspace,
      })
      .build();
    return this.client.callDirect<GetMockServers>(request);
  }

  /**
 * Creates a mock server in a collection.
**Note:**

- You cannot create mocks for collections added to an API definition.
- If you do not include the `workspaceId` query parameter, the system creates the mock server in the oldest personal Internal workspace you own.

 * @param {string} params.workspace - The workspace's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<MockCreateUpdateResponse>>} - Successful Response
 */
  async createMock(
    body: CreateMock,
    params: CreateMockParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<MockCreateUpdateResponse> {
    const resolvedConfig = this.getResolvedConfig(this.createMockConfig, requestConfig);
    z.object({ workspace: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/mocks')
      .setRequestSchema(createMockRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: mockCreateUpdateResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Common400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: InternalServerError,
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
    return this.client.callDirect<MockCreateUpdateResponse>(request);
  }

  /**
   * Gets information about a mock server.
   * @param {string} mockId - The mock's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetMockServer>>} - Successful Response
   */
  async getMock(mockId: string, requestConfig?: Partial<SdkConfig>): Promise<GetMockServer> {
    const resolvedConfig = this.getResolvedConfig(this.getMockConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/mocks/{mockId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getMockServerResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorNameMessageDetails,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: InternalServerError,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'mockId',
        value: mockId,
      })
      .build();
    return this.client.callDirect<GetMockServer>(request);
  }

  /**
   * Updates a mock server's properties, such as its name or collection.
   * @param {string} mockId - The mock's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<MockCreateUpdateResponse>>} - Successful Response
   */
  async updateMock(
    mockId: string,
    body: UpdateMock,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<MockCreateUpdateResponse> {
    const resolvedConfig = this.getResolvedConfig(this.updateMockConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/mocks/{mockId}')
      .setRequestSchema(updateMockRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: mockCreateUpdateResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Mock400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorNameMessageDetails,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: InternalServerError,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'mockId',
        value: mockId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<MockCreateUpdateResponse>(request);
  }

  /**
   * Deletes a mock server.
   * @param {string} mockId - The mock's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<MockDeleted>>} - Successful Response
   */
  async deleteMock(mockId: string, requestConfig?: Partial<SdkConfig>): Promise<MockDeleted> {
    const resolvedConfig = this.getResolvedConfig(this.deleteMockConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/mocks/{mockId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: mockDeletedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorNameMessageDetails,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: InternalServerError,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'mockId',
        value: mockId,
      })
      .build();
    return this.client.callDirect<MockDeleted>(request);
  }

  /**
 * Gets a mock server's call logs. You can get a maximum of 6.5MB of call logs or a total of 100 call logs, whichever limit is met first in one API call.
Call logs contain exchanged request and response data made to mock servers. The logs provide visibility into how the mock servers are being used. You can log data to debug, test, analyze, and more, depending upon the use case.

**Note:**

Call logs have a retention period based on your [Postman plan](https://www.postman.com/pricing/#mock-calls). For more information, see [this article](https://support.postman.com/hc/en-us/articles/21219973964951-I-can-t-see-my-mock-server-logs-history) in the [Postman Support Center](https://support.postman.com/).

 * @param {string} mockId - The mock's ID.
 * @param {number} [params.limit] - The maximum number of rows to return in the response.
 * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
 * @param {string} [params.until] - Return only results created until this given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be earlier than the `since` value.
 * @param {string} [params.since] - Return only results created since the given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be later than the `until` value.
 * @param {number} [params.responseStatusCode] - Return only call logs that match the given HTTP response status code.
 * @param {string} [params.responseType] - Return only call logs that match the given response type. Matching is not case-sensitive.
 * @param {string} [params.requestMethod] - Return only call logs that match the given HTTP method. Matching is not case-sensitive.
 * @param {string} [params.requestPath] - Return only call logs that match the given request path. Matching is not case-sensitive.
 * @param {MockSortServedAt} [params.sort] - Sort the results by the given value. If you use this query parameter, you must also use the `direction` parameter.
 * @param {AscDesc} [params.direction] - Sort in ascending (`asc`) or descending (`desc`) order. Matching is not case-sensitive. If you use this query parameter, you must also use the `sort` parameter.
 * @param {string} [params.include] - Include call log records with header and body data. This query parameter accepts the `request.headers`, `request.body`, `response.headers`, and `response.body` values. For multiple include types, comma-separate each value.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetCallLogs>>} - Successful Response
 */
  async getMockCallLogs(
    mockId: string,
    params?: GetMockCallLogsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetCallLogs> {
    const resolvedConfig = this.getResolvedConfig(this.getMockCallLogsConfig, requestConfig);
    z.object({
      limit: z.number().optional(),
      cursor: z.string().optional(),
      until: z.string().optional(),
      since: z.string().optional(),
      responseStatusCode: z.number().optional(),
      responseType: z.string().optional(),
      requestMethod: z.string().optional(),
      requestPath: z.string().optional(),
      sort: z.unknown().optional(),
      direction: z.unknown().optional(),
      include: z.string().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/mocks/{mockId}/call-logs')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getCallLogsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Mock400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorNameMessageDetails,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'mockId',
        value: mockId,
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
        key: 'until',
        value: params?.until,
      })
      .addQueryParam({
        key: 'since',
        value: params?.since,
      })
      .addQueryParam({
        key: 'responseStatusCode',
        value: params?.responseStatusCode,
      })
      .addQueryParam({
        key: 'responseType',
        value: params?.responseType,
      })
      .addQueryParam({
        key: 'requestMethod',
        value: params?.requestMethod,
      })
      .addQueryParam({
        key: 'requestPath',
        value: params?.requestPath,
      })
      .addQueryParam({
        key: 'sort',
        value: params?.sort,
      })
      .addQueryParam({
        key: 'direction',
        value: params?.direction,
      })
      .addQueryParam({
        key: 'include',
        value: params?.include,
      })
      .build();
    return this.client.callDirect<GetCallLogs>(request);
  }

  /**
   * Publishes a mock server. Publishing a mock server sets its **Access Control** configuration setting to public.
   * @param {string} mockId - The mock's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<MockPublishedUnpublished>>} - Successful Response
   */
  async publishMock(
    mockId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<MockPublishedUnpublished> {
    const resolvedConfig = this.getResolvedConfig(this.publishMockConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/mocks/{mockId}/publish')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: mockPublishedUnpublishedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Mock400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorNameMessageDetails,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: InternalServerError,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'mockId',
        value: mockId,
      })
      .build();
    return this.client.callDirect<MockPublishedUnpublished>(request);
  }

  /**
   * Unpublishes a mock server. Unpublishing a mock server sets its **Access Control** configuration setting to private.
   * @param {string} mockId - The mock's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<MockPublishedUnpublished>>} - Successful Response
   */
  async unpublishMock(
    mockId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<MockPublishedUnpublished> {
    const resolvedConfig = this.getResolvedConfig(this.unpublishMockConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/mocks/{mockId}/unpublish')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: mockPublishedUnpublishedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Mock400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorNameMessageDetails,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: InternalServerError,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'mockId',
        value: mockId,
      })
      .build();
    return this.client.callDirect<MockPublishedUnpublished>(request);
  }

  /**
   * Gets all of a mock server's server responses.
   * @param {string} mockId - The mock's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetMockServerResponses[]>>} - Successful Response
   */
  async getMockServerResponses(
    mockId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetMockServerResponses[]> {
    const resolvedConfig = this.getResolvedConfig(this.getMockServerResponsesConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/mocks/{mockId}/server-responses')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.array(getMockServerResponsesResponse),
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: GetMockServerResponsesNotFoundResponse,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'mockId',
        value: mockId,
      })
      .build();
    return this.client.callDirect<GetMockServerResponses[]>(request);
  }

  /**
 * Creates a server response. Server responses let you simulate 5xx server-level responses, such as 500 or 503.
Server-level responses are agnostic to application-level logic. Server responses let you simulate this behavior on a mock server. You do not need to define each error for all exposed paths on the mock server.

If you set a server response as active, then all the calls to the mock server return with that active server response.

**Note:**

You can create multiple server responses for a mock server, but only one mock server can be set as active.

 * @param {string} mockId - The mock's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CreateMockServerResponseOkResponse>>} - Successful Response
 */
  async createMockServerResponse(
    mockId: string,
    body: CreateMockServerResponse,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreateMockServerResponseOkResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.createMockServerResponseConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/mocks/{mockId}/server-responses')
      .setRequestSchema(createMockServerResponseRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createMockServerResponseOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Common400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: GetMockServerResponsesNotFoundResponse,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'mockId',
        value: mockId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CreateMockServerResponseOkResponse>(request);
  }

  /**
   * Gets information about a server response.
   * @param {string} mockId - The mock's ID.
   * @param {string} serverResponseId - The server response's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CreateMockServerResponseOkResponse>>} - Successful Response
   */
  async getMockServerResponse(
    mockId: string,
    serverResponseId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreateMockServerResponseOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getMockServerResponseConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/mocks/{mockId}/server-responses/{serverResponseId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createMockServerResponseOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: GetMockServerResponsesNotFoundResponse,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'mockId',
        value: mockId,
      })
      .addPathParam({
        key: 'serverResponseId',
        value: serverResponseId,
      })
      .build();
    return this.client.callDirect<CreateMockServerResponseOkResponse>(request);
  }

  /**
   * Updates a server response.
   * @param {string} mockId - The mock's ID.
   * @param {string} serverResponseId - The server response's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CreateMockServerResponseOkResponse>>} - Successful Response
   */
  async updateMockServerResponse(
    mockId: string,
    serverResponseId: string,
    body: UpdateMockServerResponse,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreateMockServerResponseOkResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.updateMockServerResponseConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/mocks/{mockId}/server-responses/{serverResponseId}')
      .setRequestSchema(updateMockServerResponseRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createMockServerResponseOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Common400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: GetMockServerResponsesNotFoundResponse,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'mockId',
        value: mockId,
      })
      .addPathParam({
        key: 'serverResponseId',
        value: serverResponseId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CreateMockServerResponseOkResponse>(request);
  }

  /**
   * Deletes a mock server's server response.
   * @param {string} mockId - The mock's ID.
   * @param {string} serverResponseId - The server response's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ServerResponseDeleted>>} - Successful Response
   */
  async deleteMockServerResponse(
    mockId: string,
    serverResponseId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ServerResponseDeleted> {
    const resolvedConfig = this.getResolvedConfig(
      this.deleteMockServerResponseConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/mocks/{mockId}/server-responses/{serverResponseId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: serverResponseDeletedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: GetMockServerResponsesNotFoundResponse,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'mockId',
        value: mockId,
      })
      .addPathParam({
        key: 'serverResponseId',
        value: serverResponseId,
      })
      .build();
    return this.client.callDirect<ServerResponseDeleted>(request);
  }
}
