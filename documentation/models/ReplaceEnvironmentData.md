# ReplaceEnvironmentData

**Properties**

| Name        | Type                              | Required | Description                        |
| :---------- | :-------------------------------- | :------- | :--------------------------------- |
| environment | ReplaceEnvironmentDataEnvironment | ❌       | Information about the environment. |

# ReplaceEnvironmentDataEnvironment

Information about the environment.

**Properties**

| Name   | Type                                              | Required | Description                                    |
| :----- | :------------------------------------------------ | :------- | :--------------------------------------------- |
| name   | string                                            | ❌       | The environment's name.                        |
| values | [EnvironmentVariables](EnvironmentVariables.md)[] | ❌       | Information about the environment's variables. |
