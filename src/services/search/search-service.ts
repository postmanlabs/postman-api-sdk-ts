import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  SearchPostmanResources,
  searchPostmanResourcesRequest,
} from './models/search-postman-resources';
import {
  SearchPostmanResourcesResponse,
  searchPostmanResourcesResponseResponse,
} from './models/search-postman-resources-response';
import { ErrorTypeTitleDetailStatus } from '../common/error-type-title-detail-status';
import { Common500Error } from '../common/common500-error';
import { SearchPostmanResourcesParams } from './request-params';

/**
 * Service class for SearchService operations.
 * Provides methods to interact with SearchService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class SearchService extends BaseService {
  protected searchPostmanResourcesConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for searchPostmanResources.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSearchPostmanResourcesConfig(config: Partial<SdkConfig>): this {
    this.searchPostmanResourcesConfig = config;
    return this;
  }

  /**
 * Searches Postman for resources such as workspaces, collections, requests, and other resource types. You can filter results by ownership, visibility, tags, and other criteria.
**Note:**

If you call this endpoint without an API key, the response only returns publicly-available resources.

 * @param {number} [params.limit] - The maximum number of results to return per page.
 * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<SearchPostmanResourcesResponse>>} - Successful Response
 */
  async searchPostmanResources(
    body: SearchPostmanResources,
    params?: SearchPostmanResourcesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<SearchPostmanResourcesResponse> {
    const resolvedConfig = this.getResolvedConfig(this.searchPostmanResourcesConfig, requestConfig);
    z.object({ limit: z.number().optional(), cursor: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/search')
      .setRequestSchema(searchPostmanResourcesRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: searchPostmanResourcesResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common500Error,
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
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<SearchPostmanResourcesResponse>(request);
  }
}
