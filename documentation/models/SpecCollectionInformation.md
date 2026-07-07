# SpecCollectionInformation

Information about the API specification's collection.

**Properties**

| Name      | Type                           | Required | Description                                                 |
| :-------- | :----------------------------- | :------- | :---------------------------------------------------------- |
| id        | string                         | ❌       | The collection's ID.                                        |
| name      | string                         | ❌       | The collection's name.                                      |
| state     | SpecCollectionInformationState | ❌       | The sync state of the collection and its API specification. |
| createdAt | string                         | ❌       | The date and time at which the collection was generated.    |
| updatedAt | string                         | ❌       | The date and time at which the collection was updated.      |
| createdBy | number                         | ❌       | The user ID of the user that generated the collection.      |

# SpecCollectionInformationState

The sync state of the collection and its API specification.

**Properties**

| Name             | Type   | Required | Description        |
| :--------------- | :----- | :------- | :----------------- |
| IN_SYNC          | string | ✅       | "in-sync"          |
| OUT_OF_SYNC      | string | ✅       | "out-of-sync"      |
| SYNC_IN_PROGRESS | string | ✅       | "sync-in-progress" |
