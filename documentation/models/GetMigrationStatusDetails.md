# GetMigrationStatusDetails

Information about the migration's outcome (either a success payload or a failure reason).

# SuccessfulMigration

Information about the migration.

**Properties**

| Name        | Type   | Required | Description                                             |
| :---------- | :----- | :------- | :------------------------------------------------------ |
| workspaceId | string | ❌       | The ID of the workspace the definition was migrated to. |

# MigrationFailed

Information about the migration.

**Properties**

| Name   | Type   | Required | Description                      |
| :----- | :----- | :------- | :------------------------------- |
| reason | string | ❌       | The reason the migration failed. |
