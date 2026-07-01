# ScimUserCreated

**Properties**

| Name       | Type                | Required | Description                                                              |
| :--------- | :------------------ | :------- | :----------------------------------------------------------------------- |
| schemas    | string[]            | ❌       | The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml). |
| id         | string              | ❌       | The user's SCIM ID.                                                      |
| userName   | string              | ❌       | The user's username.                                                     |
| name       | ScimUserCreatedName | ❌       |                                                                          |
| externalId | string              | ❌       | The user's external ID.                                                  |
| active     | boolean             | ❌       | If true, the user is active.                                             |
| meta       | ScimUserCreatedMeta | ❌       | The response's non-standard meta information.                            |

# ScimUserCreatedName

**Properties**

| Name       | Type   | Required | Description            |
| :--------- | :----- | :------- | :--------------------- |
| givenName  | string | ❌       | The user's first name. |
| familyName | string | ❌       | The user's last name.  |

# ScimUserCreatedMeta

The response's non-standard meta information.

**Properties**

| Name         | Type             | Required | Description                                            |
| :----------- | :--------------- | :------- | :----------------------------------------------------- |
| created      | string           | ❌       | The date and time at which the user was created.       |
| lastModified | string           | ❌       | The date and time at which the user was last modified. |
| resourceType | MetaResourceType | ❌       | The SCIM resource type.                                |

# MetaResourceType

The SCIM resource type.

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| USER | string | ✅       | "User"      |
