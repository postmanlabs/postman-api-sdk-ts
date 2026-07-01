# CreateScimGroup

**Properties**

| Name        | Type                                                  | Required | Description                                                              |
| :---------- | :---------------------------------------------------- | :------- | :----------------------------------------------------------------------- |
| schemas     | string[]                                              | ❌       | The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml). |
| displayName | string                                                | ❌       | The group's display name.                                                |
| members     | [CreateScimGroupMembers](CreateScimGroupMembers.md)[] | ❌       | A list of the group's members.                                           |
