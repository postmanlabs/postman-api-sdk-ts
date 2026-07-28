import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GetMigrationStatus, getMigrationStatusResponse } from './models/get-migration-status';
import { GetMigrationStatus400Error } from './models/get-migration-status400-error';
import { ErrorTypeTitleDetailStatusInstance } from '../common/error-type-title-detail-status-instance';
import { ApiSpec403Error } from './models/api-spec403-error';
import { Common500Error } from '../common/common500-error';
import { MigrateApiToSpecHub, migrateApiToSpecHubRequest } from './models/migrate-api-to-spec-hub';
import {
  MigrateToSpecHubResponse,
  migrateToSpecHubResponseResponse,
} from './models/migrate-to-spec-hub-response';
import { MigrateApiToSpecHub400Error } from './models/migrate-api-to-spec-hub400-error';
import {
  GetGeneratedCollectionSpecs,
  getGeneratedCollectionSpecsResponse,
} from './models/get-generated-collection-specs';
import { ErrorTypeTitleDetailStatus } from '../common/error-type-title-detail-status';
import { ElementTypeSpec } from './models/element-type-spec';
import {
  GenerateSpecFromCollection,
  generateSpecFromCollectionRequest,
} from './models/generate-spec-from-collection';
import { TaskCreated, taskCreatedResponse } from './models/task-created';
import { Api403Error } from '../common/api403-error';
import {
  CreateSpecParams,
  GetAllSpecsParams,
  GetSpecCollectionsParams,
  GetSpecVersionTagsParams,
  SyncCollectionWithSpecParams,
  SyncSpecWithCollectionParams,
} from './request-params';
import {
  GetAsyncCollectionTaskStatus,
  getAsyncCollectionTaskStatusResponse,
} from './models/get-async-collection-task-status';
import { ElementType } from './models/element-type';
import { ElementId } from './models/element-id';
import { GetAllSpecs, getAllSpecsResponse } from './models/get-all-specs';
import { CreateSpec, createSpecRequest } from './models/create-spec';
import { CreateSpecResponse, createSpecResponseResponse } from './models/create-spec-response';
import { CreateApiClientErrorResponse } from '../common/create-api-client-error-response';
import { SpecInformation, specInformationResponse } from './models/spec-information';
import { UpdateSpecProperties, updateSpecPropertiesRequest } from './models/update-spec-properties';
import {
  UpdateSpecPropertiesResponse,
  updateSpecPropertiesResponseResponse,
} from './models/update-spec-properties-response';
import {
  ApiSpecSyncOptions,
  apiSpecSyncOptionsRequest,
  apiSpecSyncOptionsResponse,
} from './models/api-spec-sync-options';
import { GetSpecFiles, getSpecFilesResponse } from './models/get-spec-files';
import { CreateSpecFile, createSpecFileRequest } from './models/create-spec-file';
import {
  CreateUpdateSpecFileResponse,
  createUpdateSpecFileResponseResponse,
} from './models/create-update-spec-file-response';
import { GetSpecFile, getSpecFileResponse } from './models/get-spec-file';
import { UpdateSpecFile, updateSpecFileRequest } from './models/update-spec-file';
import { GetSpecCollections, getSpecCollectionsResponse } from './models/get-spec-collections';
import { ElementTypeCollection } from './models/element-type-collection';
import { GenerateCollection, generateCollectionRequest } from './models/generate-collection';
import { GetSpecVersionTag, getSpecVersionTagResponse } from './models/get-spec-version-tag';
import { GetSpecVersionTags, getSpecVersionTagsResponse } from './models/get-spec-version-tags';
import {
  CreateSpecVersionTag,
  createSpecVersionTagRequest,
} from './models/create-spec-version-tag';
import {
  CreateSpecVersionTagResponse,
  createSpecVersionTagResponseResponse,
} from './models/create-spec-version-tag-response';

