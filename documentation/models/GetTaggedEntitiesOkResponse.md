# GetTaggedEntitiesOkResponse

**Properties**

| Name | Type                    | Required | Description                                  |
| :--- | :---------------------- | :------- | :------------------------------------------- |
| data | SuccessfulResponseData1 | ❌       | An object containing the paginated elements. |
| meta | SuccessfulResponseMeta1 | ❌       | The response's pagination information.       |

# SuccessfulResponseData1

An object containing the paginated elements.

**Properties**

| Name     | Type                      | Required | Description                                                |
| :------- | :------------------------ | :------- | :--------------------------------------------------------- |
| entities | [Entities](Entities.md)[] | ✅       | A list of the Postman elements that contain the given tag. |

# SuccessfulResponseMeta1

The response's pagination information.

**Properties**

| Name       | Type   | Required | Description                                                              |
| :--------- | :----- | :------- | :----------------------------------------------------------------------- |
| count      | number | ✅       | The number of tagged elements returned in the response.                  |
| nextCursor | string | ❌       | The pagination cursor that points to the next record in the results set. |
