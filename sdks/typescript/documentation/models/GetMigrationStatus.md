# GetMigrationStatus

**Properties**

| Name    | Type                                                      | Required | Description                  |
| :------ | :-------------------------------------------------------- | :------- | :--------------------------- |
| status  | GetMigrationStatusStatus                                  | ❌       | The status of the migration. |
| details | [GetMigrationStatusDetails](GetMigrationStatusDetails.md) | ❌       |                              |

# GetMigrationStatusStatus

The status of the migration.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| COMPLETED | string | ✅       | "COMPLETED" |
| FAILED    | string | ✅       | "FAILED"    |
