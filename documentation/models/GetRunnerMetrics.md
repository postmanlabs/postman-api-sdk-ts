# GetRunnerMetrics

The runner instance's metrics information.

**Properties**

| Name                      | Type   | Required | Description                                                                                 |
| :------------------------ | :----- | :------- | :------------------------------------------------------------------------------------------ |
| lastPingAt                | string | ❌       | The last date and time the runner sent results to the Postman cloud.                        |
| oldestQueuedRunAgeSeconds | number | ❌       | The age of the monitor, in seconds, that has been waiting the longest to run in the runner. |
| queueDepth                | number | ❌       | The number of pending Postman monitor runs in the runner's queue.                           |
