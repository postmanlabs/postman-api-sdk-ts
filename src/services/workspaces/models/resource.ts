import { z } from 'zod';

export enum Resource {
  COLLECTION = 'collection',
  REQUEST = 'request',
  RESPONSE = 'response',
  FOLDER = 'folder',
  EXTENSIBLE_COLLECTION = 'extensibleCollection',
  EXTENSIBLE_COLLECTION_ITEM = 'extensibleCollectionItem',
}
