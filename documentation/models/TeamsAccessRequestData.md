# TeamsAccessRequestData

**Properties**

| Name         | Type                           | Required | Description                                                                                |
| :----------- | :----------------------------- | :------- | :----------------------------------------------------------------------------------------- |
| entityType   | string                         | ❌       | The entity type.                                                                           |
| entityId     | TeamsAccessRequestDataEntityId | ❌       | The entity's ID.                                                                           |
| role         | string                         | ❌       | The entity's role.                                                                         |
| previousRole | string                         | ❌       | The entity's previous role. This value only returns if the entity's role is modified.      |
| status       | string                         | ❌       | The request's status.                                                                      |
| reason       | string                         | ❌       | The reason for the access request. This only returns if there's an issue with the request. |

# TeamsAccessRequestDataEntityId

The entity's ID.
