# MockServerDelayData

Information about the mock server's simulated network delay settings. This returns a null value if there are no configured network delay settings.

**Properties**

| Name     | Type                    | Required | Description                                                                                                                                       |
| :------- | :---------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| type     | MockServerDelayDataType | ❌       | The `fixed` value.                                                                                                                                |
| preset   | Preset                  | ❌       | The simulated fixed network delay value: - `1` — 2G (300 ms). - `2` — 3G (100 ms). The object does not return this value for custom delay values. |
| duration | number                  | ❌       | For custom network delays, the custom configured delay, in milliseconds.                                                                          |

# MockServerDelayDataType

The `fixed` value.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| FIXED | string | ✅       | "fixed"     |

# Preset

The simulated fixed network delay value: - `1` — 2G (300 ms). - `2` — 3G (100 ms). The object does not return this value for custom delay values.

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| \_1  | string | ✅       | "1"         |
| \_2  | string | ✅       | "2"         |
