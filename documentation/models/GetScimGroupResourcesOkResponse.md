# GetScimGroupResourcesOkResponse

**Properties**

| Name         | Type                                        | Required | Description                                          |
| :----------- | :------------------------------------------ | :------- | :--------------------------------------------------- |
| resources    | [ScimGroupResource](ScimGroupResource.md)[] | ❌       | A list of group resources.                           |
| itemsPerPage | number                                      | ❌       | The number of items per response page.               |
| schemas      | string[]                                    | ❌       |                                                      |
| startIndex   | number                                      | ❌       | The index entry by which the returned results begin. |
| totalResults | number                                      | ❌       | The total number of results found.                   |
