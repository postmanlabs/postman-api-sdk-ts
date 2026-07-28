# RunnerInstanceData

Information about the runner instance.

**Properties**

| Name         | Type   | Required | Description                                                                                                                              |
| :----------- | :----- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| id           | string | ❌       | The runner instance's ID.                                                                                                                |
| hostname     | string | ❌       | The hostname of the machine where the runner instance is running.                                                                        |
| uniqueId     | string | ❌       | The runner instance's unique ID.                                                                                                         |
| cliVersion   | string | ❌       | The version of the [Postman CLI](https://learning.postman.com/docs/postman-cli/postman-cli-overview/) used to start the runner instance. |
| osType       | string | ❌       | The operating system of the machine where the runner instance is running.                                                                |
| runnerId     | string | ❌       | The runner's ID.                                                                                                                         |
| lastPingedAt | string | ❌       | The last date and time the runner instance sent results to the Postman cloud.                                                            |
