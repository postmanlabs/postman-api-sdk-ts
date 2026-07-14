import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  DetectedSecretsQueryRequest,
  detectedSecretsQueryRequestRequest,
} from './models/detected-secrets-query-request';
import {
  SearchDetectedSecretsRequest,
  searchDetectedSecretsRequestResponse,
} from './models/search-detected-secrets-request';
import { DetectedSecretsQuery400Errors } from './models/detected-secrets-query400-errors';
import { ErrorTypeTitleStatusInstance } from './models/error-type-title-status-instance';
import { SecretScanner403Error } from './models/secret-scanner403-error';
import { DetectedSecretsQueriesParams, GetDetectedSecretsLocationsParams } from './request-params';
import {
  UpdateSecretResolutionRequest,
  updateSecretResolutionRequestRequest,
} from './models/update-secret-resolution-request';
import {
  UpdateDetectedSecretResolutionsOkResponse,
  updateDetectedSecretResolutionsOkResponseResponse,
} from './models/update-detected-secret-resolutions-ok-response';
import {
  GetDetectedSecretsLocationsOkResponse,
  getDetectedSecretsLocationsOkResponseResponse,
} from './models/get-detected-secrets-locations-ok-response';
import {
  GetSecretTypesOkResponse,
  getSecretTypesOkResponseResponse,
} from './models/get-secret-types-ok-response';

/**
 * Service class for SecretScannerService operations.
 * Provides methods to interact with SecretScannerService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class SecretScannerService extends BaseService {
  protected detectedSecretsQueriesConfig?: Partial<SdkConfig>;

  protected updateDetectedSecretResolutionsConfig?: Partial<SdkConfig>;

  protected getDetectedSecretsLocationsConfig?: Partial<SdkConfig>;

  protected getSecretTypesConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for detectedSecretsQueries.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDetectedSecretsQueriesConfig(config: Partial<SdkConfig>): this {
    this.detectedSecretsQueriesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateDetectedSecretResolutions.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateDetectedSecretResolutionsConfig(config: Partial<SdkConfig>): this {
    this.updateDetectedSecretResolutionsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getDetectedSecretsLocations.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetDetectedSecretsLocationsConfig(config: Partial<SdkConfig>): this {
    this.getDetectedSecretsLocationsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getSecretTypes.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSecretTypesConfig(config: Partial<SdkConfig>): this {
    this.getSecretTypesConfig = config;
    return this;
  }

  /**
 * Returns all secrets detected by Postman's [Secret Scanner](https://learning.postman.com/docs/administration/secret-scanner/), grouped by workspace or resource. If you pass an empty request body, this endpoint returns all results.
 * @param {number} [params.limit] - The maximum number of rows to return in the response.
 * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
 * @param {string} [params.include] - The additional fields to be included as a part of the request:
- `meta.total` — Include the total records found in the `meta` response object.

 * @param {string} [params.since] - Return only results created since the given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be later than the `until` value. To use `time-numoffset` format, you must use `%2B` URL-encoding for the `+` character.
 * @param {string} [params.until] - Return only results created until this given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be earlier than the `since` value. To use `time-numoffset` format, you must use `%2B` URL-encoding for the `+` character.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<SearchDetectedSecretsRequest>>} - Successful Response
 */
  async detectedSecretsQueries(
    body: DetectedSecretsQueryRequest,
    params?: DetectedSecretsQueriesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<SearchDetectedSecretsRequest> {
    const resolvedConfig = this.getResolvedConfig(this.detectedSecretsQueriesConfig, requestConfig);
    z.object({
      limit: z.number().optional(),
      cursor: z.string().optional(),
      include: z.string().optional(),
      since: z.string().optional(),
      until: z.string().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/detected-secrets-queries')
      .setRequestSchema(detectedSecretsQueryRequestRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: searchDetectedSecretsRequestResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: DetectedSecretsQuery400Errors,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: SecretScanner403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ErrorTypeTitleStatusInstance,
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
      .addQueryParam({
        key: 'include',
        value: params?.include,
      })
      .addQueryParam({
        key: 'since',
        value: params?.since,
      })
      .addQueryParam({
        key: 'until',
        value: params?.until,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<SearchDetectedSecretsRequest>(request);
  }

  /**
   * Updates the resolution status of a secret detected in a workspace.
   * @param {string} secretId - The secret's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<UpdateDetectedSecretResolutionsOkResponse>>} - Successful Response
   */
  async updateDetectedSecretResolutions(
    secretId: string,
    body: UpdateSecretResolutionRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<UpdateDetectedSecretResolutionsOkResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.updateDetectedSecretResolutionsConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/detected-secrets/{secretId}')
      .setRequestSchema(updateSecretResolutionRequestRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: updateDetectedSecretResolutionsOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleStatusInstance,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: SecretScanner403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ErrorTypeTitleStatusInstance,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'secretId',
        value: secretId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<UpdateDetectedSecretResolutionsOkResponse>(request);
  }

  /**
   * Gets the locations of secrets detected by Postman's [Secret Scanner](https://learning.postman.com/docs/administration/secret-scanner/).
   * @param {string} secretId - The secret's ID.
   * @param {string} params.workspaceId - The workspace's ID.
   * @param {number} [params.limit] - The maximum number of rows to return in the response.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {string} [params.since] - Return only results created since the given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be later than the `until` value. To use `time-numoffset` format, you must use `%2B` URL-encoding for the `+` character.
   * @param {string} [params.until] - Return only results created until this given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be earlier than the `since` value. To use `time-numoffset` format, you must use `%2B` URL-encoding for the `+` character.
   * @param {ResourceType} [params.resourceType] - Return only results that match the given resource type.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetDetectedSecretsLocationsOkResponse>>} - Successful Response
   */
  async getDetectedSecretsLocations(
    secretId: string,
    params: GetDetectedSecretsLocationsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetDetectedSecretsLocationsOkResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.getDetectedSecretsLocationsConfig,
      requestConfig,
    );
    z.object({
      workspaceId: z.string(),
      limit: z.number().optional(),
      cursor: z.string().optional(),
      since: z.string().optional(),
      until: z.string().optional(),
      resourceType: z.unknown().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/detected-secrets/{secretId}/locations')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getDetectedSecretsLocationsOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleStatusInstance,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: SecretScanner403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ErrorTypeTitleStatusInstance,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'secretId',
        value: secretId,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .addQueryParam({
        key: 'cursor',
        value: params?.cursor,
      })
      .addQueryParam({
        key: 'workspaceId',
        value: params?.workspaceId,
      })
      .addQueryParam({
        key: 'since',
        value: params?.since,
      })
      .addQueryParam({
        key: 'until',
        value: params?.until,
      })
      .addQueryParam({
        key: 'resourceType',
        value: params?.resourceType,
      })
      .build();
    return this.client.callDirect<GetDetectedSecretsLocationsOkResponse>(request);
  }

  /**
   * Gets the metadata of the secret types supported by Postman's [Secret Scanner](https://learning.postman.com/docs/administration/secret-scanner/). You can use a secret type's ID in the response to query data with the POST `/detected-secrets/{secretId}` endpoint.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetSecretTypesOkResponse>>} - Successful Response
   */
  async getSecretTypes(requestConfig?: Partial<SdkConfig>): Promise<GetSecretTypesOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getSecretTypesConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/secret-types')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getSecretTypesOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: SecretScanner403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ErrorTypeTitleStatusInstance,
        contentType: ContentType.Json,
        status: 500,
      })
      .build();
    return this.client.callDirect<GetSecretTypesOkResponse>(request);
  }
}
