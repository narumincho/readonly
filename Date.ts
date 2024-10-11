/** Enables basic storage and retrieval of dates and times. */
export type ReadonlyDate = {
  // from lib.es5.d.ts

  /** Returns a string representation of a date. The format of the string depends on the locale. */
  readonly toString: () => string;
  /** Returns a date as a string value. */
  readonly toDateString: () => string;
  /** Returns a time as a string value. */
  readonly toTimeString: () => string;
  /** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */
  readonly valueOf: () => number;
  /** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */
  readonly getTime: () => number;
  /** Gets the year, using local time. */
  readonly getFullYear: () => number;
  /** Gets the year using Universal Coordinated Time (UTC). */
  readonly getUTCFullYear: () => number;
  /** Gets the month, using local time. */
  readonly getMonth: () => number;
  /** Gets the month of a Date object using Universal Coordinated Time (UTC). */
  readonly getUTCMonth: () => number;
  /** Gets the day-of-the-month, using local time. */
  readonly getDate: () => number;
  /** Gets the day-of-the-month, using Universal Coordinated Time (UTC). */
  readonly getUTCDate: () => number;
  /** Gets the day of the week, using local time. */
  readonly getDay: () => number;
  /** Gets the day of the week using Universal Coordinated Time (UTC). */
  getUTCDay(): number;
  /** Gets the hours in a date, using local time. */
  getHours(): number;
  /** Gets the hours value in a Date object using Universal Coordinated Time (UTC). */
  getUTCHours(): number;
  /** Gets the minutes of a Date object, using local time. */
  getMinutes(): number;
  /** Gets the minutes of a Date object using Universal Coordinated Time (UTC). */
  getUTCMinutes(): number;
  /** Gets the seconds of a Date object, using local time. */
  getSeconds(): number;
  /** Gets the seconds of a Date object using Universal Coordinated Time (UTC). */
  getUTCSeconds(): number;
  /** Gets the milliseconds of a Date, using local time. */
  getMilliseconds(): number;
  /** Gets the milliseconds of a Date object using Universal Coordinated Time (UTC). */
  getUTCMilliseconds(): number;
  /** Gets the difference in minutes between Universal Coordinated Time (UTC) and the time on the local computer. */
  getTimezoneOffset(): number;
  /** Returns a date converted to a string using Universal Coordinated Time (UTC). */
  toUTCString(): string;
  /** Returns a date as a string value in ISO format. */
  toISOString(): string;
  /** Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization. */
  toJSON(key?: unknown): string;

  // from lib.es2015.symbol.wellknown.d.ts

  /**
   * Converts a Date object to a string or number.
   *
   * @param hint The strings "number", "string", or "default" to specify what primitive to return.
   *
   * @throws {TypeError} If 'hint' was given something other than "number", "string", or "default".
   * @returns A number if 'hint' was "number", a string if 'hint' was "string" or "default".
   */
  readonly [Symbol.toPrimitive]: <T extends string>(
    hint: T,
  ) => T extends "default" | "string" ? string
    : T extends "number" ? number
    : (string | number);

  // lib.es2020.date.d.ts

  /**
   * Converts a date and time to a string by using the current or specified locale.
   * @param locales A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  readonly toLocaleString: (
    locales?: Intl.LocalesArgument,
    options?: Intl.DateTimeFormatOptions,
  ) => string;

  /**
   * Converts a date to a string by using the current or specified locale.
   * @param locales A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  readonly toLocaleDateString: (
    locales?: Intl.LocalesArgument,
    options?: Intl.DateTimeFormatOptions,
  ) => string;

  /**
   * Converts a time to a string by using the current or specified locale.
   * @param locales A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  readonly toLocaleTimeString: (
    locales?: Intl.LocalesArgument,
    options?: Intl.DateTimeFormatOptions,
  ) => string;
};
