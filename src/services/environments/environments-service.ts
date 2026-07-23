import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  GetEnvironmentsOkResponse,
  getEnvironmentsOkResponseResponse,
} from './models/get-environments-ok-response';
import { Common401Error } from '../common/common401-error';
import { Environments404Error } from './models/environments404-error';
import { Common500Error } from '../common/common500-error';
import {
  CreateEnvironmentParams,
  ForkEnvironmentParams,
  GetEnvironmentForksParams,
  GetEnvironmentsParams,
} from './request-params';
import { CreateEnvironment, createEnvironmentRequest } from './models/create-environment';
import { EnvironmentCreated, environmentCreatedResponse } from './models/environment-created';
import { Environment400Errors } from './models/environment400-errors';
import { Common403Error } from '../common/common403-error';
import { ErrorTypeTitleDetailStatusInstance } from '../common/error-type-title-detail-status-instance';
import {
  GetEnvironmentOkResponse,
  getEnvironmentOkResponseResponse,
} from './models/get-environment-ok-response';
import {
  ReplaceEnvironmentData,
  replaceEnvironmentDataRequest,
} from './models/replace-environment-data';
import {
  PutEnvironmentOkResponse,
  putEnvironmentOkResponseResponse,
} from './models/put-environment-ok-response';
import { PatchEnvironment, patchEnvironmentRequest } from './models/patch-environment';
import {
  PatchEnvironmentOkResponse,
  patchEnvironmentOkResponseResponse,
} from './models/patch-environment-ok-response';
import { PatchEnvironmentBadRequestResponse } from './models/patch-environment-bad-request-response';
import { EnvironmentDeleted, environmentDeletedResponse } from './models/environment-deleted';
import {
  GetEnvironmentForksOkResponse,
  getEnvironmentForksOkResponseResponse,
} from './models/get-environment-forks-ok-response';
import { CreateApiClientErrorResponse } from '../common/create-api-client-error-response';
import { ErrorTypeTitleDetailStatus } from '../common/error-type-title-detail-status';
import { ForkEnvironment, forkEnvironmentRequest } from './models/fork-environment';
import {
  ForkEnvironmentOkResponse,
  forkEnvironmentOkResponseResponse,
} from './models/fork-environment-ok-response';
import { MergeEnvironmentFork, mergeEnvironmentForkRequest } from './models/merge-environment-fork';
import {
  MergeEnvironmentForkOkResponse,
  mergeEnvironmentForkOkResponseResponse,
} from './models/merge-environment-fork-ok-response';
import {
  PullEnvironmentForkChanges,
  pullEnvironmentForkChangesRequest,
} from './models/pull-environment-fork-changes';
import {
  PullEnvironmentOkResponse,
  pullEnvironmentOkResponseResponse,
} from './models/pull-environment-ok-response';

