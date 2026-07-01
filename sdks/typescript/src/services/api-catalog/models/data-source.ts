import { z } from 'zod';
import { Repo, repo, repoRequest, repoResponse } from './repo';
import { PullRequest, pullRequest, pullRequestRequest, pullRequestResponse } from './pull-request';

/**
 * Zod schema for the DataSource model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const dataSource = z.lazy(() => {
  return z.object({
    branch: z.string().nullable(),
    commitSha: z.string().nullable(),
    repo: repo,
    pullRequest: pullRequest.nullable(),
  });
});

/**
 * Information about the Git source control for the CI run.
 * @typedef  {DataSource} dataSource - Information about the Git source control for the CI run. - Information about the Git source control for the CI run.
 * @property {string} - The Git branch's name.
 * @property {string} - The full Git commit SHA.
 * @property {Repo} - Information about the source repository.
 * @property {PullRequest} - Information about the pull request. This returns null if the run wasn't triggered by a pull request.
 */
export type DataSource = z.infer<typeof dataSource>;

/**
 * Zod schema for mapping API responses to the DataSource application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const dataSourceResponse = z.lazy(() => {
  return z
    .object({
      branch: z.string().nullable(),
      commitSha: z.string().nullable(),
      repo: repoResponse,
      pullRequest: pullRequestResponse.nullable(),
    })
    .transform((data) => ({
      branch: data['branch'],
      commitSha: data['commitSha'],
      repo: data['repo'],
      pullRequest: data['pullRequest'],
    }));
});

/**
 * Zod schema for mapping the DataSource application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const dataSourceRequest = z.lazy(() => {
  return z
    .object({
      branch: z.string().nullable(),
      commitSha: z.string().nullable(),
      repo: repoRequest,
      pullRequest: pullRequestRequest.nullable(),
    })
    .transform((data) => ({
      branch: data['branch'],
      commitSha: data['commitSha'],
      repo: data['repo'],
      pullRequest: data['pullRequest'],
    }));
});
