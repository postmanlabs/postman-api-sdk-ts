# GetScimResourceTypes

**Properties**

| Name             | Type                                      | Required | Description                                                              |
| :--------------- | :---------------------------------------- | :------- | :----------------------------------------------------------------------- |
| schemas          | string[]                                  | ❌       | The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml). |
| id               | string                                    | ❌       | The resource's ID.                                                       |
| name             | string                                    | ❌       | The resource's friendly name.                                            |
| endpoint         | string                                    | ❌       | The resource's endpoint.                                                 |
| description      | string                                    | ❌       | The resource's description.                                              |
| schema           | string                                    | ❌       | The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml). |
| schemaExtensions | [SchemaExtensions](SchemaExtensions.md)[] | ❌       | Information about the resource's schema extensions.                      |
