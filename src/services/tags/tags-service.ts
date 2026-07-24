import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { SuccessResponse, successResponseResponse } from './models/success-response';
import { ApiErrorNameMessage } from '../common/api-error-name-message';
import { ErrorTypeTitleDetailStatus } from '../common/error-type-title-detail-status';
import { ErrorTypeTitleDetailStatusInstance } from '../common/error-type-title-detail-status-instance';
import { UpdateTags, updateTagsRequest } from './models/update-tags';
import { ApiTag400Error } from './models/api-tag400-error';
import { ApiTag400Error1 } from './models/api-tag400-error-1';
import {
  GetTaggedEntitiesOkResponse,
  getTaggedEntitiesOkResponseResponse,
} from './models/get-tagged-entities-ok-response';
import { GetTaggedEntitiesBadRequestResponse } from './models/get-tagged-entities-bad-request-response';
import { GetTaggedEntitiesParams } from './request-params';

/**
 * Service class for TagsService operations.
 * Provides methods to interact with TagsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class TagsService extends BaseService {
  protected getApiTagsConfig?: Partial<SdkConfig>;

  protected updateApiTagsConfig?: Partial<SdkConfig>;

  protected getCollectionTagsConfig?: Partial<SdkConfig>;

  protected updateCollectionTagsConfig?: Partial<SdkConfig>;

  protected getTaggedEntitiesConfig?: Partial<SdkConfig>;

  protected getWorkspaceTagsConfig?: Partial<SdkConfig>;

  protected updateWorkspaceTagsConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getApiTags.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApiTagsConfig(config: Partial<SdkConfig>): this {
    this.getApiTagsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateApiTags.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateApiTagsConfig(config: Partial<SdkConfig>): this {
    this.updateApiTagsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getCollectionTags.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetCollectionTagsConfig(config: Partial<SdkConfig>): this {
    this.getCollectionTagsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateCollectionTags.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateCollectionTagsConfig(config: Partial<SdkConfig>): this {
    this.updateCollectionTagsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTaggedEntities.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTaggedEntitiesConfig(config: Partial<SdkConfig>): this {
    this.getTaggedEntitiesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getWorkspaceTags.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetWorkspaceTagsConfig(config: Partial<SdkConfig>): this {
    this.getWorkspaceTagsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateWorkspaceTags.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateWorkspaceTagsConfig(config: Partial<SdkConfig>): this {
    this.updateWorkspaceTagsConfig = config;
    return this;
  }

  /**
   * Gets all the tags associated with an API.
   * @param {string} apiId - The API's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<SuccessResponse>>} - Success Response
   */
  async getApiTags(apiId: string, requestConfig?: Partial<SdkConfig>): Promise<SuccessResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getApiTagsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/apis/{apiId}/tags')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: successResponseResponse,
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
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'apiId',
        value: apiId,
      })
      .build();
    return this.client.callDirect<SuccessResponse>(request);
  }

  /**
   * Updates an API's associated tags. This endpoint replaces all existing tags with those you pass in the request body.
   * @param {string} apiId - The API's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<SuccessResponse>>} - Success Response
   */
  async updateApiTags(
    apiId: string,
    body: UpdateTags,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<SuccessResponse> {
    const resolvedConfig = this.getResolvedConfig(this.updateApiTagsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/apis/{apiId}/tags')
      .setRequestSchema(updateTagsRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: successResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ApiTag400Error,
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
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
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
    return this.client.callDirect<SuccessResponse>(request);
  }

  /**
   * Gets all the tags associated with a collection.
   * @param {string} collectionId - The collection's unique ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<SuccessResponse>>} - Success Response
   */
  async getCollectionTags(
    collectionId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<SuccessResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getCollectionTagsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/collections/{collectionId}/tags')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: successResponseResponse,
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
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .build();
    return this.client.callDirect<SuccessResponse>(request);
  }

  /**
   * Updates a collection's associated tags. This endpoint replaces all existing tags with those you pass in the request body.
   * @param {string} collectionId - The collection's unique ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<SuccessResponse>>} - Success Response
   */
  async updateCollectionTags(
    collectionId: string,
    body: UpdateTags,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<SuccessResponse> {
    const resolvedConfig = this.getResolvedConfig(this.updateCollectionTagsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/collections/{collectionId}/tags')
      .setRequestSchema(updateTagsRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: successResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ApiTag400Error1,
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
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<SuccessResponse>(request);
  }

  /**
 * Gets Postman elements (entities) by a given tag. Tags enable you to organize and search [workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#tagging-a-workspace), [APIs](https://learning.postman.com/docs/designing-and-developing-your-api/managing-apis/#tagging-apis), and [collections](https://learning.postman.com/docs/collections/using-collections/#tagging-a-collection) that contain shared tags.
**Note:**

Tagging is available on Postman [**Solo**, **Team**, and **Enterprise** plans](https://www.postman.com/pricing/).

 * @param {string} slug - The tag's ID within a team or individual (non-team) user scope.
 * @param {number} [params.limit] - The maximum number of tagged elements to return in a single call.
 * @param {AscDescDefaultDesc} [params.direction] - The ascending (`asc`) or descending (`desc`) order to sort the results by, based on the time of the entity's tagging.
 * @param {string} [params.cursor] - The cursor to get the next set of results in the paginated response. If you pass an invalid value, the API only returns the first set of results.
 * @param {TagsEntityType} [params.entityType] - Filter results for the given entity type.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetTaggedEntitiesOkResponse>>} - Successful Response
 */
  async getTaggedEntities(
    slug: string,
    params?: GetTaggedEntitiesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetTaggedEntitiesOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getTaggedEntitiesConfig, requestConfig);
    z.object({
      limit: z.number().optional(),
      direction: z.unknown().optional(),
      cursor: z.string().optional(),
      entityType: z.unknown().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/tags/{slug}/entities')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getTaggedEntitiesOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: GetTaggedEntitiesBadRequestResponse,
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
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'slug',
        value: slug,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .addQueryParam({
        key: 'direction',
        value: params?.direction,
      })
      .addQueryParam({
        key: 'cursor',
        value: params?.cursor,
      })
      .addQueryParam({
        key: 'entityType',
        value: params?.entityType,
      })
      .build();
    return this.client.callDirect<GetTaggedEntitiesOkResponse>(request);
  }

  /**
   * Gets all the tags associated with a workspace.
   * @param {string} workspaceId - The workspace's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<SuccessResponse>>} - Success Response
   */
  async getWorkspaceTags(
    workspaceId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<SuccessResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getWorkspaceTagsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/workspaces/{workspaceId}/tags')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: successResponseResponse,
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
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'workspaceId',
        value: workspaceId,
      })
      .build();
    return this.client.callDirect<SuccessResponse>(request);
  }

  /**
   * Updates a workspace's associated tags. This endpoint replaces all existing tags with those you pass in the request body.
   * @param {string} workspaceId - The workspace's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<SuccessResponse>>} - Success Response
   */
  async updateWorkspaceTags(
    workspaceId: string,
    body: UpdateTags,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<SuccessResponse> {
    const resolvedConfig = this.getResolvedConfig(this.updateWorkspaceTagsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/workspaces/{workspaceId}/tags')
      .setRequestSchema(updateTagsRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: successResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ApiTag400Error1,
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
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'workspaceId',
        value: workspaceId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<SuccessResponse>(request);
  }
}
