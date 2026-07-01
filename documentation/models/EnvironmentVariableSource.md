# EnvironmentVariableSource

Information about the source of the variable's value.

**Properties**

| Name     | Type     | Required | Description                                                            |
| :------- | :------- | :------- | :--------------------------------------------------------------------- |
| postman  | Postman  | ❌       | Information about the Postman-specific source of the variable's value. |
| provider | Provider | ❌       | The secret's provider.                                                 |

# Postman

Information about the Postman-specific source of the variable's value.

**Properties**

| Name     | Type        | Required | Description                                                                                    |
| :------- | :---------- | :------- | :--------------------------------------------------------------------------------------------- |
| secretId | string      | ❌       | The variable's secret ID.                                                                      |
| type     | PostmanType | ❌       | The variable's type: - `cloud` — The variable value is synced and stored in the Postman Cloud. |
| vaultId  | string      | ❌       | The variable's ID in the Postman Vault.                                                        |

# PostmanType

The variable's type: - `cloud` — The variable value is synced and stored in the Postman Cloud.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| CLOUD | string | ✅       | "cloud"     |

# Provider

The secret's provider.

**Properties**

| Name    | Type   | Required | Description |
| :------ | :----- | :------- | :---------- |
| POSTMAN | string | ✅       | "postman"   |
