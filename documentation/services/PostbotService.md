# PostbotService

A list of all methods in the `PostbotService` service. Click on the method name to view detailed information about that method.

| Methods                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :---------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [generateTool](#generatetool) | **This endpoint is deprecated** Generates code for an AI agent tool using a collection and request from the Public API Network. For more information, see [**Tool Generation Demo**](http://postman.com/explore/toolgen) in Postman's Public API Network. ### Important - This endpoint has a rate limit of **300 calls every 3 hours**. This does not accrue Postbot usage. - This endpoint only supports public Postman Collections and requests. |

## generateTool

**This endpoint is deprecated** Generates code for an AI agent tool using a collection and request from the Public API Network. For more information, see [**Tool Generation Demo**](http://postman.com/explore/toolgen) in Postman's Public API Network. ### Important - This endpoint has a rate limit of **300 calls every 3 hours**. This does not accrue Postbot usage. - This endpoint only supports public Postman Collections and requests.

- HTTP Method: `POST`
- Endpoint: `/postbot/generations/tool`

**Parameters**

| Name | Type                                      | Required | Description       |
| :--- | :---------------------------------------- | :------- | :---------------- |
| body | [GenerateTool](../models/GenerateTool.md) | ❌       | The request body. |

**Return Type**

`GenerateToolResponse`

**Example Usage Code Snippet**

```typescript
import {
  AgentFramework,
  ConfigLanguage,
  GenerateTool,
  GenerateToolConfig,
  PostmanApi,
} from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const configLanguage = ConfigLanguage.JAVASCRIPT;

  const agentFramework = AgentFramework.OPENAI;

  const generateToolConfig: GenerateToolConfig = {
    language: configLanguage,
    agentFramework: agentFramework,
  };

  const generateTool: GenerateTool = {
    requestId: 'c82dd02c-4870-4907-8fcb-593a876cf05b',
    collectionId: '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    config: generateToolConfig,
  };

  const data = await postmanApi.postbot.generateTool(generateTool);

  console.log(data);
})();
```
