import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  MergePullCollectionChanges,
  mergePullCollectionChangesRequest,
} from './models/merge-pull-collection-changes';
import {
  AsyncMergePullCollectionForkOkResponse,
  asyncMergePullCollectionForkOkResponseResponse,
} from './models/async-merge-pull-collection-fork-ok-response';
import { ErrorTypeTitleDetailStatus } from '../common/error-type-title-detail-status';
import { Common401Error } from '../common/common401-error';
import { Common500Error } from '../common/common500-error';
import { TaskStatusResponse, taskStatusResponseResponse } from './models/task-status-response';
import { CollectionsList, collectionsListResponse } from './models/collections-list';
import {
  CreateCollectionForkParams,
  CreateCollectionParams,
  GetCollectionForksParams,
  GetCollectionParams,
  GetCollectionsForkedByUserParams,
  GetCollectionsParams,
  PutCollectionParams,
  TransformCollectionToOpenApiParams,
} from './request-params';
import { CreateCollection, createCollectionRequest } from './models/create-collection';
import { CollectionCreated, collectionCreatedResponse } from './models/collection-created';
import { ErrorNameMessageDetails } from '../common/error-name-message-details';
import {
  UsersForkedCollections,
  usersForkedCollectionsResponse,
} from './models/users-forked-collections';
import { GetCollectionsForkedByUserBadRequestResponse } from './models/get-collections-forked-by-user-bad-request-response';
import { CreateCollectionFork, createCollectionForkRequest } from './models/create-collection-fork';
import {
  CollectionForkCreated,
  collectionForkCreatedResponse,
} from './models/collection-fork-created';
import { MergeCollectionFork, mergeCollectionForkRequest } from './models/merge-collection-fork';
import {
  CollectionForkMerged,
  collectionForkMergedResponse,
} from './models/collection-fork-merged';
import { Common403Error } from '../common/common403-error';
import {
  CollectionInformation,
  collectionInformationResponse,
} from './models/collection-information';
import { GetAuditLogEventActionsClientErrorResponse } from '../common/get-audit-log-event-actions-client-error-response';
import {
  ReplaceCollectionData,
  replaceCollectionDataRequest,
} from './models/replace-collection-data';
import {
  PutCollectionOkResponse,
  putCollectionOkResponseResponse,
} from './models/put-collection-ok-response';
import {
  CollectionUpdatedAsync,
  collectionUpdatedAsyncResponse,
} from './models/collection-updated-async';
import { CollectionPut400Errors } from './models/collection-put400-errors';
import { CollectionPut404Errors } from './models/collection-put404-errors';
import { UpdateCollection, updateCollectionRequest } from './models/update-collection';
import {
  PatchCollectionOkResponse,
  patchCollectionOkResponseResponse,
} from './models/patch-collection-ok-response';
import { CollectionPatch400Errors } from './models/collection-patch400-errors';
import { CollectionDeleted, collectionDeletedResponse } from './models/collection-deleted';
import {
  CommentResponseObject,
  commentResponseObjectResponse,
} from '../common/comment-response-object';
import { CommentCreate, commentCreateRequest } from '../common/comment-create';
import {
  CommentUpdatedCreatedObject,
  commentUpdatedCreatedObjectResponse,
} from '../common/comment-updated-created-object';
import { CommentUpdate, commentUpdateRequest } from '../common/comment-update';
import { DuplicateCollection, duplicateCollectionRequest } from './models/duplicate-collection';
import {
  DuplicateCollectionResponse,
  duplicateCollectionResponseResponse,
} from './models/duplicate-collection-response';
import { Common400Error } from '../common/common400-error';
import { CollectionForksInfo, collectionForksInfoResponse } from './models/collection-forks-info';
import { GetCollectionForksNotFoundResponse } from './models/get-collection-forks-not-found-response';
import { PublishDocumentation, publishDocumentationRequest } from './models/publish-documentation';
import {
  PublishDocumentationResponse,
  publishDocumentationResponseResponse,
} from './models/publish-documentation-response';
import {
  CollectionChangesPulled,
  collectionChangesPulledResponse,
} from './models/collection-changes-pulled';
import {
  CollectionPullRequests,
  collectionPullRequestsResponse,
} from './models/collection-pull-requests';
import { CreatePullRequest, createPullRequestRequest } from './models/create-pull-request';
import { PullRequestCreated, pullRequestCreatedResponse } from './models/pull-request-created';
import { CollectionRolesInfo, collectionRolesInfoResponse } from './models/collection-roles-info';
import { ErrorTitleType } from './models/error-title-type';
import {
  UpdateCollectionRoles,
  updateCollectionRolesRequest,
} from './models/update-collection-roles';
import {
  SourceCollectionStatus,
  sourceCollectionStatusResponse,
} from './models/source-collection-status';
import { GetSourceCollectionStatusBadRequestResponse } from './models/get-source-collection-status-bad-request-response';
import {
  CollectionTransformed,
  collectionTransformedResponse,
} from './models/collection-transformed';
import { ErrorTypeTitleDetailStatusInstance } from '../common/error-type-title-detail-status-instance';
import {
  TransferCollectionItems,
  transferCollectionItemsRequest,
} from './models/transfer-collection-items';
import {
  CollectionItemsTransferred,
  collectionItemsTransferredResponse,
} from './models/collection-items-transferred';
import { CreateApiClientErrorResponse } from '../common/create-api-client-error-response';
import {
  GetCollectionUpdateStatus,
  getCollectionUpdateStatusResponse,
} from './models/get-collection-update-status';

