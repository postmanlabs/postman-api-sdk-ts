# ScimGroupCreated

**Properties**

| Name        | Type                                                    | Required | Description                                                              |
| :---------- | :------------------------------------------------------ | :------- | :----------------------------------------------------------------------- |
| schemas     | string[]                                                | ❌       | The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml). |
| id          | string                                                  | ❌       | The group's SCIM ID.                                                     |
| displayName | string                                                  | ❌       | The group's display name.                                                |
| externalId  | string                                                  | ❌       | The group's external ID.                                                 |
| members     | [ScimGroupCreatedMembers](ScimGroupCreatedMembers.md)[] | ❌       | A list of the group's members.                                           |
| meta        | ScimGroupCreatedMeta                                    | ❌       | The response's non-standard meta information.                            |

# ScimGroupCreatedMeta

The response's non-standard meta information.

**Properties**

| Name         | Type   | Required | Description                                             |
| :----------- | :----- | :------- | :------------------------------------------------------ |
| created      | string | ❌       | The date and time at which the group was created.       |
| lastModified | string | ❌       | The date and time at which the group was last modified. |
| resourceType | string | ❌       | The SCIM resource type.                                 |
