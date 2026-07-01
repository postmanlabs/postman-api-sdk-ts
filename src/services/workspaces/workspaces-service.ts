import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  ManagePartnerWorkspaceInvites,
  managePartnerWorkspaceInvitesRequest,
} from './models/manage-partner-workspace-invites';
import {
  ManagePartnerWorkspaceInvitesResponse,
  managePartnerWorkspaceInvitesResponseResponse,
} from './models/manage-partner-workspace-invites-response';
import { ErrorTypeTitleDetailStatus } from '../common/error-type-title-detail-status';
import { Common500Error } from '../common/common500-error';
import {
  GetWorkspacesOkResponse,
  getWorkspacesOkResponseResponse,
} from './models/get-workspaces-ok-response';
import { Workspaces400Error } from './models/workspaces400-error';
import { Common401Error } from '../common/common401-error';
import {
  GetWorkspaceActivityFeedParams,
  GetWorkspaceParams,
  GetWorkspaceRolesParams,
  GetWorkspaceUpdatesParams,
  GetWorkspacesParams,
  UpdateWorkspaceRolesParams,
} from './request-params';
import { CreateWorkspace, createWorkspaceRequest } from './models/create-workspace';
import {
  CreateWorkspaceOkResponse,
  createWorkspaceOkResponseResponse,
} from './models/create-workspace-ok-response';
import { GetAuditLogEventActionsClientErrorResponse } from '../common/get-audit-log-event-actions-client-error-response';
import { Forbidden } from './models/forbidden';
import {
  GetAllWorkspaceRolesOkResponse,
  getAllWorkspaceRolesOkResponseResponse,
} from './models/get-all-workspace-roles-ok-response';
import { Common403Error } from '../common/common403-error';
import {
  GetWorkspaceOkResponse,
  getWorkspaceOkResponseResponse,
} from './models/get-workspace-ok-response';
import { GetWorkspaceNotFoundResponse } from './models/get-workspace-not-found-response';
import {
  UpdateWorkspaceRequest,
  updateWorkspaceRequestRequest,
} from './models/update-workspace-request';
import { WorkspaceUpdated, workspaceUpdatedResponse } from './models/workspace-updated';
import { WorkspaceDeleted, workspaceDeletedResponse } from './models/workspace-deleted';
import {
  WorkspaceActivityFeed,
  workspaceActivityFeedResponse,
} from './models/workspace-activity-feed';
import {
  TransferWorkspaceElement,
  transferWorkspaceElementRequest,
} from './models/transfer-workspace-element';
import {
  TransferWorkspaceElementResponse,
  transferWorkspaceElementResponseResponse,
} from './models/transfer-workspace-element-response';
import {
  GetWorkspaceGlobalVariablesOkResponse,
  getWorkspaceGlobalVariablesOkResponseResponse,
} from './models/get-workspace-global-variables-ok-response';
import { CreateApiClientErrorResponse } from '../common/create-api-client-error-response';
import {
  UpdateGlobalVariables,
  updateGlobalVariablesRequest,
} from './models/update-global-variables';
import {
  GlobalVariablesUpdated,
  globalVariablesUpdatedResponse,
} from './models/global-variables-updated';
import { WorkspaceRoles, workspaceRolesResponse } from './models/workspace-roles';
import { UpdateWorkspaceRoles, updateWorkspaceRolesRequest } from './models/update-workspace-roles';
import {
  WorkspaceRolesUpdated,
  workspaceRolesUpdatedResponse,
} from './models/workspace-roles-updated';
import { PartnerAndPersonalWorkspaceRolesUnsupported } from './models/partner-and-personal-workspace-roles-unsupported';
import {
  TransferWorkspaceToTeam,
  transferWorkspaceToTeamRequest,
} from './models/transfer-workspace-to-team';
import {
  TransferWorkspaceToTeamResponse,
  transferWorkspaceToTeamResponseResponse,
} from './models/transfer-workspace-to-team-response';
import { GetWorkspaceUpdates, getWorkspaceUpdatesResponse } from './models/get-workspace-updates';
import { ErrorTypeTitleDetailStatusInstance } from '../common/error-type-title-detail-status-instance';
import {
  CreateWorkspaceUpdate,
  createWorkspaceUpdateRequest,
} from './models/create-workspace-update';
import {
  WorkspaceUpdatePostPatchResponseData,
  workspaceUpdatePostPatchResponseDataResponse,
} from './models/workspace-update-post-patch-response-data';
import { WorkspaceUpdateData, workspaceUpdateDataResponse } from './models/workspace-update-data';
import {
  UpdateWorkspaceUpdate,
  updateWorkspaceUpdateRequest,
} from './models/update-workspace-update';

