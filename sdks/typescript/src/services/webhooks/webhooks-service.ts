import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { CreateWebhook, createWebhookRequest } from './models/create-webhook';
import { WebhookCreated, webhookCreatedResponse } from './models/webhook-created';
import { ErrorNameMessageDetails } from '../common/error-name-message-details';
import { Common401Error } from '../common/common401-error';
import { Common500Error } from '../common/common500-error';
import { CreateWebhookParams } from './request-params';

/**
 * Service class for WebhooksService operations.
 * Provides methods to interact with WebhooksService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class WebhooksService extends BaseService {
  protected createWebhookConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for createWebhook.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateWebhookConfig(config: Partial<SdkConfig>): this {
    this.createWebhookConfig = config;
    return this;
  }

  /**
 * Creates a webhook that triggers a collection with a custom payload. You can get the webhook's URL from the `webhookUrl` property in the endpoint's response.
**Note:**

If you do not include the `workspace` query parameter, the system creates the webhook in the oldest personal Internal workspace you own.

 * @param {string} params.workspace - The workspace's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<WebhookCreated>>} - Successful Response
 */
  async createWebhook(
    body: CreateWebhook,
    params: CreateWebhookParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<WebhookCreated> {
    const resolvedConfig = this.getResolvedConfig(this.createWebhookConfig, requestConfig);
    z.object({ workspace: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/webhooks')
      .setRequestSchema(createWebhookRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: webhookCreatedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorNameMessageDetails,
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
        key: 'workspace',
        value: params?.workspace,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<WebhookCreated>(request);
  }
}
