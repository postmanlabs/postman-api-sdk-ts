import { z } from 'zod';

export enum CreateApiSchemaType {
  PROTO_2 = 'proto:2',
  PROTO_3 = 'proto:3',
  GRAPHQL = 'graphql',
  OPENAPI_3_1 = 'openapi:3_1',
  OPENAPI_3 = 'openapi:3',
  OPENAPI_2 = 'openapi:2',
  OPENAPI_1 = 'openapi:1',
  RAML_1 = 'raml:1',
  RAML_0_8 = 'raml:0_8',
  WSDL_2 = 'wsdl:2',
  WSDL_1 = 'wsdl:1',
  ASYNCAPI_2 = 'asyncapi:2',
}
