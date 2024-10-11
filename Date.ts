/** Enables basic storage and retrieval of dates and times. */
export type ReadonlyDate = {
  // from lib.es5.d.ts

  /**
   * Returns a string representation of a date. The format of the string depends on the locale.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/toString)
   */
  readonly toString: () => string;

  /**
   * Returns a date as a string value.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString)
   */
  readonly toDateString: () => string;

  /**
   * Returns a time as a string value.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString)
   */
  readonly toTimeString: () => string;

  /**
   * Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf)
   */
  readonly valueOf: () => number;

  /**
   * Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)
   */
  readonly getTime: () => number;

  /**
   * Gets the year, using local time.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)
   */
  readonly getFullYear: () => number;

  /**
   * Gets the year using Universal Coordinated Time (UTC).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear)
   */
  readonly getUTCFullYear: () => number;

  /**
   * Gets the month, using local time.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth)
   */
  readonly getMonth: () => number;

  /**
   * Gets the month of a Date object using Universal Coordinated Time (UTC).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth)
   */
  readonly getUTCMonth: () => number;

  /**
   * Gets the day-of-the-month, using local time.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate)
   */
  readonly getDate: () => number;

  /**
   * Gets the day-of-the-month, using Universal Coordinated Time (UTC).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate)
   */
  readonly getUTCDate: () => number;

  /**
   * Gets the day of the week, using local time.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)
   */
  readonly getDay: () => number;

  /**
   * Gets the day of the week using Universal Coordinated Time (UTC).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay)
   */
  readonly getUTCDay: () => number;

  /**
   * Gets the hours in a date, using local time.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours)
   */
  readonly getHours: () => number;

  /**
   * Gets the hours value in a Date object using Universal Coordinated Time (UTC).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCHours)
   */
  readonly getUTCHours: () => number;

  /**
   * Gets the minutes of a Date object, using local time.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes)
   */
  readonly getMinutes: () => number;

  /**
   * Gets the minutes of a Date object using Universal Coordinated Time (UTC).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes)
   */
  readonly getUTCMinutes: () => number;

  /**
   * Gets the seconds of a Date object, using local time.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds)
   */
  readonly getSeconds: () => number;

  /**
   * Gets the seconds of a Date object using Universal Coordinated Time (UTC).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds)
   */
  readonly getUTCSeconds: () => number;

  /**
   * Gets the milliseconds of a Date, using local time.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds)
   */
  readonly getMilliseconds: () => number;

  /**
   * Gets the milliseconds of a Date object using Universal Coordinated Time (UTC).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds)
   */
  readonly getUTCMilliseconds: () => number;

  /**
   * Gets the difference in minutes between Universal Coordinated Time (UTC) and the time on the local computer.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset)
   */
  readonly getTimezoneOffset: () => number;

  /**
   * Returns a date converted to a string using Universal Coordinated Time (UTC).
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString)
   */
  readonly toUTCString: () => string;

  /**
   * Returns a date as a string value in ISO format.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
   */
  readonly toISOString: () => string;

  /**
   * Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON)
   */
  readonly toJSON: () => string;

  // from lib.es2015.symbol.wellknown.d.ts

  /**
   * Converts a Date object to a string or number.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)
   */
  readonly [Symbol.toPrimitive]: {
    (hint: "default"): string;
    (hint: "string"): string;
    (hint: "number"): number;
  };

  // lib.es2020.date.d.ts

  /**
   * Converts a date and time to a string by using the current or specified locale.
   * @param locales A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
   */
  readonly toLocaleString: (
    locales?: Intl.LocalesArgument,
    options?: Intl.DateTimeFormatOptions,
  ) => string;

  /**
   * Converts a date to a string by using the current or specified locale.
   * @param locales A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)
   */
  readonly toLocaleDateString: (
    locales?: Intl.LocalesArgument,
    options?: Intl.DateTimeFormatOptions,
  ) => string;

  /**
   * Converts a time to a string by using the current or specified locale.
   * @param locales A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString)
   */
  readonly toLocaleTimeString: (
    locales?: Intl.LocalesArgument,
    options?: Intl.DateTimeFormatOptions,
  ) => string;
};
