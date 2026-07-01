import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  GetScimGroupResourcesOkResponse,
  getScimGroupResourcesOkResponseResponse,
} from './models/get-scim-group-resources-ok-response';
import { ScimErrorSchemasDetailStatus } from './models/scim-error-schemas-detail-status';
import { GetScimGroupResourcesParams, GetScimUserResourcesParams } from './request-params';
import { CreateScimGroup, createScimGroupRequest } from './models/create-scim-group';
import { ScimGroupCreated, scimGroupCreatedResponse } from './models/scim-group-created';
import { ScimErrorSchemasScimTypeDetailStatus } from './models/scim-error-schemas-scim-type-detail-status';
import {
  GetScimGroupResourceOkResponse,
  getScimGroupResourceOkResponseResponse,
} from './models/get-scim-group-resource-ok-response';
import { UpdateScimGroup, updateScimGroupRequest } from './models/update-scim-group';
import { ScimGroupUpdated, scimGroupUpdatedResponse } from './models/scim-group-updated';
import {
  GetScimResourceTypes,
  getScimResourceTypesResponse,
} from './models/get-scim-resource-types';
import { Common401Error } from '../common/common401-error';
import {
  GetScimServiceProviderConfigOkResponse,
  getScimServiceProviderConfigOkResponseResponse,
} from './models/get-scim-service-provider-config-ok-response';
import { ScimUsers, scimUsersResponse } from './models/scim-users';
import { CreateScimUser, createScimUserRequest } from './models/create-scim-user';
import { ScimUserCreated, scimUserCreatedResponse } from './models/scim-user-created';
import {
  GetScimUserResourceOkResponse,
  getScimUserResourceOkResponseResponse,
} from './models/get-scim-user-resource-ok-response';
import {
  UpdateScimUserRequest,
  updateScimUserRequestRequest,
} from './models/update-scim-user-request';
import { ScimUpdateUser400Error } from './models/scim-update-user400-error';
import {
  UpdateScimUserPatchRequest,
  updateScimUserPatchRequestRequest,
} from './models/update-scim-user-patch-request';

