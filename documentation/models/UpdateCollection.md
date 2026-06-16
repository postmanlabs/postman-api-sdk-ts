# UpdateCollection

**Properties**

| Name       | Type                       | Required | Description |
| :--------- | :------------------------- | :------- | :---------- |
| collection | UpdateCollectionCollection | ❌       |             |

# UpdateCollectionCollection

**Properties**

| Name     | Type                                          | Required | Description                                                                                                                                                                      |
| :------- | :-------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| info     | UpdateCollectionCollectionInfo                | ❌       | An object that contains the collection's updated name and description.                                                                                                           |
| variable | [CollectionVariable](CollectionVariable.md)[] | ❌       | A list of the collection's [variables](https://learning.postman.com/docs/sending-requests/variables/variables/). Make certain not to include sensitive information in variables. |
| auth     | [CollectionAuth](CollectionAuth.md)           | ❌       | The [authorization type supported by Postman](https://learning.postman.com/docs/sending-requests/authorization/authorization-types/).                                            |
| events   | [CollectionEvent](CollectionEvent.md)[]       | ❌       | A list of scripts configured to run when specific events occur. These scripts can be referenced in the collection by their ID.                                                   |

# UpdateCollectionCollectionInfo

An object that contains the collection's updated name and description.

**Properties**

| Name        | Type   | Required | Description                           |
| :---------- | :----- | :------- | :------------------------------------ |
| name        | string | ❌       | The collection's updated name.        |
| description | string | ❌       | The collection's updated description. |
