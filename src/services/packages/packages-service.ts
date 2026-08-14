import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GetPackages, getPackagesResponse } from './models/get-packages';
import { ErrorTypeTitleDetailStatusInstance } from '../common/error-type-title-detail-status-instance';
import { CreatePackageParams, GetPackagesParams } from './request-params';
import { CreatePackage, createPackageRequest } from './models/create-package';
import {
  CreatePackageResponse,
  createPackageResponseResponse,
} from './models/create-package-response';
import { UnifiedPackage, unifiedPackageResponse } from './models/unified-package';
import { UpdatePackage, updatePackageRequest } from './models/update-package';

/**
 * Service class for PackagesService operations.
 * Provides methods to interact with PackagesService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class PackagesService extends BaseService {
  protected getPackagesConfig?: Partial<SdkConfig>;

  protected createPackageConfig?: Partial<SdkConfig>;

  protected getPackageConfig?: Partial<SdkConfig>;

  protected updatePackageConfig?: Partial<SdkConfig>;

  protected deletePackageConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getPackages.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetPackagesConfig(config: Partial<SdkConfig>): this {
    this.getPackagesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createPackage.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreatePackageConfig(config: Partial<SdkConfig>): this {
    this.createPackageConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getPackage.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetPackageConfig(config: Partial<SdkConfig>): this {
    this.getPackageConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updatePackage.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdatePackageConfig(config: Partial<SdkConfig>): this {
    this.updatePackageConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deletePackage.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeletePackageConfig(config: Partial<SdkConfig>): this {
    this.deletePackageConfig = config;
    return this;
  }

  /**
 * Gets all active packages available to the authenticated user.
**Note:**

Script content isn't included in response.

 * @param {number} [params.limit] - The maximum number of packages to return.
 * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetPackages>>} - Successful Response
 */
  async getPackages(
    params?: GetPackagesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetPackages> {
    const resolvedConfig = this.getResolvedConfig(this.getPackagesConfig, requestConfig);
    z.object({ limit: z.number().optional(), cursor: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/packages')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getPackagesResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 429,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 500,
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
    return this.client.callDirect<GetPackages>(request);
  }

  /**
   * Creates a package and its index script as a Postman Package Library resource.
   * @param {string} params.workspace - The workspace's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CreatePackageResponse>>} - Package Created
   */
  async createPackage(
    body: CreatePackage,
    params: CreatePackageParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreatePackageResponse> {
    const resolvedConfig = this.getResolvedConfig(this.createPackageConfig, requestConfig);
    z.object({ workspace: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/packages')
      .setRequestSchema(createPackageRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createPackageResponseResponse,
        contentType: ContentType.Json,
        status: 201,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 409,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 429,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
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
    return this.client.callDirect<CreatePackageResponse>(request);
  }

  /**
   * Gets an active package's metadata and its current index script content.
   * @param {string} packageId - The package's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<UnifiedPackage>>} - Successful Response
   */
  async getPackage(packageId: string, requestConfig?: Partial<SdkConfig>): Promise<UnifiedPackage> {
    const resolvedConfig = this.getResolvedConfig(this.getPackageConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/packages/{packageId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: unifiedPackageResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
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
        status: 429,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'packageId',
        value: packageId,
      })
      .build();
    return this.client.callDirect<UnifiedPackage>(request);
  }

  /**
   * Updates a package's description and/or index script content.
   * @param {string} packageId - The package's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CreatePackageResponse>>} - Package Updated
   */
  async updatePackage(
    packageId: string,
    body: UpdatePackage,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreatePackageResponse> {
    const resolvedConfig = this.getResolvedConfig(this.updatePackageConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PATCH')
      .setPath('/packages/{packageId}')
      .setRequestSchema(updatePackageRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createPackageResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
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
        status: 429,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'packageId',
        value: packageId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/merge-patch+json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CreatePackageResponse>(request);
  }

  /**
 * Deletes the package and its associated index script content. On success, this returns an HTTP `204 No Content` response.
**Note:**

The endpoint returns an HTTP `204 No Content` response even if the package no longer exists.

 * @param {string} packageId - The package's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Package Deleted
 */
  async deletePackage(packageId: string, requestConfig?: Partial<SdkConfig>): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.deletePackageConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/packages/{packageId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
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
        status: 429,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'packageId',
        value: packageId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }
}
