import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  SchemaValidationRequestBody,
  schemaValidationRequestBodyRequest,
} from './models/schema-validation-request-body';
import {
  SchemaSecurityValidationOkResponse,
  schemaSecurityValidationOkResponseResponse,
} from './models/schema-security-validation-ok-response';
import { SchemaSecurityValidationBadRequestResponse } from './models/schema-security-validation-bad-request-response';
import { Common401Error } from '../common/common401-error';
import { Common403Error } from '../common/common403-error';
import { Common500Error } from '../common/common500-error';

/**
 * Service class for ApiSecurityService operations.
 * Provides methods to interact with ApiSecurityService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class ApiSecurityService extends BaseService {
  protected schemaSecurityValidationConfig?: Partial<SdkConfig>;

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
 * Performs an analysis on the given definition and returns any issues based on your [predefined rulesets](https://learning.postman.com/docs/api-governance/configurable-rules/configurable-rules-overview/). This endpoint can help you understand the violations' impact and offers solutions to help you resolve any errors. You can include this endpoint to your CI/CD process to automate schema validation.
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
