# CreateApiCollection

**Properties**

| Name          | Type                             | Required | Description                                                                                                                                                                                                                                     |
| :------------ | :------------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data          | CreateApiCollectionData          | ❌       | Information about the collection's contents, such as requests and responses. For a complete list of values, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). |
| operationType | CreateApiCollectionOperationType | ❌       | The `CREATE_NEW` method.                                                                                                                                                                                                                        |

# CreateApiCollectionData

Information about the collection's contents, such as requests and responses. For a complete list of values, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).

**Properties**

| Name | Type     | Required | Description                                                                                                                                                                                                                        |
| :--- | :------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| info | DataInfo | ❌       | Information about the collection.                                                                                                                                                                                                  |
| item | any[]    | ❌       | Information about the requests and responses in the collection. For a complete list of values, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). |

# DataInfo

Information about the collection.

**Properties**

| Name   | Type       | Required | Description                     |
| :----- | :--------- | :------- | :------------------------------ |
| name   | string     | ❌       | The collection's name.          |
| schema | InfoSchema | ❌       | The collection's schema format. |

# InfoSchema

The collection's schema format.

**Properties**

| Name                                                            | Type   | Required | Description                                                         |
| :-------------------------------------------------------------- | :----- | :------- | :------------------------------------------------------------------ |
| HTTPS_SCHEMA_POSTMAN_COM_JSON_COLLECTION_V2_1_0_COLLECTION_JSON | string | ✅       | "https://schema.postman.com/json/collection/v2.1.0/collection.json" |

# CreateApiCollectionOperationType

The `CREATE_NEW` method.

**Properties**

| Name       | Type   | Required | Description  |
| :--------- | :----- | :------- | :----------- |
| CREATE_NEW | string | ✅       | "CREATE_NEW" |
