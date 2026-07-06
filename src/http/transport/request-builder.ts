import z, { ZodType } from 'zod';
import { Request } from './request';
import {
  CreateRequestParameters,
  RequestParameter,
  RequestPagination,
  RequestCursorPagination,
  ResponseDefinition,
  ErrorDefinition,
} from './types';
import { ContentType, HttpMethod, SdkConfig } from '../types';
import { Environment } from '../environment';
import { SerializationStyle } from '../serialization/base-serializer';

/**
 * Builder pattern implementation for constructing HTTP requests.
 * Provides a fluent interface for configuring all aspects of an API request.
 * @template Page - The type for paginated response pages
 */
export class RequestBuilder<Page extends unknown[] = unknown[]> {
  /** Internal request parameters being built */
  private params: CreateRequestParameters<Page>;

  /**
   * Creates a new request builder with default configuration.
   * Initializes retry settings, validation options, and empty parameter collections.
   */
  constructor() {
    this.params = {
      baseUrl: Environment.DEFAULT,
      method: 'GET',
      path: '',
      config: {
        retry: {
          attempts: 3,
          delayMs: 150,
          maxDelayMs: 5000,
          backoffFactor: 2,
          jitterMs: 50,
          httpMethodsToRetry: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
        },
        validation: { responseValidation: true },
      } as SdkConfig,
      responses: [],
      errors: [],
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      pathParams: new Map(),
      queryParams: new Map(),
      headers: new Map(),
      cookies: new Map(),
    };
    this.addHeaderParam({
      key: 'User-Agent',
      value: 'postman-codegen/1.5.1 @postman/api-sdk/1.43.0 (typescript)',
    });
  }

  setConfig(config: SdkConfig): RequestBuilder<Page> {
    // Merge user config with default config, preserving defaults for unspecified nested properties
    let mergedRetry = config.retry ?? this.params.config.retry;
    if (config.retry !== undefined && this.params.config.retry !== undefined) {
      mergedRetry = { ...this.params.config.retry, ...config.retry };
    }

    let mergedValidation = config.validation ?? this.params.config.validation;
    if (config.validation !== undefined && this.params.config.validation !== undefined) {
      mergedValidation = { ...this.params.config.validation, ...config.validation };
    }

    this.params.config = {
      ...this.params.config,
      ...config,
      ...(mergedRetry !== undefined && { retry: mergedRetry }),
      ...(mergedValidation !== undefined && { validation: mergedValidation }),
    } as SdkConfig;
    return this;
  }

  /**
   * Sets the base URL for the request using hierarchical configuration resolution.
   *
   * Resolution logic:
   * 1. First tries to resolve 'baseUrl' (string) from the resolved config
   * 2. If no 'baseUrl' found, falls back to 'environment' (enum) from the resolved config
   * 3. 'baseUrl' always takes precedence over 'environment'
   *
   * @param config - Resolved configuration from all hierarchy levels
   * @returns This builder instance for method chaining
   */
  setBaseUrl(config?: SdkConfig): RequestBuilder<Page> {
    if (!config) {
      return this;
    }

    // First try baseUrl string
    if ('baseUrl' in config && typeof config.baseUrl === 'string' && config.baseUrl) {
      this.params.baseUrl = config.baseUrl;
      return this;
    }

    // If no baseUrl string, try environment enum
    if ('environment' in config && config.environment) {
      this.params.baseUrl = config.environment as string;
    }

    return this;
  }

  setMethod(method: HttpMethod): RequestBuilder<Page> {
    this.params.method = method;
    return this;
  }

  setPath(path: string): RequestBuilder<Page> {
    this.params.path = path;
    return this;
  }

  setRequestContentType(contentType: ContentType): RequestBuilder<Page> {
    this.params.requestContentType = contentType;
    return this;
  }

  setRequestSchema(requestSchema: ZodType): RequestBuilder<Page> {
    this.params.requestSchema = requestSchema;
    return this;
  }

  setFilename(filename?: string): RequestBuilder<Page> {
    if (filename !== undefined) {
      this.params.filename = filename;
    }
    return this;
  }

  setFilenames(filenames?: string[]): RequestBuilder<Page> {
    if (filenames !== undefined) {
      this.params.filenames = filenames;
    }
    return this;
  }

  setPagination(pagination: RequestPagination<Page>): RequestBuilder<Page> {
    this.params.pagination = pagination;
    return this;
  }

  setCursorPagination(pagination: RequestCursorPagination<Page>): RequestBuilder<Page> {
    this.params.pagination = pagination;
    return this;
  }

  addAccessTokenAuth(accessToken?: string, prefix?: string): RequestBuilder<Page> {
    if (accessToken === undefined) {
      return this;
    }

    this.params.headers.set('Authorization', {
      key: 'Authorization',
      value: `${prefix ?? 'Bearer'} ${accessToken}`,
      explode: false,
      style: SerializationStyle.SIMPLE,
      encode: true,
      isLimit: false,
      isOffset: false,
      isCursor: false,
    });
    return this;
  }

