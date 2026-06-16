import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GenerateOauthToken, generateOauthTokenRequest } from './models/generate-oauth-token';
import {
  GenerateOauthTokenResponse,
  generateOauthTokenResponseResponse,
} from './models/generate-oauth-token-response';
import { OauthTokenError } from './models/oauth-token-error';
import { RevokeOauthToken, revokeOauthTokenRequest } from './models/revoke-oauth-token';
import {
  RevokeOauthTokenResponse,
  revokeOauthTokenResponseResponse,
} from './models/revoke-oauth-token-response';

/**
 * Service class for OAuth2_0Service operations.
 * Provides methods to interact with OAuth2_0Service-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class OAuth2_0Service extends BaseService {
  protected generateOauthTokenConfig?: Partial<SdkConfig>;

  protected revokeOauthTokenConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for generateOauthToken.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGenerateOauthTokenConfig(config: Partial<SdkConfig>): this {
    this.generateOauthTokenConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for revokeOauthToken.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRevokeOauthTokenConfig(config: Partial<SdkConfig>): this {
    this.revokeOauthTokenConfig = config;
    return this;
  }

  /**
 * Generates an OAuth 2.0 access token for a client application using the `client_credentials` grant type. Use this endpoint with backend services or bots to authenticate and authorize API requests without user interaction.
**Note:**

This endpoint uses Basic Auth. You must pass a valid client ID and client secret for the username and password, respectively.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GenerateOauthTokenResponse>>} - Successful Response
 */
  async generateOauthToken(
    body: GenerateOauthToken,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GenerateOauthTokenResponse> {
    const resolvedConfig = this.getResolvedConfig(this.generateOauthTokenConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/oauth2/token')
      .setRequestSchema(generateOauthTokenRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: generateOauthTokenResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: OauthTokenError,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: OauthTokenError,
        contentType: ContentType.Json,
        status: 404,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<GenerateOauthTokenResponse>(request);
  }

  /**
 * Revokes an active OAuth 2.0 access token and prevents further use of it for authentication. Once revoked, the token can't be used for any API requests.
**Note:**

- Revocation of an OAuth token is immediate and can't be undone.
- This request does not use any authorization.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<RevokeOauthTokenResponse>>} - Token Revoked
 */
  async revokeOauthToken(
    body: RevokeOauthToken,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<RevokeOauthTokenResponse> {
    const resolvedConfig = this.getResolvedConfig(this.revokeOauthTokenConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/oauth2/token/revoke')
      .setRequestSchema(revokeOauthTokenRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: revokeOauthTokenResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: OauthTokenError,
        contentType: ContentType.Json,
        status: 404,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<RevokeOauthTokenResponse>(request);
  }
}
