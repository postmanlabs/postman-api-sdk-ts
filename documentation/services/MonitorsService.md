# MonitorsService

A list of all methods in the `MonitorsService` service. Click on the method name to view detailed information about that method.

| Methods                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :---------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getMonitors](#getmonitors)               | Gets all monitors.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [createMonitor](#createmonitor)           | Creates a monitor. **Note:** - You cannot create monitors for collections added to an API definition. - If you do not pass the `workspace` query parameter, the system creates the monitor in the oldest personal Internal workspace you own.                                                                                                                                                                                                                                                                                                                                                |
| [getMonitor](#getmonitor)                 | Gets information about a monitor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [updateMonitor](#updatemonitor)           | Updates a monitor's [configurations](https://learning.postman.com/docs/monitoring-your-api/setting-up-monitor/#configure-a-monitor).                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [deleteMonitor](#deletemonitor)           | Deletes a monitor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [runMonitor](#runmonitor)                 | Runs a monitor and returns its run results. **Note:** - If you pass the `async=true` query parameter, the response does not return the `stats`, `executions`, and `failures` responses. To get this information for an asynchronous run, call the GET `/monitors/{id}` endpoint. - If the call exceeds 300 seconds, the endpoint returns an HTTP `202 Accepted` response. Use the GET `/monitors/{id}` endpoint to check the run's status in the response's `lastRun` property. To avoid this, it is recommended that you include the `async=true` query parameter when using this endpoint. |
| [getRunnerInstances](#getrunnerinstances) | Gets all instances of the runner polling Postman for upcoming monitor runs. Instances are runner executions that share the same runner ID and key. **Note:** You can get a runner's ID in the Postman UI if you have an Admin or Super Admin role. To do this, click **Team \> Team Settings** in Postman, then click **Runners**. Click the runner you want to get the ID of, then copy its ID from the URL.                                                                                                                                                                                |
| [getRunnerMetrics](#getrunnermetrics)     | Gets the Postman server-side metrics for a runner instance. Metrics include information such as monitor run queues and last polling date. **Note:** You can get a runner's ID in the Postman UI if you have a Team Admin or Super Admin role. To do this, click **Team \> Team Settings** in Postman, then click **Runners**. Click the runner you want to get the ID of, then copy its ID from the URL.                                                                                                                                                                                     |

## getMonitors

Gets all monitors.

- HTTP Method: `GET`
- Endpoint: `/monitors`

**Parameters**

| Name           | Type    | Required | Description                                                                                                                                      |
| :------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| workspace      | string  | ❌       | Return only results found in the given workspace ID.                                                                                             |
| active         | boolean | ❌       | If true, return only active monitors.                                                                                                            |
| owner          | number  | ❌       | Return only results that belong to the given user ID.                                                                                            |
| collectionUid  | string  | ❌       | Filter the results by a collection's unique ID.                                                                                                  |
| environmentUid | string  | ❌       | Filter the results by an environment's unique ID.                                                                                                |
| cursor         | string  | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.       |
| limit          | number  | ❌       | The maximum number of rows to return in the response, up to a maximum value of 25. Any value greater than 25 returns a 400 Bad Request response. |

**Return Type**

`GetMonitorsOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from 'postman-api-sdk-source-overlayed';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.monitors.getMonitors({
    workspace: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    active: true,
    owner: 12345678,
    collectionUid: '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    environmentUid: '12345678-5daabc50-8451-43f6-922d-96b403b4f28e',
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    limit: 10,
  });

  console.log(data);
})();
```

## createMonitor

Creates a monitor. **Note:** - You cannot create monitors for collections added to an API definition. - If you do not pass the `workspace` query parameter, the system creates the monitor in the oldest personal Internal workspace you own.

- HTTP Method: `POST`
- Endpoint: `/monitors`

**Parameters**

| Name      | Type                                        | Required | Description         |
| :-------- | :------------------------------------------ | :------- | :------------------ |
| body      | [CreateMonitor](../models/CreateMonitor.md) | ❌       | The request body.   |
| workspace | string                                      | ✅       | The workspace's ID. |

**Return Type**

`CreateUpdateMonitorResponse`

**Example Usage Code Snippet**

```typescript
import {
  CreateMonitor,
  CreateMonitorMonitor,
  MonitorDistribution,
  MonitorNotifications,
  MonitorOptions,
  MonitorRetrySettings,
  MonitorSchedule,
  OnError,
  OnFailure,
  PostmanApiSdkSourceOverlayed,
} from 'postman-api-sdk-source-overlayed';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const monitorRetrySettings: MonitorRetrySettings = {
    attempts: 1,
  };

  const monitorOptions: MonitorOptions = {
    followRedirects: true,
    requestDelay: 1,
    requestTimeout: 3000,
    strictSsl: true,
  };

  const monitorSchedule: MonitorSchedule = {
    cron: '*/5 * * * *',
    timezone: 'America/Chicago',
  };

  const region = 'us-east';

  const monitorDistribution: MonitorDistribution = {
    region: region,
  };

  const onError: OnError = {
    email: 'taylor.lee@example.com',
  };

  const onFailure: OnFailure = {
    email: 'taylor.lee@example.com',
  };

  const monitorNotifications: MonitorNotifications = {
    onError: [onError],
    onFailure: [onFailure],
  };

  const createMonitorMonitor: CreateMonitorMonitor = {
    name: 'Test Monitor',
    active: true,
    notificationLimit: 1,
    collection: '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    environment: '12345678-5daabc50-8451-43f6-922d-96b403b4f28e',
    retry: monitorRetrySettings,
    options: monitorOptions,
    schedule: monitorSchedule,
    distribution: [monitorDistribution],
    notifications: monitorNotifications,
  };

  const createMonitor: CreateMonitor = {
    monitor: createMonitorMonitor,
  };

  const data = await postmanApiSdkSourceOverlayed.monitors.createMonitor(createMonitor, {
    workspace: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
  });

  console.log(data);
})();
```

## getMonitor

Gets information about a monitor.

- HTTP Method: `GET`
- Endpoint: `/monitors/{monitorId}`

**Parameters**

| Name      | Type   | Required | Description       |
| :-------- | :----- | :------- | :---------------- |
| monitorId | string | ✅       | The monitor's ID. |

**Return Type**

`GetMonitorOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from 'postman-api-sdk-source-overlayed';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.monitors.getMonitor(
    '1e6b6cc1-c760-48e0-968f-4bfaeeae9af1',
  );

  console.log(data);
})();
```

## updateMonitor

Updates a monitor's [configurations](https://learning.postman.com/docs/monitoring-your-api/setting-up-monitor/#configure-a-monitor).

- HTTP Method: `PUT`
- Endpoint: `/monitors/{monitorId}`

**Parameters**

| Name      | Type                                        | Required | Description       |
| :-------- | :------------------------------------------ | :------- | :---------------- |
| body      | [UpdateMonitor](../models/UpdateMonitor.md) | ❌       | The request body. |
| monitorId | string                                      | ✅       | The monitor's ID. |

**Return Type**

`CreateUpdateMonitorResponse`

**Example Usage Code Snippet**

```typescript
import {
  MonitorDistribution,
  MonitorNotifications,
  MonitorOptions,
  MonitorRetrySettings,
  MonitorSchedule,
  OnError,
  OnFailure,
  PostmanApiSdkSourceOverlayed,
  UpdateMonitor,
  UpdateMonitorMonitor,
} from 'postman-api-sdk-source-overlayed';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const monitorRetrySettings: MonitorRetrySettings = {
    attempts: 1,
  };

  const monitorOptions: MonitorOptions = {
    followRedirects: true,
    requestDelay: 1,
    requestTimeout: 3000,
    strictSsl: true,
  };

  const monitorSchedule: MonitorSchedule = {
    cron: '*/5 * * * *',
    timezone: 'America/Chicago',
  };

  const region = 'us-east';

  const monitorDistribution: MonitorDistribution = {
    region: region,
  };

  const onError: OnError = {
    email: 'taylor.lee@example.com',
  };

  const onFailure: OnFailure = {
    email: 'taylor.lee@example.com',
  };

  const monitorNotifications: MonitorNotifications = {
    onError: [onError],
    onFailure: [onFailure],
  };

  const updateMonitorMonitor: UpdateMonitorMonitor = {
    name: 'Test Monitor',
    active: true,
    notificationLimit: 1,
    retry: monitorRetrySettings,
    options: monitorOptions,
    schedule: monitorSchedule,
    distribution: [monitorDistribution],
    notifications: monitorNotifications,
  };

  const updateMonitor: UpdateMonitor = {
    monitor: updateMonitorMonitor,
  };

  const data = await postmanApiSdkSourceOverlayed.monitors.updateMonitor(
    '1e6b6cc1-c760-48e0-968f-4bfaeeae9af1',
    updateMonitor,
  );

  console.log(data);
})();
```

## deleteMonitor

Deletes a monitor.

- HTTP Method: `DELETE`
- Endpoint: `/monitors/{monitorId}`

**Parameters**

| Name      | Type   | Required | Description       |
| :-------- | :----- | :------- | :---------------- |
| monitorId | string | ✅       | The monitor's ID. |

**Return Type**

`MonitorDeleted`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from 'postman-api-sdk-source-overlayed';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.monitors.deleteMonitor(
    '1e6b6cc1-c760-48e0-968f-4bfaeeae9af1',
  );

  console.log(data);
})();
```

## runMonitor

Runs a monitor and returns its run results. **Note:** - If you pass the `async=true` query parameter, the response does not return the `stats`, `executions`, and `failures` responses. To get this information for an asynchronous run, call the GET `/monitors/{id}` endpoint. - If the call exceeds 300 seconds, the endpoint returns an HTTP `202 Accepted` response. Use the GET `/monitors/{id}` endpoint to check the run's status in the response's `lastRun` property. To avoid this, it is recommended that you include the `async=true` query parameter when using this endpoint.

- HTTP Method: `POST`
- Endpoint: `/monitors/{monitorId}/run`

**Parameters**

| Name      | Type    | Required | Description                                                                                                                                            |
| :-------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| monitorId | string  | ✅       | The monitor's ID.                                                                                                                                      |
| async     | boolean | ❌       | If true, runs the monitor asynchronously from the created monitor run task. By default, the server will not respond until the task finishes (`false`). |

**Return Type**

`RunMonitorOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from 'postman-api-sdk-source-overlayed';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.monitors.runMonitor(
    '1e6b6cc1-c760-48e0-968f-4bfaeeae9af1',
    {
      async: true,
    },
  );

  console.log(data);
})();
```

## getRunnerInstances

Gets all instances of the runner polling Postman for upcoming monitor runs. Instances are runner executions that share the same runner ID and key. **Note:** You can get a runner's ID in the Postman UI if you have an Admin or Super Admin role. To do this, click **Team \> Team Settings** in Postman, then click **Runners**. Click the runner you want to get the ID of, then copy its ID from the URL.

- HTTP Method: `GET`
- Endpoint: `/runners/{runnerId}/instances`

**Parameters**

| Name     | Type   | Required | Description                                                                                                                                      |
| :------- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| runnerId | string | ✅       | The runner's ID.                                                                                                                                 |
| limit    | number | ❌       | The maximum number of rows to return in the response, up to a maximum value of 25. Any value greater than 25 returns a 400 Bad Request response. |
| cursor   | string | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.       |

**Return Type**

`GetRunnerInstances`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from 'postman-api-sdk-source-overlayed';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.monitors.getRunnerInstances(
    '1f08d6ba-c377-4ca0-be80-af81daf8fef9',
    {
      limit: 10,
      cursor:
        'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    },
  );

  console.log(data);
})();
```

## getRunnerMetrics

Gets the Postman server-side metrics for a runner instance. Metrics include information such as monitor run queues and last polling date. **Note:** You can get a runner's ID in the Postman UI if you have a Team Admin or Super Admin role. To do this, click **Team \> Team Settings** in Postman, then click **Runners**. Click the runner you want to get the ID of, then copy its ID from the URL.

- HTTP Method: `GET`
- Endpoint: `/runners/{runnerId}/metrics`

**Parameters**

| Name     | Type   | Required | Description      |
| :------- | :----- | :------- | :--------------- |
| runnerId | string | ✅       | The runner's ID. |

**Return Type**

`GetRunnerMetrics`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed } from 'postman-api-sdk-source-overlayed';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApiSdkSourceOverlayed.monitors.getRunnerMetrics(
    '1f08d6ba-c377-4ca0-be80-af81daf8fef9',
  );

  console.log(data);
})();
```
