import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GetApIs, getApIsResponse } from './models/get-ap-is';
import { Common401Error } from '../common/common401-error';
import { Common403Error } from '../common/common403-error';
import { Api404Error } from './models/api404-error';
import { CreateApiClientErrorResponse } from '../common/create-api-client-error-response';
import { Common500Error } from '../common/common500-error';
import {
  CreateApiParams,
  GetApiCollectionParams,
  GetApiParams,
  GetApiSchemaFileContentsParams,
  GetApiSchemaFilesParams,
  GetApiSchemaParams,
  GetApiVersionsParams,
  GetApisParams,
} from './request-params';
import { CreateUpdateApi, createUpdateApiRequest } from './models/create-update-api';
import { ApiCreated, apiCreatedResponse } from './models/api-created';
import { ErrorTypeTitleDetailStatusInstance } from '../common/error-type-title-detail-status-instance';
import { Api403Error } from '../common/api403-error';
import { GetAnApi, getAnApiResponse } from './models/get-an-api';
import { ApiErrorNameMessage } from '../common/api-error-name-message';
import { UpdateApiResponse, updateApiResponseResponse } from './models/update-api-response';
import { AddApiCollection, addApiCollectionRequest } from './models/add-api-collection';
import { ApiCollectionAdded, apiCollectionAddedResponse } from './models/api-collection-added';
import { GetApiCollection, getApiCollectionResponse } from './models/get-api-collection';
import { Api400Error } from './models/api400-error';
import {
  CommentResponseObject,
  commentResponseObjectResponse,
} from '../common/comment-response-object';
import { ErrorTypeTitleDetailStatus } from '../common/error-type-title-detail-status';
import { CommentCreate, commentCreateRequest } from '../common/comment-create';
import {
  CommentUpdatedCreatedObject,
  commentUpdatedCreatedObjectResponse,
} from '../common/comment-updated-created-object';
import { CommentUpdate, commentUpdateRequest } from '../common/comment-update';
import {
  SyncCollectionWithSchemaResponse,
  syncCollectionWithSchemaResponseResponse,
} from './models/sync-collection-with-schema-response';
import { CreateApiSchema, createApiSchemaRequest } from './models/create-api-schema';
import {
  CreateApiSchemaResponse,
  createApiSchemaResponseResponse,
} from './models/create-api-schema-response';
import { GetApiSchema, getApiSchemaResponse } from './models/get-api-schema';
import { ApiSchemaFiles, apiSchemaFilesResponse } from './models/api-schema-files';
import { SchemaFileContents, schemaFileContentsResponse } from './models/schema-file-contents';
import {
  CreateUpdateApiSchemaFile,
  createUpdateApiSchemaFileRequest,
} from './models/create-update-api-schema-file';
import {
  CreateUpdateApiSchemaFileResponse,
  createUpdateApiSchemaFileResponseResponse,
} from './models/create-update-api-schema-file-response';
import {
  GetStatusOfAnAsyncApiTaskOkResponse,
  getStatusOfAnAsyncApiTaskOkResponseResponse,
} from './models/get-status-of-an-async-api-task-ok-response';
import { GetApiVersions, getApiVersionsResponse } from './models/get-api-versions';
import { CreateApiVersion, createApiVersionRequest } from './models/create-api-version';
import { ApiVersionCreated, apiVersionCreatedResponse } from './models/api-version-created';
import { ApiVersion, apiVersionResponse } from './models/api-version';
import { UpdateApiVersion, updateApiVersionRequest } from './models/update-api-version';
import { ApiVersionUpdated, apiVersionUpdatedResponse } from './models/api-version-updated';

