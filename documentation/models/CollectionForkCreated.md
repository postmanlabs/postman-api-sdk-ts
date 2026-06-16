# CollectionForkCreated

**Properties**

| Name       | Type                            | Required | Description                              |
| :--------- | :------------------------------ | :------- | :--------------------------------------- |
| collection | CollectionForkCreatedCollection | ❌       | Information about the forked collection. |

# CollectionForkCreatedCollection

Information about the forked collection.

**Properties**

| Name | Type           | Required | Description                              |
| :--- | :------------- | :------- | :--------------------------------------- |
| id   | string         | ❌       | The forked collection's ID.              |
| name | string         | ❌       | The collection's name.                   |
| fork | CollectionFork | ❌       | Information about the collection's fork. |
| uid  | string         | ❌       | The forked collection's unique ID.       |

# CollectionFork

Information about the collection's fork.

**Properties**

| Name      | Type   | Required | Description                                |
| :-------- | :----- | :------- | :----------------------------------------- |
| label     | string | ❌       | The fork's label.                          |
| createdAt | string | ❌       | The fork's creation date and time.         |
| from      | string | ❌       | The unique ID of fork's source collection. |