/**
 * Service class for ScimService operations.
 * Provides methods to interact with ScimService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class ScimService extends BaseService {
  protected getScimGroupResourcesConfig?: Partial<SdkConfig>;

  protected createScimGroupConfig?: Partial<SdkConfig>;

  protected getScimGroupResourceConfig?: Partial<SdkConfig>;

  protected scimUpdateGroupConfig?: Partial<SdkConfig>;

  protected deleteScimGroupConfig?: Partial<SdkConfig>;

  protected getScimResourceTypesConfig?: Partial<SdkConfig>;

  protected getScimServiceProviderConfigConfig?: Partial<SdkConfig>;

  protected getScimUserResourcesConfig?: Partial<SdkConfig>;

  protected createScimUserConfig?: Partial<SdkConfig>;

  protected getScimUserResourceConfig?: Partial<SdkConfig>;

  protected updateScimUserConfig?: Partial<SdkConfig>;

  protected updateScimUserPatchConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getScimGroupResources.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetScimGroupResourcesConfig(config: Partial<SdkConfig>): this {
    this.getScimGroupResourcesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createScimGroup.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateScimGroupConfig(config: Partial<SdkConfig>): this {
    this.createScimGroupConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getScimGroupResource.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetScimGroupResourceConfig(config: Partial<SdkConfig>): this {
    this.getScimGroupResourceConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for scimUpdateGroup.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setScimUpdateGroupConfig(config: Partial<SdkConfig>): this {
    this.scimUpdateGroupConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteScimGroup.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteScimGroupConfig(config: Partial<SdkConfig>): this {
    this.deleteScimGroupConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getScimResourceTypes.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetScimResourceTypesConfig(config: Partial<SdkConfig>): this {
    this.getScimResourceTypesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getScimServiceProviderConfig.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetScimServiceProviderConfigConfig(config: Partial<SdkConfig>): this {
    this.getScimServiceProviderConfigConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getScimUserResources.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetScimUserResourcesConfig(config: Partial<SdkConfig>): this {
    this.getScimUserResourcesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createScimUser.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateScimUserConfig(config: Partial<SdkConfig>): this {
    this.createScimUserConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getScimUserResource.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetScimUserResourceConfig(config: Partial<SdkConfig>): this {
    this.getScimUserResourceConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateScimUser.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateScimUserConfig(config: Partial<SdkConfig>): this {
    this.updateScimUserConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateScimUserPatch.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateScimUserPatchConfig(config: Partial<SdkConfig>): this {
    this.updateScimUserPatchConfig = config;
    return this;
  }

  /**
 * Gets information about all Postman team members.
 * @param {number} [params.startIndex] - The index entry by which to begin the list of returned results. Must be a value of `1` or greater.
 * @param {number} [params.count] - Limit the number of results returned in a single response.
 * @param {string} [params.filter] - Filter results by a specific word or phrase. This query parameter only supports the `displayName` filter and has the following requirements:
- Filter values are case-sensitive.
- Special characters and spaces must be URL encoded.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetScimGroupResourcesOkResponse>>} - Successful Response
 */
  async getScimGroupResources(
    params?: GetScimGroupResourcesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetScimGroupResourcesOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getScimGroupResourcesConfig, requestConfig);
    z.object({
      startIndex: z.number().optional(),
      count: z.number().optional(),
      filter: z.string().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/scim/v2/Groups')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getScimGroupResourcesOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 500,
      })
      .addQueryParam({
        key: 'startIndex',
        value: params?.startIndex,
      })
      .addQueryParam({
        key: 'count',
        value: params?.count,
      })
      .addQueryParam({
        key: 'filter',
        value: params?.filter,
      })
      .build();
    return this.client.callDirect<GetScimGroupResourcesOkResponse>(request);
  }

  /**
 * Creates a new user group in Postman and creates a new account for each group member.
Each account is added to your Postman team and authentication is activated for each user. If an existing Postman account uses an email that matches a group member's email ID, an [email invite](https://postman.postman.co/docs/administration/managing-your-team/managing-your-team/#invites) to join your Postman team is sent to that user. Once the user accepts the invite, they'll be added to your team.

By default, the system assigns new users the developer role. You can [update user roles in Postman](https://learning.postman.com/docs/administration/managing-your-team/managing-your-team/#managing-team-roles).

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ScimGroupCreated>>} - Created
 */
  async createScimGroup(
    body: CreateScimGroup,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ScimGroupCreated> {
    const resolvedConfig = this.getResolvedConfig(this.createScimGroupConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/scim/v2/Groups')
      .setRequestSchema(createScimGroupRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: scimGroupCreatedResponse,
        contentType: ContentType.Json,
        status: 201,
      })
      .addError({
        error: ScimErrorSchemasScimTypeDetailStatus,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ScimErrorSchemasScimTypeDetailStatus,
        contentType: ContentType.Json,
        status: 409,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 500,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<ScimGroupCreated>(request);
  }

  /**
   * Gets information about a Postman group within the team.
   * @param {string} groupId - The group's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetScimGroupResourceOkResponse>>} - Successful Response
   */
  async getScimGroupResource(
    groupId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetScimGroupResourceOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getScimGroupResourceConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/scim/v2/Groups/{groupId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getScimGroupResourceOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'groupId',
        value: groupId,
      })
      .build();
    return this.client.callDirect<GetScimGroupResourceOkResponse>(request);
  }

  /**
 * Updates a group's information. Using this endpoint you can:
- Update a group's name.
- Add or remove members from a Postman group.

 * @param {string} groupId - The group's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ScimGroupUpdated>>} - Successful Response
 */
  async scimUpdateGroup(
    groupId: string,
    body: UpdateScimGroup,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ScimGroupUpdated> {
    const resolvedConfig = this.getResolvedConfig(this.scimUpdateGroupConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PATCH')
      .setPath('/scim/v2/Groups/{groupId}')
      .setRequestSchema(updateScimGroupRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: scimGroupUpdatedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ScimErrorSchemasScimTypeDetailStatus,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'groupId',
        value: groupId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<ScimGroupUpdated>(request);
  }

  /**
 * Deletes a group in Postman. On success, this returns an HTTP `204 No Content` response.
User accounts that were in the deleted group are deactivated in Postman if the app is assigned to the user only with the deleted group.

User accounts and the data corresponding to them are not deleted. To permanently delete user accounts and their data, [contact Postman support](https://www.postman.com/support/).

 * @param {string} groupId - The group's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Group Deleted
 */
  async deleteScimGroup(groupId: string, requestConfig?: Partial<SdkConfig>): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.deleteScimGroupConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/scim/v2/Groups/{groupId}')
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
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'groupId',
        value: groupId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
   * Gets all the resource types supported by Postman's SCIM API.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetScimResourceTypes[]>>} - Successful Response
   */
  async getScimResourceTypes(requestConfig?: Partial<SdkConfig>): Promise<GetScimResourceTypes[]> {
    const resolvedConfig = this.getResolvedConfig(this.getScimResourceTypesConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/scim/v2/ResourceTypes')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.array(getScimResourceTypesResponse),
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 500,
      })
      .build();
    return this.client.callDirect<GetScimResourceTypes[]>(request);
  }

  /**
   * Gets the Postman SCIM API configuration information. This includes a list of supported operations.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetScimServiceProviderConfigOkResponse>>} - Successful Response
   */
  async getScimServiceProviderConfig(
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetScimServiceProviderConfigOkResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.getScimServiceProviderConfigConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/scim/v2/ServiceProviderConfig')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getScimServiceProviderConfigOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 500,
      })
      .build();
    return this.client.callDirect<GetScimServiceProviderConfigOkResponse>(request);
  }

  /**
 * Gets information about all Postman team members.
 * @param {number} [params.startIndex] - The index entry by which to begin the list of returned results. Must be a value of `1` or greater.
 * @param {number} [params.count] - Limit the number of results returned in a single response.
 * @param {string} [params.filter] - Filter results by a specific word or phrase. This query parameter accepts the following:
- `userName` — Filter values are case-sensitive, and special characters and spaces must be URL encoded.
- `active` — Return only users who are active (`true`) or inactive (`false`).

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ScimUsers>>} - Successful Response
 */
  async getScimUserResources(
    params?: GetScimUserResourcesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ScimUsers> {
    const resolvedConfig = this.getResolvedConfig(this.getScimUserResourcesConfig, requestConfig);
    z.object({
      startIndex: z.number().optional(),
      count: z.number().optional(),
      filter: z.string().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/scim/v2/Users')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: scimUsersResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 500,
      })
      .addQueryParam({
        key: 'startIndex',
        value: params?.startIndex,
      })
      .addQueryParam({
        key: 'count',
        value: params?.count,
      })
      .addQueryParam({
        key: 'filter',
        value: params?.filter,
      })
      .build();
    return this.client.callDirect<ScimUsers>(request);
  }

  /**
 * Creates a new user account in Postman and adds the user to your organization's Postman team.- If the account does not exist, this also activates the user so they can authenticate in to your Postman team.
- If an account matching the email ID exists, the user receives [email invite](https://learning.postman.com/docs/administration/managing-your-team/manage-team-members/#manage-invites) to join the Postman team. The user joins the team when they accept the invite.
- If the user's email domain matches your team's verified domains, the user is immediately added to the team.

By default, the system assigns new users the developer role. You can [update user roles in Postman](https://learning.postman.com/docs/administration/managing-your-team/manage-team-members/#manage-team-roles).

**Note:**

- Users must join the team before you can assign them to any groups.
- If the user is a member of a different team during SCIM provisioning and their email domain is **not** verified with your Postman team, then the user is **not** provisioned. The endpoint returns an HTTP `409 Conflict` response.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ScimUserCreated>>} - Created
 */
  async createScimUser(
    body: CreateScimUser,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ScimUserCreated> {
    const resolvedConfig = this.getResolvedConfig(this.createScimUserConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/scim/v2/Users')
      .setRequestSchema(createScimUserRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: scimUserCreatedResponse,
        contentType: ContentType.Json,
        status: 201,
      })
      .addError({
        error: ScimErrorSchemasScimTypeDetailStatus,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ScimErrorSchemasScimTypeDetailStatus,
        contentType: ContentType.Json,
        status: 409,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 500,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<ScimUserCreated>(request);
  }

  /**
   * Gets information about a Postman team member.
   * @param {string} userId - The user's SCIM ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetScimUserResourceOkResponse>>} - Successful Response
   */
  async getScimUserResource(
    userId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetScimUserResourceOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getScimUserResourceConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/scim/v2/Users/{userId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getScimUserResourceOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'userId',
        value: userId,
      })
      .build();
    return this.client.callDirect<GetScimUserResourceOkResponse>(request);
  }

  /**
 * Updates a user in Postman.
**Reactivating a user**

By setting the `active` property from `false` to `true`, this reactivates an account. This allows the account to authenticate in to Postman and adds the account back on to your Postman team.

 * @param {string} userId - The user's SCIM ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetScimUserResourceOkResponse>>} - Successful Response
 */
  async updateScimUser(
    userId: string,
    body: UpdateScimUserRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetScimUserResourceOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.updateScimUserConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/scim/v2/Users/{userId}')
      .setRequestSchema(updateScimUserRequestRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getScimUserResourceOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ScimUpdateUser400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'userId',
        value: userId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<GetScimUserResourceOkResponse>(request);
  }

  /**
 * Updates a user in Postman.
**Reactivating a user**

By setting the `active` property from `false` to `true`, this reactivates an account. This allows the account to authenticate in to Postman and adds the account back on to your Postman team.

 * @param {string} userId - The user's SCIM ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetScimUserResourceOkResponse>>} - Successful Response
 */
  async updateScimUserPatch(
    userId: string,
    body: UpdateScimUserPatchRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetScimUserResourceOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.updateScimUserPatchConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PATCH')
      .setPath('/scim/v2/Users/{userId}')
      .setRequestSchema(updateScimUserPatchRequestRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getScimUserResourceOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ScimUpdateUser400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ScimErrorSchemasDetailStatus,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'userId',
        value: userId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<GetScimUserResourceOkResponse>(request);
  }
}
