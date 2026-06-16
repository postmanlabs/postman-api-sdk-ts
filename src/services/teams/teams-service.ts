import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GetTeams, getTeamsResponse } from './models/get-teams';
import { Teams400Error } from './models/teams400-error';
import { ErrorTypeTitleDetailStatusInstance } from '../common/error-type-title-detail-status-instance';
import { TeamsApiErrorSchema } from './models/teams-api-error-schema';
import {
  ApproveDenyAccessRequestParams,
  CreateAccessRequestParams,
  CreateTeamParams,
  GetTeamAccessRequestsParams,
  GetTeamParams,
  GetTeamsParams,
  ManageTeamMemberRolesParams,
  RemoveTeamMembersParams,
} from './request-params';
import { CreateTeam, createTeamRequest } from './models/create-team';
import {
  CreateGetTeamResponse,
  createGetTeamResponseResponse,
} from './models/create-get-team-response';
import {
  GetTeamAccessRequests,
  getTeamAccessRequestsResponse,
} from './models/get-team-access-requests';
import { CreateAccessRequest, createAccessRequestRequest } from './models/create-access-request';
import {
  CreateAccessRequestResponse,
  createAccessRequestResponseResponse,
} from './models/create-access-request-response';
import {
  ApproveDenyAccessRequest,
  approveDenyAccessRequestRequest,
} from './models/approve-deny-access-request';
import {
  ApproveDenyAccessRequestResponse,
  approveDenyAccessRequestResponseResponse,
} from './models/approve-deny-access-request-response';
import {
  ManageTeamMemberRoles,
  manageTeamMemberRolesRequest,
} from './models/manage-team-member-roles';
import {
  ManageTeamMemberRolesResponse,
  manageTeamMemberRolesResponseResponse,
} from './models/manage-team-member-roles-response';
import { RemoveTeamMembers, removeTeamMembersRequest } from './models/remove-team-members';
import {
  CreateGetTeamSettingsResponse,
  createGetTeamSettingsResponseResponse,
} from './models/create-get-team-settings-response';
import { UpdateTeamSettings, updateTeamSettingsRequest } from './models/update-team-settings';

