# CollectionInformation

**Properties**

| Name       | Type                            | Required | Description                                                                                                                                                                            |
| :--------- | :------------------------------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| collection | CollectionInformationCollection | ❌       | For a complete list of this endpoint's possible values, use the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). |

# CollectionInformationCollection

For a complete list of this endpoint's possible values, use the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).

**Properties**

| Name     | Type                                    | Required | Description                                                                                                                                                                      |
| :------- | :-------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| info     | CollectionInformationCollectionInfo     | ❌       | Information about the collection.                                                                                                                                                |
| item     | [CollectionItem](CollectionItem.md)[]   | ❌       |                                                                                                                                                                                  |
| auth     | [CollectionAuth](CollectionAuth.md)     | ❌       | The [authorization type supported by Postman](https://learning.postman.com/docs/sending-requests/authorization/authorization-types/).                                            |
| event    | [CollectionEvent](CollectionEvent.md)[] | ❌       | A list of scripts configured to run when specific events occur. These scripts can be referenced in the collection by their ID.                                                   |
| variable | [VariableList2](VariableList2.md)[]     | ❌       | A list of the collection's [variables](https://learning.postman.com/docs/sending-requests/variables/variables/). Make certain not to include sensitive information in variables. |

# CollectionInformationCollectionInfo

Information about the collection.

**Properties**

| Name          | Type     | Required | Description                                                                                            |
| :------------ | :------- | :------- | :----------------------------------------------------------------------------------------------------- |
| \_postmanId   | string   | ❌       | The collection's Postman ID.                                                                           |
| name          | string   | ❌       | The collection's name.                                                                                 |
| description   | string   | ❌       | The collection's description.                                                                          |
| schema        | string   | ❌       | A URL to the collection's schema.                                                                      |
| fork          | InfoFork | ❌       | If the collection was forked from another collection, this object contains information about the fork. |
| updatedAt     | string   | ❌       | The date and time at which the collection was last updated.                                            |
| uid           | string   | ❌       | The collection's unique ID.                                                                            |
| createdAt     | string   | ❌       | The date and time at which the collection was created.                                                 |
| lastUpdatedBy | string   | ❌       | The user ID of the user who last updated the collection.                                               |

# InfoFork

If the collection was forked from another collection, this object contains information about the fork.

**Properties**

| Name      | Type   | Required | Description                                           |
| :-------- | :----- | :------- | :---------------------------------------------------- |
| label     | string | ❌       | The fork's label.                                     |
| createdAt | string | ❌       | The date and time at which the collection was forked. |
| from      | string | ❌       | The source (parent) collection's unique ID.           |
