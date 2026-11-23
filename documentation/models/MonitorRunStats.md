# MonitorRunStats

Information about the monitor run's stats.

**Properties**

| Name            | Type                                                    | Required | Description                                                                  |
| :-------------- | :------------------------------------------------------ | :------- | :--------------------------------------------------------------------------- |
| assertions      | [MonitorRunAssertionStats](MonitorRunAssertionStats.md) | ❌       | Information about the monitor's tests.                                       |
| requests        | [MonitorRunRequestsStats](MonitorRunRequestsStats.md)   | ❌       | Information about the monitor's requests.                                    |
| runCount        | number                                                  | ❌       | The number of monitor runs across the selected monitor regions.              |
| errorCount      | number                                                  | ❌       | The number of errors encountered during the monitor's run.                   |
| abortedCount    | number                                                  | ❌       | The number of runs terminated.                                               |
| responseLatency | number                                                  | ❌       | The total time it took to run the monitor, in milliseconds.                  |
| responseSize    | number                                                  | ❌       | The total response size. This includes the runs in all the selected regions. |