/**
 * Service class for TeamsService operations.
 * Provides methods to interact with TeamsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class TeamsService extends BaseService {
  protected getTeamsConfig?: Partial<SdkConfig>;

  protected createTeamConfig?: Partial<SdkConfig>;

  protected getTeamConfig?: Partial<SdkConfig>;

  protected getTeamAccessRequestsConfig?: Partial<SdkConfig>;

  protected createAccessRequestConfig?: Partial<SdkConfig>;

  protected approveDenyAccessRequestConfig?: Partial<SdkConfig>;

  protected manageTeamMemberRolesConfig?: Partial<SdkConfig>;

  protected removeTeamMembersConfig?: Partial<SdkConfig>;

  protected getTeamSettingsConfig?: Partial<SdkConfig>;

  protected updateTeamSettingsConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getTeams.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTeamsConfig(config: Partial<SdkConfig>): this {
    this.getTeamsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createTeam.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateTeamConfig(config: Partial<SdkConfig>): this {
    this.createTeamConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTeam.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTeamConfig(config: Partial<SdkConfig>): this {
    this.getTeamConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTeamAccessRequests.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTeamAccessRequestsConfig(config: Partial<SdkConfig>): this {
    this.getTeamAccessRequestsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createAccessRequest.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateAccessRequestConfig(config: Partial<SdkConfig>): this {
    this.createAccessRequestConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for approveDenyAccessRequest.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setApproveDenyAccessRequestConfig(config: Partial<SdkConfig>): this {
    this.approveDenyAccessRequestConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for manageTeamMemberRoles.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setManageTeamMemberRolesConfig(config: Partial<SdkConfig>): this {
    this.manageTeamMemberRolesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for removeTeamMembers.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRemoveTeamMembersConfig(config: Partial<SdkConfig>): this {
    this.removeTeamMembersConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTeamSettings.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTeamSettingsConfig(config: Partial<SdkConfig>): this {
    this.getTeamSettingsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateTeamSettings.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateTeamSettingsConfig(config: Partial<SdkConfig>): this {
    this.updateTeamSettingsConfig = config;
    return this;
  }

  /**
   * Gets all Postman teams in your organization.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {number} [params.limit] - The maximum number of rows to return in the response.
   * @param {boolean} [params.settings] - If true, returns team settings in the response.
   * @param {boolean} [params.userRoles] - If true, returns the team's assigned user roles in the response.
   * @param {string} [params.identifierType] - Use SCIM user and group IDs instead of Postman user IDs.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetTeams>>} - Successful Response
   */
  async getTeams(params?: GetTeamsParams, requestConfig?: Partial<SdkConfig>): Promise<GetTeams> {
    const resolvedConfig = this.getResolvedConfig(this.getTeamsConfig, requestConfig);
    z.object({
      cursor: z.string().optional(),
      limit: z.number().optional(),
      settings: z.boolean().optional(),
      userRoles: z.boolean().optional(),
      identifierType: z.string().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/teams')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getTeamsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Teams400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: TeamsApiErrorSchema,
        contentType: ContentType.Json,
        status: 500,
      })
      .addQueryParam({
        key: 'cursor',
        value: params?.cursor,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .addQueryParam({
        key: 'settings',
        value: params?.settings,
      })
      .addQueryParam({
        key: 'userRoles',
        value: params?.userRoles,
      })
      .addHeaderParam({
        key: 'identifierType',
        value: params?.identifierType,
      })
      .build();
    return this.client.callDirect<GetTeams>(request);
  }

  /**
   * [Creates](https://learning.postman.com/docs/administration/managing-your-team/create-teams/) a Postman team in your organization.
   * @param {string} [params.identifierType] - Use SCIM user and group IDs instead of Postman user IDs.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CreateGetTeamResponse>>} - Successful Response
   */
  async createTeam(
    body: CreateTeam,
    params?: CreateTeamParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreateGetTeamResponse> {
    const resolvedConfig = this.getResolvedConfig(this.createTeamConfig, requestConfig);
    z.object({ identifierType: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/teams')
      .setRequestSchema(createTeamRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createGetTeamResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Teams400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: TeamsApiErrorSchema,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: TeamsApiErrorSchema,
        contentType: ContentType.Json,
        status: 500,
      })
      .addHeaderParam({
        key: 'identifierType',
        value: params?.identifierType,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CreateGetTeamResponse>(request);
  }

  /**
 * Gets information about a Postman team.
 * @param {number} teamId - The team's ID.
 * @param {TeamsInclude} [params.include] - Include additional information in the request's response:
- `members` — Include all users and groups, including groups that represent other teams or the entire organization, with access to the team's entities. This includes team managers, members, and persons invited to collaborate as guests.
- `userRoles` — Include all the team's user roles in the response.

 * @param {string} [params.identifierType] - Use SCIM user and group IDs instead of Postman user IDs.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CreateGetTeamResponse>>} - Successful Response
 */
  async getTeam(
    teamId: number,
    params?: GetTeamParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreateGetTeamResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getTeamConfig, requestConfig);
    z.object({ include: z.unknown().optional(), identifierType: z.string().optional() }).parse(
      params ?? {},
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/teams/{teamId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createGetTeamResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Teams400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: TeamsApiErrorSchema,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'teamId',
        value: teamId,
      })
      .addQueryParam({
        key: 'include',
        value: params?.include,
      })
      .addHeaderParam({
        key: 'identifierType',
        value: params?.identifierType,
      })
      .build();
    return this.client.callDirect<CreateGetTeamResponse>(request);
  }

  /**
   * Gets a team's pending access requests.
   * @param {number} teamId - The team's ID.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {number} [params.limit] - The maximum number of rows to return in the response.
   * @param {string} [params.identifierType] - Use SCIM user and group IDs instead of Postman user IDs.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetTeamAccessRequests>>} - Successful Response
   */
  async getTeamAccessRequests(
    teamId: number,
    params?: GetTeamAccessRequestsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetTeamAccessRequests> {
    const resolvedConfig = this.getResolvedConfig(this.getTeamAccessRequestsConfig, requestConfig);
    z.object({
      cursor: z.string().optional(),
      limit: z.number().optional(),
      identifierType: z.string().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/teams/{teamId}/access-requests')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getTeamAccessRequestsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Teams400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: TeamsApiErrorSchema,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: TeamsApiErrorSchema,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'teamId',
        value: teamId,
      })
      .addQueryParam({
        key: 'cursor',
        value: params?.cursor,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .addHeaderParam({
        key: 'identifierType',
        value: params?.identifierType,
      })
      .build();
    return this.client.callDirect<GetTeamAccessRequests>(request);
  }

  /**
 * Creates an access request for a team. Access requests include actions such as request to join a team, upgrading a user's role, adding members, and requesting team role access to another team.
**Note:**

If a team discovery is enabled, the team's access request is automatically approved.

 * @param {number} teamId - The team's ID.
 * @param {string} [params.identifierType] - Use SCIM user and group IDs instead of Postman user IDs.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CreateAccessRequestResponse>>} - Successful Response
 */
  async createAccessRequest(
    teamId: number,
    body: CreateAccessRequest,
    params?: CreateAccessRequestParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreateAccessRequestResponse> {
    const resolvedConfig = this.getResolvedConfig(this.createAccessRequestConfig, requestConfig);
    z.object({ identifierType: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/teams/{teamId}/access-requests')
      .setRequestSchema(createAccessRequestRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createAccessRequestResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Teams400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: TeamsApiErrorSchema,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'teamId',
        value: teamId,
      })
      .addHeaderParam({
        key: 'identifierType',
        value: params?.identifierType,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CreateAccessRequestResponse>(request);
  }

  /**
   * Approve or deny a team's access request.
   * @param {number} teamId - The team's ID.
   * @param {number} requestId - The access request's ID.
   * @param {string} [params.identifierType] - Use SCIM user and group IDs instead of Postman user IDs.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ApproveDenyAccessRequestResponse>>} - Successful Response
   */
  async approveDenyAccessRequest(
    teamId: number,
    requestId: number,
    body: ApproveDenyAccessRequest,
    params?: ApproveDenyAccessRequestParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ApproveDenyAccessRequestResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.approveDenyAccessRequestConfig,
      requestConfig,
    );
    z.object({ identifierType: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/teams/{teamId}/access-requests/{requestId}')
      .setRequestSchema(approveDenyAccessRequestRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: approveDenyAccessRequestResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Teams400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: TeamsApiErrorSchema,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: TeamsApiErrorSchema,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: TeamsApiErrorSchema,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'teamId',
        value: teamId,
      })
      .addPathParam({
        key: 'requestId',
        value: requestId,
      })
      .addHeaderParam({
        key: 'identifierType',
        value: params?.identifierType,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<ApproveDenyAccessRequestResponse>(request);
  }

  /**
 * Adds or removes member roles in groups, teams, organizations, as well as individual users' roles.
**Note:**

If you remove a role from a group or team, then all members lose the that role's permissions.

 * @param {number} teamId - The team's ID.
 * @param {string} [params.identifierType] - Use SCIM user and group IDs instead of Postman user IDs.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ManageTeamMemberRolesResponse>>} - Successful Response
 */
  async manageTeamMemberRoles(
    teamId: number,
    body: ManageTeamMemberRoles,
    params?: ManageTeamMemberRolesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ManageTeamMemberRolesResponse> {
    const resolvedConfig = this.getResolvedConfig(this.manageTeamMemberRolesConfig, requestConfig);
    z.object({ identifierType: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/teams/{teamId}/bulk-members')
      .setRequestSchema(manageTeamMemberRolesRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: manageTeamMemberRolesResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Teams400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: TeamsApiErrorSchema,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'teamId',
        value: teamId,
      })
      .addHeaderParam({
        key: 'identifierType',
        value: params?.identifierType,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<ManageTeamMemberRolesResponse>(request);
  }

  /**
   * Removes entities, such as users or organizations, from your Postman team. On success, this returns an HTTP `204 No Content` response.
   * @param {number} teamId - The team's ID.
   * @param {string} [params.identifierType] - Use SCIM user and group IDs instead of Postman user IDs.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - Remove Team Member
   */
  async removeTeamMembers(
    teamId: number,
    body: RemoveTeamMembers,
    params?: RemoveTeamMembersParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.removeTeamMembersConfig, requestConfig);
    z.object({ identifierType: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/teams/{teamId}/bulk-members')
      .setRequestSchema(removeTeamMembersRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
      })
      .addError({
        error: Teams400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: TeamsApiErrorSchema,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: TeamsApiErrorSchema,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'teamId',
        value: teamId,
      })
      .addHeaderParam({
        key: 'identifierType',
        value: params?.identifierType,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
   * Gets a team's settings.
   * @param {number} teamId - The team's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CreateGetTeamSettingsResponse>>} - Successful Response
   */
  async getTeamSettings(
    teamId: number,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreateGetTeamSettingsResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getTeamSettingsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/teams/{teamId}/settings')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createGetTeamSettingsResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Teams400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: TeamsApiErrorSchema,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'teamId',
        value: teamId,
      })
      .build();
    return this.client.callDirect<CreateGetTeamSettingsResponse>(request);
  }

  /**
   * Updates a team's settings.
   * @param {number} teamId - The team's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CreateGetTeamSettingsResponse>>} - Successful Response
   */
  async updateTeamSettings(
    teamId: number,
    body: UpdateTeamSettings,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreateGetTeamSettingsResponse> {
    const resolvedConfig = this.getResolvedConfig(this.updateTeamSettingsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/teams/{teamId}/settings')
      .setRequestSchema(updateTeamSettingsRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createGetTeamSettingsResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Teams400Error,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: TeamsApiErrorSchema,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'teamId',
        value: teamId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CreateGetTeamSettingsResponse>(request);
  }
}
