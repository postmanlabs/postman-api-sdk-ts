import { z } from 'zod';
import {
  WorkspaceCollections,
  workspaceCollections,
  workspaceCollectionsRequest,
  workspaceCollectionsResponse,
} from './workspace-collections';
import {
  Environments,
  environments,
  environmentsRequest,
  environmentsResponse,
} from './environments';
import {
  WorkspaceMocks,
  workspaceMocks,
  workspaceMocksRequest,
  workspaceMocksResponse,
} from './workspace-mocks';
import {
  WorkspaceMonitors,
  workspaceMonitors,
  workspaceMonitorsRequest,
  workspaceMonitorsResponse,
} from './workspace-monitors';
import {
  WorkspaceSpecs,
  workspaceSpecs,
  workspaceSpecsRequest,
  workspaceSpecsResponse,
} from './workspace-specs';

/**
 * Zod schema for the SuccessfulResponseWorkspace2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseWorkspace2 = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    type: z.string().optional(),
    description: z.string().optional(),
    visibility: z.string().optional(),
    createdBy: z.string().optional(),
    updatedBy: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    about: z.string().optional(),
    team: z.string().optional(),
    collections: z.array(workspaceCollections).optional(),
    environments: z.array(environments).optional(),
    mocks: z.array(workspaceMocks).optional(),
    monitors: z.array(workspaceMonitors).optional(),
    specs: z.array(workspaceSpecs).optional(),
  });
});

/**
 * Information about the workspace.
 * @typedef {SuccessfulResponseWorkspace2} successfulResponseWorkspace2
 * @property {string} id - The workspace's ID.
 * @property {string} name - The workspace's name.
 * @property {SuccessfulResponseWorkspaceType} type - The type of workspace.
 * @property {string} description - The workspace's description.
 * @property {SuccessfulResponseWorkspaceVisibility} visibility - The workspace's visibility. [Visibility](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) determines who can access the workspace:
- `personal` — Only you can access the workspace.
- `team` — All team members can access the workspace.
- `private` — Only invited team members can access the workspace ([``Team`` and ``Enterprise`` plans only](https://www.postman.com/pricing)).
- `public` — Everyone can access the workspace.
- `partner` — Only invited team members and [partners](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access the workspace ([``Team`` and ``Enterprise`` plans only](https://www.postman.com/pricing)).

 * @property {string} createdBy - The user ID of the user who created the workspace.
 * @property {string} updatedBy - The user ID of the user who last updated the workspace.
 * @property {string} createdAt - The date and time at which the workspace was created.
 * @property {string} updatedAt - The date and time at which the workspace was last updated.
 * @property {string} about - A brief summary about the workspace.
 * @property {string} team - The workspace's team ID.
 * @property {WorkspaceCollections[]} collections - The workspace's collections.
 * @property {Environments[]} environments - The workspace's environments.
 * @property {WorkspaceMocks[]} mocks - The workspace's mock servers.
 * @property {WorkspaceMonitors[]} monitors - The workspace's monitors.
 * @property {WorkspaceSpecs[]} specs - The workspace's API specifications.
 */
export type SuccessfulResponseWorkspace2 = z.infer<typeof successfulResponseWorkspace2>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseWorkspace2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseWorkspace2Response = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      type: z.string().optional(),
      description: z.string().optional(),
      visibility: z.string().optional(),
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      about: z.string().optional(),
      team: z.string().optional(),
      collections: z.array(workspaceCollectionsResponse).optional(),
      environments: z.array(environmentsResponse).optional(),
      mocks: z.array(workspaceMocksResponse).optional(),
      monitors: z.array(workspaceMonitorsResponse).optional(),
      specs: z.array(workspaceSpecsResponse).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      type: data['type'],
      description: data['description'],
      visibility: data['visibility'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      about: data['about'],
      team: data['team'],
      collections: data['collections'],
      environments: data['environments'],
      mocks: data['mocks'],
      monitors: data['monitors'],
      specs: data['specs'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseWorkspace2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseWorkspace2Request = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      type: z.string().optional(),
      description: z.string().optional(),
      visibility: z.string().optional(),
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      about: z.string().optional(),
      team: z.string().optional(),
      collections: z.array(workspaceCollectionsRequest).optional(),
      environments: z.array(environmentsRequest).optional(),
      mocks: z.array(workspaceMocksRequest).optional(),
      monitors: z.array(workspaceMonitorsRequest).optional(),
      specs: z.array(workspaceSpecsRequest).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      type: data['type'],
      description: data['description'],
      visibility: data['visibility'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      about: data['about'],
      team: data['team'],
      collections: data['collections'],
      environments: data['environments'],
      mocks: data['mocks'],
      monitors: data['monitors'],
      specs: data['specs'],
    }));
});
