# CollectionForkCreated

**Properties**

| Name       | Type                            | Required | Description                              |
| :--------- | :------------------------------ | :------- | :--------------------------------------- |
| collection | CollectionForkCreatedCollection | ❌       | Information about the forked collection. |

# CollectionForkCreatedCollection

Information about the forked collection.

**Properties**

| Name | Type                                        | Required | Description                                                                                                                                                                          |
| :--- | :------------------------------------------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id   | string                                      | ❌       | The forked collection's ID.                                                                                                                                                          |
| name | string                                      | ❌       | The collection's name.                                                                                                                                                               |
| fork | [CollectionForkData](CollectionForkData.md) | ❌       | If the collection is [forked](https://learning.postman.com/docs/collaborating-in-postman/version-control/#forking-postman-entities) from another collection, the fork's information. |
| uid  | string                                      | ❌       | The forked collection's unique ID.                                                                                                                                                   |
