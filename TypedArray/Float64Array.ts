/**
 * A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the
 * requested number of bytes could not be allocated an exception is raised.
 */
export type ReadonlyFloat64Array = {
  // from lib.es5.d.ts

  /**
   * The size in bytes of each element in the array.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT)
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * The ArrayBuffer instance referenced by the array.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/buffer)
   */
  readonly buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength)
   */
  readonly byteLength: number;

  /**
   * The offset in bytes of the array.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset)
   */
  readonly byteOffset: number;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every)
   */
  readonly every: (
    predicate: (
      value: number,
      index: number,
      array: ReadonlyFloat64Array,
    ) => unknown,
    thisArg?: unknown,
  ) => boolean;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter)
   */
  readonly filter: (
    predicate: (
      value: number,
      index: number,
      array: ReadonlyFloat64Array,
    ) => boolean,
    thisArg?: unknown,
  ) => ReadonlyFloat64Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/find)
   */
  readonly find: {
    <S extends number>(
      predicate: (
        value: number,
        index: number,
        array: ReadonlyFloat64Array,
      ) => value is S,
      thisArg?: unknown,
    ): S | undefined;
    (
      predicate: (
        value: number,
        index: number,
        obj: ReadonlyFloat64Array,
      ) => boolean,
      thisArg?: unknown,
    ): number | undefined;
  };

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex)
   */
  readonly findIndex: (
    predicate: (
      value: number,
      index: number,
      obj: ReadonlyFloat64Array,
    ) => boolean,
    thisArg?: unknown,
  ) => number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach)
   */
  readonly forEach: (
    callbackfn: (
      value: number,
      index: number,
      array: ReadonlyFloat64Array,
    ) => void,
    thisArg?: unknown,
  ) => void;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf)
   */
  readonly indexOf: (searchElement: number, fromIndex?: number) => number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join)
   */
  readonly join: (separator?: string) => string;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf)
   */
  readonly lastIndexOf: (searchElement: number, fromIndex?: number) => number;

  /**
   * The length of the array.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length)
   */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map)
   */
  readonly map: (
    callbackfn: (
      value: number,
      index: number,
      array: ReadonlyFloat64Array,
    ) => number,
    thisArg?: unknown,
  ) => ReadonlyFloat64Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduce)
   */
  readonly reduce: {
    (
      callbackfn: (
        previousValue: number,
        currentValue: number,
        currentIndex: number,
        array: ReadonlyFloat64Array,
      ) => number,
    ): number;
    <U>(
      callbackfn: (
        previousValue: U,
        currentValue: number,
        currentIndex: number,
        array: ReadonlyFloat64Array,
      ) => U,
      initialValue: U,
    ): U;
  };

  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight)
   */
  readonly reduceRight: {
    (
      callbackfn: (
        previousValue: number,
        currentValue: number,
        currentIndex: number,
        array: ReadonlyFloat64Array,
      ) => number,
    ): number;
    <U>(
      callbackfn: (
        previousValue: U,
        currentValue: number,
        currentIndex: number,
        array: ReadonlyFloat64Array,
      ) => U,
      initialValue: U,
    ): U;
  };

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice)
   */
  readonly slice: (start?: number, end?: number) => ReadonlyFloat64Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/some)
   */
  readonly some: (
    predicate: (
      value: number,
      index: number,
      array: ReadonlyFloat64Array,
    ) => boolean,
    thisArg?: unknown,
  ) => boolean;

  /**
   * Gets a new Float64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray)
   */
  readonly subarray: (begin?: number, end?: number) => ReadonlyFloat64Array;

  /**
   * Returns a string representation of an array.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString)
   */
  readonly toString: () => string;

  /** Returns the primitive value of the specified object. */
  readonly valueOf: () => ReadonlyFloat64Array;

  readonly [index: number]: number;

  // from lib.es2015.core.d.ts

  /**
   * Converts a number to a string by using the current locale.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString)
   */
  readonly toLocaleString: {
    (): string;
    (
      locales: string | ReadonlyArray<string>,
      options?: Readonly<Intl.NumberFormatOptions>,
    ): string;
  };

  // from lib.es2015.iterable.d.ts

  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator)
   */
  readonly [Symbol.iterator]: () => IterableIterator<number>;
  /**
   * Returns an array of key, value pairs for every entry in the array
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/entries)
   */
  readonly entries: () => IterableIterator<readonly [number, number]>;
  /**
   * Returns an list of keys in the array
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys)
   */
  readonly keys: () => IterableIterator<number>;
  /**
   * Returns an list of values in the array
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values)
   */
  readonly values: () => IterableIterator<number>;

  // from lib.es2015.symbol.wellknown.d.ts
  readonly [Symbol.toStringTag]: "Float64Array";

  // from lib.es2016.array.include.d.ts

  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes)
   */
  readonly includes: (searchElement: number, fromIndex?: number) => boolean;

  // from lib.es2022.array.d.ts

  /**
   * Returns the item located at the specified index.
   * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/at)
   */
  readonly at: (index: number) => number | undefined;

  // from lib.es2023.array.d.ts

  /**
   * Returns the value of the last element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate findLast calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found, findLast
   * immediately returns that element value. Otherwise, findLast returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findLast)
   */
  readonly findLast: {
    <S extends number>(
      predicate: (
        value: number,
        index: number,
        array: ReadonlyFloat64Array,
      ) => value is S,
      thisArg?: unknown,
    ): S | undefined;
    (
      predicate: (
        value: number,
        index: number,
        array: ReadonlyFloat64Array,
      ) => unknown,
      thisArg?: unknown,
    ): number | undefined;
  };

  /**
   * Returns the index of the last element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate findLastIndex calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findLastIndex)
   */
  readonly findLastIndex: (
    predicate: (
      value: number,
      index: number,
      array: ReadonlyFloat64Array,
    ) => unknown,
    thisArg?: unknown,
  ) => number;

  /**
   * Copies the array and returns the copy with the elements in reverse order.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed)
   */
  readonly toReversed: () => ReadonlyFloat64Array;

  /**
   * Copies and sorts the array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * const myNums = Float64Array.from([11, 2, 22, 1]);
   * myNums.toSorted((a, b) => a - b) // Float64Array(4) [1, 2, 11, 22]
   * ```
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted)
   */
  readonly toSorted: (
    compareFn?: (a: number, b: number) => number,
  ) => ReadonlyFloat64Array;

  /**
   * Copies the array and inserts the given number at the provided index.
   * @param index The index of the value to overwrite. If the index is
   * negative, then it replaces from the end of the array.
   * @param value The value to insert into the copied array.
   * @returns A copy of the original array with the inserted value.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/with)
   */
  readonly with: (index: number, value: number) => ReadonlyFloat64Array;
};
