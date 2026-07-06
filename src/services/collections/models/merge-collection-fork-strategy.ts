import { z } from 'zod';

export enum MergeCollectionForkStrategy {
  DELETE_SOURCE = 'deleteSource',
  UPDATE_SOURCE_WITH_DESTINATION = 'updateSourceWithDestination',
}
