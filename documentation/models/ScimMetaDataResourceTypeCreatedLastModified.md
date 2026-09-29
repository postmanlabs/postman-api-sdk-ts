# ScimMetaDataResourceTypeCreatedLastModified

The response's non-standard meta information.

**Properties**

| Name         | Type                                                    | Required | Description                                                   |
| :----------- | :------------------------------------------------------ | :------- | :------------------------------------------------------------ |
| resourceType | ScimMetaDataResourceTypeCreatedLastModifiedResourceType | ❌       | The resource type.                                            |
| created      | string                                                  | ❌       | The date and time at which the team member was created.       |
| lastModified | string                                                  | ❌       | The date and time at which the team member was last modified. |

# ScimMetaDataResourceTypeCreatedLastModifiedResourceType

The resource type.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| USER  | string | ✅       | "User"      |
| GROUP | string | ✅       | "Group"     |