/**
 * Service class for SpecsService operations.
 * Provides methods to interact with SpecsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class SpecsService extends BaseService {
  protected getMigrationStatusConfig?: Partial<SdkConfig>;

  protected migrateApiToSpecHubConfig?: Partial<SdkConfig>;

  protected getGeneratedCollectionSpecsConfig?: Partial<SdkConfig>;

  protected generateSpecFromCollectionConfig?: Partial<SdkConfig>;

  protected syncCollectionWithSpecConfig?: Partial<SdkConfig>;

  protected getAsyncSpecTaskStatusConfig?: Partial<SdkConfig>;

  protected getAllSpecsConfig?: Partial<SdkConfig>;

  protected createSpecConfig?: Partial<SdkConfig>;

  protected getSpecConfig?: Partial<SdkConfig>;

  protected updateSpecPropertiesConfig?: Partial<SdkConfig>;

  protected deleteSpecConfig?: Partial<SdkConfig>;

  protected updateSpecSyncOptionsConfig?: Partial<SdkConfig>;

  protected getSpecDefinitionConfig?: Partial<SdkConfig>;

  protected getSpecFilesConfig?: Partial<SdkConfig>;

  protected createSpecFileConfig?: Partial<SdkConfig>;

  protected getSpecFileConfig?: Partial<SdkConfig>;

  protected updateSpecFileConfig?: Partial<SdkConfig>;

  protected deleteSpecFileConfig?: Partial<SdkConfig>;

  protected getSpecCollectionsConfig?: Partial<SdkConfig>;

  protected generateCollectionConfig?: Partial<SdkConfig>;

  protected syncSpecWithCollectionConfig?: Partial<SdkConfig>;

  protected getSpecVersionTagConfig?: Partial<SdkConfig>;

  protected getSpecVersionTagsConfig?: Partial<SdkConfig>;

  protected createSpecVersionTagConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getMigrationStatus.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetMigrationStatusConfig(config: Partial<SdkConfig>): this {
    this.getMigrationStatusConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for migrateApiToSpecHub.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setMigrateApiToSpecHubConfig(config: Partial<SdkConfig>): this {
    this.migrateApiToSpecHubConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getGeneratedCollectionSpecs.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetGeneratedCollectionSpecsConfig(config: Partial<SdkConfig>): this {
    this.getGeneratedCollectionSpecsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for generateSpecFromCollection.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGenerateSpecFromCollectionConfig(config: Partial<SdkConfig>): this {
    this.generateSpecFromCollectionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for syncCollectionWithSpec.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSyncCollectionWithSpecConfig(config: Partial<SdkConfig>): this {
    this.syncCollectionWithSpecConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getAsyncSpecTaskStatus.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAsyncSpecTaskStatusConfig(config: Partial<SdkConfig>): this {
    this.getAsyncSpecTaskStatusConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getAllSpecs.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAllSpecsConfig(config: Partial<SdkConfig>): this {
    this.getAllSpecsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createSpec.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateSpecConfig(config: Partial<SdkConfig>): this {
    this.createSpecConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getSpec.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSpecConfig(config: Partial<SdkConfig>): this {
    this.getSpecConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateSpecProperties.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateSpecPropertiesConfig(config: Partial<SdkConfig>): this {
    this.updateSpecPropertiesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteSpec.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteSpecConfig(config: Partial<SdkConfig>): this {
    this.deleteSpecConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateSpecSyncOptions.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateSpecSyncOptionsConfig(config: Partial<SdkConfig>): this {
    this.updateSpecSyncOptionsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getSpecDefinition.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSpecDefinitionConfig(config: Partial<SdkConfig>): this {
    this.getSpecDefinitionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getSpecFiles.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSpecFilesConfig(config: Partial<SdkConfig>): this {
    this.getSpecFilesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createSpecFile.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateSpecFileConfig(config: Partial<SdkConfig>): this {
    this.createSpecFileConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getSpecFile.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSpecFileConfig(config: Partial<SdkConfig>): this {
    this.getSpecFileConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateSpecFile.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateSpecFileConfig(config: Partial<SdkConfig>): this {
    this.updateSpecFileConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteSpecFile.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteSpecFileConfig(config: Partial<SdkConfig>): this {
    this.deleteSpecFileConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getSpecCollections.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSpecCollectionsConfig(config: Partial<SdkConfig>): this {
    this.getSpecCollectionsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for generateCollection.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGenerateCollectionConfig(config: Partial<SdkConfig>): this {
    this.generateCollectionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for syncSpecWithCollection.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSyncSpecWithCollectionConfig(config: Partial<SdkConfig>): this {
    this.syncSpecWithCollectionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getSpecVersionTag.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSpecVersionTagConfig(config: Partial<SdkConfig>): this {
    this.getSpecVersionTagConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getSpecVersionTags.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSpecVersionTagsConfig(config: Partial<SdkConfig>): this {
    this.getSpecVersionTagsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createSpecVersionTag.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateSpecVersionTagConfig(config: Partial<SdkConfig>): this {
    this.createSpecVersionTagConfig = config;
    return this;
  }

  /**
 * Migrates an API Builder definition to a [Spec Hub](https://learning.postman.com/docs/design-apis/specifications/overview) specification. You can migrate the definition to an existing workspace, or create a new workspace to migrate the definition into. On success, this returns an HTTP `202 Created` response. You can use the GET `/apis/{apiId}/spec-migrations` endpoint to check the migration status.
**Note:**

- This returns an HTTP `200 OK` response if the given API ID isn't an API Builder definition.
- To migrate a Git-linked API Builder definition to Spec Hub, you must create a new workspace. Migration to an existing workspace isn't supported.

  /**
   * Gets the API specification generated for the given collection.
   * @param {string} collectionUid - The collection's unique ID.
   * @param {ElementTypeSpec} elementType - The `spec` value.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetGeneratedCollectionSpecs>>} - Successful Response
   */
  async getGeneratedCollectionSpecs(
    collectionUid: string,
    elementType: ElementTypeSpec,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetGeneratedCollectionSpecs> {
    const resolvedConfig = this.getResolvedConfig(
      this.getGeneratedCollectionSpecsConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/collections/{collectionUid}/generations/{elementType}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getGeneratedCollectionSpecsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ApiSpec403Error,
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
        key: 'collectionUid',
        value: collectionUid,
      })
      .addPathParam({
        key: 'elementType',
        value: elementType,
      })
      .build();
    return this.client.callDirect<GetGeneratedCollectionSpecs>(request);
  }

  /**
   * Generates an OpenAPI 2.0, 3.0, or 3.1 specification for the given collection. The response contains a polling link to the task status.
   * @param {string} collectionUid - The collection's unique ID.
   * @param {ElementTypeSpec} elementType - The `spec` value.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<TaskCreated>>} - Successful Response
   */
  async generateSpecFromCollection(
    collectionUid: string,
    elementType: ElementTypeSpec,
    body: GenerateSpecFromCollection,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<TaskCreated> {
    const resolvedConfig = this.getResolvedConfig(
      this.generateSpecFromCollectionConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/collections/{collectionUid}/generations/{elementType}')
      .setRequestSchema(generateSpecFromCollectionRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: taskCreatedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ApiSpec403Error,
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
        status: 423,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'collectionUid',
        value: collectionUid,
      })
      .addPathParam({
        key: 'elementType',
        value: elementType,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<TaskCreated>(request);
  }

  /**
 * Syncs a collection generated from an API specification. This is an asynchronous endpoint that returns an HTTP `202 Accepted` response.
**Note:**

- This endpoint only supports the OpenAPI 2.0, 3.0, and 3.1 specification types.
- You can only sync collections generated from the given spec ID.

 * @param {string} collectionUid - The collection's unique ID.
 * @param {string} params.specId - The spec's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<TaskCreated>>} - Successful Response
 */
  async syncCollectionWithSpec(
    collectionUid: string,
    params: SyncCollectionWithSpecParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<TaskCreated> {
    const resolvedConfig = this.getResolvedConfig(this.syncCollectionWithSpecConfig, requestConfig);
    z.object({ specId: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/collections/{collectionUid}/synchronizations')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: taskCreatedResponse,
        contentType: ContentType.Json,
        status: 202,
      })
      .addError({
        error: Api403Error,
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
        key: 'collectionUid',
        value: collectionUid,
      })
      .addQueryParam({
        key: 'specId',
        value: params?.specId,
      })
      .build();
    return this.client.callDirect<TaskCreated>(request);
  }

  /**
   * Gets the status of an asynchronous API specification creation task.
   * @param {ElementType} elementType - The element to filter results by.
   * @param {ElementId} elementId - The element's ID.
   * @param {string} taskId - The task's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetAsyncCollectionTaskStatus>>} - Successful Response
   */
  async getAsyncSpecTaskStatus(
    elementType: ElementType,
    elementId: ElementId,
    taskId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetAsyncCollectionTaskStatus> {
    const resolvedConfig = this.getResolvedConfig(this.getAsyncSpecTaskStatusConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/{elementType}/{elementId}/tasks/{taskId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getAsyncCollectionTaskStatusResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ApiSpec403Error,
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
        key: 'elementType',
        value: elementType,
      })
      .addPathParam({
        key: 'elementId',
        value: elementId,
      })
      .addPathParam({
        key: 'taskId',
        value: taskId,
      })
      .build();
    return this.client.callDirect<GetAsyncCollectionTaskStatus>(request);
  }

  /**
   * Gets all API specifications in a workspace.
   * @param {string} params.workspaceId - The workspace's ID.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {number} [params.limit] - The maximum number of rows to return in the response.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetAllSpecs>>} - Successful Response
   */
  async getAllSpecs(
    params: GetAllSpecsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetAllSpecs> {
    const resolvedConfig = this.getResolvedConfig(this.getAllSpecsConfig, requestConfig);
    z.object({
      workspaceId: z.string(),
      cursor: z.string().optional(),
      limit: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/specs')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getAllSpecsResponse,
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
        error: ApiSpec403Error,
        contentType: ContentType.Json,
        status: 403,
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
        key: 'cursor',
        value: params?.cursor,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .build();
    return this.client.callDirect<GetAllSpecs>(request);
  }

  /**
 * Creates an API specification in Postman's [Spec Hub](https://learning.postman.com/docs/design-apis/specifications/overview/). Specifications can be single or multi-file.
**Note:**
- Postman supports OpenAPI (2.0, 3.0, and 3.1), AsyncAPI (2.0 and 3.0), protobuf (2 and 3), GraphQL, and Smithy specifications.
- If the file path contains a `/` (forward slash) character, then a folder is created. For example, if the path is the `components/schemas.json` value, then a `components` folder is created with the `schemas.json` file inside.
- Multi-file specifications can only have one root file.
- Files cannot exceed a maximum of 12 MB in size.

 * @param {string} params.workspaceId - The workspace's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CreateSpecResponse>>} - Created
 */
  async createSpec(
    body: CreateSpec,
    params: CreateSpecParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreateSpecResponse> {
    const resolvedConfig = this.getResolvedConfig(this.createSpecConfig, requestConfig);
    z.object({ workspaceId: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/specs')
      .setRequestSchema(createSpecRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createSpecResponseResponse,
        contentType: ContentType.Json,
        status: 201,
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
        error: ApiSpec403Error,
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
    return this.client.callDirect<CreateSpecResponse>(request);
  }

  /**
   * Gets information about an API specification.
   * @param {string} specId - The spec's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<SpecInformation>>} - Successful Response
   */
  async getSpec(specId: string, requestConfig?: Partial<SdkConfig>): Promise<SpecInformation> {
    const resolvedConfig = this.getResolvedConfig(this.getSpecConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/specs/{specId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: specInformationResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ApiSpec403Error,
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
        key: 'specId',
        value: specId,
      })
      .build();
    return this.client.callDirect<SpecInformation>(request);
  }

  /**
   * Updates an API specification's properties, such as its name.
   * @param {string} specId - The spec's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<UpdateSpecPropertiesResponse>>} - Spec Updated
   */
  async updateSpecProperties(
    specId: string,
    body: UpdateSpecProperties,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<UpdateSpecPropertiesResponse> {
    const resolvedConfig = this.getResolvedConfig(this.updateSpecPropertiesConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PATCH')
      .setPath('/specs/{specId}')
      .setRequestSchema(updateSpecPropertiesRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: updateSpecPropertiesResponseResponse,
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
        error: ApiSpec403Error,
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
        key: 'specId',
        value: specId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<UpdateSpecPropertiesResponse>(request);
  }

  /**
   * Deletes an API specification. On success, this returns an HTTP `204 No Content` response.
   * @param {string} specId - The spec's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - No Content
   */
  async deleteSpec(specId: string, requestConfig?: Partial<SdkConfig>): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.deleteSpecConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/specs/{specId}')
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
        error: ApiSpec403Error,
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
        key: 'specId',
        value: specId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
   * Updates the [sync options](https://learning.postman.com/docs/design-apis/specifications/generate-collections/#configure-sync-settings) for a specification's generated collection.
   * @param {string} specId - The spec's ID.
   * @param {string} collectionId - The collection's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ApiSpecSyncOptions>>} - Successful Response
   */
  async updateSpecSyncOptions(
    specId: string,
    collectionId: string,
    body: ApiSpecSyncOptions,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ApiSpecSyncOptions> {
    const resolvedConfig = this.getResolvedConfig(this.updateSpecSyncOptionsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PATCH')
      .setPath('/specs/{specId}/collections/{collectionId}/sync-options')
      .setRequestSchema(apiSpecSyncOptionsRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: apiSpecSyncOptionsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ApiSpec403Error,
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
        key: 'specId',
        value: specId,
      })
      .addPathParam({
        key: 'collectionId',
        value: collectionId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<ApiSpecSyncOptions>(request);
  }

  /**
   * Gets the complete contents of an OpenAPI or AsyncAPI specification's definition.
   * @param {string} specId - The spec's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - Successful Response
   */
  async getSpecDefinition(specId: string, requestConfig?: Partial<SdkConfig>): Promise<any | any> {
    const resolvedConfig = this.getResolvedConfig(this.getSpecDefinitionConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/specs/{specId}/definitions')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addResponse({
        schema: z.any(),
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
        error: ApiSpec403Error,
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
        key: 'specId',
        value: specId,
      })
      .build();
    return this.client.callDirect<any | any>(request);
  }

  /**
   * Gets all the files in an API specification.
   * @param {string} specId - The spec's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetSpecFiles>>} - Successful Response
   */
  async getSpecFiles(specId: string, requestConfig?: Partial<SdkConfig>): Promise<GetSpecFiles> {
    const resolvedConfig = this.getResolvedConfig(this.getSpecFilesConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/specs/{specId}/files')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getSpecFilesResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ApiSpec403Error,
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
        key: 'specId',
        value: specId,
      })
      .build();
    return this.client.callDirect<GetSpecFiles>(request);
  }

  /**
 * Creates a file for an OpenAPI or a protobuf 2 or 3 specification.
**Note:**

- If the file path contains a `/` (forward slash) character, then a folder is created. For example, if the path is the `components/schemas.json` value, then a `components` folder is created with the `schemas.json` file inside.
- Creating a spec file assigns it the `DEFAULT` file type.
- Multi-file specifications can only have one root file.
- Files cannot exceed a maximum of 10 MB in size.

 * @param {string} specId - The spec's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CreateUpdateSpecFileResponse>>} - Successful Response
 */
  async createSpecFile(
    specId: string,
    body: CreateSpecFile,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreateUpdateSpecFileResponse> {
    const resolvedConfig = this.getResolvedConfig(this.createSpecFileConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/specs/{specId}/files')
      .setRequestSchema(createSpecFileRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createUpdateSpecFileResponseResponse,
        contentType: ContentType.Json,
        status: 201,
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
        error: ApiSpec403Error,
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
        key: 'specId',
        value: specId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CreateUpdateSpecFileResponse>(request);
  }

  /**
   * Gets the contents of an API specification's file.
   * @param {string} specId - The spec's ID.
   * @param {string} filePath - The path to the file.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetSpecFile>>} - Successful Response
   */
  async getSpecFile(
    specId: string,
    filePath: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetSpecFile> {
    const resolvedConfig = this.getResolvedConfig(this.getSpecFileConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/specs/{specId}/files/{filePath}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getSpecFileResponse,
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
        error: ApiSpec403Error,
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
        key: 'specId',
        value: specId,
      })
      .addPathParam({
        key: 'filePath',
        value: filePath,
      })
      .build();
    return this.client.callDirect<GetSpecFile>(request);
  }

  /**
 * Updates a file for an OpenAPI or protobuf 2 or 3 specification.
**Note:**

- This endpoint does not accept an empty request body. You must pass one of the accepted values.
- This endpoint does not accept multiple request body properties in a single call. For example, you cannot pass both the `content` and `type` property at the same time.
- Multi-file specifications can only have one root file.
- When updating a file type to `ROOT`, the previous root file is updated to the `DEFAULT` file type.
- Files cannot exceed a maximum of 10 MB in size.

 * @param {string} specId - The spec's ID.
 * @param {string} filePath - The path to the file.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CreateUpdateSpecFileResponse>>} - Successful Response
 */
  async updateSpecFile(
    specId: string,
    filePath: string,
    body: UpdateSpecFile,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreateUpdateSpecFileResponse> {
    const resolvedConfig = this.getResolvedConfig(this.updateSpecFileConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PATCH')
      .setPath('/specs/{specId}/files/{filePath}')
      .setRequestSchema(updateSpecFileRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createUpdateSpecFileResponseResponse,
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
        error: ApiSpec403Error,
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
        key: 'specId',
        value: specId,
      })
      .addPathParam({
        key: 'filePath',
        value: filePath,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CreateUpdateSpecFileResponse>(request);
  }

  /**
   * Deletes a file in an API specification. On success, this returns an HTTP `204 No Content` response.
   * @param {string} specId - The spec's ID.
   * @param {string} filePath - The path to the file.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - No Content
   */
  async deleteSpecFile(
    specId: string,
    filePath: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.deleteSpecFileConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/specs/{specId}/files/{filePath}')
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
        error: ApiSpec403Error,
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
        key: 'specId',
        value: specId,
      })
      .addPathParam({
        key: 'filePath',
        value: filePath,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
   * Gets all of an API specification's generated collections.
   * @param {string} specId - The spec's ID.
   * @param {ElementTypeCollection} elementType - The `collection` element type.
   * @param {number} [params.limit] - The maximum number of rows to return in the response.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetSpecCollections>>} - Successful Response
   */
  async getSpecCollections(
    specId: string,
    elementType: ElementTypeCollection,
    params?: GetSpecCollectionsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetSpecCollections> {
    const resolvedConfig = this.getResolvedConfig(this.getSpecCollectionsConfig, requestConfig);
    z.object({ limit: z.number().optional(), cursor: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/specs/{specId}/generations/{elementType}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getSpecCollectionsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ApiSpec403Error,
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
        key: 'specId',
        value: specId,
      })
      .addPathParam({
        key: 'elementType',
        value: elementType,
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
    return this.client.callDirect<GetSpecCollections>(request);
  }

  /**
   * Creates a collection from the given OpenAPI 2.0, 3.0, or 3.1 specification or Smithy specification. The response contains a polling link to the task status.
   * @param {string} specId - The spec's ID.
   * @param {ElementTypeCollection} elementType - The `collection` element type.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<TaskCreated>>} - Successful Response
   */
  async generateCollection(
    specId: string,
    elementType: ElementTypeCollection,
    body: GenerateCollection,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<TaskCreated> {
    const resolvedConfig = this.getResolvedConfig(this.generateCollectionConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/specs/{specId}/generations/{elementType}')
      .setRequestSchema(generateCollectionRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: taskCreatedResponse,
        contentType: ContentType.Json,
        status: 202,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ApiSpec403Error,
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
        status: 423,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'specId',
        value: specId,
      })
      .addPathParam({
        key: 'elementType',
        value: elementType,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<TaskCreated>(request);
  }

  /**
 * Syncs an API specification linked to a collection. This is an asynchronous endpoint that returns an HTTP `202 Accepted` response.
**Note:**

- This endpoint only supports the OpenAPI 2.0, 3.0, and 3.1 specification types.
- You can only sync collections generated from the given specification ID.

 * @param {string} specId - The spec's ID.
 * @param {string} params.collectionUid - The collection's unique ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<TaskCreated>>} - Successful Response
 */
  async syncSpecWithCollection(
    specId: string,
    params: SyncSpecWithCollectionParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<TaskCreated> {
    const resolvedConfig = this.getResolvedConfig(this.syncSpecWithCollectionConfig, requestConfig);
    z.object({ collectionUid: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/specs/{specId}/synchronizations')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: taskCreatedResponse,
        contentType: ContentType.Json,
        status: 202,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ApiSpec403Error,
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
        key: 'specId',
        value: specId,
      })
      .addQueryParam({
        key: 'collectionUid',
        value: params?.collectionUid,
      })
      .build();
    return this.client.callDirect<TaskCreated>(request);
  }

  /**
   * Gets information about a specification's version tag. The response returns a snapshot of a specification at a point in time that lets you track changes to your specifications over time.
   * @param {string} specId - The spec's ID.
   * @param {string} tagId - The version tag's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetSpecVersionTag>>} - Successful Response
   */
  async getSpecVersionTag(
    specId: string,
    tagId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetSpecVersionTag> {
    const resolvedConfig = this.getResolvedConfig(this.getSpecVersionTagConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/specs/{specId}/version-tags/{tagId}/files')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getSpecVersionTagResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ApiSpec403Error,
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
        key: 'specId',
        value: specId,
      })
      .addPathParam({
        key: 'tagId',
        value: tagId,
      })
      .build();
    return this.client.callDirect<GetSpecVersionTag>(request);
  }

  /**
   * Gets a list of a specification's version tags.
   * @param {string} specId - The spec's ID.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {number} [params.limit] - The maximum number of rows to return in the response.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetSpecVersionTags>>} - Successful Response
   */
  async getSpecVersionTags(
    specId: string,
    params?: GetSpecVersionTagsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetSpecVersionTags> {
    const resolvedConfig = this.getResolvedConfig(this.getSpecVersionTagsConfig, requestConfig);
    z.object({ cursor: z.string().optional(), limit: z.number().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/specs/{specId}/version-tags')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getSpecVersionTagsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ApiSpec403Error,
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
        key: 'specId',
        value: specId,
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
    return this.client.callDirect<GetSpecVersionTags>(request);
  }

  /**
 * Creates a version tag for a specification. Version tags are snapshots of a specification at a point in time that let you to track changes to your specifications over time.
**Note:**

Conflicts can occur if you try to create a version tag for a changelog group that already has a version tag. To resolve this, make new changes to the specification to create a new changelog group, then create a version tag on that new changelog group.

 * @param {string} specId - The spec's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CreateSpecVersionTagResponse>>} - Created
 */
  async createSpecVersionTag(
    specId: string,
    body: CreateSpecVersionTag,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreateSpecVersionTagResponse> {
    const resolvedConfig = this.getResolvedConfig(this.createSpecVersionTagConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/specs/{specId}/version-tags')
      .setRequestSchema(createSpecVersionTagRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createSpecVersionTagResponseResponse,
        contentType: ContentType.Json,
        status: 201,
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
        error: ApiSpec403Error,
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
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'specId',
        value: specId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CreateSpecVersionTagResponse>(request);
  }
}
