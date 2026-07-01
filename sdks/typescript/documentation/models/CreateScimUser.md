# CreateScimUser

**Properties**

| Name       | Type               | Required | Description                                                                       |
| :--------- | :----------------- | :------- | :-------------------------------------------------------------------------------- |
| schemas    | string[]           | ❌       | The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).          |
| userName   | string             | ❌       | The user's username.                                                              |
| active     | boolean            | ❌       | If true, activates the user. This lets them authenticate in to your Postman team. |
| externalId | string             | ❌       | The user's external ID.                                                           |
| groups     | string[]           | ❌       | A list of groups to assign the user to.                                           |
| locale     | string             | ❌       | The user's [IETF language tag](https://datatracker.ietf.org/doc/html/rfc5646).    |
| name       | CreateScimUserName | ❌       | Information about the user's name.                                                |

# CreateScimUserName

Information about the user's name.

**Properties**

| Name       | Type   | Required | Description            |
| :--------- | :----- | :------- | :--------------------- |
| givenName  | string | ❌       | The user's first name. |
| familyName | string | ❌       | The user's last name.  |
