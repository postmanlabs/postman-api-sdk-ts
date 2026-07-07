# GetScimServiceProviderConfigOkResponse

Information about Postman's SCIM API configurations and supported operations.

**Properties**

| Name                  | Type                                                | Required | Description                                                                                                                                   |
| :-------------------- | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| schemas               | string[]                                            | ❌       | The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).                                                                      |
| documentationUri      | string                                              | ❌       | A link to the URI's documentation.                                                                                                            |
| patch                 | Patch                                               | ❌       | Information about patch configuration.                                                                                                        |
| bulk                  | Bulk                                                | ❌       | Information about bulk configuration.                                                                                                         |
| filter                | Filter                                              | ❌       | Information about the filter configuration.                                                                                                   |
| changePassword        | ChangePassword                                      | ❌       | Information about the change password configuration.                                                                                          |
| sort                  | Sort                                                | ❌       | Information about the sort configuration.                                                                                                     |
| authenticationSchemes | [AuthenticationSchemes](AuthenticationSchemes.md)[] | ❌       | A list of authentication schemes.                                                                                                             |
| etag                  | Etag                                                | ❌       | Information about the [entity tag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) (Etag) HTTP response header configuration. |
| meta                  | SuccessfulResponseMeta7                             | ❌       | The response's non-standard meta information.                                                                                                 |

# Patch

Information about patch configuration.

**Properties**

| Name      | Type    | Required | Description                        |
| :-------- | :------ | :------- | :--------------------------------- |
| supported | boolean | ❌       | If true, the feature is supported. |

# Bulk

Information about bulk configuration.

**Properties**

| Name           | Type    | Required | Description                                                         |
| :------------- | :------ | :------- | :------------------------------------------------------------------ |
| maxOperations  | number  | ❌       | The total number of maximum operations allowed for bulk operations. |
| maxPayloadSize | number  | ❌       | The maximum payload allowed for bulk operations.                    |
| supported      | boolean | ❌       | If true, the feature is supported.                                  |

# Filter

Information about the filter configuration.

**Properties**

| Name       | Type    | Required | Description                                                        |
| :--------- | :------ | :------- | :----------------------------------------------------------------- |
| maxResults | number  | ❌       | The total number of maximum results allowed for filter operations. |
| supported  | boolean | ❌       | If true, the feature is supported.                                 |

# ChangePassword

Information about the change password configuration.

**Properties**

| Name      | Type    | Required | Description                        |
| :-------- | :------ | :------- | :--------------------------------- |
| supported | boolean | ❌       | If true, the feature is supported. |

# Sort

Information about the sort configuration.

**Properties**

| Name      | Type    | Required | Description                        |
| :-------- | :------ | :------- | :--------------------------------- |
| supported | boolean | ❌       | If true, the feature is supported. |

# Etag

Information about the [entity tag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) (Etag) HTTP response header configuration.

**Properties**

| Name      | Type    | Required | Description                        |
| :-------- | :------ | :------- | :--------------------------------- |
| supported | boolean | ❌       | If true, the feature is supported. |

# SuccessfulResponseMeta7

The response's non-standard meta information.

**Properties**

| Name         | Type   | Required | Description |
| :----------- | :----- | :------- | :---------- |
| resourceType | string | ❌       |             |
| location     | string | ❌       |             |
