import { RequestParameter } from '../transport/types';
import { Serializer } from './base-serializer';

/**
 * Serializer for HTTP request headers.
 * Converts header parameters into a HeadersInit object.
 */
export class HeaderSerializer extends Serializer {
  /**
   * Serializes header parameters into a headers object.
   * @param headerParams - Map of header names to their parameter values
   * @returns A HeadersInit object with serialized header values, or undefined if no headers
   */
  public serialize(
    headerParams: Map<string, RequestParameter> | undefined,
  ): HeadersInit | undefined {
    if (!headerParams || !headerParams.size) {
      return undefined;
    }

    const headers: HeadersInit = {};
    headerParams.forEach((param) => {
      if (!param.key) {
        return;
      }
      headers[param.key] = this.serializeValue(param);
    });
    return headers;
  }
}
