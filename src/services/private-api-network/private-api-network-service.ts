import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  ListPrivateNetworkWorkspacesOkResponse,
  listPrivateNetworkWorkspacesOkResponseResponse,
} from './models/list-private-network-workspaces-ok-response';
import { Common401Error } from '../common/common401-error';
import { Common403Error } from '../common/common403-error';
import { Common500Error } from '../common/common500-error';
import {
  ListPrivateNetworkAddRequestsParams,
  ListPrivateNetworkWorkspacesParams,
} from './request-params';
import { AddWorkspace, addWorkspaceRequest } from './models/add-workspace';
import { ElementCreated, elementCreatedResponse } from './models/element-created';
import { AddWorkspaceToPrivateNetworkNotFoundResponse } from './models/add-workspace-to-private-network-not-found-response';
import {
  UpdatePanElementOrFolderRequest,
  updatePanElementOrFolderRequestRequest,
} from './models/update-pan-element-or-folder-request';
import {
  RemoveWorkspaceFromPrivateNetworkOkResponse,
  removeWorkspaceFromPrivateNetworkOkResponseResponse,
} from './models/remove-workspace-from-private-network-ok-response';
import { Pan400Error } from './models/pan400-error';
import {
  ListPrivateNetworkAddRequestsOkResponse,
  listPrivateNetworkAddRequestsOkResponseResponse,
} from './models/list-private-network-add-requests-ok-response';
import {
  RespondPanElementAddRequestBody,
  respondPanElementAddRequestBodyRequest,
} from './models/respond-pan-element-add-request-body';
import {
  RespondPanElementAddRequest,
  respondPanElementAddRequestResponse,
} from './models/respond-pan-element-add-request';