/**
 * Service class for WorkspacesService operations.
 * Provides methods to interact with WorkspacesService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class WorkspacesService extends BaseService {
  protected managePartnerWorkspaceInvitesConfig?: Partial<SdkConfig>;

  protected getWorkspacesConfig?: Partial<SdkConfig>;

  protected createWorkspaceConfig?: Partial<SdkConfig>;

  protected getAllWorkspaceRolesConfig?: Partial<SdkConfig>;

  protected getWorkspaceConfig?: Partial<SdkConfig>;

  protected updateWorkspaceConfig?: Partial<SdkConfig>;

  protected deleteWorkspaceConfig?: Partial<SdkConfig>;

  protected getWorkspaceActivityFeedConfig?: Partial<SdkConfig>;

  protected transferWorkspaceElementConfig?: Partial<SdkConfig>;

  protected getWorkspaceGlobalVariablesConfig?: Partial<SdkConfig>;

  protected updateWorkspaceGlobalVariablesConfig?: Partial<SdkConfig>;

  protected getWorkspaceRolesConfig?: Partial<SdkConfig>;

  protected updateWorkspaceRolesConfig?: Partial<SdkConfig>;

  protected transferWorkspaceToTeamConfig?: Partial<SdkConfig>;

  protected getWorkspaceUpdatesConfig?: Partial<SdkConfig>;

  protected createWorkspaceUpdateConfig?: Partial<SdkConfig>;

  protected getWorkspaceUpdateConfig?: Partial<SdkConfig>;

  protected patchWorkspaceUpdateConfig?: Partial<SdkConfig>;

  protected deleteWorkspaceUpdateConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for managePartnerWorkspaceInvites.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setManagePartnerWorkspaceInvitesConfig(config: Partial<SdkConfig>): this {
    this.managePartnerWorkspaceInvitesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getWorkspaces.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetWorkspacesConfig(config: Partial<SdkConfig>): this {
    this.getWorkspacesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createWorkspace.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateWorkspaceConfig(config: Partial<SdkConfig>): this {
    this.createWorkspaceConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getAllWorkspaceRoles.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAllWorkspaceRolesConfig(config: Partial<SdkConfig>): this {
    this.getAllWorkspaceRolesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getWorkspace.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetWorkspaceConfig(config: Partial<SdkConfig>): this {
    this.getWorkspaceConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateWorkspace.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateWorkspaceConfig(config: Partial<SdkConfig>): this {
    this.updateWorkspaceConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteWorkspace.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteWorkspaceConfig(config: Partial<SdkConfig>): this {
    this.deleteWorkspaceConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getWorkspaceActivityFeed.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetWorkspaceActivityFeedConfig(config: Partial<SdkConfig>): this {
    this.getWorkspaceActivityFeedConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for transferWorkspaceElement.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setTransferWorkspaceElementConfig(config: Partial<SdkConfig>): this {
    this.transferWorkspaceElementConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getWorkspaceGlobalVariables.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetWorkspaceGlobalVariablesConfig(config: Partial<SdkConfig>): this {
    this.getWorkspaceGlobalVariablesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateWorkspaceGlobalVariables.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateWorkspaceGlobalVariablesConfig(config: Partial<SdkConfig>): this {
    this.updateWorkspaceGlobalVariablesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getWorkspaceRoles.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetWorkspaceRolesConfig(config: Partial<SdkConfig>): this {
    this.getWorkspaceRolesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateWorkspaceRoles.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateWorkspaceRolesConfig(config: Partial<SdkConfig>): this {
    this.updateWorkspaceRolesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for transferWorkspaceToTeam.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setTransferWorkspaceToTeamConfig(config: Partial<SdkConfig>): this {
    this.transferWorkspaceToTeamConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getWorkspaceUpdates.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetWorkspaceUpdatesConfig(config: Partial<SdkConfig>): this {
    this.getWorkspaceUpdatesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createWorkspaceUpdate.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateWorkspaceUpdateConfig(config: Partial<SdkConfig>): this {
    this.createWorkspaceUpdateConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getWorkspaceUpdate.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetWorkspaceUpdateConfig(config: Partial<SdkConfig>): this {
    this.getWorkspaceUpdateConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for patchWorkspaceUpdate.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPatchWorkspaceUpdateConfig(config: Partial<SdkConfig>): this {
    this.patchWorkspaceUpdateConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteWorkspaceUpdate.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteWorkspaceUpdateConfig(config: Partial<SdkConfig>): this {
    this.deleteWorkspaceUpdateConfig = config;
    return this;
  }

  /**
 * Manages invitations and access to your team's [Partner Workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/manage/). You can use this endpoint to:
- Send Partner Workspace invitations to the given email addresses. Users who already exist in the partnership are added directly, while new users receive an invitation email.
- Remove partners from a workspace.
- Remove partners from a partnership and all of its workspaces.

**Note:**

- Partner Workspaces are available on the Postman **Team** and **Enterprise** [plans](https://www.postman.com/pricing/).
- This endpoint requires the following [roles](https://learning.postman.com/docs/administration/roles-and-permissions/), based on your plan:
  - **Team** — Requires the **Workspace Editor** role to invite or remove partners from workspaces. The **Admin** role is required for removing partners from all workspaces.
  - **Enterprise** — The **Partner Manager** role can perform all operations. The **Workspace Editor** role and **Admin** roles have the same permissions on this plan as they do on the Team plan. It's recommended to use the **Partner Manager** role if you're on an **Enterprise** plan.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ManagePartnerWorkspaceInvitesResponse>>} - Successful Response
 */
  async managePartnerWorkspaceInvites(
    body: ManagePartnerWorkspaceInvites,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ManagePartnerWorkspaceInvitesResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.managePartnerWorkspaceInvitesConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/invitations')
      .setRequestSchema(managePartnerWorkspaceInvitesRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: managePartnerWorkspaceInvitesResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
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
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<ManagePartnerWorkspaceInvitesResponse>(request);
  }

  /**
 * Gets all [workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/creating-workspaces/). The response includes your workspaces and any workspaces that you have access to.
**Note:**

This endpoint's response contains the visibility field. Visibility determines who can access the workspace:
- `personal` — Only you can access the workspace.
- `team` — All team members can access the workspace.
- `private` — Only invited team members can access the workspace ([**Team** and **Enterprise** plans only](https://www.postman.com/pricing)).
- `public` — Everyone can access the workspace.
- `partner` — Only invited team members and [partners](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access the workspace ([**Team** and **Enterprise** plans only](https://www.postman.com/pricing)).

 * @param {WorkspaceTypeQuery} [params.type] - The type of workspace to filter the response by.
 * @param {number} [params.createdBy] - Return only workspaces created by a specific user ID. For multiple users, pass this value as a comma-separated list of user IDs. The response only returns workspaces that you have access to.
 * @param {WorkspaceIncludeQuery} [params.include] - Include the following information in the endpoint's response:
- `mocks:deactivated` — Include all deactivated mock servers in the response.
- `scim` — Return the SCIM user IDs of the workspace creator and who last modified it.

 * @param {WorkspaceElementTypeQuery} [params.elementType] - Filter results to return the workspace where the given element type is located. If you pass this query parameter, you must also pass the `elementId` query parameter.
 * @param {string} [params.elementId] - Filter results to return the workspace where the given element's ID is located. When filtering by collection, you must use the collection's unique ID (`userId`-`collection`). If you pass this query parameter, you must also pass the `elementType` query parameter.
 * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
 * @param {number} [params.limit] - The maximum number of rows to return in the response, up to a maximum value of 100. Any value greater than 100 returns a 400 Bad Request response.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetWorkspacesOkResponse>>} - Successful Response
 */
  async getWorkspaces(
    params?: GetWorkspacesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetWorkspacesOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getWorkspacesConfig, requestConfig);
    z.object({
      type: z.unknown().optional(),
      createdBy: z.number().optional(),
      include: z.unknown().optional(),
      elementType: z.unknown().optional(),
      elementId: z.string().optional(),
      cursor: z.string().optional(),
      limit: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/workspaces')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getWorkspacesOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Workspaces400Error,
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
        key: 'type',
        value: params?.type,
      })
      .addQueryParam({
        key: 'createdBy',
        value: params?.createdBy,
      })
      .addQueryParam({
        key: 'include',
        value: params?.include,
      })
      .addQueryParam({
        key: 'elementType',
        value: params?.elementType,
      })
      .addQueryParam({
        key: 'elementId',
        value: params?.elementId,
      })
      .addQueryParam({
        key: 'cursor',
        value: params?.cursor,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .build();
    return this.client.callDirect<GetWorkspacesOkResponse>(request);
  }

  /**
 * Creates a new [workspace](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/creating-workspaces/).
**Note:**

- This endpoint returns a 403 `Forbidden` response if the user does not have permission to create workspaces. [Admins and Super Admins](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can configure workspace permissions to restrict users and/or user groups from creating workspaces or require approvals for the creation of team workspaces.
- Private and [Partner Workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) are available on Postman [**Team** and **Enterprise** plans](https://www.postman.com/pricing).
- There are rate limits when publishing public workspaces.
- Public team workspace names must be unique.
- The `teamId` property must be passed in the request body if [Postman Organizations](https://learning.postman.com/docs/administration/onboarding-checklist) is enabled.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CreateWorkspaceOkResponse>>} - Successful Response
 */
  async createWorkspace(
    body: CreateWorkspace,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CreateWorkspaceOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.createWorkspaceConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/workspaces')
      .setRequestSchema(createWorkspaceRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: createWorkspaceOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: GetAuditLogEventActionsClientErrorResponse,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Forbidden,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<CreateWorkspaceOkResponse>(request);
  }

  /**
   * Gets information about all roles in a workspace, based on the team's [plan](https://www.postman.com/pricing/).
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetAllWorkspaceRolesOkResponse>>} - Successful Response
   */
  async getAllWorkspaceRoles(
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetAllWorkspaceRolesOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getAllWorkspaceRolesConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/workspaces-roles')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getAllWorkspaceRolesOkResponseResponse,
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
    return this.client.callDirect<GetAllWorkspaceRolesOkResponse>(request);
  }

  /**
 * Gets information about a workspace.
**Note:**

This endpoint's response contains the `visibility` field. [Visibility](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) determines who can access the workspace:
- `personal` — Only you can access the workspace.
- `team` — All team members can access the workspace.
- `private` — Only invited team members can access the workspace ([**Team** and **Enterprise** plans only](https://www.postman.com/pricing)).
- `public` — Everyone can access the workspace.
- `partner` — Only invited team members and [partners](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access the workspace ([**Team** and **Enterprise** plans only](https://www.postman.com/pricing)).

 * @param {string} workspaceId - The workspace's ID.
 * @param {WorkspaceIncludeQuery} [params.include] - Include the following information in the endpoint's response:
- `mocks:deactivated` — Include all deactivated mock servers in the response.
- `scim` — Return the SCIM user IDs of the workspace creator and who last modified it.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<GetWorkspaceOkResponse>>} - Successful Response
 */
  async getWorkspace(
    workspaceId: string,
    params?: GetWorkspaceParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetWorkspaceOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getWorkspaceConfig, requestConfig);
    z.object({ include: z.unknown().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/workspaces/{workspaceId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getWorkspaceOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: GetWorkspaceNotFoundResponse,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'workspaceId',
        value: workspaceId,
      })
      .addQueryParam({
        key: 'include',
        value: params?.include,
      })
      .build();
    return this.client.callDirect<GetWorkspaceOkResponse>(request);
  }

  /**
 * Updates a workspace's property, such as its name or visibility.
**Note:**

- This endpoint does not support the following visibility changes:
  - `private` to `public`, `public` to `private`, and `private` to `personal` for **Free** and **Solo** [plans](https://www.postman.com/pricing/).
  - `public` to `personal` for team users only.
- There are rate limits when publishing public workspaces.
- Public team workspace names must be unique.

 * @param {string} workspaceId - The workspace's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<WorkspaceUpdated>>} - Successful Response
 */
  async updateWorkspace(
    workspaceId: string,
    body: UpdateWorkspaceRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<WorkspaceUpdated> {
    const resolvedConfig = this.getResolvedConfig(this.updateWorkspaceConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/workspaces/{workspaceId}')
      .setRequestSchema(updateWorkspaceRequestRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: workspaceUpdatedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: GetAuditLogEventActionsClientErrorResponse,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: GetAuditLogEventActionsClientErrorResponse,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: GetAuditLogEventActionsClientErrorResponse,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'workspaceId',
        value: workspaceId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<WorkspaceUpdated>(request);
  }

  /**
   * Deletes an existing workspace.
   * @param {string} workspaceId - The workspace's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<WorkspaceDeleted>>} - Successful Response
   */
  async deleteWorkspace(
    workspaceId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<WorkspaceDeleted> {
    const resolvedConfig = this.getResolvedConfig(this.deleteWorkspaceConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/workspaces/{workspaceId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: workspaceDeletedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: GetAuditLogEventActionsClientErrorResponse,
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
      .addPathParam({
        key: 'workspaceId',
        value: workspaceId,
      })
      .build();
    return this.client.callDirect<WorkspaceDeleted>(request);
  }

  /**
   * Gets a workspace's [activity feed](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/#view-workspace-activity). Activity feeds return information about who added or removed collections, environments, or elements from a workspace, and users that join or leave a workspace.
   * @param {string} workspaceId - The workspace's ID.
   * @param {number} [params.userId] - Filter results by the given user ID.
   * @param {ElementType2} [params.elementType] - A comma-separated list of elements to filter the results by.
   * @param {number} [params.limit] - The maximum number of rows to return in the response.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<WorkspaceActivityFeed>>} - Successful Response
   */
  async getWorkspaceActivityFeed(
    workspaceId: string,
    params?: GetWorkspaceActivityFeedParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<WorkspaceActivityFeed> {
    const resolvedConfig = this.getResolvedConfig(
      this.getWorkspaceActivityFeedConfig,
      requestConfig,
    );
    z.object({
      userId: z.number().optional().nullable(),
      elementType: z.unknown().optional().nullable(),
      limit: z.number().optional(),
      cursor: z.string().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/workspaces/{workspaceId}/activities')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: workspaceActivityFeedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
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
      .addPathParam({
        key: 'workspaceId',
        value: workspaceId,
      })
      .addQueryParam({
        key: 'userId',
        value: params?.userId,
      })
      .addQueryParam({
        key: 'elementType',
        value: params?.elementType,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .addQueryParam({
        key: 'cursor',
        value: params?.cursor,
      })
      .build();
    return this.client.callDirect<WorkspaceActivityFeed>(request);
  }

  /**
 * Transfers a [Postman element](https://learning.postman.com/docs/getting-started/basics/postman-elements/) from one workspace to another workspace. Supported elements include collections, environments, mocks, monitors, and Flows modules and actions.
When copying an element between workspaces, the [activity feed](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/workspace-activity/) for both workspaces update to reflect the change.

**Note:**

This endpoint does not support transferring elements from team workspaces to personal workspaces.

 * @param {string} workspaceId - The workspace's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<TransferWorkspaceElementResponse>>} - Successful Response
 */
  async transferWorkspaceElement(
    workspaceId: string,
    body: TransferWorkspaceElement,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<TransferWorkspaceElementResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.transferWorkspaceElementConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/workspaces/{workspaceId}/element-transfers')
      .setRequestSchema(transferWorkspaceElementRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: transferWorkspaceElementResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 404,
      })
      .addPathParam({
        key: 'workspaceId',
        value: workspaceId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<TransferWorkspaceElementResponse>(request);
  }

  /**
   * Gets a workspace's global [variables](https://learning.postman.com/docs/sending-requests/variables/#variable-scopes). Global variables enable you to access data between collections, requests, scripts, and environments and are available throughout a workspace.
   * @param {string} workspaceId - The workspace's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetWorkspaceGlobalVariablesOkResponse>>} - Successful Response
   */
  async getWorkspaceGlobalVariables(
    workspaceId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetWorkspaceGlobalVariablesOkResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.getWorkspaceGlobalVariablesConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/workspaces/{workspaceId}/global-variables')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getWorkspaceGlobalVariablesOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'workspaceId',
        value: workspaceId,
      })
      .build();
    return this.client.callDirect<GetWorkspaceGlobalVariablesOkResponse>(request);
  }

  /**
   * Updates and replaces a workspace's global [variables](https://learning.postman.com/docs/sending-requests/variables/#variable-scopes). This endpoint replaces all existing global variables with the variables you pass in the request body.
   * @param {string} workspaceId - The workspace's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GlobalVariablesUpdated>>} - Successful Response
   */
  async updateWorkspaceGlobalVariables(
    workspaceId: string,
    body: UpdateGlobalVariables,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GlobalVariablesUpdated> {
    const resolvedConfig = this.getResolvedConfig(
      this.updateWorkspaceGlobalVariablesConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/workspaces/{workspaceId}/global-variables')
      .setRequestSchema(updateGlobalVariablesRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: globalVariablesUpdatedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'workspaceId',
        value: workspaceId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<GlobalVariablesUpdated>(request);
  }

  /**
 * Gets the roles of users, user groups, and partners in a workspace.
**Note:**

Partner roles don't support SCIM IDs.

 * @param {string} workspaceId - The workspace's ID.
 * @param {WorkspaceIncludeScimQuery} [params.include] - Include the following information in the endpoint's response:
- `scim` — Return IDs as SCIM user and group IDs.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<WorkspaceRoles>>} - Successful Response
 */
  async getWorkspaceRoles(
    workspaceId: string,
    params?: GetWorkspaceRolesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<WorkspaceRoles> {
    const resolvedConfig = this.getResolvedConfig(this.getWorkspaceRolesConfig, requestConfig);
    z.object({ include: z.unknown().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/workspaces/{workspaceId}/roles')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: workspaceRolesResponse,
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
        key: 'workspaceId',
        value: workspaceId,
      })
      .addQueryParam({
        key: 'include',
        value: params?.include,
      })
      .build();
    return this.client.callDirect<WorkspaceRoles>(request);
  }

  /**
 * Updates the roles of users, [user groups](https://learning.postman.com/docs/collaborating-in-postman/user-groups/), or partners in a workspace. To get a list of roles, use the GET `/workspace-roles` endpoint. To get a group ID, use the GET `/groups` endpoint.
**Note:**

- User groups are available on Postman [**Enterprise** plans](https://www.postman.com/pricing).
- To use SCIM IDs for users and user groups, include the `identifierType=scim` header when you call this endpoint. To get SCIM user IDs, include the `include=scim` query parameter when calling the GET `/workspaces/{workspaceId}` or GET `/workspaces` endpoints.
- You can't set roles for users in personal workspaces.
- This endpoint doesn't support the external [Guest role](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles).
- The partner **Editor** and **Editor and Partner Lead** roles aren't supported in multi-partner workspaces.
- You can't update partner and user roles in the same operation.
- This endpoint is restricted to 50 operations per call.
- The request body must contain one unique action per user, user group, or partner. For example, you cannot add and remove multiple roles for a user in the same request body.

 * @param {string} workspaceId - The workspace's ID.
 * @param {string} [params.identifierType] - Use SCIM user IDs instead of Postman user IDs.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<WorkspaceRolesUpdated>>} - Successful Response
 */
  async updateWorkspaceRoles(
    workspaceId: string,
    body: UpdateWorkspaceRoles,
    params?: UpdateWorkspaceRolesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<WorkspaceRolesUpdated> {
    const resolvedConfig = this.getResolvedConfig(this.updateWorkspaceRolesConfig, requestConfig);
    z.object({ identifierType: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PATCH')
      .setPath('/workspaces/{workspaceId}/roles')
      .setRequestSchema(updateWorkspaceRolesRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: workspaceRolesUpdatedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
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
        error: PartnerAndPersonalWorkspaceRolesUnsupported,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'workspaceId',
        value: workspaceId,
      })
      .addHeaderParam({
        key: 'identifierType',
        value: params?.identifierType,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json-patch+json' })
      .addBody(body)
      .build();
    return this.client.callDirect<WorkspaceRolesUpdated>(request);
  }

  /**
 * Transfers a workspace from one team (`source`) to another team (`destination`).
**Note:**

- These endpoints are only available with [Postman **Enterprise** plans](https://www.postman.com/pricing/) with [Postman Organizations](https://learning.postman.com/docs/administration/onboarding-checklist) enabled.
- Team user roles are modified when workspaces are transferred. For example, if a user has the Admin role in the `source` team but not the `destination` team, then their role is removed from the workspace after it's transferred to the `destination` team.

 * @param {string} workspaceId - The workspace's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<TransferWorkspaceToTeamResponse>>} - Successful Response
 */
  async transferWorkspaceToTeam(
    workspaceId: string,
    body: TransferWorkspaceToTeam,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<TransferWorkspaceToTeamResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.transferWorkspaceToTeamConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PATCH')
      .setPath('/workspaces/{workspaceId}/transfers')
      .setRequestSchema(transferWorkspaceToTeamRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: transferWorkspaceToTeamResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 403,
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
        key: 'workspaceId',
        value: workspaceId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<TransferWorkspaceToTeamResponse>(request);
  }

  /**
   * Gets a list of workspace updates for the given workspace.
   * @param {string} workspaceId - The workspace's ID.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {string} [params.category] - A comma-separated list of categories to filter the results by. Accepts `improvement`, `bug_fix`, `new_feature`, `breaking_change`, `announcement`.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetWorkspaceUpdates>>} - Successful Response
   */
  async getWorkspaceUpdates(
    workspaceId: string,
    params?: GetWorkspaceUpdatesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetWorkspaceUpdates> {
    const resolvedConfig = this.getResolvedConfig(this.getWorkspaceUpdatesConfig, requestConfig);
    z.object({ cursor: z.string().optional(), category: z.string().optional() }).parse(
      params ?? {},
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/workspaces/{workspaceId}/updates')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getWorkspaceUpdatesResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
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
        key: 'workspaceId',
        value: workspaceId,
      })
      .addQueryParam({
        key: 'cursor',
        value: params?.cursor,
      })
      .addQueryParam({
        key: 'category',
        value: params?.category,
      })
      .build();
    return this.client.callDirect<GetWorkspaceUpdates>(request);
  }

  /**
   * Creates a [workspace update](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/internal-workspaces/workspace-updates) in the given workspace. Workspace updates keep workspace watchers informed about changes, such as new features, bug fixes, breaking changes, and announcements.
   * @param {string} workspaceId - The workspace's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<WorkspaceUpdatePostPatchResponseData>>} - Successful Response
   */
  async createWorkspaceUpdate(
    workspaceId: string,
    body: CreateWorkspaceUpdate,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<WorkspaceUpdatePostPatchResponseData> {
    const resolvedConfig = this.getResolvedConfig(this.createWorkspaceUpdateConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/workspaces/{workspaceId}/updates')
      .setRequestSchema(createWorkspaceUpdateRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: workspaceUpdatePostPatchResponseDataResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'workspaceId',
        value: workspaceId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<WorkspaceUpdatePostPatchResponseData>(request);
  }

  /**
   * Gets information about a workspace update.
   * @param {string} workspaceId - The workspace's ID.
   * @param {number} updateId - The workspace update's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<WorkspaceUpdateData>>} - Successful Response
   */
  async getWorkspaceUpdate(
    workspaceId: string,
    updateId: number,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<WorkspaceUpdateData> {
    const resolvedConfig = this.getResolvedConfig(this.getWorkspaceUpdateConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/workspaces/{workspaceId}/updates/{updateId}')
      .setRequestSchema(z.any())
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: workspaceUpdateDataResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
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
        key: 'workspaceId',
        value: workspaceId,
      })
      .addPathParam({
        key: 'updateId',
        value: updateId,
      })
      .build();
    return this.client.callDirect<WorkspaceUpdateData>(request);
  }

  /**
 * Updates a workspace update.
**Note:**

This endpoint requires the `application/merge-patch+json` Content-Type header.

 * @param {string} workspaceId - The workspace's ID.
 * @param {number} updateId - The workspace update's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<WorkspaceUpdatePostPatchResponseData>>} - Successful Response
 */
  async patchWorkspaceUpdate(
    workspaceId: string,
    updateId: number,
    body: UpdateWorkspaceUpdate,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<WorkspaceUpdatePostPatchResponseData> {
    const resolvedConfig = this.getResolvedConfig(this.patchWorkspaceUpdateConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PATCH')
      .setPath('/workspaces/{workspaceId}/updates/{updateId}')
      .setRequestSchema(updateWorkspaceUpdateRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: workspaceUpdatePostPatchResponseDataResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 422,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'workspaceId',
        value: workspaceId,
      })
      .addPathParam({
        key: 'updateId',
        value: updateId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<WorkspaceUpdatePostPatchResponseData>(request);
  }

  /**
   * Deletes a workspace update. On success, this returns an HTTP `204 No Content` response.
   * @param {string} workspaceId - The workspace's ID.
   * @param {number} updateId - The workspace update's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - Workspace Update Deleted
   */
  async deleteWorkspaceUpdate(
    workspaceId: string,
    updateId: number,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.deleteWorkspaceUpdateConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/workspaces/{workspaceId}/updates/{updateId}')
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
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
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
        key: 'workspaceId',
        value: workspaceId,
      })
      .addPathParam({
        key: 'updateId',
        value: updateId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }
}
