import { z } from 'zod';

/**
 * Zod schema for the Pipeline model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const pipeline = z.lazy(() => {
  return z.object({
    provider: z.string().nullable(),
    workflowName: z.string().nullable(),
    workflowId: z.string().nullable(),
    jobName: z.string().nullable(),
    jobId: z.string().nullable(),
    pipelineId: z.string().nullable(),
    pipelineNumber: z.string().nullable(),
    runAttempt: z.number().nullable(),
    actor: z.string().nullable(),
  });
});

/**
 * Information about the CI/CD pipeline.
 * @typedef  {Pipeline} pipeline - Information about the CI/CD pipeline. - Information about the CI/CD pipeline.
 * @property {string} - The CI provider.
 * @property {string} - The workflow or pipeline name.
 * @property {string} - The workflow ID.
 * @property {string} - The job name in the workflow.
 * @property {string} - The job's ID.
 * @property {string} - The pipeline run's ID.
 * @property {string} - The pipeline run number.
 * @property {number} - The attempt number for this run.
 * @property {string} - The user or bot that triggered the run.
 */
export type Pipeline = z.infer<typeof pipeline>;

/**
 * Zod schema for mapping API responses to the Pipeline application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pipelineResponse = z.lazy(() => {
  return z
    .object({
      provider: z.string().nullable(),
      workflowName: z.string().nullable(),
      workflowId: z.string().nullable(),
      jobName: z.string().nullable(),
      jobId: z.string().nullable(),
      pipelineId: z.string().nullable(),
      pipelineNumber: z.string().nullable(),
      runAttempt: z.number().nullable(),
      actor: z.string().nullable(),
    })
    .transform((data) => ({
      provider: data['provider'],
      workflowName: data['workflowName'],
      workflowId: data['workflowId'],
      jobName: data['jobName'],
      jobId: data['jobId'],
      pipelineId: data['pipelineId'],
      pipelineNumber: data['pipelineNumber'],
      runAttempt: data['runAttempt'],
      actor: data['actor'],
    }));
});

/**
 * Zod schema for mapping the Pipeline application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pipelineRequest = z.lazy(() => {
  return z
    .object({
      provider: z.string().nullable(),
      workflowName: z.string().nullable(),
      workflowId: z.string().nullable(),
      jobName: z.string().nullable(),
      jobId: z.string().nullable(),
      pipelineId: z.string().nullable(),
      pipelineNumber: z.string().nullable(),
      runAttempt: z.number().nullable(),
      actor: z.string().nullable(),
    })
    .transform((data) => ({
      provider: data['provider'],
      workflowName: data['workflowName'],
      workflowId: data['workflowId'],
      jobName: data['jobName'],
      jobId: data['jobId'],
      pipelineId: data['pipelineId'],
      pipelineNumber: data['pipelineNumber'],
      runAttempt: data['runAttempt'],
      actor: data['actor'],
    }));
});
