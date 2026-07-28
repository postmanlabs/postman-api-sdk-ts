import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  GenerateServiceAccountTokenResponse,
  generateServiceAccountTokenResponseResponse,
} from './models/generate-service-account-token-response';
import { Common400Error } from '../common/common400-error';
import { ErrorTypeTitleDetailStatus } from '../common/error-type-title-detail-status';
import { ErrorTypeTitleDetailStatusInstance } from '../common/error-type-title-detail-status-instance';
import { Common500Error } from '../common/common500-error';
import { GenerateServiceAccountTokenParams } from './request-params';

/**
 * Service class for ServiceAccountsService operations.
 * Provides methods to interact with ServiceAccountsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class ServiceAccountsService extends BaseService {
  protected generateServiceAccountTokenConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for generateServiceAccountToken.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGenerateServiceAccountTokenConfig(config: Partial<SdkConfig>): this {
    this.generateServiceAccountTokenConfig = config;
    return this;
  }

  /**
 * Exchanges a service account API key for a short-lived access token. On success, the response contains an access token that can be used to authenticate downstream service-to-service requests on behalf of the service account. The token is a JWT that encodes the service account's identity and permissions, and is valid for 15 minutes.
**Note:**

- The API key must belong to a service account. API keys that belong to regular users aren't supported.
- This endpoint authorizes the service account API through the `x-api-key` passed as a header.
- This endpoint has a rate limit of 10 requests per 10 second window per user.

 * @param {string} params.xApiKey - The service account API key, in PMAK format.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GenerateServiceAccountTokenResponse>>} - Token Created
 */
  async generateServiceAccountToken(
    params: GenerateServiceAccountTokenParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GenerateServiceAccountTokenResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.generateServiceAccountTokenConfig,
      requestConfig,
    );
    z.object({ xApiKey: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/service-account-tokens')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: generateServiceAccountTokenResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Common400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 429,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addHeaderParam({
        key: 'x-api-key',
        value: params?.xApiKey,
      })
      .build();
    return this.client.callDirect<GenerateServiceAccountTokenResponse>(request);
  }
}
