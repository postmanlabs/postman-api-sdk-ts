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
 * Service class for CollectionFoldersService operations.
 * Provides methods to interact with CollectionFoldersService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class CollectionFoldersService extends BaseService {
  protected getFolderCommentsConfig?: Partial<SdkConfig>;

  protected createFolderCommentConfig?: Partial<SdkConfig>;

  protected updateFolderCommentConfig?: Partial<SdkConfig>;

  protected deleteFolderCommentConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getFolderComments.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetFolderCommentsConfig(config: Partial<SdkConfig>): this {
    this.getFolderCommentsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createFolderComment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateFolderCommentConfig(config: Partial<SdkConfig>): this {
    this.createFolderCommentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateFolderComment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateFolderCommentConfig(config: Partial<SdkConfig>): this {
    this.updateFolderCommentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteFolderComment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteFolderCommentConfig(config: Partial<SdkConfig>): this {
    this.deleteFolderCommentConfig = config;
    return this;
  }

  /**
   * Gets all comments left by users in a folder.
   * @param {string} collectionId - The collection's unique ID.
   * @param {string} folderId - The folder's unique ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CommentResponseObject>>} - Successful Response
   */
  async getFolderComments(
    collectionId: string,
    folderId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CommentResponseObject> {
    const resolvedConfig = this.getResolvedConfig(this.getFolderCommentsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/collections/{collectionId}/folders/{folderId}/comments')
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
        key: 'folderId',
        value: folderId,
      })
      .build();
    return this.client.callDirect<CommentResponseObject>(request);
  }

  /**
 * Creates a comment on a folder. To create a reply on an existing comment, include the `threadId` property in the request body.
**Note:**

This endpoint accepts a max of 10,000 characters.

 * @param {string} collectionId - The collection's unique ID.
 * @param {string} folderId - The folder's unique ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CommentUpdatedCreatedObject>>} - Created
 */
  async createFolderComment(
    collectionId: string,
    folderId: string,
    body: CommentCreate,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CommentUpdatedCreatedObject> {
    const resolvedConfig = this.getResolvedConfig(this.createFolderCommentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/collections/{collectionId}/folders/{folderId}/comments')
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
        key: 'folderId',
        value: folderId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CommentUpdatedCreatedObject>(request);
  }

  /**
 * Updates a comment on a folder.
**Note:**

This endpoint accepts a max of 10,000 characters.

 * @param {string} collectionId - The collection's unique ID.
 * @param {string} folderId - The folder's unique ID.
 * @param {number} commentId - The comment's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CommentUpdatedCreatedObject>>} - Successful Response
 */
  async updateFolderComment(
    collectionId: string,
    folderId: string,
    commentId: number,
    body: CommentUpdate,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CommentUpdatedCreatedObject> {
    const resolvedConfig = this.getResolvedConfig(this.updateFolderCommentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/collections/{collectionId}/folders/{folderId}/comments/{commentId}')
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
        key: 'folderId',
        value: folderId,
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
 * Deletes a comment from a folder. On success, this returns an HTTP `204 No Content` response.
**Note:**

Deleting the first comment of a thread deletes all the comments in the thread.

 * @param {string} collectionId - The collection's unique ID.
 * @param {string} folderId - The folder's unique ID.
 * @param {number} commentId - The comment's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - No Content
 */
  async deleteFolderComment(
    collectionId: string,
    folderId: string,
    commentId: number,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.deleteFolderCommentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/collections/{collectionId}/folders/{folderId}/comments/{commentId}')
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
        key: 'folderId',
        value: folderId,
      })
      .addPathParam({
        key: 'commentId',
        value: commentId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }
}
