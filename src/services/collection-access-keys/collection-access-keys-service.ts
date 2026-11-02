import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  CollectionAccessKeys,
  collectionAccessKeysResponse,
} from './models/collection-access-keys';
import { Common400Error } from '../common/common400-error';
import { Common401Error } from '../common/common401-error';
import { Common403Error } from '../common/common403-error';
import { Common500Error } from '../common/common500-error';
import { GetCollectionAccessKeysParams } from './request-params';
import { ErrorTypeTitleDetailStatus } from '../common/error-type-title-detail-status';

/**
 * Service class for CollectionAccessKeysService operations.
 * Provides methods to interact with CollectionAccessKeysService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class CollectionAccessKeysService extends BaseService {
  protected getCollectionAccessKeysConfig?: Partial<SdkConfig>;

  protected deleteCollectionAccessKeyConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getCollectionAccessKeys.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetCollectionAccessKeysConfig(config: Partial<SdkConfig>): this {
    this.getCollectionAccessKeysConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteCollectionAccessKey.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteCollectionAccessKeyConfig(config: Partial<SdkConfig>): this {
    this.deleteCollectionAccessKeyConfig = config;
    return this;
  }

  /**
 * Gets the authenticated user's personal and team [collection access keys](https://learning.postman.com/docs/developer/postman-api/authentication/#generate-a-collection-access-key).
**Note:**

- The `expiresAfter` property in the response represents the date and time at which the access key expires. Collection access keys are valid for 60 days. If unused, the access key expires after 60 days. If someone uses the access key, then its expiration date increases by another 60 days.
- If the collection key is unused, the `lastUsedAt` property in the response returns an empty string.

 * @param {string} [params.collectionId] - Filter the results by a collection's unique ID.
 * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CollectionAccessKeys>>} - Successful Response
 */
  async getCollectionAccessKeys(
    params?: GetCollectionAccessKeysParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CollectionAccessKeys> {
    const resolvedConfig = this.getResolvedConfig(
      this.getCollectionAccessKeysConfig,
      requestConfig,
    );
    z.object({ collectionId: z.string().optional(), cursor: z.string().optional() }).parse(
      params ?? {},
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/collection-access-keys')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: collectionAccessKeysResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Common400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Common403Error,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addQueryParam({
        key: 'collectionId',
        value: params?.collectionId,
      })
      .addQueryParam({
        key: 'cursor',
        value: params?.cursor,
      })
      .build();
    return this.client.callDirect<CollectionAccessKeys>(request);
  }

  /**
 * Deletes a collection access key. To get a collection access key's ID, use the GET `/collection-access-key` endpoint.
On success, this returns an HTTP `204 No Content` response.

 * @param {string} keyId - The collection access key's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - No Content
 */
  async deleteCollectionAccessKey(
    keyId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(
      this.deleteCollectionAccessKeyConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/collection-access-keys/{keyId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Common403Error,
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
        key: 'keyId',
        value: keyId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }
}
