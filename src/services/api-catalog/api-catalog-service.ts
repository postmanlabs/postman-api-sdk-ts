import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  GetApiCatalogDiscoveryServices,
  getApiCatalogDiscoveryServicesResponse,
} from './models/get-api-catalog-discovery-services';
import { ErrorTypeStatusTitleDetailErrors } from './models/error-type-status-title-detail-errors';
import { ErrorTypeTitleDetailStatus } from '../common/error-type-title-detail-status';
import { Common500Error } from '../common/common500-error';
import {
  AddApiCatalogSystemEnvironmentAssociationsParams,
  GetApiCatalogDiscoveryServicesParams,
  GetApiCatalogServiceCiRunsParams,
  GetApiCatalogServiceEndpointsParams,
  GetApiCatalogServiceMonitorRunsParams,
  GetApiCatalogServiceParams,
  GetApiCatalogServiceSpecificationLintsParams,
  GetApiCatalogServicesParams,
  GetApiCatalogSystemEnvironmentAssociationsParams,
  GetApiCatalogSystemEnvironmentsParams,
} from './request-params';
import {
  PostApiCatalogDiscoveryServices,
  postApiCatalogDiscoveryServicesRequest,
} from './models/post-api-catalog-discovery-services';
import {
  PostApiCatalogDiscoveryServicesResponse,
  postApiCatalogDiscoveryServicesResponseResponse,
} from './models/post-api-catalog-discovery-services-response';
import {
  GetApiCatalogDiscoveryService,
  getApiCatalogDiscoveryServiceResponse,
} from './models/get-api-catalog-discovery-service';
import {
  GetApiCatalogServices,
  getApiCatalogServicesResponse,
} from './models/get-api-catalog-services';
import {
  GetApiCatalogService,
  getApiCatalogServiceResponse,
} from './models/get-api-catalog-service';
import {
  GetApiCatalogServiceEndpoints,
  getApiCatalogServiceEndpointsResponse,
} from './models/get-api-catalog-service-endpoints';
import {
  GetApiCatalogServiceMonitorRuns,
  getApiCatalogServiceMonitorRunsResponse,
} from './models/get-api-catalog-service-monitor-runs';
import {
  GetApiCatalogServiceSpecificationLints,
  getApiCatalogServiceSpecificationLintsResponse,
} from './models/get-api-catalog-service-specification-lints';
import {
  GetApiCatalogServiceCiRuns,
  getApiCatalogServiceCiRunsResponse,
} from './models/get-api-catalog-service-ci-runs';
import {
  GetApiCatalogSystemEnvironments,
  getApiCatalogSystemEnvironmentsResponse,
} from './models/get-api-catalog-system-environments';
import { ApiCatalogSystemEnvironment400Error } from './models/api-catalog-system-environment400-error';
import {
  CreateApiCatalogSystemEnvironment,
  createApiCatalogSystemEnvironmentRequest,
} from './models/create-api-catalog-system-environment';
import {
  CreateApiCatalogSystemEnvironmentResponse,
  createApiCatalogSystemEnvironmentResponseResponse,
} from './models/create-api-catalog-system-environment-response';
import {
  GetApiCatalogSystemEnvironment,
  getApiCatalogSystemEnvironmentResponse,
} from './models/get-api-catalog-system-environment';
import {
  UpdateApiCatalogSystemEnvironment,
  updateApiCatalogSystemEnvironmentRequest,
} from './models/update-api-catalog-system-environment';
import {
  UpdateApiCatalogSystemEnvironmentResponse,
  updateApiCatalogSystemEnvironmentResponseResponse,
} from './models/update-api-catalog-system-environment-response';
import {
  GetApiCatalogSystemEnvironmentAssociations,
  getApiCatalogSystemEnvironmentAssociationsResponse,
} from './models/get-api-catalog-system-environment-associations';
import {
  AddApiCatalogSystemEnvironmentAssociations,
  addApiCatalogSystemEnvironmentAssociationsRequest,
} from './models/add-api-catalog-system-environment-associations';
import {
  AddApiCatalogSystemEnvironmentAssociationsResponse,
  addApiCatalogSystemEnvironmentAssociationsResponseResponse,
} from './models/add-api-catalog-system-environment-associations-response';
import {
  RemoveApiCatalogSystemEnvironmentAssociations,
  removeApiCatalogSystemEnvironmentAssociationsRequest,
} from './models/remove-api-catalog-system-environment-associations';
import {
  RemoveApiCatalogSystemEnvironmentAssociationsResponse,
  removeApiCatalogSystemEnvironmentAssociationsResponseResponse,
} from './models/remove-api-catalog-system-environment-associations-response';

