# SubmitContextGraphAsk

**Properties**

| Name          | Type    | Required | Description                                                                                                                                               |
| :------------ | :------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| query         | string  | ✅       | The natural-language question to answer against the graph.                                                                                                |
| includeAnswer | boolean | ❌       | Whether to include the prose answer in the result. If `false`, the result's `answer` property is `null` and the result's other properties are unaffected. |
| maxSteps      | number  | ❌       | The maximum number of tool calls the ask can make. Must be between `1` and `15`.                                                                          |