  addBasicAuth(username?: string, password?: string): RequestBuilder<Page> {
    if (username === undefined || password === undefined) {
      return this;
    }

    this.params.headers.set('Authorization', {
      key: 'Authorization',
      value: `Basic ${this.toBase64(`${username}:${password}`)}`,
      explode: false,
      style: SerializationStyle.SIMPLE,
      encode: true,
      isLimit: false,
      isOffset: false,
      isCursor: false,
    });
    return this;
  }

  addApiKeyAuth(
    apiKey?: string,
    keyName?: string,
    location?: 'header' | 'query' | 'cookie',
  ): RequestBuilder<Page> {
    if (apiKey === undefined) {
      return this;
    }

    const resolvedKeyName = keyName ?? 'x-api-key';
    const resolvedLocation = location ?? 'header';
    // Query params use `form`/explode-true so they render as `key=value`;
    // headers and cookies render the value plainly (`simple`/explode-false).
    const isQuery = resolvedLocation === 'query';
    const param = {
      key: resolvedKeyName,
      value: apiKey,
      explode: isQuery,
      style: isQuery ? SerializationStyle.FORM : SerializationStyle.SIMPLE,
      encode: true,
      isLimit: false,
      isOffset: false,
      isCursor: false,
    };

    if (resolvedLocation === 'query') {
      this.params.queryParams.set(resolvedKeyName, param);
    } else if (resolvedLocation === 'cookie') {
      this.params.cookies.set(resolvedKeyName, param);
    } else {
      this.params.headers.set(resolvedKeyName, param);
    }
    return this;
  }

  addResponse(response: ResponseDefinition): RequestBuilder<Page> {
    this.params.responses.push(response);
    return this;
  }

  addError(error: ErrorDefinition): RequestBuilder<Page> {
    this.params.errors.push(error);
    return this;
  }

  addBody(body?: any): RequestBuilder<Page> {
    if (body !== undefined) {
      this.params.body = body;
    }
    return this;
  }

  addPathParam(param: Partial<RequestParameter>): RequestBuilder<Page> {
    if (param.value === undefined || param.key === undefined) {
      return this;
    }

    this.params.pathParams.set(param.key, {
      key: param.key,
      value: param.value,
      explode: param.explode ?? true,
      style: param.style ?? SerializationStyle.SIMPLE,
      encode: param.encode ?? true,
      isLimit: !!param.isLimit,
      isOffset: !!param.isOffset,
      isCursor: !!param.isCursor,
    });

    return this;
  }

  addQueryParam(param: Partial<RequestParameter>): RequestBuilder<Page> {
    if (param.key === undefined) {
      return this;
    }

    this.params.queryParams.set(param.key, {
      key: param.key,
      value: param.value,
      explode: param.explode ?? true,
      style: param.style ?? SerializationStyle.FORM,
      encode: param.encode ?? true,
      isLimit: !!param.isLimit,
      isOffset: !!param.isOffset,
      isCursor: !!param.isCursor,
    });

    return this;
  }

  addHeaderParam(param: Partial<RequestParameter>): RequestBuilder<Page> {
    if (param.value === undefined || param.key === undefined) {
      return this;
    }

    this.params.headers.set(param.key, {
      key: param.key,
      value: param.value,
      explode: param.explode ?? true,
      style: param.style ?? SerializationStyle.SIMPLE,
      encode: param.encode ?? false,
      isLimit: !!param.isLimit,
      isOffset: !!param.isOffset,
      isCursor: !!param.isCursor,
    });

    return this;
  }

  addCookieParam(param: Partial<RequestParameter>): RequestBuilder<Page> {
    if (param.value === undefined || param.key === undefined) {
      return this;
    }

    this.params.cookies.set(param.key, {
      key: param.key,
      value: param.value,
      explode: param.explode ?? true,
      style: param.style ?? SerializationStyle.FORM,
      encode: param.encode ?? false,
      isLimit: !!param.isLimit,
      isOffset: !!param.isOffset,
      isCursor: !!param.isCursor,
    });

    return this;
  }

  /**
   * Builds and returns the configured Request object.
   * Call this method after configuring all request parameters.
   * @returns A new Request instance with all configured parameters
   */
  public build(): Request<Page> {
    return new Request<Page>(this.params);
  }

  /**
   * Converts a string to Base64 encoding.
   * Works in both Node.js and browser environments.
   * @param str - The string to encode
   * @returns The Base64-encoded string
   */
  private toBase64(str: string): string {
    if (typeof window === 'undefined') {
      return Buffer.from(str, 'utf-8').toString('base64');
    } else {
      return btoa(unescape(encodeURIComponent(str)));
    }
  }
}
