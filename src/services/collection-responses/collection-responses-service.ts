import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
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

/**
 * Service class for CollectionResponsesService operations.
 * Provides methods to interact with CollectionResponsesService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class CollectionResponsesService extends BaseService {
  protected getResponseCommentsConfig?: Partial<SdkConfig>;

  protected createResponseCommentConfig?: Partial<SdkConfig>;

  protected updateResponseCommentConfig?: Partial<SdkConfig>;

  protected deleteResponseCommentConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getResponseComments.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetResponseCommentsConfig(config: Partial<SdkConfig>): this {
    this.getResponseCommentsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createResponseComment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateResponseCommentConfig(config: Partial<SdkConfig>): this {
    this.createResponseCommentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateResponseComment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateResponseCommentConfig(config: Partial<SdkConfig>): this {
    this.updateResponseCommentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteResponseComment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteResponseCommentConfig(config: Partial<SdkConfig>): this {
    this.deleteResponseCommentConfig = config;
    return this;
  }

  /**
   * Gets all comments left by users in a response.
   * @param {string} collectionId - The collection's unique ID.
   * @param {string} responseId - The response's unique ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CommentResponseObject>>} - Successful Response
   */
  async getResponseComments(
    collectionId: string,
    responseId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CommentResponseObject> {
    const resolvedConfig = this.getResolvedConfig(this.getResponseCommentsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/collections/{collectionId}/responses/{responseId}/comments')
      .setRequestSchema(z.any())
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
        key: 'collectionId',
        value: collectionId,
      })
      .addPathParam({
        key: 'responseId',
        value: responseId,
      })
      .build();
    return this.client.callDirect<CommentResponseObject>(request);
  }

  /**
 * Creates a comment on a response. To create a reply on an existing comment, include the `threadId` property in the request body.
**Note:**

This endpoint accepts a max of 10,000 characters.

 * @param {string} collectionId - The collection's unique ID.
 * @param {string} responseId - The response's unique ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CommentUpdatedCreatedObject>>} - Created
 */
  async createResponseComment(
    collectionId: string,
    responseId: string,
    body: CommentCreate,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CommentUpdatedCreatedObject> {
    const resolvedConfig = this.getResolvedConfig(this.createResponseCommentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/collections/{collectionId}/responses/{responseId}/comments')
      .setRequestSchema(commentCreateRequest)
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
        key: 'collectionId',
        value: collectionId,
      })
      .addPathParam({
        key: 'responseId',
        value: responseId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CommentUpdatedCreatedObject>(request);
  }

  /**
 * Updates a comment on a response.
**Note:**

This endpoint accepts a max of 10,000 characters.

 * @param {string} collectionId - The collection's unique ID.
 * @param {string} responseId - The response's unique ID.
 * @param {number} commentId - The comment's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CommentUpdatedCreatedObject>>} - Successful Response
 */
  async updateResponseComment(
    collectionId: string,
    responseId: string,
    commentId: number,
    body: CommentUpdate,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CommentUpdatedCreatedObject> {
    const resolvedConfig = this.getResolvedConfig(this.updateResponseCommentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/collections/{collectionId}/responses/{responseId}/comments/{commentId}')
      .setRequestSchema(commentUpdateRequest)
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
        key: 'collectionId',
        value: collectionId,
      })
      .addPathParam({
        key: 'responseId',
        value: responseId,
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
 * Deletes a comment from a response. On success, this returns an HTTP `204 No Content` response.
**Note:**

Deleting the first comment of a thread deletes all the comments in the thread.

 * @param {string} collectionId - The collection's unique ID.
 * @param {string} responseId - The response's unique ID.
 * @param {number} commentId - The comment's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - No Content
 */
  async deleteResponseComment(
    collectionId: string,
    responseId: string,
    commentId: number,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.deleteResponseCommentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/collections/{collectionId}/responses/{responseId}/comments/{commentId}')
      .setRequestSchema(z.any())
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
        key: 'collectionId',
        value: collectionId,
      })
      .addPathParam({
        key: 'responseId',
        value: responseId,
      })
      .addPathParam({
        key: 'commentId',
        value: commentId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }
}
