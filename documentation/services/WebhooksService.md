# WebhooksService

A list of all methods in the `WebhooksService` service. Click on the method name to view detailed information about that method.

| Methods                         | Description                                                                                                                                                                                                                                                                                                     |
| :------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [createWebhook](#createwebhook) | Creates a webhook that triggers a collection with a custom payload. You can get the webhook's URL from the `webhookUrl` property in the endpoint's response. **Note:** If you do not include the `workspace` query parameter, the system creates the webhook in the oldest personal Internal workspace you own. |

## createWebhook

Creates a webhook that triggers a collection with a custom payload. You can get the webhook's URL from the `webhookUrl` property in the endpoint's response. **Note:** If you do not include the `workspace` query parameter, the system creates the webhook in the oldest personal Internal workspace you own.

- HTTP Method: `POST`
- Endpoint: `/webhooks`

**Parameters**

| Name      | Type                                        | Required | Description         |
| :-------- | :------------------------------------------ | :------- | :------------------ |
| body      | [CreateWebhook](../models/CreateWebhook.md) | ❌       | The request body.   |
| workspace | string                                      | ✅       | The workspace's ID. |

**Return Type**

`WebhookCreated`

**Example Usage Code Snippet**

```typescript
import {
  CreateWebhook,
  CreateWebhookWebhook,
  PostmanApiSdkSourceOverlayed,
} from '@postman/api-sdk';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const createWebhookWebhook: CreateWebhookWebhook = {
    collection: '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    environment: '12345678-d9c7dc8f-904e-4bba-99b5-4d490aae1957',
    name: 'Test Webhook',
  };

  const createWebhook: CreateWebhook = {
    webhook: createWebhookWebhook,
  };

  const data = await postmanApiSdkSourceOverlayed.webhooks.createWebhook(createWebhook, {
    workspace: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
  });

  console.log(data);
})();
```
