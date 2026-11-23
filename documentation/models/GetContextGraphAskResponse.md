# GetContextGraphAskResponse

**Properties**

| Name        | Type                                              | Required | Description                                                                                                                            |
| :---------- | :------------------------------------------------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| askId       | string                                            | ✅       | The ask's ID.                                                                                                                          |
| status      | [ContextGraphAskStatus](ContextGraphAskStatus.md) | ✅       | The ask's lifecycle state.                                                                                                             |
| question    | string                                            | ✅       | The natural-language question that was asked.                                                                                          |
| revision    | number                                            | ✅       | The graph revision the ask was evaluated against.                                                                                      |
| createdAt   | string                                            | ✅       | The date and time the ask was submitted, in ISO 8601 format.                                                                           |
| completedAt | string                                            | ❌       | The date and time the ask reached a terminal state, in ISO 8601 format. This value is `null` until the ask is `completed` or `failed`. |
| error       | string                                            | ❌       | A short reason the ask failed, such as the ask having timed out. This property is only present if `status` is `failed`.                |
| result      | GetContextGraphAskResponseResult                  | ❌       | The ask's result. This property is only present if `status` is `completed`.                                                            |

# GetContextGraphAskResponseResult

The ask's result. This property is only present if `status` is `completed`.

**Properties**

| Name       | Type       | Required | Description                                                                                                      |
| :--------- | :--------- | :------- | :--------------------------------------------------------------------------------------------------------------- |
| provenance | Provenance | ✅       | Information about how the ask reached its answer.                                                                |
| citations  | any[]      | ✅       | The graph entities the answer is grounded in. The shape of each item varies with the entity's kind.              |
| usage      | Usage      | ✅       | A summary of the resources the ask consumed.                                                                     |
| answer     | string     | ❌       | The natural-language answer to the question. This value is `null` if `includeAnswer` was `false` in the request. |
| structured | any        | ❌       | The graph data the answer rests on. The shape of this object varies with the question.                           |

# Provenance

Information about how the ask reached its answer.

**Properties**

| Name      | Type                                  | Required | Description                                                         |
| :-------- | :------------------------------------ | :------- | :------------------------------------------------------------------ |
| revision  | number                                | ✅       | The graph revision the ask ran against.                             |
| steps     | [ProvenanceStep](ProvenanceStep.md)[] | ✅       | The ordered tool calls the ask made to reach its answer.            |
| truncated | boolean                               | ❌       | Whether the ask reached its deadline and returned a partial result. |

# Usage

A summary of the resources the ask consumed.

**Properties**

| Name         | Type   | Required | Description                                                                                            |
| :----------- | :----- | :------- | :----------------------------------------------------------------------------------------------------- |
| steps        | number | ✅       | The number of tool calls the ask made.                                                                 |
| outputTokens | number | ❌       | The number of LLM output tokens the ask consumed. This property is only present if the value is known. |
