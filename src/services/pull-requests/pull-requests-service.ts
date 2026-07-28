import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  GetPullRequestOkResponse,
  getPullRequestOkResponseResponse,
} from './models/get-pull-request-ok-response';
import { ErrorTypeTitleDetailStatus } from '../common/error-type-title-detail-status';
import { Common500Error } from '../common/common500-error';
import { UpdatePullRequest, updatePullRequestRequest } from './models/update-pull-request';
import { PullRequestUpdated, pullRequestUpdatedResponse } from './models/pull-request-updated';
import { ReviewPullRequest, reviewPullRequestRequest } from './models/review-pull-request';
import {
  ReviewPullRequestOkResponse,
  reviewPullRequestOkResponseResponse,
} from './models/review-pull-request-ok-response';

/**
 * Service class for PullRequestsService operations.
 * Provides methods to interact with PullRequestsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class PullRequestsService extends BaseService {
  protected getPullRequestConfig?: Partial<SdkConfig>;

  protected updatePullRequestConfig?: Partial<SdkConfig>;

  protected reviewPullRequestConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getPullRequest.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetPullRequestConfig(config: Partial<SdkConfig>): this {
    this.getPullRequestConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for updatePullRequest.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdatePullRequestConfig(config: Partial<SdkConfig>): this {
    this.updatePullRequestConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for reviewPullRequest.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setReviewPullRequestConfig(config: Partial<SdkConfig>): this {
    this.reviewPullRequestConfig = config;
    return this;
  }

  /**
   * Gets information about a pull request, such as the source and destination details, who reviewed the pull request, the merge's current status, and whether the element is accessible.
   * @param {string} pullRequestId - The pull request's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetPullRequestOkResponse>>} - Successful Response
   */
  async getPullRequest(
    pullRequestId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetPullRequestOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.getPullRequestConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/pull-requests/{pullRequestId}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getPullRequestOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'pullRequestId',
        value: pullRequestId,
      })
      .build();
    return this.client.callDirect<GetPullRequestOkResponse>(request);
  }

  /**
   * Updates an open pull request.
   * @param {string} pullRequestId - The pull request's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<PullRequestUpdated>>} - Successful Response
   */
  async updatePullRequest(
    pullRequestId: string,
    body: UpdatePullRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<PullRequestUpdated> {
    const resolvedConfig = this.getResolvedConfig(this.updatePullRequestConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/pull-requests/{pullRequestId}')
      .setRequestSchema(updatePullRequestRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: pullRequestUpdatedResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ErrorTypeTitleDetailStatus,
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
      .addPathParam({
        key: 'pullRequestId',
        value: pullRequestId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<PullRequestUpdated>(request);
  }

  /**
   * Updates the [review](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/reviewing-pull-requests/) status of a pull request.
   * @param {string} pullRequestId - The pull request's ID.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ReviewPullRequestOkResponse>>} - Successful Response
   */
  async reviewPullRequest(
    pullRequestId: string,
    body: ReviewPullRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ReviewPullRequestOkResponse> {
    const resolvedConfig = this.getResolvedConfig(this.reviewPullRequestConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/pull-requests/{pullRequestId}/tasks')
      .setRequestSchema(reviewPullRequestRequest)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: reviewPullRequestOkResponseResponse,
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
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .addPathParam({
        key: 'pullRequestId',
        value: pullRequestId,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<ReviewPullRequestOkResponse>(request);
  }
}
