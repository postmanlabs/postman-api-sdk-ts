# CreateFolder

Information about the collection folder. For a complete list of properties, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v1.0.0/draft-07/collection.json). **Note:** It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a folder with a blank name.

**Properties**

| Name   | Type   | Required | Description                                                                                                                                                                                    |
| :----- | :----- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name   | string | ❌       | The folder's name. It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a folder with a blank name. |
| folder | string | ❌       | The ID of a folder in which to create the folder.                                                                                                                                              |
