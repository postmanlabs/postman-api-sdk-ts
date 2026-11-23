# GovernanceGroupSummary

Information about a governance group.

**Properties**

| Name        | Type                       | Required | Description                                                                                                                                                                                                              |
| :---------- | :------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id          | string                     | ❌       | The governance group's ID.                                                                                                                                                                                               |
| name        | string                     | ❌       | The governance group's name.                                                                                                                                                                                             |
| description | string                     | ❌       | The governance group's description.                                                                                                                                                                                      |
| type        | GovernanceGroupSummaryType | ❌       | The governance group type: - `system` — Groups managed by Postman (for example, the default group that applies to all workspaces) and can't be updated or deleted. - `custom` — Groups created and managed by your team. |
| createdBy   | string                     | ❌       | The ID of the user who created the governance group.                                                                                                                                                                     |
| updatedBy   | string                     | ❌       | The ID of the user who last updated the governance group.                                                                                                                                                                |
| createdAt   | string                     | ❌       | The date and time at which the governance group was created.                                                                                                                                                             |
| updatedAt   | string                     | ❌       | The date and time at which the governance group was last updated.                                                                                                                                                        |

# GovernanceGroupSummaryType

The governance group type: - `system` — Groups managed by Postman (for example, the default group that applies to all workspaces) and can't be updated or deleted. - `custom` — Groups created and managed by your team.

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| SYSTEM | string | ✅       | "system"    |
| CUSTOM | string | ✅       | "custom"    |
