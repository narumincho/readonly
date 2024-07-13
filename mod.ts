/**
 * The URL interface represents an object providing static methods used for creating object URLs.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL)
 */
export type ReadonlyURL = {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/hash) */
  readonly hash: string;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/host) */
  readonly host: string;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/hostname) */
  readonly hostname: string;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/href) */
  readonly href: string;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/toString) */
  readonly toString: () => string;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/origin) */
  readonly origin: string;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/password) */
  readonly password: string;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/pathname) */
  readonly pathname: string;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/port) */
  readonly port: string;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/protocol) */
  readonly protocol: string;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/search) */
  readonly search: string;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/searchParams) */
  readonly searchParams: ReadonlyURLSearchParams;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/username) */
  readonly username: string;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/toJSON) */
  readonly toJSON: () => string;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams) */
export type ReadonlyURLSearchParams = {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/size) */
  readonly size: number;

  /**
   * Returns the first value associated to the given search parameter.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/get)
   */
  readonly get: (name: string) => string | null;

  /**
   * Returns all the values association with a given search parameter.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/getAll)
   */
  readonly getAll: (name: string) => ReadonlyArray<string>;

  /**
   * Returns a Boolean indicating if such a search parameter exists.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/has)
   */
  readonly has: (name: string, value?: string) => boolean;

  /**
   * Returns a string containing a query string suitable for use in a URL. Does not include the question mark.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/toString)
   */
  readonly toString: () => string;

  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/forEach)
   */
  readonly forEach: (
    callbackfn: (
      value: string,
      key: string,
      parent: ReadonlyURLSearchParams,
    ) => void,
    thisArg?: unknown,
  ) => void;

  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams#urlsearchparams.iterator)
   */
  readonly [Symbol.iterator]: () => IterableIterator<readonly [string, string]>;

  /**
   * Returns an array of key, value pairs for every entry in the search params.
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/entries)
   */
  readonly entries: () => IterableIterator<readonly [string, string]>;

  /**
   * Returns a list of keys in the search params.
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/keys)
   */
  readonly keys: () => IterableIterator<string>;

  /**
   * Returns a list of values in the search params.
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/values)
   */
  readonly values: () => IterableIterator<string>;
};
