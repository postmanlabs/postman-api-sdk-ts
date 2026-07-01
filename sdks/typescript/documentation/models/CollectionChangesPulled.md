# CollectionChangesPulled

**Properties**

| Name       | Type                              | Required | Description                                    |
| :--------- | :-------------------------------- | :------- | :--------------------------------------------- |
| collection | CollectionChangesPulledCollection | ❌       | Information about the updated collection fork. |

# CollectionChangesPulledCollection

Information about the updated collection fork.

**Properties**

| Name          | Type   | Required | Description                                                   |
| :------------ | :----- | :------- | :------------------------------------------------------------ |
| destinationId | string | ❌       | The ID of the forked collection the changes were pulled into. |
| sourceId      | string | ❌       | The ID of the source collection the changes were pulled from. |
