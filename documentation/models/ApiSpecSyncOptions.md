# ApiSpecSyncOptions

**Properties**

| Name        | Type        | Required | Description                                       |
| :---------- | :---------- | :------- | :------------------------------------------------ |
| syncOptions | SyncOptions | ❌       | Information about the specification sync options. |

# SyncOptions

Information about the specification sync options.

**Properties**

| Name                   | Type    | Required | Description                                                                                                                |
| :--------------------- | :------ | :------- | :------------------------------------------------------------------------------------------------------------------------- |
| syncExamples           | boolean | ❌       | If true, updates made to examples in the specification or to example values in the generated collection stay synchronized. |
| deleteOrphanedRequests | boolean | ❌       | If true, deletes requests and endpoints that no longer exist in the source during sync.                                    |
