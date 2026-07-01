# ApproveDenyAccessRequestResponse

**Properties**

| Name   | Type                                   | Required | Description                                              |
| :----- | :------------------------------------- | :------- | :------------------------------------------------------- |
| result | ApproveDenyAccessRequestResponseResult | ❌       | Information about the approved or denied access request. |

# ApproveDenyAccessRequestResponseResult

Information about the approved or denied access request.

**Properties**

| Name          | Type                                           | Required | Description                                                                           |
| :------------ | :--------------------------------------------- | :------- | :------------------------------------------------------------------------------------ |
| entityType    | string                                         | ❌       | The entity type.                                                                      |
| entityId      | ApproveDenyAccessRequestResponseResultEntityId | ❌       | The entity's ID.                                                                      |
| role          | string                                         | ❌       | The requested team role.                                                              |
| previousRole  | string                                         | ❌       | The entity's previous role. This value only returns if the entity's role is modified. |
| status        | string                                         | ❌       | The access request's status.                                                          |
| accessRequest | AccessRequest                                  | ❌       | Information about the access request.                                                 |

# ApproveDenyAccessRequestResponseResultEntityId

The entity's ID.

# AccessRequest

Information about the access request.

**Properties**

| Name        | Type   | Required | Description                                             |
| :---------- | :----- | :------- | :------------------------------------------------------ |
| id          | number | ❌       | The access request's ID.                                |
| requestType | string | ❌       | The access request type.                                |
| reason      | string | ❌       | The reason the access request was created.              |
| status      | string | ❌       | The access request's status.                            |
| objectType  | string | ❌       | The entity type.                                        |
| objectId    | number | ❌       | The entity's ID.                                        |
| createdBy   | number | ❌       | The user ID of the user who created the access request. |
