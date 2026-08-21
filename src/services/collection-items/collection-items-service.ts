import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { CreateFolder, createFolderRequest } from './models/create-folder';
import {
  CollectionFolderCreated,
  collectionFolderCreatedResponse,
} from './models/collection-folder-created';
import { ErrorNameMessageDetails } from '../common/error-name-message-details';
import { Common500Error } from '../common/common500-error';
import { CreateRequest, createRequestRequest } from './models/create-request';
import {
  CollectionRequestCreated,
  collectionRequestCreatedResponse,
} from './models/collection-request-created';
import {
  CreateCollectionRequestParams,
  CreateCollectionResponseParams,
  GetCollectionFolderParams,
  GetCollectionRequestParams,
  GetCollectionResponseParams,
} from './request-params';
import {
  CreateCollectionResponseRequest,
  createCollectionResponseRequestRequest,
} from './models/create-collection-response-request';
import {
  CreateCollectionResponseOkResponse,
  createCollectionResponseOkResponseResponse,
} from './models/create-collection-response-ok-response';
import {
  CollectionFolderInfo,
  collectionFolderInfoResponse,
} from './models/collection-folder-info';
import { UpdateFolder, updateFolderRequest } from './models/update-folder';
import {
  CollectionFolderUpdated,
  collectionFolderUpdatedResponse,
} from './models/collection-folder-updated';
import {
  CollectionFolderDeleted,
  collectionFolderDeletedResponse,
} from './models/collection-folder-deleted';
import {
  CollectionRequestInfo,
  collectionRequestInfoResponse,
} from './models/collection-request-info';
import { UpdateRequest, updateRequestRequest } from './models/update-request';
import {
  CollectionRequestUpdated,
  collectionRequestUpdatedResponse,
} from './models/collection-request-updated';
import {
  CollectionRequestDeleted,
  collectionRequestDeletedResponse,
} from './models/collection-request-deleted';
import {
  CollectionResponseInfo,
  collectionResponseInfoResponse,
} from './models/collection-response-info';
import {
  UpdateCollectionResponse1,
  updateCollectionResponse1Request,
} from './models/update-collection-response-1';
import {
  CollectionResponseUpdated,
  collectionResponseUpdatedResponse,
} from './models/collection-response-updated';
import {
  CollectionResponseDeleted,
  collectionResponseDeletedResponse,
} from './models/collection-response-deleted';

