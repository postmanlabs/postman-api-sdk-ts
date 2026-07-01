import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GetAllComponents, getAllComponentsResponse } from './models/get-all-components';
import { ErrorTypeTitleDetailStatus } from '../common/error-type-title-detail-status';
import { Common401Error } from '../common/common401-error';
import { Common500Error } from '../common/common500-error';
import {
  GetAllComponentsParams,
  GetComponentParams,
  GetComponentVersionParams,
  GetComponentVersionsParams,
} from './request-params';
import { CreateComponent, createComponentRequest } from './models/create-component';
import {
  CreateComponentResponse,
  createComponentResponseResponse,
} from './models/create-component-response';
import { Common403Error } from '../common/common403-error';
import { GetComponent, getComponentResponse } from './models/get-component';
import {
  UpdateComponentResponse,
  updateComponentResponseResponse,
} from './models/update-component-response';
import { GetComponentDraft, getComponentDraftResponse } from './models/get-component-draft';
import { UpdateComponentDraft, updateComponentDraftRequest } from './models/update-component-draft';
import {
  UpdateComponentDraftResponse,
  updateComponentDraftResponseResponse,
} from './models/update-component-draft-response';
import {
  GetComponentVersions,
  getComponentVersionsResponse,
} from './models/get-component-versions';
import {
  CreateComponentVersion,
  createComponentVersionRequest,
} from './models/create-component-version';
import {
  CreateComponentVersionResponse,
  createComponentVersionResponseResponse,
} from './models/create-component-version-response';
import {
  ComponentVersionData,
  componentVersionDataResponse,
} from './models/component-version-data';