/**
 * Service class for ApiService operations.
 * Provides methods to interact with ApiService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class ApiService extends BaseService {
  protected getApisConfig?: Partial<SdkConfig>;

  protected createApiConfig?: Partial<SdkConfig>;

  protected getApiConfig?: Partial<SdkConfig>;

  protected updateApiConfig?: Partial<SdkConfig>;

  protected deleteApiConfig?: Partial<SdkConfig>;

  protected addApiCollectionConfig?: Partial<SdkConfig>;

  protected getApiCollectionConfig?: Partial<SdkConfig>;

  protected getApiCollectionCommentsConfig?: Partial<SdkConfig>;

  protected createApiCollectionCommentConfig?: Partial<SdkConfig>;

  protected updateApiCollectionCommentConfig?: Partial<SdkConfig>;

  protected deleteApiCollectionCommentConfig?: Partial<SdkConfig>;

  protected syncCollectionWithSchemaConfig?: Partial<SdkConfig>;

  protected getApiCommentsConfig?: Partial<SdkConfig>;

  protected createApiCommentConfig?: Partial<SdkConfig>;

  protected updateApiCommentConfig?: Partial<SdkConfig>;

  protected deleteApiCommentConfig?: Partial<SdkConfig>;

  protected createApiSchemaConfig?: Partial<SdkConfig>;

  protected getApiSchemaConfig?: Partial<SdkConfig>;

  protected getApiSchemaFilesConfig?: Partial<SdkConfig>;

  protected getApiSchemaFileContentsConfig?: Partial<SdkConfig>;

  protected createUpdateApiSchemaFileConfig?: Partial<SdkConfig>;

  protected deleteApiSchemaFileConfig?: Partial<SdkConfig>;

  protected getStatusOfAnAsyncApiTaskConfig?: Partial<SdkConfig>;

  protected getApiVersionsConfig?: Partial<SdkConfig>;

  protected createApiVersionConfig?: Partial<SdkConfig>;

  protected getApiVersionConfig?: Partial<SdkConfig>;

  protected updateApiVersionConfig?: Partial<SdkConfig>;

  protected deleteApiVersionConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getApis.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApisConfig(config: Partial<SdkConfig>): this {
    this.getApisConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createApi.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateApiConfig(config: Partial<SdkConfig>): this {
    this.createApiConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getApi.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApiConfig(config: Partial<SdkConfig>): this {
    this.getApiConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateApi.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateApiConfig(config: Partial<SdkConfig>): this {
    this.updateApiConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteApi.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteApiConfig(config: Partial<SdkConfig>): this {
    this.deleteApiConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for addApiCollection.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddApiCollectionConfig(config: Partial<SdkConfig>): this {
    this.addApiCollectionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getApiCollection.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApiCollectionConfig(config: Partial<SdkConfig>): this {
    this.getApiCollectionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getApiCollectionComments.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApiCollectionCommentsConfig(config: Partial<SdkConfig>): this {
    this.getApiCollectionCommentsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createApiCollectionComment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateApiCollectionCommentConfig(config: Partial<SdkConfig>): this {
    this.createApiCollectionCommentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateApiCollectionComment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateApiCollectionCommentConfig(config: Partial<SdkConfig>): this {
    this.updateApiCollectionCommentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteApiCollectionComment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteApiCollectionCommentConfig(config: Partial<SdkConfig>): this {
    this.deleteApiCollectionCommentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for syncCollectionWithSchema.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSyncCollectionWithSchemaConfig(config: Partial<SdkConfig>): this {
    this.syncCollectionWithSchemaConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getApiComments.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApiCommentsConfig(config: Partial<SdkConfig>): this {
    this.getApiCommentsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createApiComment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateApiCommentConfig(config: Partial<SdkConfig>): this {
    this.createApiCommentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateApiComment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateApiCommentConfig(config: Partial<SdkConfig>): this {
    this.updateApiCommentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteApiComment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteApiCommentConfig(config: Partial<SdkConfig>): this {
    this.deleteApiCommentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createApiSchema.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateApiSchemaConfig(config: Partial<SdkConfig>): this {
    this.createApiSchemaConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getApiSchema.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApiSchemaConfig(config: Partial<SdkConfig>): this {
    this.getApiSchemaConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getApiSchemaFiles.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApiSchemaFilesConfig(config: Partial<SdkConfig>): this {
    this.getApiSchemaFilesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getApiSchemaFileContents.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApiSchemaFileContentsConfig(config: Partial<SdkConfig>): this {
    this.getApiSchemaFileContentsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createUpdateApiSchemaFile.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateUpdateApiSchemaFileConfig(config: Partial<SdkConfig>): this {
    this.createUpdateApiSchemaFileConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteApiSchemaFile.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteApiSchemaFileConfig(config: Partial<SdkConfig>): this {
    this.deleteApiSchemaFileConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getStatusOfAnAsyncApiTask.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetStatusOfAnAsyncApiTaskConfig(config: Partial<SdkConfig>): this {
    this.getStatusOfAnAsyncApiTaskConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getApiVersions.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApiVersionsConfig(config: Partial<SdkConfig>): this {
    this.getApiVersionsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createApiVersion.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateApiVersionConfig(config: Partial<SdkConfig>): this {
    this.createApiVersionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getApiVersion.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApiVersionConfig(config: Partial<SdkConfig>): this {
    this.getApiVersionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateApiVersion.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateApiVersionConfig(config: Partial<SdkConfig>): this {
    this.updateApiVersionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteApiVersion.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteApiVersionConfig(config: Partial<SdkConfig>): this {
    this.deleteApiVersionConfig = config;
    return this;
  }

  /**
   * Gets information about all APIs in a workspace.
   * @param {string} params.workspaceId - The workspace's ID.
   * @param {number} [params.createdBy] - Return only results created by the given user ID.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {string} [params.description] - Return only APIs whose description includes the given value. Matching is not case-sensitive.
   * @param {number} [params.limit] - The maximum number of rows to return in the response.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetApIs>>} - Successful Response
   */
  async getApis(params: GetApisParams, requestConfig?: Partial<SdkConfig>): Promise<GetApIs> {
    const resolvedConfig = this.getResolvedConfig(this.getApisConfig, requestConfig);
    z.object({
      workspaceId: z.string(),
      createdBy: z.number().optional(),
      cursor: z.string().optional(),
      description: z.string().optional(),
      limit: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/apis')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getApIsResponse,
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
        error: Api404Error,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 422,
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
        key: 'createdBy',
        value: params?.createdBy,
      })
      .addQueryParam({
        key: 'cursor',
        value: params?.cursor,
      })
      .addQueryParam({
        key: 'description',
        value: params?.description,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .build();
    return this.client.callDirect<GetApIs>(request);
  }

  /**
   * Creates an API.
   * @param {string} params.workspaceId - The workspace's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ApiCreated>>} - Successful Response
   */
  async createApi(
    body: CreateUpdateApi,
    params: CreateApiParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ApiCreated> {
    const resolvedConfig = this.getResolvedConfig(this.createApiConfig, requestConfig);
    z.object({ workspaceId: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/apis')
      .setRequestSchema(createUpdateApiRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: apiCreatedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Api403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 404,
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
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<ApiCreated>(request);
  }

  /**
 * Gets information about an API.
**Note:**

- Git-connected APIs will only return the `versions` and `gitInfo` query responses. This is because schema and collection information is stored in the connected Git repository. The `gitInfo` object only lists the repository and folder locations of the files.
- API viewers can only use the `versions` option in the `include` query parameter.

 * @param {string} apiId - The API's ID.
 * @param {ApiInclude[]} [params.include] - An array that contains additional resources to include in the response. Use this parameter to query for element links to the API, such as collections and schemas:
- `collections` — Query for linked Postman collections.
- `versions` — Query for linked versions.
- `schemas` — Query for linked schemas.
- `gitInfo` — Query for information about the API's git-linked repository. This query only returns the linked repository and folder locations of the files. It does not return `collections` or `schemas` information.

**Note:**

API viewers can only use the `versions` option.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetAnApi>>} - Successful Response
 */
  async getApi(
    apiId: string,
    params?: GetApiParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetAnApi> {
    const resolvedConfig = this.getResolvedConfig(this.getApiConfig, requestConfig);
    z.object({ include: z.unknown().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/apis/{apiId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getAnApiResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ApiErrorNameMessage,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Common403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Api404Error,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addQueryParam({
        key: 'include',
        value: params?.include,
      })
      .build();
    return this.client.callDirect<GetAnApi>(request);
  }

  /**
   * Updates an API.
   * @param {string} apiId - The API's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<UpdateApiResponse>>} - Successful Response
   */
  async updateApi(
    apiId: string,
    body: CreateUpdateApi,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<UpdateApiResponse> {
    const resolvedConfig = this.getResolvedConfig(this.updateApiConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/apis/{apiId}')
      .setRequestSchema(createUpdateApiRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: updateApiResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ApiErrorNameMessage,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Api403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Api404Error,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<UpdateApiResponse>(request);
  }

  /**
   * Deletes an API. On success, this returns an HTTP `204 No Content` response.
   * @param {string} apiId - The API's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - No Content
   */
  async deleteApi(apiId: string, requestConfig?: Partial<SdkConfig>): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.deleteApiConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/apis/{apiId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
      })
      .addError({
        error: ApiErrorNameMessage,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Api403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Api404Error,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
 * Adds a collection to an API. To do this, use the following `operationType` values:
- `COPY_COLLECTION` — Copies a collection from the workspace and adds it to an API.
- `CREATE_NEW` — Creates a new collection by providing the new collection's content.
- `GENERATE_FROM_SCHEMA` — Generates the collection from an API schema.
    - `options` — An object that contains advanced creation options and their values. You can find a complete list of properties and their values in Postman's [OpenAPI to Postman Collection Converter OPTIONS documentation](https://github.com/postmanlabs/openapi-to-postman/blob/develop/OPTIONS.md). These properties are case-sensitive.

 * @param {string} apiId - The API's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ApiCollectionAdded>>} - Created
 */
  async addApiCollection(
    apiId: string,
    body: AddApiCollection,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ApiCollectionAdded> {
    const resolvedConfig = this.getResolvedConfig(this.addApiCollectionConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/apis/{apiId}/collections')
      .setRequestSchema(addApiCollectionRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: apiCollectionAddedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ApiErrorNameMessage,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Api403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Api404Error,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<ApiCollectionAdded>(request);
  }

  /**
 * Gets a collection attached to an API. You can use the `versionId` query parameter to get a collection published in a version.
**Note:**

- You cannot use this endpoint to get a Git-linked API collection. Collections in a Git-linked API are stored in the linked Git repository, not in the Postman cloud. This endpoint only has access to Postman servers.
- You can get a collection published in an API version with the `versionId` query parameter.
- The `versionId` query parameter is a required parameter for API viewers.

 * @param {string} apiId - The API's ID.
 * @param {string} collectionId - The collection's unique ID.
 * @param {string} [params.versionId] - The API's version ID. This is a required parameter for API viewers.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetApiCollection>>} - Successful Response
 */
  async getApiCollection(
    apiId: string,
    collectionId: string,
    params?: GetApiCollectionParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetApiCollection> {
    const resolvedConfig = this.getResolvedConfig(this.getApiCollectionConfig, requestConfig);
    z.object({ versionId: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/apis/{apiId}/collections/{collectionId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getApiCollectionResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Api400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Api403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Api404Error,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .addQueryParam({
        key: 'versionId',
        value: params?.versionId,
      })
      .build();
    return this.client.callDirect<GetApiCollection>(request);
  }

  /**
   * Gets all comments left by users in an API's collection.
   * @param {string} apiId - The API's ID.
   * @param {string} collectionId - The collection's unique ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CommentResponseObject>>} - Successful Response
   */
  async getApiCollectionComments(
    apiId: string,
    collectionId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CommentResponseObject> {
    const resolvedConfig = this.getResolvedConfig(
      this.getApiCollectionCommentsConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/apis/{apiId}/collections/{collectionId}/comments')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: commentResponseObjectResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
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
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .build();
    return this.client.callDirect<CommentResponseObject>(request);
  }

  /**
 * Creates a comment on an API's collection. To create a reply on an existing comment, include the `threadId` property in the request body.
**Note:**

This endpoint accepts a max of 10,000 characters.

 * @param {string} apiId - The API's ID.
 * @param {string} collectionId - The collection's unique ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CommentUpdatedCreatedObject>>} - Created
 */
  async createApiCollectionComment(
    apiId: string,
    collectionId: string,
    body: CommentCreate,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CommentUpdatedCreatedObject> {
    const resolvedConfig = this.getResolvedConfig(
      this.createApiCollectionCommentConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/apis/{apiId}/collections/{collectionId}/comments')
      .setRequestSchema(commentCreateRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: commentUpdatedCreatedObjectResponse,
        contentType: ContentType.Json,
        status: 201,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
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
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CommentUpdatedCreatedObject>(request);
  }

  /**
 * Updates a comment on an API's collection.
**Note:**

This endpoint accepts a max of 10,000 characters.

 * @param {string} apiId - The API's ID.
 * @param {string} collectionId - The collection's unique ID.
 * @param {number} commentId - The comment's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CommentUpdatedCreatedObject>>} - Successful Response
 */
  async updateApiCollectionComment(
    apiId: string,
    collectionId: string,
    commentId: number,
    body: CommentUpdate,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CommentUpdatedCreatedObject> {
    const resolvedConfig = this.getResolvedConfig(
      this.updateApiCollectionCommentConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/apis/{apiId}/collections/{collectionId}/comments/{commentId}')
      .setRequestSchema(commentUpdateRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: commentUpdatedCreatedObjectResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
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
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .addPathParam({
        key: 'commentId',
        value: commentId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CommentUpdatedCreatedObject>(request);
  }

  /**
 * Deletes a comment from an API's collection. On success, this returns an HTTP `204 No Content` response.
**Note:**

Deleting the first comment of a thread deletes all the comments in the thread.

 * @param {string} apiId - The API's ID.
 * @param {string} collectionId - The collection's unique ID.
 * @param {number} commentId - The comment's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - No Content
 */
  async deleteApiCollectionComment(
    apiId: string,
    collectionId: string,
    commentId: number,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(
      this.deleteApiCollectionCommentConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/apis/{apiId}/collections/{collectionId}/comments/{commentId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
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
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .addPathParam({
        key: 'commentId',
        value: commentId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
 * Syncs a collection attached to an API with the API schema.
This is an asynchronous endpoint that returns an HTTP `202 Accepted` response. The response contains a polling link to the `/apis/{apiId}/tasks/{taskId}` endpoint in the `Location` header.

**Note:**

This endpoint only supports the OpenAPI 3 schema type.

 * @param {string} apiId - The API's ID.
 * @param {string} collectionId - The collection's unique ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<SyncCollectionWithSchemaResponse>>} - Accepted
 */
  async syncCollectionWithSchema(
    apiId: string,
    collectionId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<SyncCollectionWithSchemaResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.syncCollectionWithSchemaConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/apis/{apiId}/collections/{collectionId}/sync-with-schema-tasks')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: syncCollectionWithSchemaResponseResponse,
        contentType: ContentType.Json,
        status: 202,
      })
      .addError({
        error: Api400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Api403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Api404Error,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .build();
    return this.client.callDirect<SyncCollectionWithSchemaResponse>(request);
  }

  /**
   * Gets all comments left by users in an API.
   * @param {string} apiId - The API's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CommentResponseObject>>} - Successful Response
   */
  async getApiComments(
    apiId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CommentResponseObject> {
    const resolvedConfig = this.getResolvedConfig(this.getApiCommentsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/apis/{apiId}/comments')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: commentResponseObjectResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ApiErrorNameMessage,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
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
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .build();
    return this.client.callDirect<CommentResponseObject>(request);
  }

  /**
 * Creates a comment on an API. To create a reply on an existing comment, include the `threadId` property in the request body.
**Note:**

This endpoint accepts a max of 10,000 characters.

 * @param {string} apiId - The API's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CommentUpdatedCreatedObject>>} - Created
 */
  async createApiComment(
    apiId: string,
    body: CommentCreate,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CommentUpdatedCreatedObject> {
    const resolvedConfig = this.getResolvedConfig(this.createApiCommentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/apis/{apiId}/comments')
      .setRequestSchema(commentCreateRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: commentUpdatedCreatedObjectResponse,
        contentType: ContentType.Json,
        status: 201,
      })
      .addError({
        error: ApiErrorNameMessage,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
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
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CommentUpdatedCreatedObject>(request);
  }

  /**
 * Updates a comment on an API.
**Note:**

This endpoint accepts a max of 10,000 characters.

 * @param {string} apiId - The API's ID.
 * @param {number} commentId - The comment's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CommentUpdatedCreatedObject>>} - Successful Response
 */
  async updateApiComment(
    apiId: string,
    commentId: number,
    body: CommentUpdate,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CommentUpdatedCreatedObject> {
    const resolvedConfig = this.getResolvedConfig(this.updateApiCommentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/apis/{apiId}/comments/{commentId}')
      .setRequestSchema(commentUpdateRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: commentUpdatedCreatedObjectResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ApiErrorNameMessage,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
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
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addPathParam({
        key: 'commentId',
        value: commentId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CommentUpdatedCreatedObject>(request);
  }

  /**
 * Deletes a comment from an API. On success, this returns an HTTP `204 No Content` response.
**Note:**

Deleting the first comment of a thread deletes all the comments in the thread.

 * @param {string} apiId - The API's ID.
 * @param {number} commentId - The comment's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - No Content
 */
  async deleteApiComment(
    apiId: string,
    commentId: number,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.deleteApiCommentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/apis/{apiId}/comments/{commentId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
      })
      .addError({
        error: ApiErrorNameMessage,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
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
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addPathParam({
        key: 'commentId',
        value: commentId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
   * Creates a schema for an API.
   * @param {string} apiId - The API's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CreateApiSchemaResponse>>} - Created
   */
  async createApiSchema(
    apiId: string,
    body: CreateApiSchema,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreateApiSchemaResponse> {
    const resolvedConfig = this.getResolvedConfig(this.createApiSchemaConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/apis/{apiId}/schemas')
      .setRequestSchema(createApiSchemaRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createApiSchemaResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Api400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Api403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Api404Error,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CreateApiSchemaResponse>(request);
  }

  /**
 * Gets information about API schema. You can use the `versionId` query parameter to get a schema published in an API version.
You can use this API to do the following:

- Get a schema's metadata.
- Get all the files in a schema. This only returns the first file in the schema. The endpoint response contains a link to the next set of response results.
- Get a schema's contents in multi-file or bundled format.

**Note:**

The `versionId` query parameter is a required parameter for API viewers.

 * @param {string} apiId - The API's ID.
 * @param {string} schemaId - The API schema's ID.
 * @param {string} [params.versionId] - The API's version ID. This is a required parameter for API viewers.
 * @param {boolean} [params.bundled] - If true, return the schema in a bundled format.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetApiSchema>>} - Successful Response
 */
  async getApiSchema(
    apiId: string,
    schemaId: string,
    params?: GetApiSchemaParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetApiSchema> {
    const resolvedConfig = this.getResolvedConfig(this.getApiSchemaConfig, requestConfig);
    z.object({ versionId: z.string().optional(), bundled: z.boolean().optional() }).parse(
      params ?? {},
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/apis/{apiId}/schemas/{schemaId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getApiSchemaResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Api400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Api403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Api404Error,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addPathParam({
        key: 'schemaId',
        value: schemaId,
      })
      .addQueryParam({
        key: 'versionId',
        value: params?.versionId,
      })
      .addQueryParam({
        key: 'bundled',
        value: params?.bundled,
      })
      .build();
    return this.client.callDirect<GetApiSchema>(request);
  }

  /**
 * Gets the files in an API schema. You can use the `versionId` query parameter to get schema files published in an API version.
**Note:**

The `versionId` query parameter is a required parameter for API viewers.

 * @param {string} apiId - The API's ID.
 * @param {string} schemaId - The API schema's ID.
 * @param {string} [params.versionId] - The API's version ID. This is a required parameter for API viewers.
 * @param {number} [params.limit] - The maximum number of rows to return in the response.
 * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ApiSchemaFiles>>} - Successful Response
 */
  async getApiSchemaFiles(
    apiId: string,
    schemaId: string,
    params?: GetApiSchemaFilesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ApiSchemaFiles> {
    const resolvedConfig = this.getResolvedConfig(this.getApiSchemaFilesConfig, requestConfig);
    z.object({
      versionId: z.string().optional(),
      limit: z.number().optional(),
      cursor: z.string().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/apis/{apiId}/schemas/{schemaId}/files')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: apiSchemaFilesResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Api400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Common403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Api404Error,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addPathParam({
        key: 'schemaId',
        value: schemaId,
      })
      .addQueryParam({
        key: 'versionId',
        value: params?.versionId,
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
    return this.client.callDirect<ApiSchemaFiles>(request);
  }

  /**
 * Gets an API schema file contents at the defined path. You can use the `versionId` query parameter to get schema file contents published in an API version.
**Note:**

The `versionId` query parameter is a required parameter for API viewers.

 * @param {string} apiId - The API's ID.
 * @param {string} schemaId - The API schema's ID.
 * @param {string} filePath - The path to the schema file.
 * @param {string} [params.versionId] - The API's version ID. This is a required parameter for API viewers.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<SchemaFileContents>>} - Successful Response
 */
  async getApiSchemaFileContents(
    apiId: string,
    schemaId: string,
    filePath: string,
    params?: GetApiSchemaFileContentsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<SchemaFileContents> {
    const resolvedConfig = this.getResolvedConfig(
      this.getApiSchemaFileContentsConfig,
      requestConfig,
    );
    z.object({ versionId: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/apis/{apiId}/schemas/{schemaId}/files/{file-path}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: schemaFileContentsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Api400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Common403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Api404Error,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addPathParam({
        key: 'schemaId',
        value: schemaId,
      })
      .addPathParam({
        key: 'file-path',
        value: filePath,
      })
      .addQueryParam({
        key: 'versionId',
        value: params?.versionId,
      })
      .build();
    return this.client.callDirect<SchemaFileContents>(request);
  }

  /**
 * Creates or updates an API schema file.
**Note:**

- If the provided file path exists, the file is updated with the new contents.
- If the provided file path does not exist, then a new schema file is created.
- If the file path contains a `/` (forward slash) character, then a folder is created. For example, if the file path is the `dir/schema.json` value, then a `dir` folder is created with the `schema.json` file inside.
- You can only update the `root` tag for protobuf specifications.

 * @param {string} apiId - The API's ID.
 * @param {string} schemaId - The API schema's ID.
 * @param {string} filePath - The path to the schema file.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CreateUpdateApiSchemaFileResponse>>} - Successful Response
 */
  async createUpdateApiSchemaFile(
    apiId: string,
    schemaId: string,
    filePath: string,
    body: CreateUpdateApiSchemaFile,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreateUpdateApiSchemaFileResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.createUpdateApiSchemaFileConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/apis/{apiId}/schemas/{schemaId}/files/{file-path}')
      .setRequestSchema(createUpdateApiSchemaFileRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createUpdateApiSchemaFileResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Api400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Api403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Api404Error,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addPathParam({
        key: 'schemaId',
        value: schemaId,
      })
      .addPathParam({
        key: 'file-path',
        value: filePath,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CreateUpdateApiSchemaFileResponse>(request);
  }

  /**
   * Deletes a file in an API schema. On success, this returns an HTTP `204 No Content` response.
   * @param {string} apiId - The API's ID.
   * @param {string} schemaId - The API schema's ID.
   * @param {string} filePath - The path to the schema file.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - Deleted
   */
  async deleteApiSchemaFile(
    apiId: string,
    schemaId: string,
    filePath: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.deleteApiSchemaFileConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/apis/{apiId}/schemas/{schemaId}/files/{file-path}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
      })
      .addError({
        error: Api400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Api403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Api404Error,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addPathParam({
        key: 'schemaId',
        value: schemaId,
      })
      .addPathParam({
        key: 'file-path',
        value: filePath,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
   * Gets the status of an asynchronous task.
   * @param {string} apiId - The API's ID.
   * @param {string} taskId - The task's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetStatusOfAnAsyncApiTaskOkResponse>>} - Successful Response
   */
  async getStatusOfAnAsyncApiTask(
    apiId: string,
    taskId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetStatusOfAnAsyncApiTaskOkResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.getStatusOfAnAsyncApiTaskConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/apis/{apiId}/tasks/{taskId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getStatusOfAnAsyncApiTaskOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Api400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Api403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addPathParam({
        key: 'taskId',
        value: taskId,
      })
      .build();
    return this.client.callDirect<GetStatusOfAnAsyncApiTaskOkResponse>(request);
  }

  /**
   * Gets all the published versions of an API.
   * @param {string} apiId - The API's ID.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {number} [params.limit] - The maximum number of rows to return in the response.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetApiVersions>>} - Successful Response
   */
  async getApiVersions(
    apiId: string,
    params?: GetApiVersionsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetApiVersions> {
    const resolvedConfig = this.getResolvedConfig(this.getApiVersionsConfig, requestConfig);
    z.object({ cursor: z.string().optional(), limit: z.number().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/apis/{apiId}/versions')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getApiVersionsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Common403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Api404Error,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
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
    return this.client.callDirect<GetApiVersions>(request);
  }

  /**
 * Creates a new API version asynchronously and immediately returns an HTTP `202 Accepted` response. The response contains a polling link to the task status API in the `Location` header.
This endpoint is equivalent to publishing a version in Postman app, which is the snapshot of API collections and schema at a given point in time.

 * @param {string} apiId - The API's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ApiVersionCreated>>} - Accepted
 */
  async createApiVersion(
    apiId: string,
    body: CreateApiVersion,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ApiVersionCreated> {
    const resolvedConfig = this.getResolvedConfig(this.createApiVersionConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/apis/{apiId}/versions')
      .setRequestSchema(createApiVersionRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: apiVersionCreatedResponse,
        contentType: ContentType.Json,
        status: 202,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Api403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Api404Error,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<ApiVersionCreated>(request);
  }

  /**
 * Gets information about an API version.
**Note:**

- For API editors, this endpoint returns an HTTP `302 Found` status code when the version status is pending. It also returns the `/apis/{apiId}/tasks/{taskId}` task status response header.
- For API viewers, this endpoint returns an HTTP `404 Not Found` when the version status is pending.

 * @param {string} apiId - The API's ID.
 * @param {string} versionId - The API's version ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ApiVersion>>} - Successful Response
 */
  async getApiVersion(
    apiId: string,
    versionId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ApiVersion | any> {
    const resolvedConfig = this.getResolvedConfig(this.getApiVersionConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/apis/{apiId}/versions/{versionId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: apiVersionResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 302,
      })
      .addError({
        error: ApiErrorNameMessage,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Common403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Api404Error,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addPathParam({
        key: 'versionId',
        value: versionId,
      })
      .build();
    return this.client.callDirect<ApiVersion | any>(request);
  }

  /**
 * Updates an API version.
**Note:**

This endpoint returns an HTTP `404 Not Found` response when an API version is pending publication.

 * @param {string} apiId - The API's ID.
 * @param {string} versionId - The API's version ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ApiVersionUpdated>>} - Successful Response
 */
  async updateApiVersion(
    apiId: string,
    versionId: string,
    body: UpdateApiVersion,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ApiVersionUpdated> {
    const resolvedConfig = this.getResolvedConfig(this.updateApiVersionConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/apis/{apiId}/versions/{versionId}')
      .setRequestSchema(updateApiVersionRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: apiVersionUpdatedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ApiErrorNameMessage,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Api403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Api404Error,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addPathParam({
        key: 'versionId',
        value: versionId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<ApiVersionUpdated>(request);
  }

  /**
 * Deletes an API version. On success, this returns an HTTP `204 No Content` response.
**Note:**

This endpoint returns an HTTP `404 Not Found` response when an API version is pending publication.

 * @param {string} apiId - The API's ID.
 * @param {string} versionId - The API's version ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - No Content
 */
  async deleteApiVersion(
    apiId: string,
    versionId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.deleteApiVersionConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/apis/{apiId}/versions/{versionId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
      })
      .addError({
        error: Api400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Api403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Api404Error,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .addPathParam({
        key: 'versionId',
        value: versionId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }
}
