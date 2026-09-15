# WebhookCreated

**Properties**

| Name    | Type                  | Required | Description                            |
| :------ | :-------------------- | :------- | :------------------------------------- |
| webhook | WebhookCreatedWebhook | ❌       | Information about the created webhook. |

# WebhookCreatedWebhook

Information about the created webhook.

**Properties**

| Name       | Type   | Required | Description                                                              |
| :--------- | :----- | :------- | :----------------------------------------------------------------------- |
| id         | string | ❌       | The webhook's ID.                                                        |
| name       | string | ❌       | The webhook's name.                                                      |
| collection | string | ❌       | The unique ID of the collection that triggers when calling this webhook. |
| webhookUrl | string | ❌       | The webhook's URL.                                                       |
| uid        | string | ❌       | The webhook's unique ID.                                                 |
