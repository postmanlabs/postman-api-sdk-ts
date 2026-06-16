# CreateWebhook

**Properties**

| Name    | Type                 | Required | Description |
| :------ | :------------------- | :------- | :---------- |
| webhook | CreateWebhookWebhook | ❌       |             |

# CreateWebhookWebhook

**Properties**

| Name        | Type   | Required | Description                                                                                              |
| :---------- | :----- | :------- | :------------------------------------------------------------------------------------------------------- |
| collection  | string | ✅       | The unique ID of the collection to trigger when calling this webhook.                                    |
| name        | string | ✅       | The webhook's name. On success, the system creates a new monitor with this name in the **Monitors** tab. |
| environment | string | ❌       | The unique ID of the environment to trigger when calling this webhook.                                   |
