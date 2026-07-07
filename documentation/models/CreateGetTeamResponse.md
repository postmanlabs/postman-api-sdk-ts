# CreateGetTeamResponse

**Properties**

| Name | Type                      | Required | Description                 |
| :--- | :------------------------ | :------- | :-------------------------- |
| team | CreateGetTeamResponseTeam | ❌       | Information about the team. |

# CreateGetTeamResponseTeam

Information about the team.

**Properties**

| Name           | Type          | Required | Description                                           |
| :------------- | :------------ | :------- | :---------------------------------------------------- |
| createdAt      | string        | ❌       | The date and time at which the team was created.      |
| updatedAt      | string        | ❌       | The date and time at which the team was last updated. |
| id             | number        | ❌       | The team's ID.                                        |
| name           | string        | ❌       | The team's name.                                      |
| handle         | string        | ❌       | The team's handle.                                    |
| description    | string        | ❌       | A description about the team.                         |
| organizationId | number        | ❌       | The team's organization ID.                           |
| createdBy      | TeamCreatedBy | ❌       | The user ID of the user who created the team.         |
| enabled        | boolean       | ❌       | If true, the team is active.                          |

# TeamCreatedBy

The user ID of the user who created the team.
