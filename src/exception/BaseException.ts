/**
 * @ignore
 */
export class BaseException extends Error {
  constructor(public readonly status: string, public readonly message: string, public readonly timestamp: number) {
    super();
  }
}
