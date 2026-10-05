# GetMigrationStatus

**Properties**

| Name    | Type                                                      | Required | Description                                                                               |
| :------ | :-------------------------------------------------------- | :------- | :---------------------------------------------------------------------------------------- |
| status  | GetMigrationStatusStatus                                  | ❌       | The status of the migration.                                                              |
| details | [GetMigrationStatusDetails](GetMigrationStatusDetails.md) | ❌       | Information about the migration's outcome (either a success payload or a failure reason). |

# GetMigrationStatusStatus

The status of the migration.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| COMPLETED | string | ✅       | "COMPLETED" |
| FAILED    | string | ✅       | "FAILED"    |
