# GetMonitorOkResponse

**Properties**

| Name    | Type                      | Required | Description                    |
| :------ | :------------------------ | :------- | :----------------------------- |
| monitor | SuccessfulResponseMonitor | ❌       | Information about the monitor. |

# SuccessfulResponseMonitor

Information about the monitor.

**Properties**

| Name              | Type                                            | Required | Description                                                                                                                          |
| :---------------- | :---------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| id                | string                                          | ❌       | The monitor's ID.                                                                                                                    |
| name              | string                                          | ❌       | The monitor's name.                                                                                                                  |
| uid               | string                                          | ❌       | The monitor's unique ID.                                                                                                             |
| owner             | number                                          | ❌       | The ID of monitor's owner.                                                                                                           |
| active            | boolean                                         | ❌       | If true, the monitor is active and makes calls to the specified URL.                                                                 |
| notificationLimit | number                                          | ❌       | Stop email notifications after the given number consecutive failures.                                                                |
| collectionUid     | string                                          | ❌       | The unique ID of the monitor's associated collection.                                                                                |
| environmentUid    | string                                          | ❌       | The unique ID of the monitor's associated environment.                                                                               |
| jobId             | string                                          | ❌       | The job ID of the monitor's latest run.                                                                                              |
| options           | [MonitorOptions](MonitorOptions.md)             | ❌       | Information about the monitor's option settings.                                                                                     |
| notifications     | [MonitorNotifications](MonitorNotifications.md) | ❌       | Information about the monitor's notification settings.                                                                               |
| distribution      | [MonitorDistribution](MonitorDistribution.md)[] | ❌       | A list of the monitor's [geographic regions](https://learning.postman.com/docs/monitoring-your-api/setting-up-monitor/#add-regions). |
| schedule          | Schedule                                        | ❌       | Information about the monitor's schedule.                                                                                            |
| retry             | [MonitorRetrySettings](MonitorRetrySettings.md) | ❌       | Information about the monitor's retry settings.                                                                                      |
| lastRun           | [MonitorLastRun](MonitorLastRun.md)             | ❌       | Information about the monitor's previous run.                                                                                        |

# Schedule

Information about the monitor's schedule.

**Properties**

| Name     | Type   | Required | Description                                        |
| :------- | :----- | :------- | :------------------------------------------------- |
| cron     | string | ❌       | The monitor's POSIX cron frequency value.          |
| nextRun  | string | ❌       | The date and time of monitor's next scheduled run. |
| timezone | string | ❌       | The monitor's timezone.                            |
