# GetAuthenticatedUserOkResponse

**Properties**

| Name       | Type                                                              | Required | Description                                                                                                                                                                                                                 |
| :--------- | :---------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| user       | SuccessfulResponseUser                                            | ❌       | Information about the authenticated user.                                                                                                                                                                                   |
| operations | [SuccessfulResponseOperations](SuccessfulResponseOperations.md)[] | ❌       | Information about operations and their usage limits. This object does not return for users with the [Guest and Partner role](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles). |

# SuccessfulResponseUser

Information about the authenticated user.

**Properties**

| Name          | Type     | Required | Description                                                                                                                              |
| :------------ | :------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| id            | number   | ❌       | The user's Postman ID.                                                                                                                   |
| sub           | string   | ❌       | The authenticated user's ID. This ID is unique to the user and isn't associated with any Postman teams. Can return in UUID or ID format. |
| username      | string   | ❌       | The user's username.                                                                                                                     |
| email         | string   | ❌       | The user's email address.                                                                                                                |
| fullName      | string   | ❌       | The user's full name.                                                                                                                    |
| avatar        | string   | ❌       | The user's avatar image URL.                                                                                                             |
| isPublic      | boolean  | ❌       | If true, the user's information is public and visible to all users.                                                                      |
| emailVerified | boolean  | ❌       | If true, the user email address is verified by Postman.                                                                                  |
| teamId        | number   | ❌       | The team ID the user is assigned to. This returns a `0` value if the user is not assigned to a team.                                     |
| teamName      | string   | ❌       | The name of the team the user is assigned to.                                                                                            |
| teamDomain    | string   | ❌       | The team's Postman domain ID.                                                                                                            |
| roles         | string[] | ❌       | A list of the user's assigned [roles](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles).     |
