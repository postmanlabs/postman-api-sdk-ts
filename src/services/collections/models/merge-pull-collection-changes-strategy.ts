import { z } from 'zod';

export enum MergePullCollectionChangesStrategy {
  DEFAULT_ = 'default',
  UPDATE_SOURCE_WITH_DESTINATION = 'updateSourceWithDestination',
  DELETE_SOURCE = 'deleteSource',
}
