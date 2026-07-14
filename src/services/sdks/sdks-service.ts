import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { SdkList, sdkListResponse } from './models/sdk-list';
import { SdkError } from './models/sdk-error';
import { Common401Error } from '../common/common401-error';
import { Common403Error } from '../common/common403-error';
import { ErrorTypeTitleDetailStatus } from '../common/error-type-title-detail-status';
import { Common500Error } from '../common/common500-error';
import {
  GetSdkGitConnectionPullRequestsParams,
  GetSdkGitConnectionsParams,
  GetSdksParams,
} from './request-params';
import { CreateSdk, createSdkRequest } from './models/create-sdk';
import { Sdk, sdkResponse } from './models/sdk';
import { SdkDownload, sdkDownloadResponse } from './models/sdk-download';
import {
  SdkGitConnectionList,
  sdkGitConnectionListResponse,
} from './models/sdk-git-connection-list';
import {
  CreateSdkGitConnection,
  createSdkGitConnectionRequest,
} from './models/create-sdk-git-connection';
import { SdkGitConnection, sdkGitConnectionResponse } from './models/sdk-git-connection';
import {
  UpdateSdkGitConnection,
  updateSdkGitConnectionRequest,
} from './models/update-sdk-git-connection';
import {
  SdkGitConnectionPullRequestList,
  sdkGitConnectionPullRequestListResponse,
} from './models/sdk-git-connection-pull-request-list';

