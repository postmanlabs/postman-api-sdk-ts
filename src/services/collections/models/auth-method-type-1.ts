import { z } from 'zod';

export enum AuthMethodType1 {
  NOAUTH = 'noauth',
  BASIC = 'basic',
  BEARER = 'bearer',
  APIKEY = 'apikey',
  DIGEST = 'digest',
  OAUTH1 = 'oauth1',
  OAUTH2 = 'oauth2',
  HAWK = 'hawk',
  AWSV4 = 'awsv4',
  NTLM = 'ntlm',
  EDGEGRID = 'edgegrid',
}
