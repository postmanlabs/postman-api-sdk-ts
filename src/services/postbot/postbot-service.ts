import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GenerateTool, generateToolRequest } from './models/generate-tool';
import {
  GenerateToolResponse,
  generateToolResponseResponse,
} from './models/generate-tool-response';
import { GenerateToolBadRequestResponse } from './models/generate-tool-bad-request-response';
import { ErrorTypeTitleDetailStatus } from '../common/error-type-title-detail-status';
import { Common500Error } from '../common/common500-error';

/**
 * Service class for PostbotService operations.
 * Provides methods to interact with PostbotService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class PostbotService extends BaseService {
  protected generateToolConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for generateTool.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGenerateToolConfig(config: Partial<SdkConfig>): this {
    this.generateToolConfig = config;
    return this;
  }

  /**
 * **This endpoint is deprecated**
Generates code for an AI agent tool using a collection and request from the Public API Network. For more information, see [**Tool Generation Demo**](http://postman.com/explore/toolgen) in Postman's Public API Network.

### Important

- This endpoint has a rate limit of **300 calls every 3 hours**. This does not accrue Postbot usage.
- This endpoint only supports public Postman Collections and requests.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GenerateToolResponse>>} - Successful Response
 */
  async generateTool(
    body: GenerateTool,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GenerateToolResponse> {
    const resolvedConfig = this.getResolvedConfig(this.generateToolConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/postbot/generations/tool')
      .setRequestSchema(generateToolRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: generateToolResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: GenerateToolBadRequestResponse,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
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
    return this.client.callDirect<GenerateToolResponse>(request);
  }
}
