# AddVariable

Information about the variable.

**Properties**

| Name        | Type            | Required | Description                                                                                                                |
| :---------- | :-------------- | :------- | :------------------------------------------------------------------------------------------------------------------------- |
| enabled     | boolean         | ❌       | If true, the variable is enabled.                                                                                          |
| key         | string          | ❌       | The variable's name.                                                                                                       |
| value       | string          | ❌       | The variable's value.                                                                                                      |
| type        | AddVariableType | ❌       | The variable's type: - `secret` — The variable value is masked. - `default` — The variable value is visible in plain text. |
| description | string          | ❌       | The variable's description.                                                                                                |

# AddVariableType

The variable's type: - `secret` — The variable value is masked. - `default` — The variable value is visible in plain text.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| SECRET    | string | ✅       | "secret"    |
| DEFAULT\_ | string | ✅       | "default"   |
