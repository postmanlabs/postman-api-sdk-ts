import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  SubmitContextGraphAsk,
  submitContextGraphAskRequest,
} from './models/submit-context-graph-ask';
import {
  SubmitContextGraphAskResponse,
  submitContextGraphAskResponseResponse,
} from './models/submit-context-graph-ask-response';
import { ErrorTypeTitleDetailStatusInstance } from '../common/error-type-title-detail-status-instance';
import { Common401Error } from '../common/common401-error';
import { Common500Error } from '../common/common500-error';
import {
  GetContextGraphAskResponse,
  getContextGraphAskResponseResponse,
} from './models/get-context-graph-ask-response';

/**
 * Service class for ContextGraphService operations.
 * Provides methods to interact with ContextGraphService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class ContextGraphService extends BaseService {
  protected submitContextGraphAskConfig?: Partial<SdkConfig>;

  protected getContextGraphAskConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for submitContextGraphAsk.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSubmitContextGraphAskConfig(config: Partial<SdkConfig>): this {
    this.submitContextGraphAskConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getContextGraphAsk.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetContextGraphAskConfig(config: Partial<SdkConfig>): this {
    this.getContextGraphAskConfig = config;
    return this;
  }

  /**
 * Submits a natural-language question about your team's Context Graph.
Asks are asynchronous. On success, this returns an HTTP `202 Accepted` response with the ask's `askId`. Send a request to the GET `/context-graph/asks/{askId}` endpoint to poll the ask for its status and, once it completes, its result.

**Note:**

Postman derives the team from your API key.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<SubmitContextGraphAskResponse>>} - Accepted
 */
  async submitContextGraphAsk(
    body: SubmitContextGraphAsk,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<SubmitContextGraphAskResponse> {
    const resolvedConfig = this.getResolvedConfig(this.submitContextGraphAskConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/context-graph/asks')
      .setRequestSchema(submitContextGraphAskRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: submitContextGraphAskResponseResponse,
        contentType: ContentType.Json,
        status: 202,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common401Error,
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
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<SubmitContextGraphAskResponse>(request);
  }

  /**
 * Gets a submitted ask's status and, once the ask completes, its result.
Poll this endpoint after submitting an ask. The `status` property is `pending` or `running` while the ask is in progress, and `completed` or `failed` once it reaches a terminal state. The `result` property is only present once `status` is `completed`.

 * @param {string} askId - The ask's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetContextGraphAskResponse>>} - Successful Response
 */
  async getContextGraphAsk(
    askId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetContextGraphAskResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getContextGraphAskConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/context-graph/asks/{askId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getContextGraphAskResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Common401Error,
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
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'askId',
        value: askId,
      })
      .build();
    return this.client.callDirect<GetContextGraphAskResponse>(request);
  }
}
