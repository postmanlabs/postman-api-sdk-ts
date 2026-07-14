import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  PostmanGroupsInformation,
  postmanGroupsInformationResponse,
} from './models/postman-groups-information';
import { Common401Error } from '../common/common401-error';
import { Common403Error } from '../common/common403-error';
import { Common500Error } from '../common/common500-error';
import {
  PostmanGroupInformation,
  postmanGroupInformationResponse,
} from './models/postman-group-information';
import { Common400Error } from '../common/common400-error';
import { ErrorTypeTitleDetailStatus } from '../common/error-type-title-detail-status';

/**
 * Service class for GroupsService operations.
 * Provides methods to interact with GroupsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class GroupsService extends BaseService {
  protected getGroupsConfig?: Partial<SdkConfig>;

  protected getGroupConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getGroups.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetGroupsConfig(config: Partial<SdkConfig>): this {
    this.getGroupsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getGroup.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetGroupConfig(config: Partial<SdkConfig>): this {
    this.getGroupConfig = config;
    return this;
  }

  /**
   * Gets all of a team's Postman [groups](https://learning.postman.com/docs/collaborating-in-postman/user-groups/).
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<PostmanGroupsInformation>>} - Successful Response
   */
  async getGroups(requestConfig?: Partial<SdkConfig>): Promise<PostmanGroupsInformation> {
    const resolvedConfig = this.getResolvedConfig(this.getGroupsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/groups')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: postmanGroupsInformationResponse,
        contentType: ContentType.Json,
        status: 200,
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
      .build();
    return this.client.callDirect<PostmanGroupsInformation>(request);
  }

  /**
   * Gets information about a Postman [user group](https://learning.postman.com/docs/collaborating-in-postman/user-groups/).
   * @param {number} groupId - The group's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<PostmanGroupInformation>>} - Successful Response
   */
  async getGroup(
    groupId: number,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PostmanGroupInformation> {
    const resolvedConfig = this.getResolvedConfig(this.getGroupConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/groups/{groupId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: postmanGroupInformationResponse,
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
        key: 'groupId',
        value: groupId,
      })
      .build();
    return this.client.callDirect<PostmanGroupInformation>(request);
  }
}
