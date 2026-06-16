# RunExceeds300Seconds

**Properties**

| Name | Type                    | Required | Description                                                                                                                                |
| :--- | :---------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| run  | RunExceeds300SecondsRun | ❌       | The response if the monitor's run exceeds 300 seconds. To get information about the monitor's run, call the GET `/monitors/{id}` endpoint. |

# RunExceeds300SecondsRun

The response if the monitor's run exceeds 300 seconds. To get information about the monitor's run, call the GET `/monitors/{id}` endpoint.

**Properties**

| Name | Type    | Required | Description                    |
| :--- | :------ | :------- | :----------------------------- |
| info | RunInfo | ❌       | Information about the monitor. |

# RunInfo

Information about the monitor.

**Properties**

| Name      | Type   | Required | Description                                              |
| :-------- | :----- | :------- | :------------------------------------------------------- |
| monitorId | string | ❌       | The monitor's ID.                                        |
| status    | string | ❌       | The monitor run's status.                                |
| message   | string | ❌       | A message that details the monitor run's current status. |
