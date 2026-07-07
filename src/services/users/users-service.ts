import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  GetAuthenticatedUserOkResponse,
  getAuthenticatedUserOkResponseResponse,
} from './models/get-authenticated-user-ok-response';
import { Common401Error } from '../common/common401-error';
import { Common500Error } from '../common/common500-error';
import {
  TeamUsersInformation,
  teamUsersInformationResponse,
} from './models/team-users-information';
import { Common403Error } from '../common/common403-error';
import { GetTeamUsersParams } from './request-params';
import { UserInformation, userInformationResponse } from './models/user-information';
import { Common400Error } from '../common/common400-error';
import { ErrorTypeTitleDetailStatus } from '../common/error-type-title-detail-status';

/**
 * Service class for UsersService operations.
 * Provides methods to interact with UsersService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class UsersService extends BaseService {
  protected getAuthenticatedUserConfig?: Partial<SdkConfig>;

  protected getTeamUsersConfig?: Partial<SdkConfig>;

  protected getTeamUserConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getAuthenticatedUser.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAuthenticatedUserConfig(config: Partial<SdkConfig>): this {
    this.getAuthenticatedUserConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTeamUsers.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTeamUsersConfig(config: Partial<SdkConfig>): this {
    this.getTeamUsersConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTeamUser.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTeamUserConfig(config: Partial<SdkConfig>): this {
    this.getTeamUserConfig = config;
    return this;
  }

  /**
 * Gets information about the authenticated user.
**Note:**

- This API returns a different response for users with the [Guest and Partner roles](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles).
- The `flow_count` response only returns for users on [Free plans](https://www.postman.com/pricing/).

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetAuthenticatedUserOkResponse>>} - Successful Response
 */
  async getAuthenticatedUser(
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetAuthenticatedUserOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getAuthenticatedUserConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/me')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getAuthenticatedUserOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
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
      .build();
    return this.client.callDirect<GetAuthenticatedUserOkResponse>(request);
  }

  /**
   * Gets information about all users on the [Postman team](https://learning.postman.com/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/).
   * @param {number} [params.groupId] - Filter results by the given [group](https://learning.postman.com/docs/collaborating-in-postman/user-groups/) ID. To get group IDs, use the GET `/groups` endpoint.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<TeamUsersInformation>>} - Successful Response
   */
  async getTeamUsers(
    params?: GetTeamUsersParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<TeamUsersInformation> {
    const resolvedConfig = this.getResolvedConfig(this.getTeamUsersConfig, requestConfig);
    z.object({ groupId: z.number().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/users')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: teamUsersInformationResponse,
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
      .addQueryParam({
        key: 'groupId',
        value: params?.groupId,
      })
      .build();
    return this.client.callDirect<TeamUsersInformation>(request);
  }

  /**
   * Gets information about a user on the Postman team.
   * @param {number} userId - The user's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<UserInformation>>} - Successful Response
   */
  async getTeamUser(userId: number, requestConfig?: Partial<SdkConfig>): Promise<UserInformation> {
    const resolvedConfig = this.getResolvedConfig(this.getTeamUserConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/users/{userId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: userInformationResponse,
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
        key: 'userId',
        value: userId,
      })
      .build();
    return this.client.callDirect<UserInformation>(request);
  }
}
