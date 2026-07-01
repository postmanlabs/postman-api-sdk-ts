# GenerateCollectionOptions

The advanced creation options and their values. For more details, see Postman's [OpenAPI to Postman Collection Converter OPTIONS documentation](https://github.com/postmanlabs/openapi-to-postman/blob/develop/OPTIONS.md). These properties are case-sensitive.

**Properties**

| Name                        | Type              | Required | Description                                                                                                                                                                                                                     |
| :-------------------------- | :---------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| requestNameSource           | RequestNameSource | ❌       | Determines how the generated collection's requests are named. If the `Fallback` value is passed, then the request is named after one of the following values in the schema: - `summary` - `operationId` - `description` - `url` |
| indentCharacter             | IndentCharacter   | ❌       | The option for setting the indentation character type.                                                                                                                                                                          |
| parametersResolution        | string            | ❌       | Generated collections use examples for parameter generation by default. Any existing collections generated using the schema parameter generation will continue to sync using their existing strategy.                           |
| folderStrategy              | FolderStrategy    | ❌       | Whether to create folders based on the specification's `paths` or `tags` properties.                                                                                                                                            |
| includeAuthInfoInExample    | boolean           | ❌       | If true, include the authentication parameters in the example request.                                                                                                                                                          |
| enableOptionalParameters    | boolean           | ❌       | If true, enables optional parameters in the collection and its requests.                                                                                                                                                        |
| keepImplicitHeaders         | boolean           | ❌       | If true, keep the implicit headers from the OpenAPI specification, which are removed by default.                                                                                                                                |
| includeDeprecated           | boolean           | ❌       | If true, includes all deprecated operations, parameters, and properties in generated collection.                                                                                                                                |
| alwaysInheritAuthentication | boolean           | ❌       | Whether authentication details should be included in all requests, or always inherited from the collection.                                                                                                                     |
| nestedFolderHierarchy       | boolean           | ❌       | If true, creates subfolders in the generated collection based on the order of the endpoints' tags.                                                                                                                              |

# RequestNameSource

Determines how the generated collection's requests are named. If the `Fallback` value is passed, then the request is named after one of the following values in the schema: - `summary` - `operationId` - `description` - `url`

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| FALLBACK | string | ✅       | "Fallback"  |
| URL      | string | ✅       | "URL"       |

# IndentCharacter

The option for setting the indentation character type.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| TAB   | string | ✅       | "Tab"       |
| SPACE | string | ✅       | "Space"     |

# FolderStrategy

Whether to create folders based on the specification's `paths` or `tags` properties.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| PATHS | string | ✅       | "Paths"     |
| TAGS  | string | ✅       | "Tags"      |
