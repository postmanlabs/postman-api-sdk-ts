# Import_Service

A list of all methods in the `Import_Service` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| :-------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [importOpenApiDefinition](#importopenapidefinition) | Imports an OpenAPI definition into Postman as a new [Postman Collection](https://learning.postman.com/docs/getting-started/creating-the-first-collection/). **Note:** - This endpoint has a rate limit of **10 requests per 10 seconds**. - The Postman web app does not support the `file` input method type. - If you do not include the `workspace` query parameter, the system imports the definition into the oldest personal Internal workspace you own. - For an example of importing a file, see the [Postman API collection](https://www.postman.com/postman/postman-public-workspace/example/12959542-08d74ce2-8150-4f72-99a7-11e60492eb47). |

## importOpenApiDefinition

Imports an OpenAPI definition into Postman as a new [Postman Collection](https://learning.postman.com/docs/getting-started/creating-the-first-collection/). **Note:** - This endpoint has a rate limit of **10 requests per 10 seconds**. - The Postman web app does not support the `file` input method type. - If you do not include the `workspace` query parameter, the system imports the definition into the oldest personal Internal workspace you own. - For an example of importing a file, see the [Postman API collection](https://www.postman.com/postman/postman-public-workspace/example/12959542-08d74ce2-8150-4f72-99a7-11e60492eb47).

- HTTP Method: `POST`
- Endpoint: `/import/openapi`

**Parameters**

| Name      | Type                                                            | Required | Description         |
| :-------- | :-------------------------------------------------------------- | :------- | :------------------ |
| body      | [ImportOpenApiDefinition](../models/ImportOpenApiDefinition.md) | ❌       | The request body.   |
| workspace | string                                                          | ✅       | The workspace's ID. |

**Return Type**

`ImportOpenApiDefinitionOkResponse`

**Example Usage Code Snippet**

```typescript
import {
  FolderStrategy,
  GenerateCollectionOptions,
  ImportOpenApiDefinition,
  IndentCharacter,
  JsonSchema,
  JsonSchemaType,
  PostmanApi,
  RequestNameSource,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const jsonSchemaType = JsonSchemaType.JSON;

  const requestNameSource = RequestNameSource.FALLBACK;

  const indentCharacter = IndentCharacter.TAB;

  const folderStrategy = FolderStrategy.PATHS;

  const generateCollectionOptions: GenerateCollectionOptions = {
    requestNameSource: requestNameSource,
    indentCharacter: indentCharacter,
    folderStrategy: folderStrategy,
    includeAuthInfoInExample: true,
    enableOptionalParameters: true,
    keepImplicitHeaders: true,
    includeDeprecated: true,
    alwaysInheritAuthentication: true,
    nestedFolderHierarchy: true,
  };

  const jsonSchema: JsonSchema = {
    type: jsonSchemaType,
    input: {},
    options: generateCollectionOptions,
  };

  const data = await postmanApi.import_.importOpenApiDefinition(jsonSchema, {
    workspace: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
  });

  console.log(data);
})();
```
