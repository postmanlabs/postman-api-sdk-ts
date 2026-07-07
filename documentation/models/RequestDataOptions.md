# RequestDataOptions

Additional configurations and options set for the request body's various data modes.

**Properties**

| Name       | Type | Required | Description                             |
| :--------- | :--- | :------- | :-------------------------------------- |
| raw        | Raw  | ❌       | Options for the `raw` data mode.        |
| urlencoded | any  | ❌       | Options for the `urlencoded` data mode. |
| params     | any  | ❌       | Options for the `params` data mode.     |
| binary     | any  | ❌       | Options for the `binary` data mode.     |
| graphql    | any  | ❌       | Options for the `graphql` data mode.    |

# Raw

Options for the `raw` data mode.

**Properties**

| Name     | Type   | Required | Description                        |
| :------- | :----- | :------- | :--------------------------------- |
| language | string | ❌       | The raw mode data's language type. |
