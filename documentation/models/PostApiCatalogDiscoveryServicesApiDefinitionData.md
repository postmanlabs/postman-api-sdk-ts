# PostApiCatalogDiscoveryServicesApiDefinitionData

The API definition (specification) for the service. If you pass this with the `endpoints` array, this object is given preference and `endpoints` is ignored.

**Properties**

| Name    | Type   | Required | Description                                                              |
| :------ | :----- | :------- | :----------------------------------------------------------------------- |
| content | string | ❌       | A Base64-encoded JSON API definition. Cannot exceed 2 MB after decoding. |