/**
 * Service class for CollectionsService operations.
 * Provides methods to interact with CollectionsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class CollectionsService extends BaseService {
  protected asyncMergePullCollectionForkConfig?: Partial<SdkConfig>;

  protected asyncMergePullCollectionTaskStatusConfig?: Partial<SdkConfig>;

  protected getCollectionsConfig?: Partial<SdkConfig>;

  protected createCollectionConfig?: Partial<SdkConfig>;

  protected getCollectionsForkedByUserConfig?: Partial<SdkConfig>;

  protected createCollectionForkConfig?: Partial<SdkConfig>;

  protected mergeCollectionForkConfig?: Partial<SdkConfig>;

  protected getCollectionConfig?: Partial<SdkConfig>;

  protected putCollectionConfig?: Partial<SdkConfig>;

  protected patchCollectionConfig?: Partial<SdkConfig>;

  protected deleteCollectionConfig?: Partial<SdkConfig>;

  protected getCollectionCommentsConfig?: Partial<SdkConfig>;

  protected createCollectionCommentConfig?: Partial<SdkConfig>;

  protected updateCollectionCommentConfig?: Partial<SdkConfig>;

  protected deleteCollectionCommentConfig?: Partial<SdkConfig>;

  protected duplicateCollectionConfig?: Partial<SdkConfig>;

  protected getCollectionForksConfig?: Partial<SdkConfig>;

  protected publishDocumentationConfig?: Partial<SdkConfig>;

  protected unpublishDocumentationConfig?: Partial<SdkConfig>;

  protected pullCollectionChangesConfig?: Partial<SdkConfig>;

  protected getCollectionPullRequestsConfig?: Partial<SdkConfig>;

  protected createCollectionPullRequestConfig?: Partial<SdkConfig>;

  protected getCollectionRolesConfig?: Partial<SdkConfig>;

  protected updateCollectionRolesConfig?: Partial<SdkConfig>;

  protected getSourceCollectionStatusConfig?: Partial<SdkConfig>;

  protected transformCollectionToOpenApiConfig?: Partial<SdkConfig>;

  protected transferCollectionFoldersConfig?: Partial<SdkConfig>;

  protected transferCollectionRequestsConfig?: Partial<SdkConfig>;

  protected transferCollectionResponsesConfig?: Partial<SdkConfig>;

  protected getDuplicateCollectionTaskStatusConfig?: Partial<SdkConfig>;

  protected getCollectionUpdatesTasksConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for asyncMergePullCollectionFork.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAsyncMergePullCollectionForkConfig(config: Partial<SdkConfig>): this {
    this.asyncMergePullCollectionForkConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for asyncMergePullCollectionTaskStatus.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAsyncMergePullCollectionTaskStatusConfig(config: Partial<SdkConfig>): this {
    this.asyncMergePullCollectionTaskStatusConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getCollections.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetCollectionsConfig(config: Partial<SdkConfig>): this {
    this.getCollectionsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createCollection.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateCollectionConfig(config: Partial<SdkConfig>): this {
    this.createCollectionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getCollectionsForkedByUser.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetCollectionsForkedByUserConfig(config: Partial<SdkConfig>): this {
    this.getCollectionsForkedByUserConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createCollectionFork.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateCollectionForkConfig(config: Partial<SdkConfig>): this {
    this.createCollectionForkConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for mergeCollectionFork.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setMergeCollectionForkConfig(config: Partial<SdkConfig>): this {
    this.mergeCollectionForkConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getCollection.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetCollectionConfig(config: Partial<SdkConfig>): this {
    this.getCollectionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for putCollection.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPutCollectionConfig(config: Partial<SdkConfig>): this {
    this.putCollectionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for patchCollection.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPatchCollectionConfig(config: Partial<SdkConfig>): this {
    this.patchCollectionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteCollection.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteCollectionConfig(config: Partial<SdkConfig>): this {
    this.deleteCollectionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getCollectionComments.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetCollectionCommentsConfig(config: Partial<SdkConfig>): this {
    this.getCollectionCommentsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createCollectionComment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateCollectionCommentConfig(config: Partial<SdkConfig>): this {
    this.createCollectionCommentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateCollectionComment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateCollectionCommentConfig(config: Partial<SdkConfig>): this {
    this.updateCollectionCommentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteCollectionComment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteCollectionCommentConfig(config: Partial<SdkConfig>): this {
    this.deleteCollectionCommentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for duplicateCollection.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDuplicateCollectionConfig(config: Partial<SdkConfig>): this {
    this.duplicateCollectionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getCollectionForks.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetCollectionForksConfig(config: Partial<SdkConfig>): this {
    this.getCollectionForksConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for publishDocumentation.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPublishDocumentationConfig(config: Partial<SdkConfig>): this {
    this.publishDocumentationConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for unpublishDocumentation.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUnpublishDocumentationConfig(config: Partial<SdkConfig>): this {
    this.unpublishDocumentationConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for pullCollectionChanges.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPullCollectionChangesConfig(config: Partial<SdkConfig>): this {
    this.pullCollectionChangesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getCollectionPullRequests.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetCollectionPullRequestsConfig(config: Partial<SdkConfig>): this {
    this.getCollectionPullRequestsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createCollectionPullRequest.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateCollectionPullRequestConfig(config: Partial<SdkConfig>): this {
    this.createCollectionPullRequestConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getCollectionRoles.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetCollectionRolesConfig(config: Partial<SdkConfig>): this {
    this.getCollectionRolesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateCollectionRoles.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateCollectionRolesConfig(config: Partial<SdkConfig>): this {
    this.updateCollectionRolesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getSourceCollectionStatus.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSourceCollectionStatusConfig(config: Partial<SdkConfig>): this {
    this.getSourceCollectionStatusConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for transformCollectionToOpenApi.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setTransformCollectionToOpenApiConfig(config: Partial<SdkConfig>): this {
    this.transformCollectionToOpenApiConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for transferCollectionFolders.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setTransferCollectionFoldersConfig(config: Partial<SdkConfig>): this {
    this.transferCollectionFoldersConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for transferCollectionRequests.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setTransferCollectionRequestsConfig(config: Partial<SdkConfig>): this {
    this.transferCollectionRequestsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for transferCollectionResponses.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setTransferCollectionResponsesConfig(config: Partial<SdkConfig>): this {
    this.transferCollectionResponsesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getDuplicateCollectionTaskStatus.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetDuplicateCollectionTaskStatusConfig(config: Partial<SdkConfig>): this {
    this.getDuplicateCollectionTaskStatusConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getCollectionUpdatesTasks.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetCollectionUpdatesTasksConfig(config: Partial<SdkConfig>): this {
    this.getCollectionUpdatesTasksConfig = config;
    return this;
  }

  /**
 * [Merges](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/#merge-changes-from-a-fork) a forked (source) collection and its parent (destination) collection asynchronously. To pull changes into a fork, pass the forked collection's ID as the `destination` value and the parent collection ID as the `source` value.
The response returns a task `id` value, which you can use to track the merge's status with the GET `/collection-merges-tasks/{taskId}` endpoint.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<AsyncMergePullCollectionForkOkResponse>>} - Successful Response
 */
  async asyncMergePullCollectionFork(
    body: MergePullCollectionChanges,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<AsyncMergePullCollectionForkOkResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.asyncMergePullCollectionForkConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/collection-merges')
      .setRequestSchema(mergePullCollectionChangesRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: asyncMergePullCollectionForkOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<AsyncMergePullCollectionForkOkResponse>(request);
  }

  /**
 * Gets the status of a collection's merge or a pull changes task.
**Note:**

After a merge's success or failure, the task's status is only available for a period of 24 hours. Afterwards, this endpoint returns an HTTP `404 Not Found` response.

 * @param {string} taskId - The task's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<TaskStatusResponse>>} - Task Status Response
 */
  async asyncMergePullCollectionTaskStatus(
    taskId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<TaskStatusResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.asyncMergePullCollectionTaskStatusConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/collection-merges-tasks/{taskId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: taskStatusResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Common401Error,
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
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'taskId',
        value: taskId,
      })
      .build();
    return this.client.callDirect<TaskStatusResponse>(request);
  }

  /**
 * Gets all of your [collections](https://www.postman.com/docs/collections). The response includes all of your subscribed collections.
**Note:**

- It's recommended that you use pagination with this endpoint. Pagination improves endpoint performance. Unpaginated calls are considered deprecated and are subject to change.
- Filtering with the `name` parameter when you also pass the `limit` and `offset` parameters is not supported.
- If you pass an invalid workspace ID for the `workspace` query parameter, this endpoint returns an HTTP `200 OK` response with an empty array.

 * @param {string} [params.workspace] - The workspace's ID.
 * @param {string} [params.name] - Filter results by collections whose name exactly matches the given value. Partial or substring matches are not supported.
 * @param {number} [params.limit] - The maximum number of rows to return in the response.
 * @param {number} [params.offset] - The zero-based offset of the first item to return.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CollectionsList>>} - Successful Response
 */
  async getCollections(
    params?: GetCollectionsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionsList> {
    const resolvedConfig = this.getResolvedConfig(this.getCollectionsConfig, requestConfig);
    z.object({
      workspace: z.string().optional(),
      name: z.string().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/collections')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionsListResponse,
        contentType: ContentType.Json,
        status: 200,
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
        key: 'workspace',
        value: params?.workspace,
      })
      .addQueryParam({
        key: 'name',
        value: params?.name,
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
    return this.client.callDirect<CollectionsList>(request);
  }

  /**
 * Creates a collection using the [Postman Collection v2.1.0 schema format](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
**Note:**

If you do not include the `workspace` query parameter, the system creates the collection in the oldest personal Internal workspace you own.

 * @param {string} params.workspace - The workspace's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CollectionCreated>>} - Successful Response
 */
  async createCollection(
    body: CreateCollection,
    params: CreateCollectionParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionCreated> {
    const resolvedConfig = this.getResolvedConfig(this.createCollectionConfig, requestConfig);
    z.object({ workspace: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/collections')
      .setRequestSchema(createCollectionRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionCreatedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorNameMessageDetails,
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
        key: 'workspace',
        value: params?.workspace,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CollectionCreated>(request);
  }

  /**
   * Gets a list of all the authenticated user's forked collections.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {number} [params.limit] - The maximum number of rows to return in the response.
   * @param {AscDesc} [params.direction] - Sort the results by creation date in ascending (`asc`) or descending (`desc`) order.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<UsersForkedCollections>>} - Successful Response
   */
  async getCollectionsForkedByUser(
    params?: GetCollectionsForkedByUserParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<UsersForkedCollections> {
    const resolvedConfig = this.getResolvedConfig(
      this.getCollectionsForkedByUserConfig,
      requestConfig,
    );
    z.object({
      cursor: z.string().optional(),
      limit: z.number().optional(),
      direction: z.unknown().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/collections/collection-forks')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: usersForkedCollectionsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: GetCollectionsForkedByUserBadRequestResponse,
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
        key: 'cursor',
        value: params?.cursor,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .addQueryParam({
        key: 'direction',
        value: params?.direction,
      })
      .build();
    return this.client.callDirect<UsersForkedCollections>(request);
  }

  /**
   * Creates a [fork](https://learning.postman.com/docs/collaborating-in-postman/version-control/#creating-a-fork) from an existing collection into a workspace.
   * @param {string} collectionId - The collection's ID.
   * @param {string} params.workspace - The workspace ID in which to create the fork.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CollectionForkCreated>>} - Successful Response
   */
  async createCollectionFork(
    collectionId: string,
    body: CreateCollectionFork,
    params: CreateCollectionForkParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionForkCreated> {
    const resolvedConfig = this.getResolvedConfig(this.createCollectionForkConfig, requestConfig);
    z.object({ workspace: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/collections/fork/{collectionId}')
      .setRequestSchema(createCollectionForkRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionForkCreatedResponse,
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
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .addQueryParam({
        key: 'workspace',
        value: params?.workspace,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CollectionForkCreated>(request);
  }

  /**
 * **This endpoint is deprecated.**
Merges a forked collection back into its parent collection. You must have the [Editor role](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#collection-roles) for the collection to merge a fork.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CollectionForkMerged>>} - Successful Response
 */
  async mergeCollectionFork(
    body: MergeCollectionFork,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionForkMerged> {
    const resolvedConfig = this.getResolvedConfig(this.mergeCollectionForkConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/collections/merge')
      .setRequestSchema(mergeCollectionForkRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionForkMergedResponse,
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
        error: ErrorNameMessageDetails,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CollectionForkMerged>(request);
  }

  /**
   * Gets information about a collection. For a complete list of this endpoint's possible values, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
   * @param {string} collectionId - The collection's ID.
   * @param {string} [params.accessKey] - A collection's read-only access key. Using this query parameter does not require an API key to call the endpoint.
   * @param {CollectionModelQuery} [params.model] - Return a list of only the collection's root-level request (`rootLevelRequests`) and folder (`rootLevelFolders`) IDs instead of the full collection element data.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CollectionInformation>>} - Successful Response
   */
  async getCollection(
    collectionId: string,
    params?: GetCollectionParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionInformation> {
    const resolvedConfig = this.getResolvedConfig(this.getCollectionConfig, requestConfig);
    z.object({ accessKey: z.string().optional(), model: z.unknown().optional() }).parse(
      params ?? {},
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/collections/{collectionId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionInformationResponse,
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
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .addQueryParam({
        key: 'access_key',
        value: params?.accessKey,
      })
      .addQueryParam({
        key: 'model',
        value: params?.model,
      })
      .build();
    return this.client.callDirect<CollectionInformation>(request);
  }

  /**
 * Replaces the contents of a collection using the [Postman Collection v2.1.0 schema format](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). Include the collection's ID values in the request body. If you do not, the endpoint removes the existing items and creates new items.
- To perform an update asynchronously, use the `Prefer` header with the `respond-async` value. When performing an async update, this endpoint returns a HTTP `202 Accepted` response.
- For a complete list of properties and information, see the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
- For protocol profile behavior, refer to Postman's [Protocol Profile Behavior documentation](https://github.com/postmanlabs/postman-runtime/blob/develop/docs/protocol-profile-behavior.md).

**Note:**

- The maximum collection size this endpoint accepts cannot exceed 100 MB.
- Use the GET `/collection-updates-tasks/{taskId}` endpoint to get the collection's update status when performing an asynchronous update.
- If you don't include the collection items' ID values from the request body, the endpoint **removes** the existing items and recreates the items with new ID values.
- To copy another collection's contents to the given collection, remove all ID values before you pass it in this endpoint. If you do not, this endpoint returns an error. These values include the `id`, `uid`, and `postman_id` values.

 * @param {string} collectionId - The collection's ID.
 * @param {Prefer} [params.prefer] - The `respond-async` header to perform the update asynchronously.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PutCollectionOkResponse>>} - Successful Response
 */
  async putCollection(
    collectionId: string,
    body: ReplaceCollectionData,
    params?: PutCollectionParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PutCollectionOkResponse | CollectionUpdatedAsync> {
    const resolvedConfig = this.getResolvedConfig(this.putCollectionConfig, requestConfig);
    z.object({ prefer: z.unknown().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/collections/{collectionId}')
      .setRequestSchema(replaceCollectionDataRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: putCollectionOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addResponse({
        schema: collectionUpdatedAsyncResponse,
        contentType: ContentType.Json,
        status: 202,
      })
      .addError({
        error: CollectionPut400Errors,
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
        error: CollectionPut404Errors,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 409,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .addHeaderParam({
        key: 'Prefer',
        value: params?.prefer,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<PutCollectionOkResponse | CollectionUpdatedAsync>(request);
  }

  /**
   * Updates specific collection information, such as its name, events, or its variables. For more information, see the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
   * @param {string} collectionId - The collection's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<PatchCollectionOkResponse>>} - Successful Response
   */
  async patchCollection(
    collectionId: string,
    body: UpdateCollection,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PatchCollectionOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.patchCollectionConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PATCH')
      .setPath('/collections/{collectionId}')
      .setRequestSchema(updateCollectionRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: patchCollectionOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: CollectionPatch400Errors,
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
        key: 'collectionId',
        value: collectionId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<PatchCollectionOkResponse>(request);
  }

  /**
   * Deletes a collection.
   * @param {string} collectionId - The collection's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CollectionDeleted>>} - Successful Response
   */
  async deleteCollection(
    collectionId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionDeleted> {
    const resolvedConfig = this.getResolvedConfig(this.deleteCollectionConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/collections/{collectionId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionDeletedResponse,
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
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .build();
    return this.client.callDirect<CollectionDeleted>(request);
  }

  /**
   * Gets all comments left by users in a collection.
   * @param {string} collectionId - The collection's unique ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CommentResponseObject>>} - Successful Response
   */
  async getCollectionComments(
    collectionId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CommentResponseObject> {
    const resolvedConfig = this.getResolvedConfig(this.getCollectionCommentsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/collections/{collectionId}/comments')
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
      .build();
    return this.client.callDirect<CommentResponseObject>(request);
  }

  /**
 * Creates a comment on a collection. To create a reply on an existing comment, include the `threadId` property in the request body.
**Note:**

This endpoint accepts a max of 10,000 characters.

 * @param {string} collectionId - The collection's unique ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CommentUpdatedCreatedObject>>} - Created
 */
  async createCollectionComment(
    collectionId: string,
    body: CommentCreate,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CommentUpdatedCreatedObject> {
    const resolvedConfig = this.getResolvedConfig(
      this.createCollectionCommentConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/collections/{collectionId}/comments')
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
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CommentUpdatedCreatedObject>(request);
  }

  /**
 * Updates a comment on a collection.
**Note:**

This endpoint accepts a max of 10,000 characters.

 * @param {string} collectionId - The collection's unique ID.
 * @param {number} commentId - The comment's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CommentUpdatedCreatedObject>>} - Successful Response
 */
  async updateCollectionComment(
    collectionId: string,
    commentId: number,
    body: CommentUpdate,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CommentUpdatedCreatedObject> {
    const resolvedConfig = this.getResolvedConfig(
      this.updateCollectionCommentConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/collections/{collectionId}/comments/{commentId}')
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
        key: 'commentId',
        value: commentId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CommentUpdatedCreatedObject>(request);
  }

  /**
 * Deletes a comment from a collection. On success, this returns an HTTP `204 No Content` response.
**Note:**

Deleting the first comment of a thread deletes all the comments in the thread.

 * @param {string} collectionId - The collection's unique ID.
 * @param {number} commentId - The comment's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - No Content
 */
  async deleteCollectionComment(
    collectionId: string,
    commentId: number,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(
      this.deleteCollectionCommentConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/collections/{collectionId}/comments/{commentId}')
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
        key: 'commentId',
        value: commentId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
 * Creates a duplicate of the given collection in another workspace.
Use the GET `/collection-duplicate-tasks/{taskId}` endpoint to get the duplication task's current status.

 * @param {string} collectionId - The collection's unique ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<DuplicateCollectionResponse>>} - Successful Response
 */
  async duplicateCollection(
    collectionId: string,
    body: DuplicateCollection,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<DuplicateCollectionResponse> {
    const resolvedConfig = this.getResolvedConfig(this.duplicateCollectionConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/collections/{collectionId}/duplicates')
      .setRequestSchema(duplicateCollectionRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: duplicateCollectionResponseResponse,
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
        error: Common403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Common500Error,
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
    return this.client.callDirect<DuplicateCollectionResponse>(request);
  }

  /**
   * Gets a collection's forked collections. The response returns data for each fork, such as the fork's ID, the user who forked it, and the fork's creation date.
   * @param {string} collectionId - The collection's ID.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {number} [params.limit] - The maximum number of rows to return in the response.
   * @param {AscDesc} [params.direction] - Sort the results by creation date in ascending (`asc`) or descending (`desc`) order.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CollectionForksInfo>>} - Successful Response
   */
  async getCollectionForks(
    collectionId: string,
    params?: GetCollectionForksParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionForksInfo> {
    const resolvedConfig = this.getResolvedConfig(this.getCollectionForksConfig, requestConfig);
    z.object({
      cursor: z.string().optional(),
      limit: z.number().optional(),
      direction: z.unknown().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/collections/{collectionId}/forks')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionForksInfoResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: GetAuditLogEventActionsClientErrorResponse,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: GetCollectionForksNotFoundResponse,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .addQueryParam({
        key: 'cursor',
        value: params?.cursor,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .addQueryParam({
        key: 'direction',
        value: params?.direction,
      })
      .build();
    return this.client.callDirect<CollectionForksInfo>(request);
  }

  /**
 * Publishes a collection's documentation. This makes it publicly available to anyone with the link to the documentation.
**Note:**

- Your [Postman plan](https://www.postman.com/pricing/) impacts your use of these endpoints:
  - For **Free** and **Solo** users, you must have permissions to edit the collection.
  - If [API Governance and Security](https://learning.postman.com/docs/api-governance/configurable-rules/configurable-rules-overview/) is enabled for your [**Enterprise**](https://www.postman.com/pricing/) team, only users with the [Community Manager role](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can publish documentation.
- Publishing is only supported for collections with HTTP requests.
- You cannot publish a collection added to an API.

 * @param {string} collectionId - The collection's unique ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PublishDocumentationResponse>>} - Successful Response
 */
  async publishDocumentation(
    collectionId: string,
    body: PublishDocumentation,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PublishDocumentationResponse> {
    const resolvedConfig = this.getResolvedConfig(this.publishDocumentationConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/collections/{collectionId}/public-documentations')
      .setRequestSchema(publishDocumentationRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: publishDocumentationResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
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
        status: 500,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<PublishDocumentationResponse>(request);
  }

  /**
   * Unpublishes a collection's documentation. On success, this returns an HTTP `204 No Content` response.
   * @param {string} collectionId - The collection's unique ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - No Content
   */
  async unpublishDocumentation(
    collectionId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.unpublishDocumentationConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/collections/{collectionId}/public-documentations')
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
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
 * Pulls the changes from a parent (source) collection into the forked collection. In the endpoint's response:
- The `destinationId` is the ID of the forked collection.
- The `sourceId` is the ID of the source collection.

 * @param {string} collectionId - The forked collection's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CollectionChangesPulled>>} - Successful Response
 */
  async pullCollectionChanges(
    collectionId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionChangesPulled> {
    const resolvedConfig = this.getResolvedConfig(this.pullCollectionChangesConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/collections/{collectionId}/pulls')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionChangesPulledResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: GetAuditLogEventActionsClientErrorResponse,
        contentType: ContentType.Json,
        status: 400,
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
        key: 'collectionId',
        value: collectionId,
      })
      .build();
    return this.client.callDirect<CollectionChangesPulled>(request);
  }

  /**
   * Gets information about a collection's pull requests, such as the source and destination IDs, status of the pull requests, and a URL link to the pull requests.
   * @param {string} collectionId - The collection's unique ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CollectionPullRequests>>} - Successful Response
   */
  async getCollectionPullRequests(
    collectionId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionPullRequests> {
    const resolvedConfig = this.getResolvedConfig(
      this.getCollectionPullRequestsConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/collections/{collectionId}/pull-requests')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionPullRequestsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .build();
    return this.client.callDirect<CollectionPullRequests>(request);
  }

  /**
   * Creates a pull request for a forked collection into its parent collection.
   * @param {string} collectionId - The collection's unique ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<PullRequestCreated>>} - Successful Response
   */
  async createCollectionPullRequest(
    collectionId: string,
    body: CreatePullRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PullRequestCreated> {
    const resolvedConfig = this.getResolvedConfig(
      this.createCollectionPullRequestConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/collections/{collectionId}/pull-requests')
      .setRequestSchema(createPullRequestRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: pullRequestCreatedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Common500Error,
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
    return this.client.callDirect<PullRequestCreated>(request);
  }

  /**
   * Gets information about all roles in a collection. The response returns the IDs of all users, teams, and groups with access to view or edit the collection.
   * @param {string} collectionId - The collection's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CollectionRolesInfo>>} - Successful Response
   */
  async getCollectionRoles(
    collectionId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionRolesInfo> {
    const resolvedConfig = this.getResolvedConfig(this.getCollectionRolesConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/collections/{collectionId}/roles')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionRolesInfoResponse,
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
        error: ErrorTitleType,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .build();
    return this.client.callDirect<CollectionRolesInfo>(request);
  }

  /**
 * Updates the roles of users, groups, or teams in a collection. On success, this returns an HTTP `204 No Content` response.
**Note:**

- Only users assigned the Editor [role](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#collection-roles) in the collection can use this endpoint.
- This endpoint does not support the external [Partner or Guest roles](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles).

 * @param {string} collectionId - The collection's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - No Content
 */
  async updateCollectionRoles(
    collectionId: string,
    body: UpdateCollectionRoles,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.updateCollectionRolesConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PATCH')
      .setPath('/collections/{collectionId}/roles')
      .setRequestSchema(updateCollectionRolesRequest)
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
        error: ErrorTitleType,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
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
    return this.client.callDirect<void>(request);
  }

  /**
 * Checks whether there is a change between the forked collection and its parent (source) collection.
If the value of the `isSourceAhead` property is `true` in the response, then there is a difference between the forked collection and its source collection.

**Note:**

This endpoint may take a few minutes to return an updated `isSourceAhead` status.

 * @param {string} collectionId - The collection's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<SourceCollectionStatus>>} - Successful Response
 */
  async getSourceCollectionStatus(
    collectionId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<SourceCollectionStatus> {
    const resolvedConfig = this.getResolvedConfig(
      this.getSourceCollectionStatusConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/collections/{collectionId}/source-status')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: sourceCollectionStatusResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: GetSourceCollectionStatusBadRequestResponse,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .build();
    return this.client.callDirect<SourceCollectionStatus>(request);
  }

  /**
 * Transforms an existing Postman Collection into a stringified OpenAPI definition.
**Note:**

This does not create an API.

 * @param {string} collectionId - The collection's ID.
 * @param {CollectionTransformFormat} [params.format] - Return the OpenAPI definition in the given format.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CollectionTransformed>>} - Successful Response
 */
  async transformCollectionToOpenApi(
    collectionId: string,
    params?: TransformCollectionToOpenApiParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionTransformed> {
    const resolvedConfig = this.getResolvedConfig(
      this.transformCollectionToOpenApiConfig,
      requestConfig,
    );
    z.object({ format: z.unknown().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/collections/{collectionId}/transformations')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionTransformedResponse,
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
      .addQueryParam({
        key: 'format',
        value: params?.format,
      })
      .build();
    return this.client.callDirect<CollectionTransformed>(request);
  }

  /**
   * Copies or moves folders into a collection or folder.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CollectionItemsTransferred>>} - Successful Response
   */
  async transferCollectionFolders(
    body: TransferCollectionItems,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionItemsTransferred> {
    const resolvedConfig = this.getResolvedConfig(
      this.transferCollectionFoldersConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/collection-folders-transfers')
      .setRequestSchema(transferCollectionItemsRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionItemsTransferredResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CollectionItemsTransferred>(request);
  }

  /**
   * Copies or moves requests into a collection or folder.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CollectionItemsTransferred>>} - Successful Response
   */
  async transferCollectionRequests(
    body: TransferCollectionItems,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionItemsTransferred> {
    const resolvedConfig = this.getResolvedConfig(
      this.transferCollectionRequestsConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/collection-requests-transfers')
      .setRequestSchema(transferCollectionItemsRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionItemsTransferredResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CollectionItemsTransferred>(request);
  }

  /**
   * Copies or moves responses into a request.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CollectionItemsTransferred>>} - Successful Response
   */
  async transferCollectionResponses(
    body: TransferCollectionItems,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionItemsTransferred> {
    const resolvedConfig = this.getResolvedConfig(
      this.transferCollectionResponsesConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/collection-responses-transfers')
      .setRequestSchema(transferCollectionItemsRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionItemsTransferredResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CollectionItemsTransferred>(request);
  }

  /**
   * Gets the status of a collection duplication task.
   * @param {string} taskId - The task's unique ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<DuplicateCollectionResponse>>} - Successful Response
   */
  async getDuplicateCollectionTaskStatus(
    taskId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<DuplicateCollectionResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.getDuplicateCollectionTaskStatusConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/collection-duplicate-tasks/{taskId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: duplicateCollectionResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
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
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'taskId',
        value: taskId,
      })
      .build();
    return this.client.callDirect<DuplicateCollectionResponse>(request);
  }

  /**
   * Gets the status of an asynchronous collection update task.
   * @param {string} taskId - The task's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetCollectionUpdateStatus>>} - Successful Response
   */
  async getCollectionUpdatesTasks(
    taskId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetCollectionUpdateStatus> {
    const resolvedConfig = this.getResolvedConfig(
      this.getCollectionUpdatesTasksConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/collection-updates-tasks/{taskId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getCollectionUpdateStatusResponse,
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
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'taskId',
        value: taskId,
      })
      .build();
    return this.client.callDirect<GetCollectionUpdateStatus>(request);
  }
}
