# MonitorSchedule

Information about the monitor's schedule.

**Properties**

| Name     | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                             |
| :------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| cron     | string | ❌       | The monitor's run frequency, based on the given POSIX cron pattern. For example: - Every 5 minutes — `*/5 * * * *` - Every 30 minutes — `*/30 * * * *` - Every hour — `0 */1 * * *` - Every 6 hours — `0 */6 * * *` - Every day at 5 pm — `0 17 * * *` - Every Monday at 12 pm — `0 12 * * MON` - Every weekday (Mon — Fri) at 6 am — `0 6 * * MON-FRI` |
| timezone | string | ❌       | The monitor's [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).                                                                                                                                                                                                                                                                 |
