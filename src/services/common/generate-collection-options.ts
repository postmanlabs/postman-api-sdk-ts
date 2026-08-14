import { z } from 'zod';

/**
 * Zod schema for the GenerateCollectionOptions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const generateCollectionOptions = z.lazy(() => {
  return z.object({
    requestNameSource: z.string().optional(),
    indentCharacter: z.string().optional(),
    parametersResolution: z.string().optional(),
    folderStrategy: z.string().optional(),
    includeAuthInfoInExample: z.boolean().optional(),
    enableOptionalParameters: z.boolean().optional(),
    keepImplicitHeaders: z.boolean().optional(),
    includeDeprecated: z.boolean().optional(),
    alwaysInheritAuthentication: z.boolean().optional(),
    nestedFolderHierarchy: z.boolean().optional(),
  });
});

/**
 * The advanced creation options and their values. For more details, see Postman's [OpenAPI to Postman Collection Converter OPTIONS documentation](https://github.com/postmanlabs/openapi-to-postman/blob/develop/OPTIONS.md). These properties are case-sensitive.
 * @typedef {GenerateCollectionOptions} generateCollectionOptions
 * @property {RequestNameSource} requestNameSource - Determines how the generated collection's requests are named. If the `Fallback` value is passed, then the request is named after one of the following values in the schema:
- `summary`
- `operationId`
- `description`
- `url`

 * @property {IndentCharacter} indentCharacter - The option for setting the indentation character type.
 * @property {string} parametersResolution - Generated collections use examples for parameter generation by default. Any existing collections generated using the schema parameter generation will continue to sync using their existing strategy.
 * @property {FolderStrategy} folderStrategy - Whether to create folders based on the specification's `paths` or `tags` properties.
 * @property {boolean} includeAuthInfoInExample - If true, include the authentication parameters in the example request.
 * @property {boolean} enableOptionalParameters - If true, enables optional parameters in the collection and its requests.
 * @property {boolean} keepImplicitHeaders - If true, keep the implicit headers from the OpenAPI specification, which are removed by default.
 * @property {boolean} includeDeprecated - If true, includes all deprecated operations, parameters, and properties in generated collection.
 * @property {boolean} alwaysInheritAuthentication - Whether authentication details should be included in all requests, or always inherited from the collection.
 * @property {boolean} nestedFolderHierarchy - If true, creates subfolders in the generated collection based on the order of the endpoints' tags.
 */
export type GenerateCollectionOptions = z.infer<typeof generateCollectionOptions>;

/**
 * Zod schema for mapping API responses to the GenerateCollectionOptions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateCollectionOptionsResponse = z.lazy(() => {
  return z
    .object({
      requestNameSource: z.string().optional(),
      indentCharacter: z.string().optional(),
      parametersResolution: z.string().optional(),
      folderStrategy: z.string().optional(),
      includeAuthInfoInExample: z.boolean().optional(),
      enableOptionalParameters: z.boolean().optional(),
      keepImplicitHeaders: z.boolean().optional(),
      includeDeprecated: z.boolean().optional(),
      alwaysInheritAuthentication: z.boolean().optional(),
      nestedFolderHierarchy: z.boolean().optional(),
    })
    .transform((data) => ({
      requestNameSource: data['requestNameSource'],
      indentCharacter: data['indentCharacter'],
      parametersResolution: data['parametersResolution'],
      folderStrategy: data['folderStrategy'],
      includeAuthInfoInExample: data['includeAuthInfoInExample'],
      enableOptionalParameters: data['enableOptionalParameters'],
      keepImplicitHeaders: data['keepImplicitHeaders'],
      includeDeprecated: data['includeDeprecated'],
      alwaysInheritAuthentication: data['alwaysInheritAuthentication'],
      nestedFolderHierarchy: data['nestedFolderHierarchy'],
    }));
});

/**
 * Zod schema for mapping the GenerateCollectionOptions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateCollectionOptionsRequest = z.lazy(() => {
  return z
    .object({
      requestNameSource: z.string().optional(),
      indentCharacter: z.string().optional(),
      parametersResolution: z.string().optional(),
      folderStrategy: z.string().optional(),
      includeAuthInfoInExample: z.boolean().optional(),
      enableOptionalParameters: z.boolean().optional(),
      keepImplicitHeaders: z.boolean().optional(),
      includeDeprecated: z.boolean().optional(),
      alwaysInheritAuthentication: z.boolean().optional(),
      nestedFolderHierarchy: z.boolean().optional(),
    })
    .transform((data) => ({
      requestNameSource: data['requestNameSource'],
      indentCharacter: data['indentCharacter'],
      parametersResolution: data['parametersResolution'],
      folderStrategy: data['folderStrategy'],
      includeAuthInfoInExample: data['includeAuthInfoInExample'],
      enableOptionalParameters: data['enableOptionalParameters'],
      keepImplicitHeaders: data['keepImplicitHeaders'],
      includeDeprecated: data['includeDeprecated'],
      alwaysInheritAuthentication: data['alwaysInheritAuthentication'],
      nestedFolderHierarchy: data['nestedFolderHierarchy'],
    }));
});