/**
 * Service class for ApiCatalogService operations.
 * Provides methods to interact with ApiCatalogService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class ApiCatalogService extends BaseService {
  protected getApiCatalogDiscoveryServicesConfig?: Partial<SdkConfig>;

  protected postApiCatalogDiscoveryServicesConfig?: Partial<SdkConfig>;

  protected getApiCatalogDiscoveryServiceConfig?: Partial<SdkConfig>;

  protected getApiCatalogServicesConfig?: Partial<SdkConfig>;

  protected getApiCatalogServiceConfig?: Partial<SdkConfig>;

  protected getApiCatalogServiceEndpointsConfig?: Partial<SdkConfig>;

  protected getApiCatalogServiceMonitorRunsConfig?: Partial<SdkConfig>;

  protected getApiCatalogServiceSpecificationLintsConfig?: Partial<SdkConfig>;

  protected getApiCatalogServiceCiRunsConfig?: Partial<SdkConfig>;

  protected getApiCatalogSystemEnvironmentsConfig?: Partial<SdkConfig>;

  protected createApiCatalogSystemEnvironmentConfig?: Partial<SdkConfig>;

  protected getApiCatalogSystemEnvironmentConfig?: Partial<SdkConfig>;

  protected updateApiCatalogSystemEnvironmentConfig?: Partial<SdkConfig>;

  protected getApiCatalogSystemEnvironmentAssociationsConfig?: Partial<SdkConfig>;

  protected addApiCatalogSystemEnvironmentAssociationsConfig?: Partial<SdkConfig>;

  protected removeApiCatalogSystemEnvironmentAssociationsConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getApiCatalogDiscoveryServices.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApiCatalogDiscoveryServicesConfig(config: Partial<SdkConfig>): this {
    this.getApiCatalogDiscoveryServicesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for postApiCatalogDiscoveryServices.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPostApiCatalogDiscoveryServicesConfig(config: Partial<SdkConfig>): this {
    this.postApiCatalogDiscoveryServicesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getApiCatalogDiscoveryService.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApiCatalogDiscoveryServiceConfig(config: Partial<SdkConfig>): this {
    this.getApiCatalogDiscoveryServiceConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getApiCatalogServices.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApiCatalogServicesConfig(config: Partial<SdkConfig>): this {
    this.getApiCatalogServicesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getApiCatalogService.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApiCatalogServiceConfig(config: Partial<SdkConfig>): this {
    this.getApiCatalogServiceConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getApiCatalogServiceEndpoints.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApiCatalogServiceEndpointsConfig(config: Partial<SdkConfig>): this {
    this.getApiCatalogServiceEndpointsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getApiCatalogServiceMonitorRuns.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApiCatalogServiceMonitorRunsConfig(config: Partial<SdkConfig>): this {
    this.getApiCatalogServiceMonitorRunsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getApiCatalogServiceSpecificationLints.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApiCatalogServiceSpecificationLintsConfig(config: Partial<SdkConfig>): this {
    this.getApiCatalogServiceSpecificationLintsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getApiCatalogServiceCiRuns.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApiCatalogServiceCiRunsConfig(config: Partial<SdkConfig>): this {
    this.getApiCatalogServiceCiRunsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getApiCatalogSystemEnvironments.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApiCatalogSystemEnvironmentsConfig(config: Partial<SdkConfig>): this {
    this.getApiCatalogSystemEnvironmentsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createApiCatalogSystemEnvironment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateApiCatalogSystemEnvironmentConfig(config: Partial<SdkConfig>): this {
    this.createApiCatalogSystemEnvironmentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getApiCatalogSystemEnvironment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApiCatalogSystemEnvironmentConfig(config: Partial<SdkConfig>): this {
    this.getApiCatalogSystemEnvironmentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateApiCatalogSystemEnvironment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateApiCatalogSystemEnvironmentConfig(config: Partial<SdkConfig>): this {
    this.updateApiCatalogSystemEnvironmentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getApiCatalogSystemEnvironmentAssociations.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetApiCatalogSystemEnvironmentAssociationsConfig(config: Partial<SdkConfig>): this {
    this.getApiCatalogSystemEnvironmentAssociationsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for addApiCatalogSystemEnvironmentAssociations.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddApiCatalogSystemEnvironmentAssociationsConfig(config: Partial<SdkConfig>): this {
    this.addApiCatalogSystemEnvironmentAssociationsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for removeApiCatalogSystemEnvironmentAssociations.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRemoveApiCatalogSystemEnvironmentAssociationsConfig(config: Partial<SdkConfig>): this {
    this.removeApiCatalogSystemEnvironmentAssociationsConfig = config;
    return this;
  }

  /**
 * Gets a list of all [discovered services](https://learning.postman.com/docs/api-catalog/overview#discover-apis-and-services) in the API Catalog.
 * @param {DiscoveryServicesSource} [params.discoverySource] - Filter results by the given discovery source type:
- `api_gateway_app` — API Gateway integrations.
- `insights_project` — Postman Insights.
- `infra_watcher` — Cluster Watcher.
- `public_api` — Services manually added using the POST `/api-catalog/discovery-services` endpoint.

 * @param {string} [params.status] - A comma-separated list of statuses to filter the results by. Accepts the `discovered`, `integrated`, and `archived` values.
 * @param {string} [params.search] - Filter results by the given value that match a service's name. Matching is not case-sensitive.
 * @param {number} [params.limit] - The maximum number of rows to return in the response, up to a maximum value of 100. Any value greater than 100 returns a 400 Bad Request response.
 * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetApiCatalogDiscoveryServices>>} - Successful Response
 */
  async getApiCatalogDiscoveryServices(
    params?: GetApiCatalogDiscoveryServicesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetApiCatalogDiscoveryServices> {
    const resolvedConfig = this.getResolvedConfig(
      this.getApiCatalogDiscoveryServicesConfig,
      requestConfig,
    );
    z.object({
      discoverySource: z.unknown().optional(),
      status: z.string().optional(),
      search: z.string().optional(),
      limit: z.number().optional(),
      cursor: z.string().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/api-catalog/discovery-services')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getApiCatalogDiscoveryServicesResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeStatusTitleDetailErrors,
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
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addQueryParam({
        key: 'discoverySource',
        value: params?.discoverySource,
      })
      .addQueryParam({
        key: 'status',
        value: params?.status,
      })
      .addQueryParam({
        key: 'search',
        value: params?.search,
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
    return this.client.callDirect<GetApiCatalogDiscoveryServices>(request);
  }

  /**
   * Adds discovered services to the API Catalog. Accepts up to 20 services in a single call.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<PostApiCatalogDiscoveryServicesResponse>>} - Successful Response
   */
  async postApiCatalogDiscoveryServices(
    body: PostApiCatalogDiscoveryServices,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PostApiCatalogDiscoveryServicesResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.postApiCatalogDiscoveryServicesConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api-catalog/discovery-services')
      .setRequestSchema(postApiCatalogDiscoveryServicesRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: postApiCatalogDiscoveryServicesResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeStatusTitleDetailErrors,
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
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<PostApiCatalogDiscoveryServicesResponse>(request);
  }

  /**
   * Gets detailed information about a discovered service, including a base64-encoded OpenAPI specification and an array of endpoints.
   * @param {string} serviceId - The discovered service's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetApiCatalogDiscoveryService>>} - Successful Response
   */
  async getApiCatalogDiscoveryService(
    serviceId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetApiCatalogDiscoveryService> {
    const resolvedConfig = this.getResolvedConfig(
      this.getApiCatalogDiscoveryServiceConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/api-catalog/discovery-services/{serviceId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getApiCatalogDiscoveryServiceResponse,
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
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'serviceId',
        value: serviceId,
      })
      .build();
    return this.client.callDirect<GetApiCatalogDiscoveryService>(request);
  }

  /**
   * Gets a list of services in a system environment. The response includes details about analytics, compliance, and governance metadata.
   * @param {string} params.systemEnvironmentId - The system environment's ID.
   * @param {string} [params.name] - Filter results to the given the service name. This is case-insensitive.
   * @param {string} [params.tags] - A comma-separated list of tag names to filter by.
   * @param {string} [params.governanceGroupId] - Filter results to only services that belong to the given governance group ID.
   * @param {number} [params.limit] - The maximum number of rows to return in the response, up to a maximum value of 100. Any value greater than 100 returns a 400 Bad Request response.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetApiCatalogServices>>} - Successful Response
   */
  async getApiCatalogServices(
    params: GetApiCatalogServicesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetApiCatalogServices> {
    const resolvedConfig = this.getResolvedConfig(this.getApiCatalogServicesConfig, requestConfig);
    z.object({
      systemEnvironmentId: z.string(),
      name: z.string().optional(),
      tags: z.string().optional(),
      governanceGroupId: z.string().optional(),
      limit: z.number().optional(),
      cursor: z.string().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/api-catalog/services')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getApiCatalogServicesResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeStatusTitleDetailErrors,
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
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addQueryParam({
        key: 'systemEnvironmentId',
        value: params?.systemEnvironmentId,
      })
      .addQueryParam({
        key: 'name',
        value: params?.name,
      })
      .addQueryParam({
        key: 'tags',
        value: params?.tags,
      })
      .addQueryParam({
        key: 'governanceGroupId',
        value: params?.governanceGroupId,
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
    return this.client.callDirect<GetApiCatalogServices>(request);
  }

  /**
   * Gets information about a service, including its health, traffic, compliance, ownership, and dependencies.
   * @param {string} serviceId - The service's ID.
   * @param {string} params.systemEnvironmentId - The system environment's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetApiCatalogService>>} - Successful Response
   */
  async getApiCatalogService(
    serviceId: string,
    params: GetApiCatalogServiceParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetApiCatalogService> {
    const resolvedConfig = this.getResolvedConfig(this.getApiCatalogServiceConfig, requestConfig);
    z.object({ systemEnvironmentId: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/api-catalog/services/{serviceId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getApiCatalogServiceResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeStatusTitleDetailErrors,
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
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'serviceId',
        value: serviceId,
      })
      .addQueryParam({
        key: 'systemEnvironmentId',
        value: params?.systemEnvironmentId,
      })
      .build();
    return this.client.callDirect<GetApiCatalogService>(request);
  }

  /**
   * Get a list of observed API endpoints for a service and its performance metrics.
   * @param {string} serviceId - The service's ID.
   * @param {string} params.systemEnvironmentId - The system environment's ID.
   * @param {string} [params.httpMethods] - A.comma-separated list of HTTP methods to filter the results by.
   * @param {string} [params.hosts] - A comma-separated list of hostnames to filter the results by.
   * @param {string} [params.responseCodes] - A comma-separated list of HTTP status codes to filter the results by.
   * @param {string} [params.search] - Filter results to the search filter given on the endpoint's path.
   * @param {string} [params.sort] - Sort the results in field:direction order format. Accepts the `count`, `endpoint`, `p95LatencyMs`, and `errorRate` fields. Supports the `asc` and `desc` directions.
   * @param {number} [params.limit] - The maximum number of rows to return in the response, up to a maximum value of 100. Any value greater than 100 returns a 400 Bad Request response.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetApiCatalogServiceEndpoints>>} - Successful Response
   */
  async getApiCatalogServiceEndpoints(
    serviceId: string,
    params: GetApiCatalogServiceEndpointsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetApiCatalogServiceEndpoints> {
    const resolvedConfig = this.getResolvedConfig(
      this.getApiCatalogServiceEndpointsConfig,
      requestConfig,
    );
    z.object({
      systemEnvironmentId: z.string(),
      httpMethods: z.string().optional(),
      hosts: z.string().optional(),
      responseCodes: z.string().optional(),
      search: z.string().optional(),
      sort: z.string().optional(),
      limit: z.number().optional(),
      cursor: z.string().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/api-catalog/services/{serviceId}/endpoints')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getApiCatalogServiceEndpointsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeStatusTitleDetailErrors,
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
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'serviceId',
        value: serviceId,
      })
      .addQueryParam({
        key: 'systemEnvironmentId',
        value: params?.systemEnvironmentId,
      })
      .addQueryParam({
        key: 'httpMethods',
        value: params?.httpMethods,
      })
      .addQueryParam({
        key: 'hosts',
        value: params?.hosts,
      })
      .addQueryParam({
        key: 'responseCodes',
        value: params?.responseCodes,
      })
      .addQueryParam({
        key: 'search',
        value: params?.search,
      })
      .addQueryParam({
        key: 'sort',
        value: params?.sort,
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
    return this.client.callDirect<GetApiCatalogServiceEndpoints>(request);
  }

  /**
   * Gets a list of scheduled monitor runs for a service that includes summary statistics.
   * @param {string} serviceId - The service's ID.
   * @param {string} params.systemEnvironmentId - The system environment's ID.
   * @param {string} [params.collectionId] - Filter results to only the given collection ID's runs.
   * @param {string} [params.sort] - Sort the results in field:direction order format. Accepts the `timestamp`, `duration`, and `failedAssertions` fields. Supports the `asc` and `desc` directions.
   * @param {string} [params.environmentId] - Filter results to only the given environment ID runs.
   * @param {ApiCatalogServiceStatusFilter} [params.status] - Filter results by run status.
   * @param {number} [params.limit] - The maximum number of rows to return in the response, up to a maximum value of 100. Any value greater than 100 returns a 400 Bad Request response.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetApiCatalogServiceMonitorRuns>>} - Successful Response
   */
  async getApiCatalogServiceMonitorRuns(
    serviceId: string,
    params: GetApiCatalogServiceMonitorRunsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetApiCatalogServiceMonitorRuns> {
    const resolvedConfig = this.getResolvedConfig(
      this.getApiCatalogServiceMonitorRunsConfig,
      requestConfig,
    );
    z.object({
      systemEnvironmentId: z.string(),
      collectionId: z.string().optional(),
      sort: z.string().optional(),
      environmentId: z.string().optional(),
      status: z.unknown().optional(),
      limit: z.number().optional(),
      cursor: z.string().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/api-catalog/services/{serviceId}/monitor-runs')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getApiCatalogServiceMonitorRunsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeStatusTitleDetailErrors,
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
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'serviceId',
        value: serviceId,
      })
      .addQueryParam({
        key: 'systemEnvironmentId',
        value: params?.systemEnvironmentId,
      })
      .addQueryParam({
        key: 'collectionId',
        value: params?.collectionId,
      })
      .addQueryParam({
        key: 'sort',
        value: params?.sort,
      })
      .addQueryParam({
        key: 'environmentId',
        value: params?.environmentId,
      })
      .addQueryParam({
        key: 'status',
        value: params?.status,
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
    return this.client.callDirect<GetApiCatalogServiceMonitorRuns>(request);
  }

  /**
   * Gets a list of API specification lint runs for a service that includes summary statistics and per-severity issue counts.
   * @param {string} serviceId - The service's ID.
   * @param {string} [params.specId] - Filter results to the given API specification ID.
   * @param {ApiCatalogServiceSpecLintSeverityFilter} [params.severity] - Filter results to runs with issues at or above the given severity threshold. Higher severities are always included.
   * @param {ApiCatalogServiceStatusFilter} [params.status] - Filter results to the given spec lint outcome.
   * @param {string} [params.sort] - Sort the results in field:direction order format. Accepts the `timestamp` and `errorCount` fields. Supports the `asc` and `desc` directions.
   * @param {number} [params.limit] - The maximum number of rows to return in the response, up to a maximum value of 100. Any value greater than 100 returns a 400 Bad Request response.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetApiCatalogServiceSpecificationLints>>} - Successful Response
   */
  async getApiCatalogServiceSpecificationLints(
    serviceId: string,
    params?: GetApiCatalogServiceSpecificationLintsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetApiCatalogServiceSpecificationLints> {
    const resolvedConfig = this.getResolvedConfig(
      this.getApiCatalogServiceSpecificationLintsConfig,
      requestConfig,
    );
    z.object({
      specId: z.string().optional(),
      severity: z.unknown().optional(),
      status: z.unknown().optional(),
      sort: z.string().optional(),
      limit: z.number().optional(),
      cursor: z.string().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/api-catalog/services/{serviceId}/spec-lints')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getApiCatalogServiceSpecificationLintsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeStatusTitleDetailErrors,
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
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'serviceId',
        value: serviceId,
      })
      .addQueryParam({
        key: 'specId',
        value: params?.specId,
      })
      .addQueryParam({
        key: 'severity',
        value: params?.severity,
      })
      .addQueryParam({
        key: 'status',
        value: params?.status,
      })
      .addQueryParam({
        key: 'sort',
        value: params?.sort,
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
    return this.client.callDirect<GetApiCatalogServiceSpecificationLints>(request);
  }

  /**
   * Gets a paginated list of CI collection runs for a service that includes summary statistics, pipeline details, and Git metadata.
   * @param {string} serviceId - The service's ID.
   * @param {string} params.systemEnvironmentId - The system environment's ID.
   * @param {string} [params.collectionId] - Filter results to only the given collection ID's runs.
   * @param {string} [params.environmentId] - Filter results to only the given environment ID runs.
   * @param {ApiCatalogServiceStatusFilter} [params.status] - Filter results by run status.
   * @param {string} [params.branch] - Filter results by the given Git branch name.
   * @param {string} [params.workflowName] - Filter results by the given CI workflow name.
   * @param {string} [params.actor] - Filter results by the given CI user that triggered the run.
   * @param {string} [params.repoName] - Filter results by the given repository name.
   * @param {string} [params.repoOwner] - Filter results by the given repository owner.
   * @param {string} [params.sort] - Sort the results in field:direction order format. Accepts the `timestamp` and `duration` fields. Supports the `asc` and `desc` directions.
   * @param {number} [params.limit] - The maximum number of rows to return in the response, up to a maximum value of 100. Any value greater than 100 returns a 400 Bad Request response.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetApiCatalogServiceCiRuns>>} - Successful Response
   */
  async getApiCatalogServiceCiRuns(
    serviceId: string,
    params: GetApiCatalogServiceCiRunsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetApiCatalogServiceCiRuns> {
    const resolvedConfig = this.getResolvedConfig(
      this.getApiCatalogServiceCiRunsConfig,
      requestConfig,
    );
    z.object({
      systemEnvironmentId: z.string(),
      collectionId: z.string().optional(),
      environmentId: z.string().optional(),
      status: z.unknown().optional(),
      branch: z.string().optional(),
      workflowName: z.string().optional(),
      actor: z.string().optional(),
      repoName: z.string().optional(),
      repoOwner: z.string().optional(),
      sort: z.string().optional(),
      limit: z.number().optional(),
      cursor: z.string().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/api-catalog/services/{serviceId}/ci-runs')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getApiCatalogServiceCiRunsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeStatusTitleDetailErrors,
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
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'serviceId',
        value: serviceId,
      })
      .addQueryParam({
        key: 'systemEnvironmentId',
        value: params?.systemEnvironmentId,
      })
      .addQueryParam({
        key: 'collectionId',
        value: params?.collectionId,
      })
      .addQueryParam({
        key: 'environmentId',
        value: params?.environmentId,
      })
      .addQueryParam({
        key: 'status',
        value: params?.status,
      })
      .addQueryParam({
        key: 'branch',
        value: params?.branch,
      })
      .addQueryParam({
        key: 'workflowName',
        value: params?.workflowName,
      })
      .addQueryParam({
        key: 'actor',
        value: params?.actor,
      })
      .addQueryParam({
        key: 'repoName',
        value: params?.repoName,
      })
      .addQueryParam({
        key: 'repoOwner',
        value: params?.repoOwner,
      })
      .addQueryParam({
        key: 'sort',
        value: params?.sort,
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
    return this.client.callDirect<GetApiCatalogServiceCiRuns>(request);
  }

  /**
   * Gets all of the authenticated team's system environments.
   * @param {boolean} [params.isProduction] - If true, filters the response results to return only system environments marked as production.
   * @param {number} [params.limit] - The maximum number of rows to return in the response, up to a maximum value of 100. Any value greater than 100 returns a 400 Bad Request response.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetApiCatalogSystemEnvironments>>} - Successful Response
   */
  async getApiCatalogSystemEnvironments(
    params?: GetApiCatalogSystemEnvironmentsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetApiCatalogSystemEnvironments> {
    const resolvedConfig = this.getResolvedConfig(
      this.getApiCatalogSystemEnvironmentsConfig,
      requestConfig,
    );
    z.object({
      isProduction: z.boolean().optional(),
      limit: z.number().optional(),
      cursor: z.string().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/api-catalog/system-environments')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getApiCatalogSystemEnvironmentsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ApiCatalogSystemEnvironment400Error,
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
      .addQueryParam({
        key: 'isProduction',
        value: params?.isProduction,
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
    return this.client.callDirect<GetApiCatalogSystemEnvironments>(request);
  }

  /**
   * Creates a system environment for the authenticated team.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CreateApiCatalogSystemEnvironmentResponse>>} - Successful Response
   */
  async createApiCatalogSystemEnvironment(
    body: CreateApiCatalogSystemEnvironment,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreateApiCatalogSystemEnvironmentResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.createApiCatalogSystemEnvironmentConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api-catalog/system-environments')
      .setRequestSchema(createApiCatalogSystemEnvironmentRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createApiCatalogSystemEnvironmentResponseResponse,
        contentType: ContentType.Json,
        status: 201,
      })
      .addError({
        error: ApiCatalogSystemEnvironment400Error,
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
        status: 409,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CreateApiCatalogSystemEnvironmentResponse>(request);
  }

  /**
   * Gets information about a system environment.
   * @param {string} systemEnvironmentId - The system environment's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetApiCatalogSystemEnvironment>>} - Successful Response
   */
  async getApiCatalogSystemEnvironment(
    systemEnvironmentId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetApiCatalogSystemEnvironment> {
    const resolvedConfig = this.getResolvedConfig(
      this.getApiCatalogSystemEnvironmentConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/api-catalog/system-environments/{systemEnvironmentId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getApiCatalogSystemEnvironmentResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ApiCatalogSystemEnvironment400Error,
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
      .addPathParam({
        key: 'systemEnvironmentId',
        value: systemEnvironmentId,
      })
      .build();
    return this.client.callDirect<GetApiCatalogSystemEnvironment>(request);
  }

  /**
 * Updates a system environment's information. You can update one or more fields in a single call.
**Note:**

If you update the name, it must be unique within the team.

 * @param {string} systemEnvironmentId - The system environment's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<UpdateApiCatalogSystemEnvironmentResponse>>} - Successful Response
 */
  async updateApiCatalogSystemEnvironment(
    systemEnvironmentId: string,
    body: UpdateApiCatalogSystemEnvironment,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<UpdateApiCatalogSystemEnvironmentResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.updateApiCatalogSystemEnvironmentConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PATCH')
      .setPath('/api-catalog/system-environments/{systemEnvironmentId}')
      .setRequestSchema(updateApiCatalogSystemEnvironmentRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: updateApiCatalogSystemEnvironmentResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ApiCatalogSystemEnvironment400Error,
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
        status: 409,
      })
      .addPathParam({
        key: 'systemEnvironmentId',
        value: systemEnvironmentId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<UpdateApiCatalogSystemEnvironmentResponse>(request);
  }

  /**
   * Gets the workspace-environment associations for a system environment.
   * @param {string} systemEnvironmentId - The system environment's ID.
   * @param {string} [params.workspaceId] - The workspace's ID to which the environments in the association belong to.
   * @param {number} [params.limit] - The maximum number of rows to return in the response, up to a maximum value of 100. Any value greater than 100 returns a 400 Bad Request response.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetApiCatalogSystemEnvironmentAssociations>>} - Successful Response
   */
  async getApiCatalogSystemEnvironmentAssociations(
    systemEnvironmentId: string,
    params?: GetApiCatalogSystemEnvironmentAssociationsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetApiCatalogSystemEnvironmentAssociations> {
    const resolvedConfig = this.getResolvedConfig(
      this.getApiCatalogSystemEnvironmentAssociationsConfig,
      requestConfig,
    );
    z.object({
      workspaceId: z.string().optional(),
      limit: z.number().optional(),
      cursor: z.string().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/api-catalog/system-environments/{systemEnvironmentId}/associations')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getApiCatalogSystemEnvironmentAssociationsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ApiCatalogSystemEnvironment400Error,
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
      .addPathParam({
        key: 'systemEnvironmentId',
        value: systemEnvironmentId,
      })
      .addQueryParam({
        key: 'workspaceId',
        value: params?.workspaceId,
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
    return this.client.callDirect<GetApiCatalogSystemEnvironmentAssociations>(request);
  }

  /**
   * Adds workspace-environment associations to a system environment.
   * @param {string} systemEnvironmentId - The system environment's ID.
   * @param {boolean} [params.allowPartial] - If false, the system only adds associations when there are no status errors. If true, the system skips any ineligible associations and adds eligible associations.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<AddApiCatalogSystemEnvironmentAssociationsResponse>>} - Successful Response
   */
  async addApiCatalogSystemEnvironmentAssociations(
    systemEnvironmentId: string,
    body: AddApiCatalogSystemEnvironmentAssociations,
    params?: AddApiCatalogSystemEnvironmentAssociationsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<AddApiCatalogSystemEnvironmentAssociationsResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.addApiCatalogSystemEnvironmentAssociationsConfig,
      requestConfig,
    );
    z.object({ allowPartial: z.boolean().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/api-catalog/system-environments/{systemEnvironmentId}/associations')
      .setRequestSchema(addApiCatalogSystemEnvironmentAssociationsRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: addApiCatalogSystemEnvironmentAssociationsResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ApiCatalogSystemEnvironment400Error,
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
      .addPathParam({
        key: 'systemEnvironmentId',
        value: systemEnvironmentId,
      })
      .addQueryParam({
        key: 'allowPartial',
        value: params?.allowPartial,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<AddApiCatalogSystemEnvironmentAssociationsResponse>(request);
  }

  /**
   * Removes workspace-environment associations from a system environment.
   * @param {string} systemEnvironmentId - The system environment's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<RemoveApiCatalogSystemEnvironmentAssociationsResponse>>} - Successful Response
   */
  async removeApiCatalogSystemEnvironmentAssociations(
    systemEnvironmentId: string,
    body: RemoveApiCatalogSystemEnvironmentAssociations,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<RemoveApiCatalogSystemEnvironmentAssociationsResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.removeApiCatalogSystemEnvironmentAssociationsConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/api-catalog/system-environments/{systemEnvironmentId}/associations')
      .setRequestSchema(removeApiCatalogSystemEnvironmentAssociationsRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: removeApiCatalogSystemEnvironmentAssociationsResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ApiCatalogSystemEnvironment400Error,
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
      .addPathParam({
        key: 'systemEnvironmentId',
        value: systemEnvironmentId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<RemoveApiCatalogSystemEnvironmentAssociationsResponse>(request);
  }
}
