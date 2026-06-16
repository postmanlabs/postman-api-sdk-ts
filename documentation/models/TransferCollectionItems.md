# TransferCollectionItems

**Properties**

| Name     | Type     | Required | Description                                                                                                                                                                                           |
| :------- | :------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids      | string[] | ✅       | A list of collection request, response, or folder UIDs to transfer.                                                                                                                                   |
| mode     | Mode     | ✅       | The transfer operation to perform.                                                                                                                                                                    |
| target   | Target   | ✅       | Information about the item transfer's destination location.                                                                                                                                           |
| location | Location | ✅       | The transferred items' placement in the target destination: - For `start` or `end` — Do not include the `model` and `id` values. - For `before` or `after` — Include the `model` and `id` properties. |

# Mode

The transfer operation to perform.

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| COPY | string | ✅       | "copy"      |
| MOVE | string | ✅       | "move"      |

# Target

Information about the item transfer's destination location.

**Properties**

| Name  | Type        | Required | Description                                                                                                                |
| :---- | :---------- | :------- | :------------------------------------------------------------------------------------------------------------------------- |
| id    | string      | ✅       | The UID of the destination collection, folder, or request.                                                                 |
| model | TargetModel | ✅       | The collection, folder, or request that the items will be transferred to. For response transfers, use the `request` value. |

# TargetModel

The collection, folder, or request that the items will be transferred to. For response transfers, use the `request` value.

**Properties**

| Name       | Type   | Required | Description  |
| :--------- | :----- | :------- | :----------- |
| COLLECTION | string | ✅       | "collection" |
| FOLDER     | string | ✅       | "folder"     |
| REQUEST    | string | ✅       | "request"    |

# Location

The transferred items' placement in the target destination: - For `start` or `end` — Do not include the `model` and `id` values. - For `before` or `after` — Include the `model` and `id` properties.

**Properties**

| Name     | Type     | Required | Description                                                                                                                                              |
| :------- | :------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| position | Position | ✅       | The transferred item's position within the destination object.                                                                                           |
| id       | string   | ❌       | For `before` or `after` positions, the model's UID.                                                                                                      |
| model    | string   | ❌       | For `before` or `after` positions, the type of item (model) that the transferred item will be positioned by. One of: `folder`, `request`, or `response.` |

# Position

The transferred item's position within the destination object.

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| START  | string | ✅       | "start"     |
| END    | string | ✅       | "end"       |
| BEFORE | string | ✅       | "before"    |
| AFTER  | string | ✅       | "after"     |