/**
 * Service class for EnvironmentsService operations.
 * Provides methods to interact with EnvironmentsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class EnvironmentsService extends BaseService {
  protected getEnvironmentsConfig?: Partial<SdkConfig>;

  protected createEnvironmentConfig?: Partial<SdkConfig>;

  protected getEnvironmentConfig?: Partial<SdkConfig>;

  protected putEnvironmentConfig?: Partial<SdkConfig>;

  protected patchEnvironmentConfig?: Partial<SdkConfig>;

  protected deleteEnvironmentConfig?: Partial<SdkConfig>;

  protected getEnvironmentForksConfig?: Partial<SdkConfig>;

  protected forkEnvironmentConfig?: Partial<SdkConfig>;

  protected mergeEnvironmentForkConfig?: Partial<SdkConfig>;

  protected pullEnvironmentConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getEnvironments.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetEnvironmentsConfig(config: Partial<SdkConfig>): this {
    this.getEnvironmentsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createEnvironment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateEnvironmentConfig(config: Partial<SdkConfig>): this {
    this.createEnvironmentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getEnvironment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetEnvironmentConfig(config: Partial<SdkConfig>): this {
    this.getEnvironmentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for putEnvironment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPutEnvironmentConfig(config: Partial<SdkConfig>): this {
    this.putEnvironmentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for patchEnvironment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPatchEnvironmentConfig(config: Partial<SdkConfig>): this {
    this.patchEnvironmentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteEnvironment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteEnvironmentConfig(config: Partial<SdkConfig>): this {
    this.deleteEnvironmentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getEnvironmentForks.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetEnvironmentForksConfig(config: Partial<SdkConfig>): this {
    this.getEnvironmentForksConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for forkEnvironment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setForkEnvironmentConfig(config: Partial<SdkConfig>): this {
    this.forkEnvironmentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for mergeEnvironmentFork.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setMergeEnvironmentForkConfig(config: Partial<SdkConfig>): this {
    this.mergeEnvironmentForkConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for pullEnvironment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPullEnvironmentConfig(config: Partial<SdkConfig>): this {
    this.pullEnvironmentConfig = config;
    return this;
  }

  /**
   * Gets information about all of your [environments](https://learning.postman.com/docs/sending-requests/managing-environments/).
   * @param {string} [params.workspace] - The workspace's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetEnvironmentsOkResponse>>} - Successful Response
   */
  async getEnvironments(
    params?: GetEnvironmentsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetEnvironmentsOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getEnvironmentsConfig, requestConfig);
    z.object({ workspace: z.string().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/environments')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getEnvironmentsOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Environments404Error,
        contentType: ContentType.Json,
        status: 404,
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
      .build();
    return this.client.callDirect<GetEnvironmentsOkResponse>(request);
  }

  /**
 * Creates an environment.
**Note:**

- The request body size cannot exceed the maximum allowed size of 30MB.
- If you receive an HTTP `411 Length Required` error response, manually pass the `Content-Length` header and its value in the request header.
- If you do not include the `workspace` query parameter, the system creates the environment in the oldest personal Internal workspace you own.
- Only [shared variable](https://learning.postman.com/docs/use/send-requests/variables/variables/#share-variable-values) values can be modified through the Postman API. A shared variable is an environment variable with its value synced and stored in the Postman cloud, and can be accessed by your teammates in the environment's workspace.

 * @param {string} params.workspace - The workspace's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<EnvironmentCreated>>} - Successful Response
 */
  async createEnvironment(
    body: CreateEnvironment,
    params: CreateEnvironmentParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<EnvironmentCreated> {
    const resolvedConfig = this.getResolvedConfig(this.createEnvironmentConfig, requestConfig);
    z.object({ workspace: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/environments')
      .setRequestSchema(createEnvironmentRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: environmentCreatedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Environment400Errors,
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
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 411,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 413,
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
    return this.client.callDirect<EnvironmentCreated>(request);
  }

  /**
   * Gets information about an environment.
   * @param {string} environmentId - The environment's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetEnvironmentOkResponse>>} - Successful Response
   */
  async getEnvironment(
    environmentId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetEnvironmentOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getEnvironmentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/environments/{environmentId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getEnvironmentOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Environments404Error,
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
        key: 'environmentId',
        value: environmentId,
      })
      .build();
    return this.client.callDirect<GetEnvironmentOkResponse>(request);
  }

  /**
 * Replaces all the contents of an environment with the given information.
**Note:**

- The request body size cannot exceed the maximum allowed size of 30MB.
- If you receive an HTTP `411 Length Required` error response, manually pass the `Content-Length` header and its value in the request header.
- Only [shared variable](https://learning.postman.com/docs/use/send-requests/variables/variables/#share-variable-values) values can be modified through the Postman API. A shared variable is an environment variable with its value synced and stored in the Postman cloud, and can be accessed by your teammates in the environment's workspace.

 * @param {string} environmentId - The environment's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PutEnvironmentOkResponse>>} - Successful Response
 */
  async putEnvironment(
    environmentId: string,
    body: ReplaceEnvironmentData,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PutEnvironmentOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.putEnvironmentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/environments/{environmentId}')
      .setRequestSchema(replaceEnvironmentDataRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: putEnvironmentOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Environment400Errors,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 411,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 413,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'environmentId',
        value: environmentId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<PutEnvironmentOkResponse>(request);
  }

  /**
 * Updates specific environment properties, such as its name and variables.
**Note:**

- You can only perform one type of operation at a time. For example, you cannot perform an `add` and `replace` operation in the same call.
- The request body size cannot exceed the maximum allowed size of 30MB.
- If you receive an HTTP `411 Length Required` error response, manually pass the `Content-Length` header and its value in the request header.
- To add a description to an existing variable, use the `add` operation.
- Only [shared variable](https://learning.postman.com/docs/use/send-requests/variables/variables/#share-variable-values) values can be modified through the Postman API. A shared variable is an environment variable with its value synced and stored in the Postman cloud, and can be accessed by your teammates in the environment's workspace.

 * @param {string} environmentId - The environment's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<PatchEnvironmentOkResponse>>} - Successful Response
 */
  async patchEnvironment(
    environmentId: string,
    body: PatchEnvironment,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PatchEnvironmentOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.patchEnvironmentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PATCH')
      .setPath('/environments/{environmentId}')
      .setRequestSchema(patchEnvironmentRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: patchEnvironmentOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: PatchEnvironmentBadRequestResponse,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Environments404Error,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 411,
      })
      .addError({
        error: ErrorTypeTitleDetailStatusInstance,
        contentType: ContentType.Json,
        status: 413,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'environmentId',
        value: environmentId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<PatchEnvironmentOkResponse>(request);
  }

  /**
   * Deletes an environment.
   * @param {string} environmentId - The environment's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<EnvironmentDeleted>>} - Successful Response
   */
  async deleteEnvironment(
    environmentId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<EnvironmentDeleted> {
    const resolvedConfig = this.getResolvedConfig(this.deleteEnvironmentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/environments/{environmentId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: environmentDeletedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: Environments404Error,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'environmentId',
        value: environmentId,
      })
      .build();
    return this.client.callDirect<EnvironmentDeleted>(request);
  }

  /**
   * Gets all of an environment's forked environments.
   * @param {string} environmentId - The environment's unique ID.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {AscDesc} [params.direction] - Sort results in ascending (`asc`) or descending (`desc`) order.
   * @param {number} [params.limit] - The maximum number of rows to return in the response.
   * @param {SortByCreatedAt} [params.sort] - Sort the results by the date and time of creation.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetEnvironmentForksOkResponse>>} - Successful Response
   */
  async getEnvironmentForks(
    environmentId: string,
    params?: GetEnvironmentForksParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetEnvironmentForksOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getEnvironmentForksConfig, requestConfig);
    z.object({
      cursor: z.string().optional(),
      direction: z.unknown().optional(),
      limit: z.number().optional(),
      sort: z.unknown().optional(),
    }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/environments/{environmentId}/forks')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getEnvironmentForksOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
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
        key: 'environmentId',
        value: environmentId,
      })
      .addQueryParam({
        key: 'cursor',
        value: params?.cursor,
      })
      .addQueryParam({
        key: 'direction',
        value: params?.direction,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .addQueryParam({
        key: 'sort',
        value: params?.sort,
      })
      .build();
    return this.client.callDirect<GetEnvironmentForksOkResponse>(request);
  }

  /**
   * Creates a [fork](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/) of an existing environment.
   * @param {string} environmentId - The environment's unique ID.
   * @param {string} params.workspaceId - The workspace's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ForkEnvironmentOkResponse>>} - Successful Response
   */
  async forkEnvironment(
    environmentId: string,
    body: ForkEnvironment,
    params: ForkEnvironmentParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ForkEnvironmentOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.forkEnvironmentConfig, requestConfig);
    z.object({ workspaceId: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/environments/{environmentId}/forks')
      .setRequestSchema(forkEnvironmentRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: forkEnvironmentOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
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
        key: 'environmentId',
        value: environmentId,
      })
      .addQueryParam({
        key: 'workspaceId',
        value: params?.workspaceId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<ForkEnvironmentOkResponse>(request);
  }

  /**
   * [Merges](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/#merge-changes-from-a-fork) a forked environment back into its parent environment.
   * @param {string} environmentId - The environment's unique ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<MergeEnvironmentForkOkResponse>>} - Successful Response
   */
  async mergeEnvironmentFork(
    environmentId: string,
    body: MergeEnvironmentFork,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<MergeEnvironmentForkOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.mergeEnvironmentForkConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/environments/{environmentId}/merges')
      .setRequestSchema(mergeEnvironmentForkRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: mergeEnvironmentForkOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
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
        key: 'environmentId',
        value: environmentId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<MergeEnvironmentForkOkResponse>(request);
  }

  /**
   * [Pulls](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/#pull-updates-from-a-parent-element) the changes from a parent (source) environment into the forked environment.
   * @param {string} environmentUid - The destination environment's unique ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<PullEnvironmentOkResponse>>} - Successful Response
   */
  async pullEnvironment(
    environmentUid: string,
    body: PullEnvironmentForkChanges,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PullEnvironmentOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.pullEnvironmentConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/environments/{environmentUid}/pulls')
      .setRequestSchema(pullEnvironmentForkChangesRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: pullEnvironmentOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: CreateApiClientErrorResponse,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: Common401Error,
        contentType: ContentType.Json,
        status: 401,
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
        key: 'environmentUid',
        value: environmentUid,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<PullEnvironmentOkResponse>(request);
  }
}
