# SourceCollectionStatus

**Properties**

| Name       | Type                             | Required | Description |
| :--------- | :------------------------------- | :------- | :---------- |
| collection | SourceCollectionStatusCollection | ❌       |             |

# SourceCollectionStatusCollection

**Properties**

| Name          | Type          | Required | Description                                                                                                          |
| :------------ | :------------ | :------- | :------------------------------------------------------------------------------------------------------------------- |
| collectionUid | CollectionUid | ❌       | Information about the forked collection. The object's name is the forked collection's UID (`userId`-`collectionId`). |

# CollectionUid

Information about the forked collection. The object's name is the forked collection's UID (`userId`-`collectionId`).

**Properties**

| Name          | Type    | Required | Description                                                                             |
| :------------ | :------ | :------- | :-------------------------------------------------------------------------------------- |
| isSourceAhead | boolean | ❌       | If true, there is a difference between the forked collection and its source collection. |
