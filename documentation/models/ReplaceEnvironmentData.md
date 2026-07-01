# ReplaceEnvironmentData

**Properties**

| Name        | Type                              | Required | Description                        |
| :---------- | :-------------------------------- | :------- | :--------------------------------- |
| environment | ReplaceEnvironmentDataEnvironment | ❌       | Information about the environment. |

# ReplaceEnvironmentDataEnvironment

Information about the environment.

**Properties**

| Name   | Type                                                                                    | Required | Description                                    |
| :----- | :-------------------------------------------------------------------------------------- | :------- | :--------------------------------------------- |
| name   | string                                                                                  | ❌       | The environment's name.                        |
| values | [ReplaceEnvironmentDataEnvironmentValues](ReplaceEnvironmentDataEnvironmentValues.md)[] | ❌       | Information about the environment's variables. |
