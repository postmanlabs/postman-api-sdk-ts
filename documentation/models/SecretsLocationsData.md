# SecretsLocationsData

Information about the secret finding locations.

**Properties**

| Name              | Type    | Required | Description                                                                                                                                                                                            |
| :---------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isResourceDeleted | boolean | ❌       | If true, the resource in which the secret was found was deleted.                                                                                                                                       |
| leakedBy          | number  | ❌       | The ID of the user who exposed the secret.                                                                                                                                                             |
| location          | string  | ❌       | The location where the secret was found.                                                                                                                                                               |
| occurrences       | number  | ❌       | The number of times the secret occurs in the location.                                                                                                                                                 |
| parentResourceId  | string  | ❌       | The parent resource's unique ID. If the resource is a request, folder, or example, this value is a collection ID. If the resource is a collection, globals, or environment, this is the resource's ID. |
| resourceId        | string  | ❌       | The unique ID of the resource where the secret was detected.                                                                                                                                           |
| resourceType      | string  | ❌       | The type of resource in which the secret was detected.                                                                                                                                                 |
| detectedAt        | string  | ❌       | The date and time at which the secret was detected.                                                                                                                                                    |
| url               | string  | ❌       | The URL to the resource that contains the secret.                                                                                                                                                      |
