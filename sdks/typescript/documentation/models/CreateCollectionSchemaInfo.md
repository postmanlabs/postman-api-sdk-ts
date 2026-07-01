# CreateCollectionSchemaInfo

Information about the collection.

**Properties**

| Name        | Type               | Required | Description                                                                                                         |
| :---------- | :----------------- | :------- | :------------------------------------------------------------------------------------------------------------------ |
| name        | string             | ✅       | The collection's name.                                                                                              |
| schema      | InformationSchema1 | ✅       | The "https://schema.getpostman.com/json/collection/v2.1.0/collection.json" Postman Collection Format v2.1.0 schema. |
| description | string             | ❌       | The collection's description.                                                                                       |

# InformationSchema1

The "https://schema.getpostman.com/json/collection/v2.1.0/collection.json" Postman Collection Format v2.1.0 schema.

**Properties**

| Name                                                               | Type   | Required | Description                                                            |
| :----------------------------------------------------------------- | :----- | :------- | :--------------------------------------------------------------------- |
| HTTPS_SCHEMA_GETPOSTMAN_COM_JSON_COLLECTION_V2_1_0_COLLECTION_JSON | string | ✅       | "https://schema.getpostman.com/json/collection/v2.1.0/collection.json" |
