# AuditLogsService

A list of all methods in the `AuditLogsService` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description                                                                                                                                                                 |
| :-------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getAuditLogs](#getauditlogs)                       | Gets a list of your team's generated audit events. For a complete list of all audit events, see [Audit logs](https://learning.postman.com/docs/administration/audit-logs/). |
| [getAuditLogEventActions](#getauditlogeventactions) | Gets a complete list of all available audit log event actions.                                                                                                              |

## getAuditLogs

Gets a list of your team's generated audit events. For a complete list of all audit events, see [Audit logs](https://learning.postman.com/docs/administration/audit-logs/).

- HTTP Method: `GET`
- Endpoint: `/audit/logs`

**Parameters**

| Name     | Type                                                  | Required | Description                                                                                                                                |
| :------- | :---------------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| userId   | number                                                | ❌       | Return only results that match the given user ID.                                                                                          |
| action   | string                                                | ❌       | Filter results by an audit log action.                                                                                                     |
| since    | string                                                | ❌       | Return logs created after the given time, in `YYYY-MM-DD` format.                                                                          |
| until    | string                                                | ❌       | Return logs created before the given time, in `YYYY-MM-DD` format.                                                                         |
| limit    | number                                                | ❌       | The maximum number of audit events to return at once.                                                                                      |
| cursor   | string                                                | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |
| orderBy  | [AscDescDefaultDesc](../models/AscDescDefaultDesc.md) | ❌       | Return the records in ascending (`asc`) or descending (`desc`) order.                                                                      |
| orderBy1 | [AscDescDefaultDesc](../models/AscDescDefaultDesc.md) | ❌       | Return the records in ascending (`asc`) or descending (`desc`) order.                                                                      |

**Return Type**

`GetAuditLogs`

**Example Usage Code Snippet**

```typescript
import { AscDescDefaultDesc, PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const ascDescDefaultDesc = AscDescDefaultDesc.ASC;

  const data = await postmanApi.auditLogs.getAuditLogs({
    userId: 12345678,
    action: 'team.scim_add_member',
    since: '2022-08-30',
    until: '2022-09-15',
    limit: 50,
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    orderBy: ascDescDefaultDesc,
  });

  console.log(data);
})();
```

## getAuditLogEventActions

Gets a complete list of all available audit log event actions.

- HTTP Method: `GET`
- Endpoint: `/audit-actions`

**Return Type**

`AuditLogEvents`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.auditLogs.getAuditLogEventActions();

  console.log(data);
})();
```
