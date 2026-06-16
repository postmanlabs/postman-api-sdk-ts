# ModifyCollectionSchemaInfo

Information about the collection.

**Properties**

| Name          | Type               | Required | Description                                                                                                         |
| :------------ | :----------------- | :------- | :------------------------------------------------------------------------------------------------------------------ |
| name          | string             | ✅       | The collection's name.                                                                                              |
| schema        | InformationSchema2 | ✅       | The "https://schema.getpostman.com/json/collection/v2.1.0/collection.json" Postman Collection Format v2.1.0 schema. |
| \_postmanId   | string             | ❌       | The collection's Postman ID. This field exists for Postman Collection Format v1 compatibility.                      |
| description   | string             | ❌       | The collection's description.                                                                                       |
| updatedAt     | string             | ❌       | The date and time when the collection was last updated.                                                             |
| createdat     | string             | ❌       | The date and time when the collection was created.                                                                  |
| lastUpdatedBy | string             | ❌       | The user ID of the person who last updated the collection.                                                          |
| uid           | string             | ❌       | The collection's unique ID.                                                                                         |

# InformationSchema2

The "https://schema.getpostman.com/json/collection/v2.1.0/collection.json" Postman Collection Format v2.1.0 schema.

**Properties**

| Name                                                               | Type   | Required | Description                                                            |
| :----------------------------------------------------------------- | :----- | :------- | :--------------------------------------------------------------------- |
| HTTPS_SCHEMA_GETPOSTMAN_COM_JSON_COLLECTION_V2_1_0_COLLECTION_JSON | string | ✅       | "https://schema.getpostman.com/json/collection/v2.1.0/collection.json" |
