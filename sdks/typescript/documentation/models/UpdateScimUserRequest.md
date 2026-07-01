# UpdateScimUserRequest

**Properties**

| Name     | Type               | Required | Description                                                                                                                                                                                                                                                  |
| :------- | :----------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| schemas  | string[]           | ❌       | The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).                                                                                                                                                                                     |
| userName | string             | ❌       | The user's email address.                                                                                                                                                                                                                                    |
| name     | UpdateScimUserName | ❌       | Information about the user's name.                                                                                                                                                                                                                           |
| active   | boolean            | ❌       | Sets the user's `active` state: - `true` — Activates the user. This lets them authenticate in to your Postman team. - `false` — Removes the user from your Postman team and deactivates the account. This blocks the user from authenticating in to Postman. |

# UpdateScimUserName

Information about the user's name.

**Properties**

| Name       | Type   | Required | Description            |
| :--------- | :----- | :------- | :--------------------- |
| givenName  | string | ❌       | The user's first name. |
| familyName | string | ❌       | The user's last name.  |
