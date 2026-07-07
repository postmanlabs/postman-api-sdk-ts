# AuditLogData

Information about the audit log.

**Properties**

| Name      | Type                              | Required | Description                                               |
| :-------- | :-------------------------------- | :------- | :-------------------------------------------------------- |
| actor     | [AuditLogActor](AuditLogActor.md) | ❌       | Information about the user who preformed the audit event. |
| user      | [AuditLogUser](AuditLogUser.md)   | ❌       | Information about the user.                               |
| team      | [AuditLogTeam](AuditLogTeam.md)   | ❌       | The user's team information.                              |
| variables | any                               | ❌       | Additional information about the performed action.        |
