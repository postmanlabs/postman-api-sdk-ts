# PatchEnvironmentReplace

**Properties**

| Name  | Type   | Required | Description                                                                                                                                                                                                                                                                                                     |
| :---- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| op    | string | ✅       | The `replace` operation.                                                                                                                                                                                                                                                                                        |
| path  | string | ✅       | The [JSON Pointer syntax](https://datatracker.ietf.org/doc/html/rfc6901) that indicates the entry to update, in `/values/#/{value}` format, where: - `#` — The entry ID. The first record begins at the `0` value. - `{value}` — The variable property to update. Accepts `key`, `value`, `type`, and `enable`. |
| value | string | ✅       | The variable's value.                                                                                                                                                                                                                                                                                           |
