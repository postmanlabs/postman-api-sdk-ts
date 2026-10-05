import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { CustomFunctionList, customFunctionListResponse } from './models/custom-function-list';
import { Common400Error } from '../common/common400-error';
import { Common401Error } from '../common/common401-error';
import { Common403Error } from '../common/common403-error';
import { Common500Error } from '../common/common500-error';
import {
  DeleteRulesetAssignmentParams,
  GetAllCustomFunctionsParams,
  GetAllGovernanceGroupsParams,
  GetAllRulesetsParams,
  GetCustomFunctionParams,
  GetGovernanceGroupWorkspacesParams,
  GetRulesetParams,
} from './request-params';
import { CustomFunctionCreate, customFunctionCreateRequest } from './models/custom-function-create';
import { WriteResult, writeResultResponse } from './models/write-result';
import { ErrorTypeTitleDetailStatus } from '../common/error-type-title-detail-status';
import { CustomFunction, customFunctionResponse } from './models/custom-function';
import { CustomFunctionUpdate, customFunctionUpdateRequest } from './models/custom-function-update';
import { GovernanceGroupList, governanceGroupListResponse } from './models/governance-group-list';
import {
  GovernanceGroupCreate,
  governanceGroupCreateRequest,
} from './models/governance-group-create';
import {
  GovernanceGroupUpdate,
  governanceGroupUpdateRequest,
} from './models/governance-group-update';
import {
  RulesetAssignmentList,
  rulesetAssignmentListResponse,
} from './models/ruleset-assignment-list';
import {
  WorkspaceAssignmentList,
  workspaceAssignmentListResponse,
} from './models/workspace-assignment-list';
import {
  BulkWorkspacesRequest,
  bulkWorkspacesRequestRequest,
} from './models/bulk-workspaces-request';
import { RulesetList, rulesetListResponse } from './models/ruleset-list';
import { RulesetCreate, rulesetCreateRequest } from './models/ruleset-create';
import { Ruleset, rulesetResponse } from './models/ruleset';
import { RulesetUpdate, rulesetUpdateRequest } from './models/ruleset-update';
import {
  RulesetAssignmentCreate,
  rulesetAssignmentCreateRequest,
} from './models/ruleset-assignment-create';
import {
  RulesetAssignmentSummary,
  rulesetAssignmentSummaryResponse,
} from './models/ruleset-assignment-summary';
import {
  SchemaValidationRequestBody,
  schemaValidationRequestBodyRequest,
} from './models/schema-validation-request-body';
import {
  SchemaSecurityValidationOkResponse,
  schemaSecurityValidationOkResponseResponse,
} from './models/schema-security-validation-ok-response';
import { SchemaSecurityValidationBadRequestResponse } from './models/schema-security-validation-bad-request-response';

