# ForkEnvironmentOkResponse

**Properties**

| Name        | Type                           | Required | Description                               |
| :---------- | :----------------------------- | :------- | :---------------------------------------- |
| environment | SuccessfulResponseEnvironment1 | ❌       | Information about the forked environment. |

# SuccessfulResponseEnvironment1

Information about the forked environment.

**Properties**

| Name     | Type   | Required | Description                         |
| :------- | :----- | :------- | :---------------------------------- |
| uid      | string | ❌       | The forked environment's ID.        |
| name     | string | ❌       | The name of the forked environment. |
| forkName | string | ❌       | The forked environment's label.     |