/**
 * Service class for SdksService operations.
 * Provides methods to interact with SdksService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class SdksService extends BaseService {
  protected getSdksConfig?: Partial<SdkConfig>;

  protected createSdkConfig?: Partial<SdkConfig>;

  protected getSdkConfig?: Partial<SdkConfig>;

  protected deleteSdkConfig?: Partial<SdkConfig>;

  protected getSdkDownloadUrlConfig?: Partial<SdkConfig>;

  protected getSdkGitConnectionsConfig?: Partial<SdkConfig>;

  protected createSdkGitConnectionConfig?: Partial<SdkConfig>;

  protected getSdkGitConnectionConfig?: Partial<SdkConfig>;

  protected updateSdkGitConnectionConfig?: Partial<SdkConfig>;

  protected getSdkGitConnectionPullRequestsConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getSdks.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSdksConfig(config: Partial<SdkConfig>): this {
    this.getSdksConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createSdk.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateSdkConfig(config: Partial<SdkConfig>): this {
    this.createSdkConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getSdk.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSdkConfig(config: Partial<SdkConfig>): this {
    this.getSdkConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteSdk.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteSdkConfig(config: Partial<SdkConfig>): this {
    this.deleteSdkConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getSdkDownloadUrl.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSdkDownloadUrlConfig(config: Partial<SdkConfig>): this {
    this.getSdkDownloadUrlConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getSdkGitConnections.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSdkGitConnectionsConfig(config: Partial<SdkConfig>): this {
    this.getSdkGitConnectionsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createSdkGitConnection.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateSdkGitConnectionConfig(config: Partial<SdkConfig>): this {
    this.createSdkGitConnectionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getSdkGitConnection.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSdkGitConnectionConfig(config: Partial<SdkConfig>): this {
    this.getSdkGitConnectionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateSdkGitConnection.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateSdkGitConnectionConfig(config: Partial<SdkConfig>): this {
    this.updateSdkGitConnectionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getSdkGitConnectionPullRequests.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSdkGitConnectionPullRequestsConfig(config: Partial<SdkConfig>): this {
    this.getSdkGitConnectionPullRequestsConfig = config;
    return this;
  }

  /**
 * Lists all SDKs the authenticated user has access to.
**Note:**

- Use the `sdkIds` parameter to get the generation build status of multiple SDKs in a single call.
- When you pass the `sdkIds` value, other filters are ignored and the response contains only the accessible SDKs from this list.

 * @param {string} params.workspaceId - The ID of the workspace that contains the SDK.
 * @param {string[]} [params.sdkIds] - A comma-separated list of SDK IDs to return in the response. If you pass this query parameter with other filters, the other filters are ignored.
 * @param {SdkBuildStatus} [params.buildStatus] - Filter results by build status.
 * @param {SdkLanguage} [params.language] - Filter results by SDK language.
 * @param {string} [params.sourceId] - Filter results by the originating Postman Collection or specification ID.
 * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
 * @param {number} [params.limit] - The maximum number of rows to return in the response, up to a maximum value of 25. Any value greater than 25 returns a 400 Bad Request response.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<SdkList>>} - Successful Response
 */
  async getSdks(params: GetSdksParams, requestConfig?: Partial<SdkConfig>): Promise<SdkList> {
    const resolvedConfig = this.getResolvedConfig(this.getSdksConfig, requestConfig);
    z.object({
      workspaceId: z.string(),
      sdkIds: z.array(z.string()).optional(),
      buildStatus: z.unknown().optional(),
      language: z.unknown().optional(),
      sourceId: z.string().optional(),
      cursor: z.string().optional(),
      limit: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/sdks')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: sdkListResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: SdkError,
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
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 429,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addQueryParam({
        key: 'workspaceId',
        value: params?.workspaceId,
      })
      .addQueryParam({
        key: 'sdkIds',
        value: params?.sdkIds,
        explode: false,
      })
      .addQueryParam({
        key: 'buildStatus',
        value: params?.buildStatus,
      })
      .addQueryParam({
        key: 'language',
        value: params?.language,
      })
      .addQueryParam({
        key: 'sourceId',
        value: params?.sourceId,
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
    return this.client.callDirect<SdkList>(request);
  }

  /**
 * Creates an asynchronous generation job for a single SDK (in one language) from a collection or specification.
To get the status of an SDK's generation, use the GET `/sdks/{sdkId}` endpoint and track its `buildStatus`. When the status is the `succeeded` value, the SDK is ready to download. You can also use the URL in the POST response's `Location` header.

**Note:**

The request body is determined by the given `language` value, so only provide the properties relevant to that language's SDK.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Successful Response
 */
  async createSdk(body: CreateSdk, requestConfig?: Partial<SdkConfig>): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.createSdkConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/sdks')
      .setRequestSchema(createSdkRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 202,
      })
      .addError({
        error: SdkError,
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
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 429,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
   * Returns information about the SDK, including the current build job status.
   * @param {string} sdkId - The SDK's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Sdk>>} - Successful Response
   */
  async getSdk(sdkId: string, requestConfig?: Partial<SdkConfig>): Promise<Sdk> {
    const resolvedConfig = this.getResolvedConfig(this.getSdkConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/sdks/{sdkId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: sdkResponse,
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
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 429,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'sdkId',
        value: sdkId,
      })
      .build();
    return this.client.callDirect<Sdk>(request);
  }

  /**
 * Deletes an SDK record and its stored archive. On success, this returns a `204 No Content` response.
**Note:**

You can't use this endpoint to cancel a generation job that's still in progress.

 * @param {string} sdkId - The SDK's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Deleted
 */
  async deleteSdk(sdkId: string, requestConfig?: Partial<SdkConfig>): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.deleteSdkConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/sdks/{sdkId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
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
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 409,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 429,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'sdkId',
        value: sdkId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
 * Gets a short-lived signed URL for the generated SDK archive (zip). The generated URL is created on demand and expires within a few minutes.
**Note:**

The API doesn't stream the archive directly to keep responses small and predictable. Use the returned URL to download the SDK zip file.

 * @param {string} sdkId - The SDK's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<SdkDownload>>} - Successful Response
 */
  async getSdkDownloadUrl(sdkId: string, requestConfig?: Partial<SdkConfig>): Promise<SdkDownload> {
    const resolvedConfig = this.getResolvedConfig(this.getSdkDownloadUrlConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/sdks/{sdkId}/downloads')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: sdkDownloadResponse,
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
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 409,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 429,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'sdkId',
        value: sdkId,
      })
      .build();
    return this.client.callDirect<SdkDownload>(request);
  }

  /**
   * Gets all Git repository connections the authenticated user has access to in the given workspace. Each connection links one Postman Collection or specification and one SDK language to a target Git repository.
   * @param {string} params.workspaceId - The ID of the workspace that owns the source entities.
   * @param {string} [params.sourceId] - Filter results by the originating Postman Collection or specification ID.
   * @param {SdkLanguage} [params.language] - Filter results by SDK language.
   * @param {SdkGitConnectionStatus} [params.status] - Filter results by connection status.
   * @param {string} [params.repositoryUrl] - Filter results by the canonical URL of the target Git repository.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {number} [params.limit] - The maximum number of rows to return in the response, up to a maximum value of 25. Any value greater than 25 returns a 400 Bad Request response.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<SdkGitConnectionList>>} - Successful Response
   */
  async getSdkGitConnections(
    params: GetSdkGitConnectionsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<SdkGitConnectionList> {
    const resolvedConfig = this.getResolvedConfig(this.getSdkGitConnectionsConfig, requestConfig);
    z.object({
      workspaceId: z.string(),
      sourceId: z.string().optional(),
      language: z.unknown().optional(),
      status: z.unknown().optional(),
      repositoryUrl: z.string().optional(),
      cursor: z.string().optional(),
      limit: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/sdk-git-connections')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: sdkGitConnectionListResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: SdkError,
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
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 429,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addQueryParam({
        key: 'workspaceId',
        value: params?.workspaceId,
      })
      .addQueryParam({
        key: 'sourceId',
        value: params?.sourceId,
      })
      .addQueryParam({
        key: 'language',
        value: params?.language,
      })
      .addQueryParam({
        key: 'status',
        value: params?.status,
      })
      .addQueryParam({
        key: 'repositoryUrl',
        value: params?.repositoryUrl,
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
    return this.client.callDirect<SdkGitConnectionList>(request);
  }

  /**
 * Connects a Postman source element (collection or specification) to a Git repository for one SDK language. This creates a new connection in the`active` state.

**Note:**
- Each source and language pair maps to a single connection. If a connection already exists for the pair, this returns `409 Conflict` response.
- To update an existing connection, use the PUT `/sdk-git-connections/{sdkGitConnectionId}` endpoint.
- The `autoUpdatePullRequestsEnabled` property is only available to **Enterprise** plan users. If the user is on a **Team** plan, this value is always `false`.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<SdkGitConnection>>} - Successful Response
 */
  async createSdkGitConnection(
    body: CreateSdkGitConnection,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<SdkGitConnection> {
    const resolvedConfig = this.getResolvedConfig(this.createSdkGitConnectionConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/sdk-git-connections')
      .setRequestSchema(createSdkGitConnectionRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: sdkGitConnectionResponse,
        contentType: ContentType.Json,
        status: 201,
      })
      .addError({
        error: SdkError,
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
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 409,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 429,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<SdkGitConnection>(request);
  }

  /**
   * Gets information about an SDK's Git connection. The response includes the SDK currently sent to the targetBranch and the most recent SDK-update pull request.
   * @param {string} sdkGitConnectionId - The Git connection's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<SdkGitConnection>>} - Successful Response
   */
  async getSdkGitConnection(
    sdkGitConnectionId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<SdkGitConnection> {
    const resolvedConfig = this.getResolvedConfig(this.getSdkGitConnectionConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/sdk-git-connections/{sdkGitConnectionId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: sdkGitConnectionResponse,
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
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 429,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'sdkGitConnectionId',
        value: sdkGitConnectionId,
      })
      .build();
    return this.client.callDirect<SdkGitConnection>(request);
  }

  /**
 * Updates the Git connection's lifecycle status:
- `active` — Connects or reconnects the repository. All auto-update pull requests resume.
- `disconnected` — Disconnects the repository, and no further auto-update pull requests are opened. The historical pull request record is preserved and remains queryable.

**Note:**

- The `autoUpdatePullRequestsEnabled` property is only available to **Enterprise** plan users and defaults to `true`. If the user is on a **Team** plan, this value is always `false`.
- This action is idempotent. Setting the fields to their current values is a no-op and still returns the connection.
- The `inaccessible` status is system-determined and can't be set with this endpoint.

 * @param {string} sdkGitConnectionId - The Git connection's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<SdkGitConnection>>} - Successful Response
 */
  async updateSdkGitConnection(
    sdkGitConnectionId: string,
    body: UpdateSdkGitConnection,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<SdkGitConnection> {
    const resolvedConfig = this.getResolvedConfig(this.updateSdkGitConnectionConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/sdk-git-connections/{sdkGitConnectionId}')
      .setRequestSchema(updateSdkGitConnectionRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: sdkGitConnectionResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: SdkError,
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
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 429,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'sdkGitConnectionId',
        value: sdkGitConnectionId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<SdkGitConnection>(request);
  }

  /**
 * Lists all SDK update pull requests for the Git connection, in order of newest first by its `updatedAt` property.
**Note:**

Direct push requests to the base branch are not returned in the response if a Git connection is configured to push only some changes directly to a base branch.

 * @param {string} sdkGitConnectionId - The Git connection's ID.
 * @param {SdkGitConnectionPrStatus} [params.status] - Filter results by pull request status.
 * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
 * @param {number} [params.limit] - The maximum number of rows to return in the response, up to a maximum value of 25. Any value greater than 25 returns a 400 Bad Request response.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<SdkGitConnectionPullRequestList>>} - Successful Response
 */
  async getSdkGitConnectionPullRequests(
    sdkGitConnectionId: string,
    params?: GetSdkGitConnectionPullRequestsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<SdkGitConnectionPullRequestList> {
    const resolvedConfig = this.getResolvedConfig(
      this.getSdkGitConnectionPullRequestsConfig,
      requestConfig,
    );
    z.object({
      status: z.unknown().optional(),
      cursor: z.string().optional(),
      limit: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/sdk-git-connections/{sdkGitConnectionId}/pull-requests')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: sdkGitConnectionPullRequestListResponse,
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
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 429,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'sdkGitConnectionId',
        value: sdkGitConnectionId,
      })
      .addQueryParam({
        key: 'status',
        value: params?.status,
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
    return this.client.callDirect<SdkGitConnectionPullRequestList>(request);
  }
}
