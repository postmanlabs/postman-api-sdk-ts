import { z } from 'zod';
import {
  WorkspaceCollectionsData,
  workspaceCollectionsData,
  workspaceCollectionsDataRequest,
  workspaceCollectionsDataResponse,
} from './workspace-collections-data';
import {
  WorkspaceEnvironmentsData,
  workspaceEnvironmentsData,
  workspaceEnvironmentsDataRequest,
  workspaceEnvironmentsDataResponse,
} from './workspace-environments-data';
import {
  WorkspaceMocksData,
  workspaceMocksData,
  workspaceMocksDataRequest,
  workspaceMocksDataResponse,
} from './workspace-mocks-data';
import {
  WorkspaceMonitorsData,
  workspaceMonitorsData,
  workspaceMonitorsDataRequest,
  workspaceMonitorsDataResponse,
} from './workspace-monitors-data';
import {
  WorkspaceSpecsData,
  workspaceSpecsData,
  workspaceSpecsDataRequest,
  workspaceSpecsDataResponse,
} from './workspace-specs-data';
import {
  WorkspaceScimData,
  workspaceScimData,
  workspaceScimDataRequest,
  workspaceScimDataResponse,
} from './workspace-scim-data';

/**
 * Zod schema for the GetWorkspaceData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getWorkspaceData = z.lazy(() => {
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
    collections: z.array(workspaceCollectionsData).optional(),
    environments: z.array(workspaceEnvironmentsData).optional(),
    mocks: z.array(workspaceMocksData).optional(),
    monitors: z.array(workspaceMonitorsData).optional(),
    specs: z.array(workspaceSpecsData).optional(),
    scim: workspaceScimData.optional(),
  });
});

/**
 * Information about the workspace.
 * @typedef {GetWorkspaceData} getWorkspaceData
 * @property {string} id - The workspace's ID.
 * @property {string} name - The workspace's name.
 * @property {WorkspaceType} type - The type of workspace.
 * @property {string} description - The workspace's description.
 * @property {WorkspaceVisibility} visibility - The workspace's visibility. [Visibility](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) determines who can access the workspace:
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
 * @property {WorkspaceCollectionsData[]} collections - A list of the workspace's collections.
 * @property {WorkspaceEnvironmentsData[]} environments - A list of the workspace's environments.
 * @property {WorkspaceMocksData[]} mocks - A list of the workspace's mock servers.
 * @property {WorkspaceMonitorsData[]} monitors - A list of the workspace's monitors.
 * @property {WorkspaceSpecsData[]} specs - A list of the workspace's API specifications.
 * @property {WorkspaceScimData} scim - An object containing SCIM user IDs. This object only returns if you pass the `include=scim` query parameter.
 */
export type GetWorkspaceData = z.infer<typeof getWorkspaceData>;

/**
 * Zod schema for mapping API responses to the GetWorkspaceData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getWorkspaceDataResponse = z.lazy(() => {
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
      collections: z.array(workspaceCollectionsDataResponse).optional(),
      environments: z.array(workspaceEnvironmentsDataResponse).optional(),
      mocks: z.array(workspaceMocksDataResponse).optional(),
      monitors: z.array(workspaceMonitorsDataResponse).optional(),
      specs: z.array(workspaceSpecsDataResponse).optional(),
      scim: workspaceScimDataResponse.optional(),
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
      scim: data['scim'],
    }));
});

/**
 * Zod schema for mapping the GetWorkspaceData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getWorkspaceDataRequest = z.lazy(() => {
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
      collections: z.array(workspaceCollectionsDataRequest).optional(),
      environments: z.array(workspaceEnvironmentsDataRequest).optional(),
      mocks: z.array(workspaceMocksDataRequest).optional(),
      monitors: z.array(workspaceMonitorsDataRequest).optional(),
      specs: z.array(workspaceSpecsDataRequest).optional(),
      scim: workspaceScimDataRequest.optional(),
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
      scim: data['scim'],
    }));
});
