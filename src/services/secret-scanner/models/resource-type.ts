import { z } from 'zod';

export enum ResourceType {
  COLLECTION = 'collection',
  ENVIRONMENT = 'environment',
  EXTENSIBLE_COLLECTION = 'extensible-collection',
  GLOBALS = 'globals',
  EXAMPLE = 'example',
  REQUEST = 'request',
  FOLDER = 'folder',
  EXTENSIBLE_COLLECTION_META = 'extensible-collection-meta',
  EXTENSIBLE_REQUEST = 'extensible-request',
  EXTENSIBLE_FOLDER = 'extensible-folder',
  EXTENSIBLE_EXAMPLE = 'extensible-example',
  EXTENSIBLE_MESSAGE = 'extensible-message',
}
