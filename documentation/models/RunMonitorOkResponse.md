# RunMonitorOkResponse

**Properties**

| Name | Type                  | Required | Description                                                                                                                                                                                                                                                 |
| :--- | :-------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| run  | SuccessfulResponseRun | ❌       | Information about the monitor run. If you pass the `async=true` query parameter, the response does not return the `stats`, `executions`, and `failures` responses. To get this information for an asynchronous run, call the GET `/monitors/{id}` endpoint. |

# SuccessfulResponseRun

Information about the monitor run. If you pass the `async=true` query parameter, the response does not return the `stats`, `executions`, and `failures` responses. To get this information for an asynchronous run, call the GET `/monitors/{id}` endpoint.

**Properties**

| Name       | Type                                                      | Required | Description                                                      |
| :--------- | :-------------------------------------------------------- | :------- | :--------------------------------------------------------------- |
| info       | [MonitorRunInformation](MonitorRunInformation.md)         | ❌       | Information about the monitor.                                   |
| stats      | [MonitorRunStats](MonitorRunStats.md)                     | ❌       | Information about the monitor run's stats.                       |
| executions | [MonitorRunExecutionsData](MonitorRunExecutionsData.md)[] | ❌       | Information about the monitor run's executions.                  |
| failures   | any[]                                                     | ❌       | If the monitor run failed, information about the run's failures. |
