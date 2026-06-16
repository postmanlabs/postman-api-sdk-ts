import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  ImportOpenApiDefinition,
  importOpenApiDefinitionRequest,
} from './models/import-open-api-definition';
import {
  ImportOpenApiDefinitionOkResponse,
  importOpenApiDefinitionOkResponseResponse,
} from './models/import-open-api-definition-ok-response';
import { ImportOpenApiDefinitionBadRequestResponse } from './models/import-open-api-definition-bad-request-response';
import { Common401Error } from '../common/common401-error';
import { Common500Error } from '../common/common500-error';
import { ImportOpenApiDefinitionParams } from './request-params';

/**
 * Service class for Import_Service operations.
 * Provides methods to interact with Import_Service-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class Import_Service extends BaseService {
  protected importOpenApiDefinitionConfig?: Partial<SdkConfig>;

  /**
   * Sets method-level configuration for importOpenApiDefinition.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setImportOpenApiDefinitionConfig(config: Partial<SdkConfig>): this {
    this.importOpenApiDefinitionConfig = config;
    return this;
  }

  /**
 * Imports an OpenAPI definition into Postman as a new [Postman Collection](https://learning.postman.com/docs/getting-started/creating-the-first-collection/).
**Note:**

- The Postman web app does not support the `file` input method type.
- If you do not include the `workspace` query parameter, the system imports the definition into the oldest personal Internal workspace you own.
- For an example of importing a file, see the [Postman API collection](https://www.postman.com/postman/postman-public-workspace/example/12959542-08d74ce2-8150-4f72-99a7-11e60492eb47).

 * @param {string} params.workspace - The workspace's ID.
 * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
 * @returns {Promise<HttpResponse<ImportOpenApiDefinitionOkResponse>>} - Successful Response
 */
  async importOpenApiDefinition(
    body: ImportOpenApiDefinition,
    params: ImportOpenApiDefinitionParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<ImportOpenApiDefinitionOkResponse> {
    const resolvedConfig = this.getResolvedConfig(
      this.importOpenApiDefinitionConfig,
      requestConfig,
    );
    z.object({ workspace: z.string() }).parse(params ?? {});
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/import/openapi')
      .setRequestSchema(importOpenApiDefinitionRequest)
      .addBasicAuth(resolvedConfig?.username, resolvedConfig?.password)
      .addApiKeyAuth(resolvedConfig?.apiKey, 'x-api-key', 'header')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: importOpenApiDefinitionOkResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ImportOpenApiDefinitionBadRequestResponse,
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
        key: 'workspace',
        value: params?.workspace,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<ImportOpenApiDefinitionOkResponse>(request);
  }
}
