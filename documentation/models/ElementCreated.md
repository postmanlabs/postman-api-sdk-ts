# ElementCreated

Information about the Private API Network element.

**Properties**

| Name           | Type               | Required | Description                                              |
| :------------- | :----------------- | :------- | :------------------------------------------------------- |
| addedAt        | string             | ❌       | The date and time at which the element was added.        |
| addedBy        | number             | ❌       | The user who added the element.                          |
| createdBy      | number             | ❌       | The user who created the element.                        |
| createdAt      | string             | ❌       | The date and time at which the element was created.      |
| updatedBy      | number             | ❌       | The user who last updated the element.                   |
| updatedAt      | string             | ❌       | The date and time at which the element was last updated. |
| type           | ElementCreatedType | ❌       | The `workspace` element.                                 |
| id             | string             | ❌       | The element's ID                                         |
| name           | string             | ❌       | The element's name.                                      |
| summary        | string             | ❌       | The element's summary.                                   |
| description    | string             | ❌       | The element's description.                               |
| href           | string             | ❌       | The element's Postman URL.                               |
| parentFolderId | number             | ❌       | This property is deprecated.                             |

# ElementCreatedType

The `workspace` element.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| WORKSPACE | string | ✅       | "workspace" |