/**
 * Service class for CollectionItemsService operations.
 * Provides methods to interact with CollectionItemsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class CollectionItemsService extends BaseService {
  protected createCollectionFolderConfig?: Partial<SdkConfig>;

  protected createCollectionRequestConfig?: Partial<SdkConfig>;

  protected createCollectionResponseConfig?: Partial<SdkConfig>;

  protected getCollectionFolderConfig?: Partial<SdkConfig>;

  protected updateCollectionFolderConfig?: Partial<SdkConfig>;

  protected deleteCollectionFolderConfig?: Partial<SdkConfig>;

  protected getCollectionRequestConfig?: Partial<SdkConfig>;

  protected updateCollectionRequestConfig?: Partial<SdkConfig>;

  protected deleteCollectionRequestConfig?: Partial<SdkConfig>;

  protected getCollectionResponseConfig?: Partial<SdkConfig>;

  protected updateCollectionResponseConfig?: Partial<SdkConfig>;

  protected deleteCollectionResponseConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for createCollectionFolder.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateCollectionFolderConfig(config: Partial<SdkConfig>): this {
    this.createCollectionFolderConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createCollectionRequest.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateCollectionRequestConfig(config: Partial<SdkConfig>): this {
    this.createCollectionRequestConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createCollectionResponse.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateCollectionResponseConfig(config: Partial<SdkConfig>): this {
    this.createCollectionResponseConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getCollectionFolder.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetCollectionFolderConfig(config: Partial<SdkConfig>): this {
    this.getCollectionFolderConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateCollectionFolder.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateCollectionFolderConfig(config: Partial<SdkConfig>): this {
    this.updateCollectionFolderConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteCollectionFolder.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteCollectionFolderConfig(config: Partial<SdkConfig>): this {
    this.deleteCollectionFolderConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getCollectionRequest.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetCollectionRequestConfig(config: Partial<SdkConfig>): this {
    this.getCollectionRequestConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateCollectionRequest.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateCollectionRequestConfig(config: Partial<SdkConfig>): this {
    this.updateCollectionRequestConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteCollectionRequest.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteCollectionRequestConfig(config: Partial<SdkConfig>): this {
    this.deleteCollectionRequestConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getCollectionResponse.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetCollectionResponseConfig(config: Partial<SdkConfig>): this {
    this.getCollectionResponseConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateCollectionResponse.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateCollectionResponseConfig(config: Partial<SdkConfig>): this {
    this.updateCollectionResponseConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteCollectionResponse.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteCollectionResponseConfig(config: Partial<SdkConfig>): this {
    this.deleteCollectionResponseConfig = config;
    return this;
  }

  /**
 * Creates a folder in a collection. For a complete list of properties, refer to the **Folder** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
You can use this endpoint to to import requests and responses into a newly-created folder. To do this, include the `requests` field and the list of request objects in the request body. For more information, see the provided example.

**Note:**

It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a folder with a blank name.

 * @param {string} collectionId - The collection's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CollectionFolderCreated>>} - Successful Response
 */
  async createCollectionFolder(
    collectionId: string,
    body: CreateFolder,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionFolderCreated> {
    const resolvedConfig = this.getResolvedConfig(this.createCollectionFolderConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/collections/{collectionId}/folders')
      .setRequestSchema(createFolderRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionFolderCreatedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorNameMessageDetails,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorNameMessageDetails,
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
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CollectionFolderCreated>(request);
  }

  /**
 * Creates a request in a collection. For a complete list of properties, refer to the **Request** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
**Note:**

It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a request with a blank name.

 * @param {string} collectionId - The collection's ID.
 * @param {string} [params.folder] - The folder ID in which to create the request. By default, the system creates the request at the collection level.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CollectionRequestCreated>>} - Successful Response
 */
  async createCollectionRequest(
    collectionId: string,
    body: CreateRequest,
    params?: CreateCollectionRequestParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionRequestCreated> {
    const resolvedConfig = this.getResolvedConfig(
      this.createCollectionRequestConfig,
      requestConfig,
    );
    z.object({ folder: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/collections/{collectionId}/requests')
      .setRequestSchema(createRequestRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionRequestCreatedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorNameMessageDetails,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorNameMessageDetails,
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
        key: 'folder',
        value: params?.folder,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CollectionRequestCreated>(request);
  }

  /**
 * Creates a request response in a collection. For a complete list of request body properties, refer to the **Response** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
**Note:**

It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a response with a blank name.

 * @param {string} collectionId - The collection's ID.
 * @param {string} params.request - The parent request's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CreateCollectionResponseOkResponse>>} - Successful Response
 */
  async createCollectionResponse(
    collectionId: string,
    body: CreateCollectionResponseRequest,
    params: CreateCollectionResponseParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreateCollectionResponseOkResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.createCollectionResponseConfig,
      requestConfig,
    );
    z.object({ request: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/collections/{collectionId}/responses')
      .setRequestSchema(createCollectionResponseRequestRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createCollectionResponseOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorNameMessageDetails,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorNameMessageDetails,
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
        key: 'request',
        value: params?.request,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CreateCollectionResponseOkResponse>(request);
  }

  /**
   * Gets information about a folder in a collection.
   * @param {string} folderId - The folder's ID.
   * @param {string} collectionId - The collection's ID.
   * @param {boolean} [params.ids] - If true, returns only properties that contain ID values in the response.
   * @param {boolean} [params.uid] - If true, returns all IDs in UID format (`userId`-`id`).
   * @param {boolean} [params.populate] - If true, returns all of the collection item's contents.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CollectionFolderInfo>>} - Successful Response
   */
  async getCollectionFolder(
    folderId: string,
    collectionId: string,
    params?: GetCollectionFolderParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionFolderInfo> {
    const resolvedConfig = this.getResolvedConfig(this.getCollectionFolderConfig, requestConfig);
    z.object({
      ids: z.boolean().optional(),
      uid: z.boolean().optional(),
      populate: z.boolean().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/collections/{collectionId}/folders/{folderId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionFolderInfoResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorNameMessageDetails,
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
        key: 'folderId',
        value: folderId,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .addQueryParam({
        key: 'ids',
        value: params?.ids,
      })
      .addQueryParam({
        key: 'uid',
        value: params?.uid,
      })
      .addQueryParam({
        key: 'populate',
        value: params?.populate,
      })
      .build();
    return this.client.callDirect<CollectionFolderInfo>(request);
  }

  /**
 * Updates a folder in a collection. For a complete list of properties, refer to the **Folder** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
**Note:**

This endpoint acts like a PATCH method. It only updates the values that you pass in the request body (for example, the `name` property). The endpoint does not update the entire resource.

 * @param {string} folderId - The folder's ID.
 * @param {string} collectionId - The collection's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CollectionFolderUpdated>>} - Successful Response
 */
  async updateCollectionFolder(
    folderId: string,
    collectionId: string,
    body: UpdateFolder,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionFolderUpdated> {
    const resolvedConfig = this.getResolvedConfig(this.updateCollectionFolderConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/collections/{collectionId}/folders/{folderId}')
      .setRequestSchema(updateFolderRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionFolderUpdatedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorNameMessageDetails,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorNameMessageDetails,
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
        key: 'folderId',
        value: folderId,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CollectionFolderUpdated>(request);
  }

  /**
   * Deletes a folder in a collection.
   * @param {string} folderId - The folder's ID.
   * @param {string} collectionId - The collection's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CollectionFolderDeleted>>} - Successful Response
   */
  async deleteCollectionFolder(
    folderId: string,
    collectionId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionFolderDeleted> {
    const resolvedConfig = this.getResolvedConfig(this.deleteCollectionFolderConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/collections/{collectionId}/folders/{folderId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionFolderDeletedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorNameMessageDetails,
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
        key: 'folderId',
        value: folderId,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .build();
    return this.client.callDirect<CollectionFolderDeleted>(request);
  }

  /**
   * Gets information about a request in a collection.
   * @param {string} requestId - The request's ID.
   * @param {string} collectionId - The collection's ID.
   * @param {boolean} [params.ids] - If true, returns only properties that contain ID values in the response.
   * @param {boolean} [params.uid] - If true, returns all IDs in UID format (`userId`-`id`).
   * @param {boolean} [params.populate] - If true, returns all of the collection item's contents.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CollectionRequestInfo>>} - Successful Response
   */
  async getCollectionRequest(
    requestId: string,
    collectionId: string,
    params?: GetCollectionRequestParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionRequestInfo> {
    const resolvedConfig = this.getResolvedConfig(this.getCollectionRequestConfig, requestConfig);
    z.object({
      ids: z.boolean().optional(),
      uid: z.boolean().optional(),
      populate: z.boolean().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/collections/{collectionId}/requests/{requestId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionRequestInfoResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorNameMessageDetails,
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
        key: 'requestId',
        value: requestId,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .addQueryParam({
        key: 'ids',
        value: params?.ids,
      })
      .addQueryParam({
        key: 'uid',
        value: params?.uid,
      })
      .addQueryParam({
        key: 'populate',
        value: params?.populate,
      })
      .build();
    return this.client.callDirect<CollectionRequestInfo>(request);
  }

  /**
 * Updates a request in a collection. For a complete list of properties, refer to the **Request** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
**Note:**

- You must pass a collection ID (`12ece9e1-2abf-4edc-8e34-de66e74114d2`), not a collection(`12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2`), in this endpoint.
- This endpoint does not support changing the folder of a request.

 * @param {string} requestId - The request's ID.
 * @param {string} collectionId - The collection's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CollectionRequestUpdated>>} - Successful Response
 */
  async updateCollectionRequest(
    requestId: string,
    collectionId: string,
    body: UpdateRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionRequestUpdated> {
    const resolvedConfig = this.getResolvedConfig(
      this.updateCollectionRequestConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/collections/{collectionId}/requests/{requestId}')
      .setRequestSchema(updateRequestRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionRequestUpdatedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorNameMessageDetails,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorNameMessageDetails,
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
        key: 'requestId',
        value: requestId,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CollectionRequestUpdated>(request);
  }

  /**
   * Deletes a request in a collection.
   * @param {string} requestId - The request's ID.
   * @param {string} collectionId - The collection's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CollectionRequestDeleted>>} - Successful Response
   */
  async deleteCollectionRequest(
    requestId: string,
    collectionId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionRequestDeleted> {
    const resolvedConfig = this.getResolvedConfig(
      this.deleteCollectionRequestConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/collections/{collectionId}/requests/{requestId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionRequestDeletedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorNameMessageDetails,
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
        key: 'requestId',
        value: requestId,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .build();
    return this.client.callDirect<CollectionRequestDeleted>(request);
  }

  /**
   * Gets information about a response in a collection.
   * @param {string} responseId - The response's ID.
   * @param {string} collectionId - The collection's ID.
   * @param {boolean} [params.ids] - If true, returns only properties that contain ID values in the response.
   * @param {boolean} [params.uid] - If true, returns all IDs in UID format (`userId`-`id`).
   * @param {boolean} [params.populate] - If true, returns all of the collection item's contents.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CollectionResponseInfo>>} - Successful Response
   */
  async getCollectionResponse(
    responseId: string,
    collectionId: string,
    params?: GetCollectionResponseParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionResponseInfo> {
    const resolvedConfig = this.getResolvedConfig(this.getCollectionResponseConfig, requestConfig);
    z.object({
      ids: z.boolean().optional(),
      uid: z.boolean().optional(),
      populate: z.boolean().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/collections/{collectionId}/responses/{responseId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionResponseInfoResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorNameMessageDetails,
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
        key: 'responseId',
        value: responseId,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .addQueryParam({
        key: 'ids',
        value: params?.ids,
      })
      .addQueryParam({
        key: 'uid',
        value: params?.uid,
      })
      .addQueryParam({
        key: 'populate',
        value: params?.populate,
      })
      .build();
    return this.client.callDirect<CollectionResponseInfo>(request);
  }

  /**
 * Updates a response in a collection. For a complete list of properties, see the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
**Note:**

- You must pass a collection ID (`12ece9e1-2abf-4edc-8e34-de66e74114d2`), not a collection UID (`12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2`), in this endpoint.
- This endpoint acts like a PATCH method. It only updates the values that you pass in the request body (for example, the `name` property). The endpoint does not update the entire resource.

 * @param {string} responseId - The response's ID.
 * @param {string} collectionId - The collection's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CollectionResponseUpdated>>} - Successful Response
 */
  async updateCollectionResponse(
    responseId: string,
    collectionId: string,
    body: UpdateCollectionResponse1,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionResponseUpdated> {
    const resolvedConfig = this.getResolvedConfig(
      this.updateCollectionResponseConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/collections/{collectionId}/responses/{responseId}')
      .setRequestSchema(updateCollectionResponse1Request)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionResponseUpdatedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorNameMessageDetails,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorNameMessageDetails,
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
        key: 'responseId',
        value: responseId,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CollectionResponseUpdated>(request);
  }

  /**
   * Deletes a response in a collection.
   * @param {string} responseId - The response's ID.
   * @param {string} collectionId - The collection's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CollectionResponseDeleted>>} - Successful Response
   */
  async deleteCollectionResponse(
    responseId: string,
    collectionId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionResponseDeleted> {
    const resolvedConfig = this.getResolvedConfig(
      this.deleteCollectionResponseConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/collections/{collectionId}/responses/{responseId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionResponseDeletedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorNameMessageDetails,
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
        key: 'responseId',
        value: responseId,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .build();
    return this.client.callDirect<CollectionResponseDeleted>(request);
  }
}