/**
 * Service class for ComponentsService operations.
 * Provides methods to interact with ComponentsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class ComponentsService extends BaseService {
  protected getAllComponentsConfig?: Partial<SdkConfig>;

  protected createComponentConfig?: Partial<SdkConfig>;

  protected getComponentConfig?: Partial<SdkConfig>;

  protected updateComponentConfig?: Partial<SdkConfig>;

  protected getComponentDraftConfig?: Partial<SdkConfig>;

  protected updateComponentDraftConfig?: Partial<SdkConfig>;

  protected getComponentVersionsConfig?: Partial<SdkConfig>;

  protected createComponentVersionConfig?: Partial<SdkConfig>;

  protected getComponentVersionConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getAllComponents.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAllComponentsConfig(config: Partial<SdkConfig>): this {
    this.getAllComponentsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createComponent.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateComponentConfig(config: Partial<SdkConfig>): this {
    this.createComponentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getComponent.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetComponentConfig(config: Partial<SdkConfig>): this {
    this.getComponentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateComponent.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateComponentConfig(config: Partial<SdkConfig>): this {
    this.updateComponentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getComponentDraft.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetComponentDraftConfig(config: Partial<SdkConfig>): this {
    this.getComponentDraftConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateComponentDraft.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateComponentDraftConfig(config: Partial<SdkConfig>): this {
    this.updateComponentDraftConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getComponentVersions.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetComponentVersionsConfig(config: Partial<SdkConfig>): this {
    this.getComponentVersionsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createComponentVersion.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateComponentVersionConfig(config: Partial<SdkConfig>): this {
    this.createComponentVersionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getComponentVersion.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetComponentVersionConfig(config: Partial<SdkConfig>): this {
    this.getComponentVersionConfig = config;
    return this;
  }

  /**
   * Gets a list of all components in the team's component library.
   * @param {ComponentType} [params.type] - Filter results by component type.
   * @param {ComponentStatus} [params.status] - Filter results by the component's status.
   * @param {boolean} [params.hasVersions] - If true, return only components with published versions.
   * @param {string} [params.include] - A comma-separated list of additional fields to include. Accepts the `hasVersions`, `latestVersion`, `latestVersion.content` values.
   * @param {string} [params.expand] - A comma-separated list of fields to expand. Accepts the `latestVersion` value.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetAllComponents>>} - Successful Response
   */
  async getAllComponents(
    params?: GetAllComponentsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetAllComponents> {
    const resolvedConfig = this.getResolvedConfig(this.getAllComponentsConfig, requestConfig);
    z.object({
      type: z.unknown().optional(),
      status: z.unknown().optional(),
      hasVersions: z.unknown().optional(),
      include: z.string().optional(),
      expand: z.string().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/components')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getAllComponentsResponse,
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
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addQueryParam({
        key: 'type',
        value: params?.type,
      })
      .addQueryParam({
        key: 'status',
        value: params?.status,
      })
      .addQueryParam({
        key: 'hasVersions',
        value: params?.hasVersions,
      })
      .addQueryParam({
        key: 'include',
        value: params?.include,
      })
      .addQueryParam({
        key: 'expand',
        value: params?.expand,
      })
      .build();
    return this.client.callDirect<GetAllComponents>(request);
  }

  /**
   * Creates a new component. The component is created in an active state with an initial draft. Use the POST `/components/{componentId}/versions` endpoint to publish a version.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CreateComponentResponse>>} - Component Created
   */
  async createComponent(
    body: CreateComponent,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreateComponentResponse> {
    const resolvedConfig = this.getResolvedConfig(this.createComponentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/components')
      .setRequestSchema(createComponentRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createComponentResponseResponse,
        contentType: ContentType.Json,
        status: 201,
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
        status: 409,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CreateComponentResponse>(request);
  }

  /**
   * Gets information about a component. Use the `include` and `expand` query parameters to return additional information, such as `hasVersions` and the latest published version.
   * @param {string} componentId - The component's ID.
   * @param {string} [params.include] - A comma-separated list of additional fields to include. Accepts the `hasVersions`, `latestVersion`, `latestVersion.content` values.
   * @param {string} [params.expand] - A comma-separated list of fields to expand. Accepts the `latestVersion` value.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetComponent>>} - Successful Response
   */
  async getComponent(
    componentId: string,
    params?: GetComponentParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetComponent> {
    const resolvedConfig = this.getResolvedConfig(this.getComponentConfig, requestConfig);
    z.object({ include: z.string().optional(), expand: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/components/{componentId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getComponentResponse,
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
        key: 'componentId',
        value: componentId,
      })
      .addQueryParam({
        key: 'include',
        value: params?.include,
      })
      .addQueryParam({
        key: 'expand',
        value: params?.expand,
      })
      .build();
    return this.client.callDirect<GetComponent>(request);
  }

  /**
 * Updates a component:  - `name` — Rename the component. The new name must be unique within the team. Archived components can't be renamed.
  - `status` — Changes the component's lifecycle state:
    - `archive` — Marks the component as read-only. Archived components aren't deleted and can't be edited or published, but their existing versions remain accessible.
    - `active` — Restores the component. Only active components can be edited and published.

**Note:**

You can't update a name and archived state in a single call. To change both properties, make separate calls to update the name and status.

 * @param {string} componentId - The component's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<UpdateComponentResponse>>} - Component Updated
 */
  async updateComponent(
    componentId: string,
    body: any,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<UpdateComponentResponse> {
    const resolvedConfig = this.getResolvedConfig(this.updateComponentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PATCH')
      .setPath('/components/{componentId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: updateComponentResponseResponse,
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
        key: 'componentId',
        value: componentId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<UpdateComponentResponse>(request);
  }

  /**
   * Gets information about the current working draft of a component, including its content and format. Drafts represent the latest unpublished edits of a component, which may be different from the most recently published version.
   * @param {string} componentId - The component's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetComponentDraft>>} - Successful Response
   */
  async getComponentDraft(
    componentId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetComponentDraft> {
    const resolvedConfig = this.getResolvedConfig(this.getComponentDraftConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/components/{componentId}/drafts')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getComponentDraftResponse,
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
        key: 'componentId',
        value: componentId,
      })
      .build();
    return this.client.callDirect<GetComponentDraft>(request);
  }

  /**
 * Updates a component's draft. Component drafts contain unpublished edits to a component, which may be different from a recently published version.
**Note:**

You can't update archived components.

 * @param {string} componentId - The component's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<UpdateComponentDraftResponse>>} - Successful Response
 */
  async updateComponentDraft(
    componentId: string,
    body: UpdateComponentDraft,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<UpdateComponentDraftResponse> {
    const resolvedConfig = this.getResolvedConfig(this.updateComponentDraftConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PATCH')
      .setPath('/components/{componentId}/drafts')
      .setRequestSchema(updateComponentDraftRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: updateComponentDraftResponseResponse,
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
        key: 'componentId',
        value: componentId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<UpdateComponentDraftResponse>(request);
  }

  /**
   * Gets a list of a component's published versions.
   * @param {string} componentId - The component's ID.
   * @param {string} [params.include] - A comma-separated list of additional fields to include. Accepts the `content` value.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetComponentVersions>>} - Successful Response
   */
  async getComponentVersions(
    componentId: string,
    params?: GetComponentVersionsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetComponentVersions> {
    const resolvedConfig = this.getResolvedConfig(this.getComponentVersionsConfig, requestConfig);
    z.object({ include: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/components/{componentId}/versions')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getComponentVersionsResponse,
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
        key: 'componentId',
        value: componentId,
      })
      .addQueryParam({
        key: 'include',
        value: params?.include,
      })
      .build();
    return this.client.callDirect<GetComponentVersions>(request);
  }

  /**
 * Publishes a new version of a component from the current draft.
**Note:**

You can't publish a new version of an archived component. Reactivate the component before publishing a new version.

 * @param {string} componentId - The component's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CreateComponentVersionResponse>>} - Version Created
 */
  async createComponentVersion(
    componentId: string,
    body: CreateComponentVersion,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreateComponentVersionResponse> {
    const resolvedConfig = this.getResolvedConfig(this.createComponentVersionConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/components/{componentId}/versions')
      .setRequestSchema(createComponentVersionRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createComponentVersionResponseResponse,
        contentType: ContentType.Json,
        status: 201,
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
        key: 'componentId',
        value: componentId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CreateComponentVersionResponse>(request);
  }

  /**
   * Gets a published version of a component.
   * @param {string} componentId - The component's ID.
   * @param {string} versionId - The component version's ID.
   * @param {string} [params.include] - A comma-separated list of additional fields to include. Accepts the `content` value.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ComponentVersionData>>} - Successful Response
   */
  async getComponentVersion(
    componentId: string,
    versionId: string,
    params?: GetComponentVersionParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ComponentVersionData> {
    const resolvedConfig = this.getResolvedConfig(this.getComponentVersionConfig, requestConfig);
    z.object({ include: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/components/{componentId}/versions/{versionId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: componentVersionDataResponse,
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
        key: 'componentId',
        value: componentId,
      })
      .addPathParam({
        key: 'versionId',
        value: versionId,
      })
      .addQueryParam({
        key: 'include',
        value: params?.include,
      })
      .build();
    return this.client.callDirect<ComponentVersionData>(request);
  }
}
