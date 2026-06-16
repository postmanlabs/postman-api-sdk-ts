import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { ErrorTypeTitleDetailStatus } from '../common/error-type-title-detail-status';

/**
 * Service class for CommentsService operations.
 * Provides methods to interact with CommentsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class CommentsService extends BaseService {
  protected resolveCommentThreadConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for resolveCommentThread.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setResolveCommentThreadConfig(config: Partial<SdkConfig>): this {
    this.resolveCommentThreadConfig = config;
    return this;
  }

  /**
 * Resolves a comment and any associated replies. On success, this returns an HTTP `204 No Content` response.
Comment thread IDs return in the GET `/comments` response for [collections](https://www.postman.com/postman/workspace/postman-public-workspace/request/12959542-a6582e0a-9382-4760-8b91-53a8aa6cb8d7) and [collection items](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-efeda219-66e1-474c-a83b-253d15723bf7).

 * @param {number} threadId - The comment's thread ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Successful Response
 */
  async resolveCommentThread(threadId: number, requestConfig?: Partial<SdkConfig>): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.resolveCommentThreadConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/comments-resolutions/{threadId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'threadId',
        value: threadId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }
}
