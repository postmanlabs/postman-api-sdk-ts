# SearchPostmanResourcesResponseData

Information about the Postman resource.

**Properties**

| Name                   | Type                                                                | Required | Description                                                                                                               |
| :--------------------- | :------------------------------------------------------------------ | :------- | :------------------------------------------------------------------------------------------------------------------------ |
| id                     | string                                                              | ❌       | The resource's ID.                                                                                                        |
| name                   | string                                                              | ❌       | The resource's name.                                                                                                      |
| method                 | string                                                              | ❌       | The request's HTTP method. Returns only for requests.                                                                     |
| type                   | string                                                              | ❌       | The resource type variant, such as HTTP or gRPC. Returns only for requests.                                               |
| description            | string                                                              | ❌       | A brief description of the resource, if available.                                                                        |
| summary                | string                                                              | ❌       | A brief summary of the resource, if available. Returns only for workspaces and collections.                               |
| url                    | string                                                              | ❌       | The request URL of the resource. Returns only for requests.                                                               |
| tags                   | string[]                                                            | ❌       | A list of tags associated with the resource. Returns only for workspaces and collections.                                 |
| specificationId        | string                                                              | ❌       | The specification's ID. Returns only for specifications.                                                                  |
| specificationType      | string                                                              | ❌       | The specification's type. Returns only for specifications.                                                                |
| specificationName      | string                                                              | ❌       | The specification's name. Returns only for specifications.                                                                |
| isPrivateNetworkEntity | boolean                                                             | ❌       | Whether the resource is part of a private API network.                                                                    |
| createdBy              | string                                                              | ❌       | The ID of the user who created the resource.                                                                              |
| team                   | [SearchResourceTeamData](SearchResourceTeamData.md)                 | ❌       | Information about the team associated with the resource. This returns a null value for the `user` publisher type.         |
| isGitConnected         | boolean                                                             | ❌       | If true, the resource is connected to Git. Returns only for workspaces, collections, requests, specifications, and flows. |
| collection             | [SearchRequestsCollectionData](SearchRequestsCollectionData.md)     | ❌       | Information about the collection containing the resource. Returns only for requests.                                      |
| workspace              | [SearchResourceWorkspacesData](SearchResourceWorkspacesData.md)     | ❌       | Information about the workspace containing the resource.                                                                  |
| organization           | [SearchResourceOrganizationData](SearchResourceOrganizationData.md) | ❌       | Information about the organization that published the resource. This returns a null value for the `user` publisher type.  |
| links                  | [SearchResourceLinksData](SearchResourceLinksData.md)               | ❌       | Information about the resource's hypermedia links.                                                                        |
