/**
 * A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the
 * requested number of bytes could not be allocated an exception is raised.
 */
export type ReadonlyUint8Array = {
  // from lib.es5.d.ts

  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;

  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;

  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;

  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;

  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  readonly every: (
    predicate: (
      value: number,
      index: number,
      array: ReadonlyUint8Array,
    ) => unknown,
    thisArg?: unknown,
  ) => boolean;

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  readonly filter: (
    predicate: (
      value: number,
      index: number,
      array: ReadonlyUint8Array,
    ) => boolean,
    thisArg?: unknown,
  ) => ReadonlyUint8Array;

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  readonly find: (
    predicate: (
      value: number,
      index: number,
      obj: ReadonlyUint8Array,
    ) => boolean,
    thisArg?: unknown,
  ) => number | undefined;

  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  readonly findIndex: (
    predicate: (
      value: number,
      index: number,
      obj: ReadonlyUint8Array,
    ) => boolean,
    thisArg?: unknown,
  ) => number;

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  readonly forEach: (
    callbackfn: (
      value: number,
      index: number,
      array: ReadonlyUint8Array,
    ) => void,
    thisArg?: unknown,
  ) => void;

  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  readonly indexOf: (searchElement: number, fromIndex?: number) => number;

  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  readonly join: (separator?: string) => string;

  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  readonly lastIndexOf: (searchElement: number, fromIndex?: number) => number;

  /**
   * The length of the array.
   */
  readonly length: number;

  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  readonly map: (
    callbackfn: (
      value: number,
      index: number,
      array: ReadonlyUint8Array,
    ) => number,
    thisArg?: unknown,
  ) => ReadonlyUint8Array;

  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  readonly reduce: {
    (
      callbackfn: (
        previousValue: number,
        currentValue: number,
        currentIndex: number,
        array: ReadonlyUint8Array,
      ) => number,
    ): number;
    <U>(
      callbackfn: (
        previousValue: U,
        currentValue: number,
        currentIndex: number,
        array: ReadonlyUint8Array,
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
   */
  readonly reduceRight: {
    (
      callbackfn: (
        previousValue: number,
        currentValue: number,
        currentIndex: number,
        array: ReadonlyUint8Array,
      ) => number,
    ): number;
    <U>(
      callbackfn: (
        previousValue: U,
        currentValue: number,
        currentIndex: number,
        array: ReadonlyUint8Array,
      ) => U,
      initialValue: U,
    ): U;
  };

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  readonly slice: (start?: number, end?: number) => ReadonlyUint8Array;

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  readonly some: (
    predicate: (
      value: number,
      index: number,
      array: ReadonlyUint8Array,
    ) => boolean,
    thisArg?: unknown,
  ) => boolean;

  /**
   * Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  readonly subarray: (begin?: number, end?: number) => ReadonlyUint8Array;

  /**
   * Returns a string representation of an array.
   */
  readonly toString: () => string;

  /** Returns the primitive value of the specified object. */
  readonly valueOf: () => ReadonlyUint8Array;

  readonly [index: number]: number;

  // from lib.es2015.core.d.ts

  /**
   * Converts a number to a string by using the current locale.
   */
  readonly toLocaleString: {
    (): string;
    (
      locales: string | ReadonlyArray<string>,
      options?: Readonly<Intl.NumberFormatOptions>,
    ): string;
  };

  // from lib.es2015.iterable.d.ts

  readonly [Symbol.iterator]: () => IterableIterator<number>;
  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  readonly entries: () => IterableIterator<readonly [number, number]>;
  /**
   * Returns an list of keys in the array
   */
  readonly keys: () => IterableIterator<number>;
  /**
   * Returns an list of values in the array
   */
  readonly values: () => IterableIterator<number>;

  // from lib.es2015.symbol.wellknown.d.ts
  readonly [Symbol.toStringTag]: "Uint8Array";

  // from lib.es2016.array.include.d.ts

  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  readonly includes: (searchElement: number, fromIndex?: number) => boolean;

  // from lib.es2022.array.d.ts

  /**
   * Returns the item located at the specified index.
   * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
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
   */
  readonly findLast: {
    <S extends number>(
      predicate: (
        value: number,
        index: number,
        array: ReadonlyUint8Array,
      ) => value is S,
      thisArg?: unknown,
    ): S | undefined;
    (
      predicate: (
        value: number,
        index: number,
        array: ReadonlyUint8Array,
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
   */
  readonly findLastIndex: (
    predicate: (
      value: number,
      index: number,
      array: ReadonlyUint8Array,
    ) => unknown,
    thisArg?: unknown,
  ) => number;

  /**
   * Copies the array and returns the copy with the elements in reverse order.
   */
  readonly toReversed: () => ReadonlyUint8Array;

  /**
   * Copies and sorts the array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * const myNums = Uint8Array.from([11, 2, 22, 1]);
   * myNums.toSorted((a, b) => a - b) // Uint8Array(4) [1, 2, 11, 22]
   * ```
   */
  readonly toSorted: (
    compareFn?: (a: number, b: number) => number,
  ) => ReadonlyUint8Array;

  /**
   * Copies the array and inserts the given number at the provided index.
   * @param index The index of the value to overwrite. If the index is
   * negative, then it replaces from the end of the array.
   * @param value The value to insert into the copied array.
   * @returns A copy of the original array with the inserted value.
   */
  readonly with: (index: number, value: number) => ReadonlyUint8Array;
};
