# CreateMonitor

**Properties**

| Name    | Type                 | Required | Description                    |
| :------ | :------------------- | :------- | :----------------------------- |
| monitor | CreateMonitorMonitor | ❌       | Information about the monitor. |

# CreateMonitorMonitor

Information about the monitor.

**Properties**

| Name              | Type                                            | Required | Description                                                                                                                          |
| :---------------- | :---------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| name              | string                                          | ✅       | The monitor's name.                                                                                                                  |
| collection        | string                                          | ✅       | The unique ID of the monitor's associated collection.                                                                                |
| schedule          | [MonitorSchedule](MonitorSchedule.md)           | ✅       | Information about the monitor's schedule.                                                                                            |
| active            | boolean                                         | ❌       | If true, the monitor is active and makes calls to the specified URL.                                                                 |
| notificationLimit | number                                          | ❌       | Stop email notifications after the given number consecutive failures.                                                                |
| environment       | string                                          | ❌       | The unique ID of the monitor's associated environment.                                                                               |
| retry             | [MonitorRetrySettings](MonitorRetrySettings.md) | ❌       | Information about the monitor's retry settings.                                                                                      |
| options           | [MonitorOptions](MonitorOptions.md)             | ❌       | Information about the monitor's option settings.                                                                                     |
| distribution      | [MonitorDistribution](MonitorDistribution.md)[] | ❌       | A list of the monitor's [geographic regions](https://learning.postman.com/docs/monitoring-your-api/setting-up-monitor/#add-regions). |
| notifications     | [MonitorNotifications](MonitorNotifications.md) | ❌       | Information about the monitor's notification settings.                                                                               |
