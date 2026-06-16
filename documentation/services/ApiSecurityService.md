# ApiSecurityService

A list of all methods in the `ApiSecurityService` service. Click on the method name to view detailed information about that method.

| Methods                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| :---------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [schemaSecurityValidation](#schemasecurityvalidation) | Performs an analysis on the given definition and returns any issues based on your [predefined rulesets](https://learning.postman.com/docs/api-governance/configurable-rules/configurable-rules-overview/). This endpoint can help you understand the violations' impact and offers solutions to help you resolve any errors. You can include this endpoint to your CI/CD process to automate schema validation. **Note:** - The maximum allowed size of the definition is 10 MB. - You must [import and enable](https://learning.postman.com/docs/api-governance/configurable-rules/configuring-api-governance-rules/) Postman's [OWASP security rules](https://postman.postman.co/api-governance/libraries/postman_owasp/view) for this endpoint to return any security rule violations. |

## schemaSecurityValidation

Performs an analysis on the given definition and returns any issues based on your [predefined rulesets](https://learning.postman.com/docs/api-governance/configurable-rules/configurable-rules-overview/). This endpoint can help you understand the violations' impact and offers solutions to help you resolve any errors. You can include this endpoint to your CI/CD process to automate schema validation. **Note:** - The maximum allowed size of the definition is 10 MB. - You must [import and enable](https://learning.postman.com/docs/api-governance/configurable-rules/configuring-api-governance-rules/) Postman's [OWASP security rules](https://postman.postman.co/api-governance/libraries/postman_owasp/view) for this endpoint to return any security rule violations.

- HTTP Method: `POST`
- Endpoint: `/security/api-validation`

**Parameters**

| Name | Type                                                                    | Required | Description       |
| :--- | :---------------------------------------------------------------------- | :------- | :---------------- |
| body | [SchemaValidationRequestBody](../models/SchemaValidationRequestBody.md) | ❌       | The request body. |

**Return Type**

`SchemaSecurityValidationOkResponse`

**Example Usage Code Snippet**

```typescript
import {
  PostmanApiSdkSourceOverlayed,
  SchemaValidationRequestBody,
  SchemaValidationRequestBodySchema,
} from 'postman-api-sdk-source-overlayed';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const schemaLanguage = 'json';

  const schemaType = 'openapi3';

  const schemaValidationRequestBodySchema: SchemaValidationRequestBodySchema = {
    language: schemaLanguage,
    schema:
      '{"openapi":"3.0.0","info":{"version":"1","title":"temp","license":{"name":"MIT"}},"servers":[{"url":"https://petstore.swagger.io/v1"}],"paths":{"/user":{"get":{"summary":"Details about a user","operationId":"listUser","tags":["user"],"parameters":[{"name":"id","in":"query","description":"ID of the user","required":true,"schema":{"type":"integer","format":"int32"}}],"responses":{"200":{"description":"Details about a user","headers":{"x-next":{"description":"A link to the next page of responses","schema":{"type":"string"}}},"content":{"application/json":{"schema":{$ref:"#/components/schemas/User"}}}},"default":{"description":"unexpected error","content":{"application/json":{"schema":{$ref:"#/components/schemas/Error"}}}}}}}},"components":{"schemas":{"User":{"type":"object","required":["id","name"],"properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"},"tag":{"type":"string"}}},"Error":{"type":"object","required":["code","message"],"properties":{"code":{"type":"integer","format":"int32"},"message":{"type":"string"}}}},"securitySchemes":{"BasicAuth":{"type":"http","scheme":"basic"}}},"security":[{"BasicAuth":[]}]}',
    type: schemaType,
  };

  const schemaValidationRequestBody: SchemaValidationRequestBody = {
    schema: schemaValidationRequestBodySchema,
  };

  const data = await postmanApiSdkSourceOverlayed.apiSecurity.schemaSecurityValidation(
    schemaValidationRequestBody,
  );

  console.log(data);
})();
```
