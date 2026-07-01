# ScimUsers

**Properties**

| Name         | Type                        | Required | Description                                                              |
| :----------- | :-------------------------- | :------- | :----------------------------------------------------------------------- |
| resources    | [Resources](Resources.md)[] | ❌       | A list of user resources.                                                |
| itemsPerPage | number                      | ❌       | The number of items per response page.                                   |
| schemas      | string[]                    | ❌       | The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml). |
| startIndex   | number                      | ❌       | The index entry by which the returned results begin.                     |
| totalResults | number                      | ❌       | The total number of results found.                                       |
