# CreateUpdateMonitorResponse

**Properties**

| Name    | Type                               | Required | Description                    |
| :------ | :--------------------------------- | :------- | :----------------------------- |
| monitor | CreateUpdateMonitorResponseMonitor | ❌       | Information about the monitor. |

# CreateUpdateMonitorResponseMonitor

Information about the monitor.

**Properties**

| Name   | Type    | Required | Description                                                          |
| :----- | :------ | :------- | :------------------------------------------------------------------- |
| id     | string  | ❌       | The monitor's ID.                                                    |
| name   | string  | ❌       | The monitor's name.                                                  |
| active | boolean | ❌       | If true, the monitor is active and makes calls to the specified URL. |
| uid    | string  | ❌       | The monitor's unique ID.                                             |
