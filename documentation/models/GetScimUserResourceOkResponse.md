# GetScimUserResourceOkResponse

**Properties**

| Name       | Type                  | Required | Description                                                              |
| :--------- | :-------------------- | :------- | :----------------------------------------------------------------------- |
| schemas    | string[]              | ❌       | The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml). |
| id         | string                | ❌       | The team member's SCIM ID.                                               |
| userName   | string                | ❌       | The team member's SCIM username.                                         |
| name       | ScimUserResourceName2 | ❌       | Information about the Postman team member.                               |
| externalId | string                | ❌       | The team member's external ID.                                           |
| active     | boolean               | ❌       | If true, the team member is active.                                      |
| meta       | ScimUserResourceMeta2 | ❌       | The response's non-standard meta information.                            |

# ScimUserResourceName2

Information about the Postman team member.

**Properties**

| Name       | Type   | Required | Description                   |
| :--------- | :----- | :------- | :---------------------------- |
| givenName  | string | ❌       | The team member's first name. |
| familyName | string | ❌       | The team member's last name.  |

# ScimUserResourceMeta2

The response's non-standard meta information.

**Properties**

| Name         | Type   | Required | Description                                                   |
| :----------- | :----- | :------- | :------------------------------------------------------------ |
| resourceType | string | ❌       | The resource type.                                            |
| created      | string | ❌       | The date and time at which the team member was created.       |
| lastModified | string | ❌       | The date and time at which the team member was last modified. |
