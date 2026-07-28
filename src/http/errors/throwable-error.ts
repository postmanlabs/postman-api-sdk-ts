import { HttpMetadata } from '../types';

/**
 * Error class that can be thrown explicitly via a throw() method.
 * Extends the built-in Error class with a convenience method for throwing.
 */
export class ThrowableError extends Error {
  /**
   * Optional metadata about the HTTP response that triggered this error.
   */
  public metadata?: HttpMetadata;

  /**
   * Creates a new throwable error.
   * @param message - The error message
   * @param response - Optional response data associated with the error
   */
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  /**
   * Creates an error instance from a response body.
   * Parsing (which can throw) is kept out of the constructor so that constructing
   * an error while handling an error response never throws. The base implementation
   * simply constructs the instance; subclasses may override to populate typed fields.
   *
   * Contract: every subclass constructor must accept `(message, response?)`. The base
   * uses `new this(message, response)`, so a subclass with a different constructor
   * signature must override `from()`.
   * @param message - The error message
   * @param response - Optional response data associated with the error
   * @returns A new error instance
   */
  static from(message: string, response?: unknown): ThrowableError {
    return new this(message, response);
  }

  /**
   * Throws this error instance.
   * Convenience method for explicitly throwing the error.
   * @throws This error instance
   */
  public throw() {
    throw this;
  }
}
