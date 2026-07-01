# CreateEnvironment

**Properties**

| Name        | Type                         | Required | Description                        |
| :---------- | :--------------------------- | :------- | :--------------------------------- |
| environment | CreateEnvironmentEnvironment | ❌       | Information about the environment. |

# CreateEnvironmentEnvironment

Information about the environment.

**Properties**

| Name   | Type                                                                          | Required | Description                                    |
| :----- | :---------------------------------------------------------------------------- | :------- | :--------------------------------------------- |
| name   | string                                                                        | ✅       | The environment's name.                        |
| values | [CreateEnvironmentEnvironmentValues](CreateEnvironmentEnvironmentValues.md)[] | ❌       | Information about the environment's variables. |
