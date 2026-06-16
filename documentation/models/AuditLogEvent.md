# AuditLogEvent

Information about the audit log event.

**Properties**

| Name      | Type                            | Required | Description                                           |
| :-------- | :------------------------------ | :------- | :---------------------------------------------------- |
| id        | number                          | ❌       | The audit event's ID.                                 |
| ip        | string                          | ❌       | The IP address of the user that performed the action. |
| userAgent | string                          | ❌       | The user agent information.                           |
| action    | string                          | ❌       | The action performed by the user.                     |
| timestamp | string                          | ❌       | The date and time at which the event occurred.        |
| message   | string                          | ❌       | The audit event's description.                        |
| data      | [AuditLogData](AuditLogData.md) | ❌       | Information about the audit log.                      |
