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
 * Service class for CollectionRequestsService operations.
 * Provides methods to interact with CollectionRequestsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class CollectionRequestsService extends BaseService {
  protected getRequestCommentsConfig?: Partial<SdkConfig>;

  protected createRequestCommentConfig?: Partial<SdkConfig>;

  protected updateRequestCommentConfig?: Partial<SdkConfig>;

  protected deleteRequestCommentConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getRequestComments.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetRequestCommentsConfig(config: Partial<SdkConfig>): this {
    this.getRequestCommentsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createRequestComment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateRequestCommentConfig(config: Partial<SdkConfig>): this {
    this.createRequestCommentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateRequestComment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateRequestCommentConfig(config: Partial<SdkConfig>): this {
    this.updateRequestCommentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteRequestComment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteRequestCommentConfig(config: Partial<SdkConfig>): this {
    this.deleteRequestCommentConfig = config;
    return this;
  }

  /**
   * Gets all comments left by users in a request.
   * @param {string} collectionId - The collection's unique ID.
   * @param {string} requestId - The request's unique ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CommentResponseObject>>} - Successful Response
   */
  async getRequestComments(
    collectionId: string,
    requestId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CommentResponseObject> {
    const resolvedConfig = this.getResolvedConfig(this.getRequestCommentsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/collections/{collectionId}/requests/{requestId}/comments')
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
        key: 'requestId',
        value: requestId,
      })
      .build();
    return this.client.callDirect<CommentResponseObject>(request);
  }

  /**
 * Creates a comment on a request. To create a reply on an existing comment, include the `threadId` property in the request body.
**Note:**

This endpoint accepts a max of 10,000 characters.

 * @param {string} collectionId - The collection's unique ID.
 * @param {string} requestId - The request's unique ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CommentUpdatedCreatedObject>>} - Created
 */
  async createRequestComment(
    collectionId: string,
    requestId: string,
    body: CommentCreate,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CommentUpdatedCreatedObject> {
    const resolvedConfig = this.getResolvedConfig(this.createRequestCommentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/collections/{collectionId}/requests/{requestId}/comments')
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
        key: 'requestId',
        value: requestId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CommentUpdatedCreatedObject>(request);
  }

  /**
 * Updates a comment on a request.
**Note:**

This endpoint accepts a max of 10,000 characters.

 * @param {string} collectionId - The collection's unique ID.
 * @param {string} requestId - The request's unique ID.
 * @param {number} commentId - The comment's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CommentUpdatedCreatedObject>>} - Successful Response
 */
  async updateRequestComment(
    collectionId: string,
    requestId: string,
    commentId: number,
    body: CommentUpdate,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CommentUpdatedCreatedObject> {
    const resolvedConfig = this.getResolvedConfig(this.updateRequestCommentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/collections/{collectionId}/requests/{requestId}/comments/{commentId}')
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
        key: 'requestId',
        value: requestId,
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
 * Deletes a comment from a request. On success, this returns an HTTP `204 No Content` response.
**Note:**

Deleting the first comment of a thread deletes all the comments in the thread.

 * @param {string} collectionId - The collection's unique ID.
 * @param {string} requestId - The request's unique ID.
 * @param {number} commentId - The comment's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - No Content
 */
  async deleteRequestComment(
    collectionId: string,
    requestId: string,
    commentId: number,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.deleteRequestCommentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/collections/{collectionId}/requests/{requestId}/comments/{commentId}')
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
        key: 'requestId',
        value: requestId,
      })
      .addPathParam({
        key: 'commentId',
        value: commentId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }
}
