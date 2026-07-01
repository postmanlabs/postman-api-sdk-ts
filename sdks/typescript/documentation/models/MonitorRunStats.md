# MonitorRunStats

Information about the monitor run's stats.

**Properties**

| Name            | Type                    | Required | Description                                                                  |
| :-------------- | :---------------------- | :------- | :--------------------------------------------------------------------------- |
| assertions      | Assertions              | ❌       | Information about the monitor's tests.                                       |
| requests        | MonitorRunStatsRequests | ❌       | Information about the monitor's requests.                                    |
| runCount        | number                  | ❌       | The number of monitor runs across the selected monitor regions.              |
| errorCount      | number                  | ❌       | The number of errors encountered during the monitor's run.                   |
| abortedCount    | number                  | ❌       | The number of runs terminated.                                               |
| responseLatency | number                  | ❌       | The total time it took to run the monitor, in milliseconds.                  |
| responseSize    | number                  | ❌       | The total response size. This includes the runs in all the selected regions. |

# Assertions

Information about the monitor's tests.

**Properties**

| Name   | Type   | Required | Description                          |
| :----- | :----- | :------- | :----------------------------------- |
| total  | number | ❌       | The total number of tests performed. |
| failed | number | ❌       | The total number of test failures.   |

# MonitorRunStatsRequests

Information about the monitor's requests.

**Properties**

| Name   | Type   | Required | Description                     |
| :----- | :----- | :------- | :------------------------------ |
| total  | number | ❌       | The total number of requests.   |
| failed | number | ❌       | The number of request failures. |
