# CollectionSecretVariableInfo

Information about a collection-level secret variable. Collection variables don't have an `id` field.

**Properties**

| Name        | Type                                                      | Required | Description                                                                                                           |
| :---------- | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------- |
| enabled     | boolean                                                   | ❌       | If true, the variable is enabled.                                                                                     |
| key         | string                                                    | ❌       | The variable's key (name).                                                                                            |
| secret      | boolean                                                   | ❌       | If true, the variable is marked as secret and its value is retrieved from the mentioned provider in the source field. |
| source      | [EnvironmentVariableSource](EnvironmentVariableSource.md) | ❌       | Information about the source of the variable's value.                                                                 |
| description | string                                                    | ❌       | The variable's description.                                                                                           |
