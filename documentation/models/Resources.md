# Resources

The SCIM user resource object.

**Properties**

| Name       | Type                                                                                          | Required | Description                                                              |
| :--------- | :-------------------------------------------------------------------------------------------- | :------- | :----------------------------------------------------------------------- |
| schemas    | string[]                                                                                      | ❌       | The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml). |
| id         | string                                                                                        | ❌       | The team member's SCIM ID.                                               |
| userName   | string                                                                                        | ❌       | The team member's SCIM username.                                         |
| name       | [ScimNameData](ScimNameData.md)                                                               | ❌       | Information about the Postman team member.                               |
| externalId | string                                                                                        | ❌       | The team member's external ID.                                           |
| active     | boolean                                                                                       | ❌       | If true, the team member is active.                                      |
| meta       | [ScimMetaDataResourceTypeCreatedLastModified](ScimMetaDataResourceTypeCreatedLastModified.md) | ❌       | The response's non-standard meta information.                            |