/**
 * Service class for ApiGovernanceService operations.
 * Provides methods to interact with ApiGovernanceService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class ApiGovernanceService extends BaseService {
  protected getAllCustomFunctionsConfig?: Partial<SdkConfig>;

  protected createCustomFunctionConfig?: Partial<SdkConfig>;

  protected getCustomFunctionConfig?: Partial<SdkConfig>;

  protected updateCustomFunctionConfig?: Partial<SdkConfig>;

  protected deleteCustomFunctionConfig?: Partial<SdkConfig>;

  protected getAllGovernanceGroupsConfig?: Partial<SdkConfig>;

  protected createGovernanceGroupConfig?: Partial<SdkConfig>;

  protected updateGovernanceGroupConfig?: Partial<SdkConfig>;

  protected deleteGovernanceGroupConfig?: Partial<SdkConfig>;

  protected getGovernanceGroupAssignmentsConfig?: Partial<SdkConfig>;

  protected getGovernanceGroupWorkspacesConfig?: Partial<SdkConfig>;

  protected updateGovernanceGroupWorkspacesConfig?: Partial<SdkConfig>;

  protected getAllRulesetsConfig?: Partial<SdkConfig>;

  protected createRulesetConfig?: Partial<SdkConfig>;

  protected getRulesetConfig?: Partial<SdkConfig>;

  protected updateRulesetConfig?: Partial<SdkConfig>;

  protected deleteRulesetConfig?: Partial<SdkConfig>;

  protected getRulesetAssignmentsConfig?: Partial<SdkConfig>;

  protected createRulesetAssignmentConfig?: Partial<SdkConfig>;

  protected deleteRulesetAssignmentConfig?: Partial<SdkConfig>;

  protected schemaSecurityValidationConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getAllCustomFunctions.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAllCustomFunctionsConfig(config: Partial<SdkConfig>): this {
    this.getAllCustomFunctionsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createCustomFunction.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateCustomFunctionConfig(config: Partial<SdkConfig>): this {
    this.createCustomFunctionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getCustomFunction.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetCustomFunctionConfig(config: Partial<SdkConfig>): this {
    this.getCustomFunctionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateCustomFunction.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateCustomFunctionConfig(config: Partial<SdkConfig>): this {
    this.updateCustomFunctionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteCustomFunction.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteCustomFunctionConfig(config: Partial<SdkConfig>): this {
    this.deleteCustomFunctionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getAllGovernanceGroups.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAllGovernanceGroupsConfig(config: Partial<SdkConfig>): this {
    this.getAllGovernanceGroupsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createGovernanceGroup.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateGovernanceGroupConfig(config: Partial<SdkConfig>): this {
    this.createGovernanceGroupConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateGovernanceGroup.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateGovernanceGroupConfig(config: Partial<SdkConfig>): this {
    this.updateGovernanceGroupConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteGovernanceGroup.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteGovernanceGroupConfig(config: Partial<SdkConfig>): this {
    this.deleteGovernanceGroupConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getGovernanceGroupAssignments.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetGovernanceGroupAssignmentsConfig(config: Partial<SdkConfig>): this {
    this.getGovernanceGroupAssignmentsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getGovernanceGroupWorkspaces.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetGovernanceGroupWorkspacesConfig(config: Partial<SdkConfig>): this {
    this.getGovernanceGroupWorkspacesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateGovernanceGroupWorkspaces.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateGovernanceGroupWorkspacesConfig(config: Partial<SdkConfig>): this {
    this.updateGovernanceGroupWorkspacesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getAllRulesets.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAllRulesetsConfig(config: Partial<SdkConfig>): this {
    this.getAllRulesetsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createRuleset.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateRulesetConfig(config: Partial<SdkConfig>): this {
    this.createRulesetConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getRuleset.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetRulesetConfig(config: Partial<SdkConfig>): this {
    this.getRulesetConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateRuleset.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateRulesetConfig(config: Partial<SdkConfig>): this {
    this.updateRulesetConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteRuleset.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteRulesetConfig(config: Partial<SdkConfig>): this {
    this.deleteRulesetConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getRulesetAssignments.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetRulesetAssignmentsConfig(config: Partial<SdkConfig>): this {
    this.getRulesetAssignmentsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createRulesetAssignment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreateRulesetAssignmentConfig(config: Partial<SdkConfig>): this {
    this.createRulesetAssignmentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteRulesetAssignment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteRulesetAssignmentConfig(config: Partial<SdkConfig>): this {
    this.deleteRulesetAssignmentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for schemaSecurityValidation.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSchemaSecurityValidationConfig(config: Partial<SdkConfig>): this {
    this.schemaSecurityValidationConfig = config;
    return this;
  }

  /**
   * Gets a list of the team's custom functions. The response doesn't include function content.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {number} [params.limit] - The maximum number of results to return per page.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CustomFunctionList>>} - Successful Response
   */
  async getAllCustomFunctions(
    params?: GetAllCustomFunctionsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CustomFunctionList> {
    const resolvedConfig = this.getResolvedConfig(this.getAllCustomFunctionsConfig, requestConfig);
    z.object({ cursor: z.string().optional(), limit: z.number().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/custom-functions')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: customFunctionListResponse,
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
        key: 'cursor',
        value: params?.cursor,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .build();
    return this.client.callDirect<CustomFunctionList>(request);
  }

  /**
   * Creates a new custom function for the team.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<WriteResult>>} - Custom Function Created
   */
  async createCustomFunction(
    body: CustomFunctionCreate,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<WriteResult> {
    const resolvedConfig = this.getResolvedConfig(this.createCustomFunctionConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/custom-functions')
      .setRequestSchema(customFunctionCreateRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: writeResultResponse,
        contentType: ContentType.Json,
        status: 201,
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
        status: 409,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<WriteResult>(request);
  }

  /**
 * Gets information about a custom function.
By default, the response only returns the custom function's metadata. To include custom function contents in the response, pass the `include` query parameter.

 * @param {string} customFunctionId - The custom function's ID.
 * @param {ApiGovernanceInclude} [params.include] - The related fields to include in the response. Currently only `content` is supported. Omit this parameter to receive only the resource's metadata.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<CustomFunction>>} - Successful Response
 */
  async getCustomFunction(
    customFunctionId: string,
    params?: GetCustomFunctionParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<CustomFunction> {
    const resolvedConfig = this.getResolvedConfig(this.getCustomFunctionConfig, requestConfig);
    z.object({ include: z.unknown().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/custom-functions/{customFunctionId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: customFunctionResponse,
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
        key: 'customFunctionId',
        value: customFunctionId,
      })
      .addQueryParam({
        key: 'include',
        value: params?.include,
      })
      .build();
    return this.client.callDirect<CustomFunction>(request);
  }

  /**
   * Updates a custom function. Only the fields present in the request body are updated. If `content` is provided, it replaces the entire contents of the custom function.
   * @param {string} customFunctionId - The custom function's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<WriteResult>>} - Custom Function Updated
   */
  async updateCustomFunction(
    customFunctionId: string,
    body: CustomFunctionUpdate,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<WriteResult> {
    const resolvedConfig = this.getResolvedConfig(this.updateCustomFunctionConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PATCH')
      .setPath('/custom-functions/{customFunctionId}')
      .setRequestSchema(customFunctionUpdateRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: writeResultResponse,
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
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 409,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'customFunctionId',
        value: customFunctionId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/merge-patch+json' })
      .addBody(body)
      .build();
    return this.client.callDirect<WriteResult>(request);
  }

  /**
   * Deletes a custom function. On success, this returns a `204 No Content` response.
   * @param {string} customFunctionId - The custom function's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - Deleted
   */
  async deleteCustomFunction(
    customFunctionId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.deleteCustomFunctionConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/custom-functions/{customFunctionId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
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
        key: 'customFunctionId',
        value: customFunctionId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
   * Gets a list of the team's governance groups.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {number} [params.limit] - The maximum number of results to return per page.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GovernanceGroupList>>} - Successful Response
   */
  async getAllGovernanceGroups(
    params?: GetAllGovernanceGroupsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GovernanceGroupList> {
    const resolvedConfig = this.getResolvedConfig(this.getAllGovernanceGroupsConfig, requestConfig);
    z.object({ cursor: z.string().optional(), limit: z.number().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/governance-groups')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: governanceGroupListResponse,
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
        key: 'cursor',
        value: params?.cursor,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .build();
    return this.client.callDirect<GovernanceGroupList>(request);
  }

  /**
   * Creates a custom governance group for the team.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<WriteResult>>} - Governance Group Created
   */
  async createGovernanceGroup(
    body: GovernanceGroupCreate,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<WriteResult> {
    const resolvedConfig = this.getResolvedConfig(this.createGovernanceGroupConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/governance-groups')
      .setRequestSchema(governanceGroupCreateRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: writeResultResponse,
        contentType: ContentType.Json,
        status: 201,
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
        status: 409,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<WriteResult>(request);
  }

  /**
 * Updates a governance group's name or description.
**Note:**

Postman-managed governance groups (`type: system`) can't be updated and return an HTTP `403 Forbidden` response.

 * @param {string} groupId - The governance group's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<WriteResult>>} - Governance Group Updated
 */
  async updateGovernanceGroup(
    groupId: string,
    body: GovernanceGroupUpdate,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<WriteResult> {
    const resolvedConfig = this.getResolvedConfig(this.updateGovernanceGroupConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PATCH')
      .setPath('/governance-groups/{groupId}')
      .setRequestSchema(governanceGroupUpdateRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: writeResultResponse,
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
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 409,
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
      .addHeaderParam({ key: 'Content-Type', value: 'application/merge-patch+json' })
      .addBody(body)
      .build();
    return this.client.callDirect<WriteResult>(request);
  }

  /**
 * Deletes a governance group. This also removes the group's workspace assignments and any ruleset assignments targeting the group. Workspaces and rulesets aren't deleted. On success, this returns an HTTP `204 No Content` response.
**Note:**

Postman-managed governance groups (`type: system`) can't be deleted and return an HTTP `403 Forbidden` response.

 * @param {string} groupId - The governance group's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Governance group deleted.
 */
  async deleteGovernanceGroup(groupId: string, requestConfig?: Partial<SdkConfig>): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.deleteGovernanceGroupConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/governance-groups/{groupId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
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
    return this.client.callDirect<void>(request);
  }

  /**
   * Gets the rulesets assigned to a governance group.
   * @param {string} groupId - The governance group's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<RulesetAssignmentList>>} - Successful Response
   */
  async getGovernanceGroupAssignments(
    groupId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<RulesetAssignmentList> {
    const resolvedConfig = this.getResolvedConfig(
      this.getGovernanceGroupAssignmentsConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/governance-groups/{groupId}/assignments')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: rulesetAssignmentListResponse,
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
      .addPathParam({
        key: 'groupId',
        value: groupId,
      })
      .build();
    return this.client.callDirect<RulesetAssignmentList>(request);
  }

  /**
 * Gets all workspaces assigned to the governance group.
**Note:**

Postman-managed governance groups (`type: system`) are read-only through this API. Listing a system group's workspaces returns an HTTP `403 Forbidden` response.

 * @param {string} groupId - The governance group's ID.
 * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
 * @param {number} [params.limit] - The maximum number of results to return per page.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<WorkspaceAssignmentList>>} - Successful Response
 */
  async getGovernanceGroupWorkspaces(
    groupId: string,
    params?: GetGovernanceGroupWorkspacesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<WorkspaceAssignmentList> {
    const resolvedConfig = this.getResolvedConfig(
      this.getGovernanceGroupWorkspacesConfig,
      requestConfig,
    );
    z.object({ cursor: z.string().optional(), limit: z.number().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/governance-groups/{groupId}/workspaces')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: workspaceAssignmentListResponse,
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
      .addQueryParam({
        key: 'cursor',
        value: params?.cursor,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .build();
    return this.client.callDirect<WorkspaceAssignmentList>(request);
  }

  /**
 * Assigns workspaces to and unassigns workspaces from a governance group. On success, this returns an empty object.
**Note:**

- Postman-managed governance groups (`type: system`) are read-only through this API. Bulk workspace assignments against a system group return an HTTP `403 Forbidden` response.
- If any workspace in the batch can't be applied, no changes are made and the entire request fails with an HTTP `409 Conflict` response.

 * @param {string} groupId - The governance group's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Successful Response
 */
  async updateGovernanceGroupWorkspaces(
    groupId: string,
    body: BulkWorkspacesRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.updateGovernanceGroupWorkspacesConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/governance-groups/{groupId}/bulk-workspaces')
      .setRequestSchema(bulkWorkspacesRequestRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
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
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 409,
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
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
   * Gets a list of the team's rulesets. The response includes both team-owned rulesets (`custom`) and Postman-managed system rulesets (`system`). This endpoint doesn't include ruleset content.
   * @param {string} [params.cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {number} [params.limit] - The maximum number of results to return per page.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<RulesetList>>} - Successful Response
   */
  async getAllRulesets(
    params?: GetAllRulesetsParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<RulesetList> {
    const resolvedConfig = this.getResolvedConfig(this.getAllRulesetsConfig, requestConfig);
    z.object({ cursor: z.string().optional(), limit: z.number().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/rulesets')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: rulesetListResponse,
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
        key: 'cursor',
        value: params?.cursor,
      })
      .addQueryParam({
        key: 'limit',
        value: params?.limit,
      })
      .build();
    return this.client.callDirect<RulesetList>(request);
  }

  /**
   * Creates a new ruleset for the team.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<WriteResult>>} - Ruleset Created
   */
  async createRuleset(
    body: RulesetCreate,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<WriteResult> {
    const resolvedConfig = this.getResolvedConfig(this.createRulesetConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/rulesets')
      .setRequestSchema(rulesetCreateRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: writeResultResponse,
        contentType: ContentType.Json,
        status: 201,
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
        status: 409,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<WriteResult>(request);
  }

  /**
 * Gets information about a ruleset.
By default, the response only returns the ruleset's metadata. To include ruleset contents in the response, pass the `include` query parameter.

 * @param {string} rulesetId - The ruleset's ID.
 * @param {ApiGovernanceInclude} [params.include] - The related fields to include in the response. Currently only `content` is supported. Omit this parameter to receive only the resource's metadata.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<Ruleset>>} - Successful Response
 */
  async getRuleset(
    rulesetId: string,
    params?: GetRulesetParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<Ruleset> {
    const resolvedConfig = this.getResolvedConfig(this.getRulesetConfig, requestConfig);
    z.object({ include: z.unknown().optional() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/rulesets/{rulesetId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: rulesetResponse,
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
        key: 'rulesetId',
        value: rulesetId,
      })
      .addQueryParam({
        key: 'include',
        value: params?.include,
      })
      .build();
    return this.client.callDirect<Ruleset>(request);
  }

  /**
 * Updates a ruleset. Only the fields present in the request body are updated. If `content` is provided, it replaces the entire contents of the ruleset.
**Note:**

Postman-managed system rulesets (`type: system`) can't be updated and return an HTTP `403 Forbidden` response.

 * @param {string} rulesetId - The ruleset's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<WriteResult>>} - Ruleset Updated
 */
  async updateRuleset(
    rulesetId: string,
    body: RulesetUpdate,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<WriteResult> {
    const resolvedConfig = this.getResolvedConfig(this.updateRulesetConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PATCH')
      .setPath('/rulesets/{rulesetId}')
      .setRequestSchema(rulesetUpdateRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: writeResultResponse,
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
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 409,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'rulesetId',
        value: rulesetId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/merge-patch+json' })
      .addBody(body)
      .build();
    return this.client.callDirect<WriteResult>(request);
  }

  /**
 * Deletes a ruleset. On success, this returns an HTTP `204 No Content` response.
**Note:**

Postman-managed system rulesets (`type: system`) can't be deleted and return an HTTP `403 Forbidden` response.

 * @param {string} rulesetId - The ruleset's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<any>>} - Ruleset deleted.
 */
  async deleteRuleset(rulesetId: string, requestConfig?: Partial<SdkConfig>): Promise<void> {
    const resolvedConfig = this.getResolvedConfig(this.deleteRulesetConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/rulesets/{rulesetId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 204,
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
        key: 'rulesetId',
        value: rulesetId,
      })
      .build();
    return this.client.callDirect<void>(request);
  }

  /**
   * Gets a ruleset's governance group assignments.
   * @param {string} rulesetId - The ruleset's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<RulesetAssignmentList>>} - Successful Response
   */
  async getRulesetAssignments(
    rulesetId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<RulesetAssignmentList> {
    const resolvedConfig = this.getResolvedConfig(this.getRulesetAssignmentsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/rulesets/{rulesetId}/assignments')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: rulesetAssignmentListResponse,
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
      .addPathParam({
        key: 'rulesetId',
        value: rulesetId,
      })
      .build();
    return this.client.callDirect<RulesetAssignmentList>(request);
  }

  /**
   * Assigns a ruleset to a governance group.
   * @param {string} rulesetId - The ruleset's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<RulesetAssignmentSummary>>} - Ruleset Assignment Created
   */
  async createRulesetAssignment(
    rulesetId: string,
    body: RulesetAssignmentCreate,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<RulesetAssignmentSummary> {
    const resolvedConfig = this.getResolvedConfig(
      this.createRulesetAssignmentConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/rulesets/{rulesetId}/assignments')
      .setRequestSchema(rulesetAssignmentCreateRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: rulesetAssignmentSummaryResponse,
        contentType: ContentType.Json,
        status: 201,
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
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 409,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'rulesetId',
        value: rulesetId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<RulesetAssignmentSummary>(request);
  }

  /**
   * Unassigns a ruleset from a governance group.
   * @param {string} rulesetId - The ruleset's ID.
   * @param {TargetType} params.targetType - The assignment target type. Currently only `governance_group` is supported.
   * @param {string} params.targetId - The target governance group's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - Deleted
   */
  async deleteRulesetAssignment(
    rulesetId: string,
    params: DeleteRulesetAssignmentParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(
      this.deleteRulesetAssignmentConfig,
      requestConfig,
    );
    z.object({ targetType: z.unknown(), targetId: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/rulesets/{rulesetId}/assignments')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
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
        key: 'rulesetId',
        value: rulesetId,
      })
      .addQueryParam({
        key: 'targetType',
        value: params?.targetType,
      })
      .addQueryParam({
        key: 'targetId',
        value: params?.targetId,
      })
      .build();
    return this.client.callDirect<any>(request);
  }

  /**
 * **This endpoint is deprecated.**
Performs an analysis on the given definition and returns any issues based on your [predefined rulesets](https://learning.postman.com/docs/api-governance/configurable-rules/configurable-rules-overview/). This endpoint can help you understand the violations' impact and offers solutions to help you resolve any errors. You can include this endpoint to your CI/CD process to automate schema validation.

**Note:**

- The maximum allowed size of the definition is 10 MB.
- You must [import and enable](https://learning.postman.com/docs/api-governance/configurable-rules/configuring-api-governance-rules/) Postman's [OWASP security rules](https://postman.postman.co/api-governance/libraries/postman_owasp/view) for this endpoint to return any security rule violations.

 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<SchemaSecurityValidationOkResponse>>} - Successful Response
 */
  async schemaSecurityValidation(
    body: SchemaValidationRequestBody,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<SchemaSecurityValidationOkResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.schemaSecurityValidationConfig,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/security/api-validation')
      .setRequestSchema(schemaValidationRequestBodyRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: schemaSecurityValidationOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: SchemaSecurityValidationBadRequestResponse,
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
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<SchemaSecurityValidationOkResponse>(request);
  }
}
