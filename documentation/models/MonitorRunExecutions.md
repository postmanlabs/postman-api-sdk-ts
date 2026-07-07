# MonitorRunExecutions

**Properties**

| Name     | Type                                          | Required | Description                                                                |
| :------- | :-------------------------------------------- | :------- | :------------------------------------------------------------------------- |
| id       | number                                        | ❌       | The execution ID.                                                          |
| item     | MonitorRunExecutionsItem                      | ❌       | Information about the executed item.                                       |
| request  | [MonitorRunRequests](MonitorRunRequests.md)   | ❌       | Information about the monitor run's requests.                              |
| response | [MonitorRunResponses](MonitorRunResponses.md) | ❌       | Information about the monitor run's response.                              |
| errors   | [MonitorRunErrors](MonitorRunErrors.md)[]     | ❌       | If the execution encounter errors, a list of errors and their information. |

# MonitorRunExecutionsItem

Information about the executed item.

**Properties**

| Name | Type   | Required | Description               |
| :--- | :----- | :------- | :------------------------ |
| name | string | ❌       | The executed item's name. |
