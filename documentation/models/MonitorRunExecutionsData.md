# MonitorRunExecutionsData

**Properties**

| Name     | Type                                              | Required | Description                                                                |
| :------- | :------------------------------------------------ | :------- | :------------------------------------------------------------------------- |
| id       | number                                            | ❌       | The execution ID.                                                          |
| item     | MonitorRunExecutionsDataItem                      | ❌       | Information about the executed item.                                       |
| request  | [MonitorRunRequests](MonitorRunRequests.md)       | ❌       | Information about the monitor run's requests.                              |
| response | [MonitorRunResponses](MonitorRunResponses.md)     | ❌       | Information about the monitor run's response.                              |
| errors   | [MonitorRunErrorsData](MonitorRunErrorsData.md)[] | ❌       | If the execution encounter errors, a list of errors and their information. |

# MonitorRunExecutionsDataItem

Information about the executed item.

**Properties**

| Name | Type   | Required | Description               |
| :--- | :----- | :------- | :------------------------ |
| name | string | ❌       | The executed item's name. |
