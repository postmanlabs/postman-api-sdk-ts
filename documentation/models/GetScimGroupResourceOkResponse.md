# GetScimGroupResourceOkResponse

**Properties**

| Name        | Type                                                        | Required | Description                                                              |
| :---------- | :---------------------------------------------------------- | :------- | :----------------------------------------------------------------------- |
| schemas     | string[]                                                    | ❌       | The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml). |
| id          | string                                                      | ❌       | The group's SCIM ID.                                                     |
| displayName | string                                                      | ❌       | The group's display name.                                                |
| members     | [SuccessfulResponseMembers](SuccessfulResponseMembers.md)[] | ❌       | A list of the group's members.                                           |
| externalId  | string                                                      | ❌       | The group's external ID.                                                 |
| meta        | SuccessfulResponseMeta6                                     | ❌       | The response's non-standard meta information.                            |

# SuccessfulResponseMeta6

The response's non-standard meta information.

**Properties**

| Name         | Type   | Required | Description                                             |
| :----------- | :----- | :------- | :------------------------------------------------------ |
| resourceType | string | ❌       | The resource type.                                      |
| created      | string | ❌       | The date and time at which the group was created.       |
| lastModified | string | ❌       | The date and time at which the group was last modified. |
