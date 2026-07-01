# AddSecretVariable

Information about the variable stored in the Postman Vault. This property only returns when when a variable is defined as secret.

**Properties**

| Name        | Type                                                      | Required | Description                                                                                                                |
| :---------- | :-------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------- |
| enabled     | boolean                                                   | ❌       | If true, the variable is enabled.                                                                                          |
| key         | string                                                    | ❌       | The variable's name.                                                                                                       |
| value       | string                                                    | ❌       | The variable's value.                                                                                                      |
| type        | AddSecretVariableType                                     | ❌       | The variable's type: - `secret` — The variable value is masked. - `default` — The variable value is visible in plain text. |
| secret      | boolean                                                   | ❌       | If true, the variable is marked as secret and its value is retrieved from the mentioned provider in the source field.      |
| source      | [EnvironmentVariableSource](EnvironmentVariableSource.md) | ❌       | Information about the source of the variable's value.                                                                      |
| description | string                                                    | ❌       | The variable's description.                                                                                                |

# AddSecretVariableType

The variable's type: - `secret` — The variable value is masked. - `default` — The variable value is visible in plain text.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| SECRET    | string | ✅       | "secret"    |
| DEFAULT\_ | string | ✅       | "default"   |
