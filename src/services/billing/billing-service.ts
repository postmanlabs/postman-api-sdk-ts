import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { AccountInformation, accountInformationResponse } from './models/account-information';
import { ErrorTypeTitleDetailStatus } from '../common/error-type-title-detail-status';
import { Common401Error } from '../common/common401-error';
import { Common500Error } from '../common/common500-error';
import { GetAccountInvoices, getAccountInvoicesResponse } from './models/get-account-invoices';
import { GetAccountInvoicesParams } from './request-params';

/**
 * Service class for BillingService operations.
 * Provides methods to interact with BillingService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class BillingService extends BaseService {
  protected getAccountsConfig?: Partial<SdkConfig>;

  protected getAccountInvoicesConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for getAccounts.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAccountsConfig(config: Partial<SdkConfig>): this {
    this.getAccountsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getAccountInvoices.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetAccountInvoicesConfig(config: Partial<SdkConfig>): this {
    this.getAccountInvoicesConfig = config;
    return this;
  }

  /**
   * Gets Postman billing account details for the given team.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<AccountInformation>>} - Successful Response
   */
  async getAccounts(requestConfig?: Partial<SdkConfig>): Promise<AccountInformation> {
    const resolvedConfig = this.getResolvedConfig(this.getAccountsConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/accounts')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: accountInformationResponse,
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
        error: Common500Error,
        contentType: ContentType.Json,
        status: 500,
      })
      .build();
    return this.client.callDirect<AccountInformation>(request);
  }

  /**
   * Gets all invoices for a Postman billing account filtered by the status of the invoice.
   * @param {string} accountId - The account's ID.
   * @param {BillingAccountStatus} params.status - The account's status.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GetAccountInvoices>>} - Successful Response
   */
  async getAccountInvoices(
    accountId: string,
    params: GetAccountInvoicesParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<GetAccountInvoices> {
    const resolvedConfig = this.getResolvedConfig(this.getAccountInvoicesConfig, requestConfig);
    z.object({ status: z.unknown() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/accounts/{accountId}/invoices')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getAccountInvoicesResponse,
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
        key: 'accountId',
        value: accountId,
      })
      .addQueryParam({
        key: 'status',
        value: params?.status,
      })
      .build();
    return this.client.callDirect<GetAccountInvoices>(request);
  }
}
