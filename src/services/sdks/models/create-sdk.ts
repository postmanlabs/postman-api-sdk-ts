import { z } from 'zod';
import { SdkSource, sdkSource, sdkSourceRequest, sdkSourceResponse } from './sdk-source';
import {
  SdkAuthorData,
  sdkAuthorData,
  sdkAuthorDataRequest,
  sdkAuthorDataResponse,
} from './sdk-author-data';
import {
  SdkRetryOptions,
  sdkRetryOptions,
  sdkRetryOptionsRequest,
  sdkRetryOptionsResponse,
} from './sdk-retry-options';
import {
  TypescriptOptions,
  typescriptOptions,
  typescriptOptionsRequest,
  typescriptOptionsResponse,
} from './typescript-options';
import {
  PythonOptions,
  pythonOptions,
  pythonOptionsRequest,
  pythonOptionsResponse,
} from './python-options';
import { GoOptions, goOptions, goOptionsRequest, goOptionsResponse } from './go-options';
import { JavaOptions, javaOptions, javaOptionsRequest, javaOptionsResponse } from './java-options';
import {
  CsharpOptions,
  csharpOptions,
  csharpOptionsRequest,
  csharpOptionsResponse,
} from './csharp-options';
import { RubyOptions, rubyOptions, rubyOptionsRequest, rubyOptionsResponse } from './ruby-options';
import { PhpOptions, phpOptions, phpOptionsRequest, phpOptionsResponse } from './php-options';
import {
  KotlinOptions,
  kotlinOptions,
  kotlinOptionsRequest,
  kotlinOptionsResponse,
} from './kotlin-options';
import { RustOptions, rustOptions, rustOptionsRequest, rustOptionsResponse } from './rust-options';
import { CliOptions, cliOptions, cliOptionsRequest, cliOptionsResponse } from './cli-options';

/**
 * Zod schema for the CreateSdk model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createSdk = z.lazy(() => {
  return z.object({
    source: sdkSource,
    language: z.string(),
    sdkVersion: z.string().optional(),
    authors: z.array(sdkAuthorData).optional(),
    retry: sdkRetryOptions.optional(),
    typescriptOptions: typescriptOptions.optional(),
    pythonOptions: pythonOptions.optional(),
    goOptions: goOptions.optional(),
    javaOptions: javaOptions.optional(),
    csharpOptions: csharpOptions.optional(),
    rubyOptions: rubyOptions.optional(),
    phpOptions: phpOptions.optional(),
    kotlinOptions: kotlinOptions.optional(),
    rustOptions: rustOptions.optional(),
    cliOptions: cliOptions.optional(),
  });
});

/**
 * **Note:**

- Only the object passed in the request body that matches the value in the `language` property gets read, and all other objects are ignored.
- The language option object is optional. When the language identifier is omitted, it's derived from the `source` element name and its workspace.

 * @typedef  {CreateSdk} createSdk - **Note:**

- Only the object passed in the request body that matches the value in the `language` property gets read, and all other objects are ignored.
- The language option object is optional. When the language identifier is omitted, it's derived from the `source` element name and its workspace.
 - **Note:**

- Only the object passed in the request body that matches the value in the `language` property gets read, and all other objects are ignored.
- The language option object is optional. When the language identifier is omitted, it's derived from the `source` element name and its workspace.

 * @property {SdkSource} - The collection or specification that the SDK is generated from.
 * @property {SdkLanguage} - The target output language for the generated SDK.
 * @property {string} - An optional override for the SDK version. If this isn't provided, the next version is resolved from the latest auto-pull request.
 * @property {SdkAuthorData[]} - A list of package authors written into the generated manifest.
 * @property {SdkRetryOptions} - Retry behavior baked into the generated SDK's HTTP client. A power-user option; sensible defaults apply for any field left unset.
 * @property {TypescriptOptions} - TypeScript-specific SDK generation options.
 * @property {PythonOptions} - Python-specific SDK generation options.
 * @property {GoOptions} - Go-specific SDK generation options.
 * @property {JavaOptions} - Java-specific SDK generation options.
 * @property {CsharpOptions} - C#-specific SDK generation options.
 * @property {RubyOptions} - Ruby-specific generation options.
 * @property {PhpOptions} - PHP-specific SDK generation options.
 * @property {KotlinOptions} - Kotlin-specific SDK generation options.
 * @property {RustOptions} - Rust-specific SDK generation options.
 * @property {CliOptions} - CLI-specific SDK generation options.
 */
export type CreateSdk = z.infer<typeof createSdk>;

/**
 * Zod schema for mapping API responses to the CreateSdk application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createSdkResponse = z.lazy(() => {
  return z
    .object({
      source: sdkSourceResponse,
      language: z.string(),
      sdkVersion: z.string().optional(),
      authors: z.array(sdkAuthorDataResponse).optional(),
      retry: sdkRetryOptionsResponse.optional(),
      typescriptOptions: typescriptOptionsResponse.optional(),
      pythonOptions: pythonOptionsResponse.optional(),
      goOptions: goOptionsResponse.optional(),
      javaOptions: javaOptionsResponse.optional(),
      csharpOptions: csharpOptionsResponse.optional(),
      rubyOptions: rubyOptionsResponse.optional(),
      phpOptions: phpOptionsResponse.optional(),
      kotlinOptions: kotlinOptionsResponse.optional(),
      rustOptions: rustOptionsResponse.optional(),
      cliOptions: cliOptionsResponse.optional(),
    })
    .transform((data) => ({
      source: data['source'],
      language: data['language'],
      sdkVersion: data['sdkVersion'],
      authors: data['authors'],
      retry: data['retry'],
      typescriptOptions: data['typescriptOptions'],
      pythonOptions: data['pythonOptions'],
      goOptions: data['goOptions'],
      javaOptions: data['javaOptions'],
      csharpOptions: data['csharpOptions'],
      rubyOptions: data['rubyOptions'],
      phpOptions: data['phpOptions'],
      kotlinOptions: data['kotlinOptions'],
      rustOptions: data['rustOptions'],
      cliOptions: data['cliOptions'],
    }));
});

/**
 * Zod schema for mapping the CreateSdk application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createSdkRequest = z.lazy(() => {
  return z
    .object({
      source: sdkSourceRequest,
      language: z.string(),
      sdkVersion: z.string().optional(),
      authors: z.array(sdkAuthorDataRequest).optional(),
      retry: sdkRetryOptionsRequest.optional(),
      typescriptOptions: typescriptOptionsRequest.optional(),
      pythonOptions: pythonOptionsRequest.optional(),
      goOptions: goOptionsRequest.optional(),
      javaOptions: javaOptionsRequest.optional(),
      csharpOptions: csharpOptionsRequest.optional(),
      rubyOptions: rubyOptionsRequest.optional(),
      phpOptions: phpOptionsRequest.optional(),
      kotlinOptions: kotlinOptionsRequest.optional(),
      rustOptions: rustOptionsRequest.optional(),
      cliOptions: cliOptionsRequest.optional(),
    })
    .transform((data) => ({
      source: data['source'],
      language: data['language'],
      sdkVersion: data['sdkVersion'],
      authors: data['authors'],
      retry: data['retry'],
      typescriptOptions: data['typescriptOptions'],
      pythonOptions: data['pythonOptions'],
      goOptions: data['goOptions'],
      javaOptions: data['javaOptions'],
      csharpOptions: data['csharpOptions'],
      rubyOptions: data['rubyOptions'],
      phpOptions: data['phpOptions'],
      kotlinOptions: data['kotlinOptions'],
      rustOptions: data['rustOptions'],
      cliOptions: data['cliOptions'],
    }));
});
