# PatchEnvironmentAdd

**Properties**

| Name  | Type                     | Required | Description                                                                                                                                                                                              |
| :---- | :----------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| op    | string                   | ✅       | The `add` operation.                                                                                                                                                                                     |
| path  | string                   | ✅       | The [JSON Pointer syntax](https://datatracker.ietf.org/doc/html/rfc6901) that indicates the entry to update, in `/values/#` format, where `#` is the entry ID. The first record begins at the `0` value. |
| value | PatchEnvironmentAddValue | ✅       | The environment variable to add.                                                                                                                                                                         |

# PatchEnvironmentAddValue

The environment variable to add.
