# MonitorLastRun

Information about the monitor's previous run.

**Properties**

| Name       | Type                                  | Required | Description                                                      |
| :--------- | :------------------------------------ | :------- | :--------------------------------------------------------------- |
| status     | string                                | ❌       | The monitor's status after its last run.                         |
| startedAt  | string                                | ❌       | The date and time at which the monitor's previous run started.   |
| finishedAt | string                                | ❌       | The date and time at which the monitor's previous run completed. |
| stats      | [MonitorRunStats](MonitorRunStats.md) | ❌       | Information about the monitor run's stats.                       |