/**
 * Service class for PrivateApiNetworkService operations.
 * Provides methods to interact with PrivateApiNetworkService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class PrivateApiNetworkService extends BaseService {
  protected listPrivateNetworkWorkspacesConfig?: Partial<SdkConfig>;

  protected addWorkspaceToPrivateNetworkConfig?: Partial<SdkConfig>;

  protected updatePanElementOrFolderConfig?: Partial<SdkConfig>;

  protected removeWorkspaceFromPrivateNetworkConfig?: Partial<SdkConfig>;

  protected listPrivateNetworkAddRequestsConfig?: Partial<SdkConfig>;

  protected respondPrivateNetworkAddRequestConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for listPrivateNetworkWorkspaces.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListPrivateNetworkWorkspacesConfig(config: Partial<SdkConfig>): this {
    this.listPrivateNetworkWorkspacesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for addWorkspaceToPrivateNetwork.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddWorkspaceToPrivateNetworkConfig(config: Partial<SdkConfig>): this {
    this.addWorkspaceToPrivateNetworkConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updatePanElementOrFolder.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdatePanElementOrFolderConfig(config: Partial<SdkConfig>): this {
    this.updatePanElementOrFolderConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for removeWorkspaceFromPrivateNetwork.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRemoveWorkspaceFromPrivateNetworkConfig(config: Partial<SdkConfig>): this {
    this.removeWorkspaceFromPrivateNetworkConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for listPrivateNetworkAddRequests.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setListPrivateNetworkAddRequestsConfig(config: Partial<SdkConfig>): this {
    this.listPrivateNetworkAddRequestsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for respondPrivateNetworkAddRequest.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setRespondPrivateNetworkAddRequestConfig(config: Partial<SdkConfig>): this {
    this.respondPrivateNetworkAddRequestConfig = config;
    return this;
  }

  /**
   * Gets information workspaces added to your team's [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/).
   * @param {ElementTypeQuery} [params.type] - The `workspace` value.
   * @param {string} [params.name] - Return only workspaces whose name includes the given value. Matching is not case-sensitive.
   * @param {string} [params.summary] - Return only workspaces whose summary includes the given value. Matching is not case-sensitive.
   * @param {string} [params.description] - Return only workspaces whose description includes the given value. Matching is not case-sensitive.
   * @param {string} [params.since] - Return only results created since the given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be later than the `until` value.
   * @param {string} [params.until] - Return only results created until this given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be earlier than the `since` value.
   * @param {number} [params.addedBy] - Return only workspaces published by the given user ID.
   * @param {SortCreatedUpdatedAt} [params.sort] - Sort the results by the given value. If you use this query parameter, you must also use the `direction` parameter.
   * @param {AscDesc} [params.direction] - Sort in ascending (`asc`) or descending (`desc`) order. Matching is not case-sensitive. If you use this query parameter, you must also use the `sort` parameter.
   * @param {number} [params.createdBy] - Return only results created by the given user ID.
   * @param {number} [params.offset] - The zero-based offset of the first item to return.
   * @param {number} [params.limit] - The maximum number of results to return. If the value exceeds the maximum value of `1000`, then the system uses the `1000` value.
   * @param {number} [params.parentFolderId] - This parameter is deprecated.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListPrivateNetworkWorkspacesOkResponse>>} - Successful Response
   */
  async listPrivateNetworkWorkspaces(
    params?: ListPrivateNetworkWorkspacesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ListPrivateNetworkWorkspacesOkResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.listPrivateNetworkWorkspacesConfig,
      requestConfig,
    );
    z.object({
      type: z.unknown().optional(),
      name: z.string().optional(),
      summary: z.string().optional(),
      description: z.string().optional(),
      since: z.string().optional(),
      until: z.string().optional(),
      addedBy: z.number().optional(),
      sort: z.unknown().optional(),
      direction: z.unknown().optional(),
      createdBy: z.number().optional(),
      offset: z.number().optional(),
      limit: z.number().optional(),
      parentFolderId: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/network/private')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listPrivateNetworkWorkspacesOkResponseResponse,
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
        key: 'type',
        value: params?.type,
      })
      .addQueryParam({
        key: 'name',
        value: params?.name,
      })
      .addQueryParam({
        key: 'summary',
        value: params?.summary,
      })
      .addQueryParam({
        key: 'description',
        value: params?.description,
      })
      .addQueryParam({
        key: 'since',
        value: params?.since,
      })
      .addQueryParam({
        key: 'until',
        value: params?.until,
      })
      .addQueryParam({
        key: 'addedBy',
        value: params?.addedBy,
      })
      .addQueryParam({
        key: 'sort',
        value: params?.sort,
      })
      .addQueryParam({
        key: 'direction',
        value: params?.direction,
      })
      .addQueryParam({
        key: 'createdBy',
        value: params?.createdBy,
      })
      .addQueryParam({
        key: 'offset',
        value: params?.offset,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .addQueryParam({
        key: 'parentFolderId',
        value: params?.parentFolderId,
      })
      .build();
    return this.client.callDirect<ListPrivateNetworkWorkspacesOkResponse>(request);
  }

  /**
   * Publishes a workspace in your team's [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/).
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ElementCreated>>} - Created
   */
  async addWorkspaceToPrivateNetwork(
    body: AddWorkspace,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ElementCreated> {
    const resolvedConfig = this.getResolvedConfig(
      this.addWorkspaceToPrivateNetworkConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/network/private')
      .setRequestSchema(addWorkspaceRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: elementCreatedResponse,
        contentType: ContentType.Json,
        status: 201,
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
        error: AddWorkspaceToPrivateNetworkNotFoundResponse,
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
    return this.client.callDirect<ElementCreated>(request);
  }

  /**
   * **This endpoint is deprecated.**
   * @param {string} workspaceId - The workspace's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - Successful Response
   */
  async updatePanElementOrFolder(
    workspaceId: string,
    body: UpdatePanElementOrFolderRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(
      this.updatePanElementOrFolderConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/network/private/workspace/{workspaceId}')
      .setRequestSchema(updatePanElementOrFolderRequestRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
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
        error: AddWorkspaceToPrivateNetworkNotFoundResponse,
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
    return this.client.callDirect<void>(request);
  }

  /**
 * Removes a workspace from your team's [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/).
**Note:**

Removing a workspace does not delete it. It only removes it from the Private API Network folder.

 * @param {string} workspaceId - The workspace's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<RemoveWorkspaceFromPrivateNetworkOkResponse>>} - Successful Response
 */
  async removeWorkspaceFromPrivateNetwork(
    workspaceId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<RemoveWorkspaceFromPrivateNetworkOkResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.removeWorkspaceFromPrivateNetworkConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/network/private/workspace/{workspaceId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: removeWorkspaceFromPrivateNetworkOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Pan400Error,
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
        error: AddWorkspaceToPrivateNetworkNotFoundResponse,
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
      .build();
    return this.client.callDirect<RemoveWorkspaceFromPrivateNetworkOkResponse>(request);
  }

  /**
   * Gets all requests to add workspaces to your team's [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/).
   * @param {string} [params.since] - Return only results created since the given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be later than the `until` value. To use `time-numoffset` format, you must use `%2B` URL-encoding for the `+` character.
   * @param {string} [params.until] - Return only results created until this given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be earlier than the `since` value. To use `time-numoffset` format, you must use `%2B` URL-encoding for the `+` character.
   * @param {number} [params.requestedBy] - Return a user's requests by their user ID.
   * @param {ElementTypeQuery} [params.type] - The `workspace` value.
   * @param {PanRequestStatus} [params.status] - Filter by the request status.
   * @param {string} [params.name] - Return only workspaces whose name includes the given value. Matching is not case-sensitive.
   * @param {SortCreatedUpdatedAt} [params.sort] - Sort the results by the given value. If you use this query parameter, you must also use the `direction` parameter.
   * @param {AscDesc} [params.direction] - Sort in ascending (`asc`) or descending (`desc`) order. Matching is not case-sensitive. If you use this query parameter, you must also use the `sort` parameter.
   * @param {number} [params.offset] - The zero-based offset of the first item to return.
   * @param {number} [params.limit] - The maximum number of results to return. If the value exceeds the maximum value of `1000`, then the system uses the `1000` value.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ListPrivateNetworkAddRequestsOkResponse>>} - Successful Response
   */
  async listPrivateNetworkAddRequests(
    params?: ListPrivateNetworkAddRequestsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ListPrivateNetworkAddRequestsOkResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.listPrivateNetworkAddRequestsConfig,
      requestConfig,
    );
    z.object({
      since: z.string().optional(),
      until: z.string().optional(),
      requestedBy: z.number().optional(),
      type: z.unknown().optional(),
      status: z.unknown().optional(),
      name: z.string().optional(),
      sort: z.unknown().optional(),
      direction: z.unknown().optional(),
      offset: z.number().optional(),
      limit: z.number().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/network/private/network-entity/request/all')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: listPrivateNetworkAddRequestsOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Pan400Error,
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
        key: 'since',
        value: params?.since,
      })
      .addQueryParam({
        key: 'until',
        value: params?.until,
      })
      .addQueryParam({
        key: 'requestedBy',
        value: params?.requestedBy,
      })
      .addQueryParam({
        key: 'type',
        value: params?.type,
      })
      .addQueryParam({
        key: 'status',
        value: params?.status,
      })
      .addQueryParam({
        key: 'name',
        value: params?.name,
      })
      .addQueryParam({
        key: 'sort',
        value: params?.sort,
      })
      .addQueryParam({
        key: 'direction',
        value: params?.direction,
      })
      .addQueryParam({
        key: 'offset',
        value: params?.offset,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .build();
    return this.client.callDirect<ListPrivateNetworkAddRequestsOkResponse>(request);
  }

  /**
   * Responds to a user's request to add a workspace to your team's [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/). Only managers can approve or deny a request. Once approved, the workspace will appear in the team's Private API Network.
   * @param {number} requestId - The request's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<RespondPanElementAddRequest>>} - Successful Response
   */
  async respondPrivateNetworkAddRequest(
    requestId: number,
    body: RespondPanElementAddRequestBody,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<RespondPanElementAddRequest> {
    const resolvedConfig = this.getResolvedConfig(
      this.respondPrivateNetworkAddRequestConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/network/private/network-entity/request/{requestId}')
      .setRequestSchema(respondPanElementAddRequestBodyRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: respondPanElementAddRequestResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Pan400Error,
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
      .addPathParam({
        key: 'requestId',
        value: requestId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<RespondPanElementAddRequest>(request);
  }
}
