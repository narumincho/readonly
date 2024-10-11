import type {
  ReadonlyBigInt64Array,
  ReadonlyBigUint64Array,
  ReadonlyDate,
  ReadonlyFloat32Array,
  ReadonlyFloat64Array,
  ReadonlyInt16Array,
  ReadonlyInt32Array,
  ReadonlyInt8Array,
  ReadonlyUint16Array,
  ReadonlyUint32Array,
  ReadonlyUint8Array,
  ReadonlyUint8ClampedArray,
  ReadonlyURL,
  ReadonlyURLSearchParams,
} from "./mod.ts";
import { assertEquals } from "jsr:@std/assert";

Deno.test("URL", () => {
  const value: ReadonlyURL = new URL("https://example.com");
  assertEquals(value.href, "https://example.com/");
});

Deno.test("URLSearchParams", () => {
  const value: ReadonlyURLSearchParams = new URLSearchParams(
    "a=3&b=4&c=5",
  );
  assertEquals(value.size, 3);
});

Deno.test("Int8Array", () => {
  const value: ReadonlyInt8Array = new Int8Array(
    [4, 5, 6],
  );
  assertEquals(value[1], 5);
});

Deno.test("Uint8Array", () => {
  const value: ReadonlyUint8Array = new Uint8Array(
    [4, 5, 6],
  );
  assertEquals(value[1], 5);
});

Deno.test("Uint8ClampedArray", () => {
  const value: ReadonlyUint8ClampedArray = new Uint8ClampedArray(
    [4, 5, 6],
  );
  assertEquals(value[1], 5);
});

Deno.test("Int16Array", () => {
  const value: ReadonlyInt16Array = new Int16Array(
    [4, 5, 6],
  );
  assertEquals(value[1], 5);
});

Deno.test("Uint16Array", () => {
  const value: ReadonlyUint16Array = new Uint16Array(
    [4, 5, 6],
  );
  assertEquals(value[1], 5);
});

Deno.test("Int32Array", () => {
  const value: ReadonlyInt32Array = new Int32Array(
    [4, 5, 6],
  );
  assertEquals(value[1], 5);
});

Deno.test("Uint32Array", () => {
  const value: ReadonlyUint32Array = new Uint32Array(
    [4, 5, 6],
  );
  assertEquals(value[1], 5);
});

Deno.test("Float32Array", () => {
  const value: ReadonlyFloat32Array = new Float32Array(
    [4, 5, 6],
  );
  assertEquals(value[1], 5);
});

Deno.test("Float64Array", () => {
  const value: ReadonlyFloat64Array = new Float64Array(
    [4, 5, 6],
  );
  assertEquals(value[1], 5);
});

Deno.test("Float64Array", () => {
  const value: ReadonlyFloat64Array = new Float64Array(
    [4, 5, 6],
  );
  assertEquals(value[1], 5);
});

Deno.test("BigInt64Array", () => {
  const value: ReadonlyBigInt64Array = new BigInt64Array(
    [4n, 5n, 6n],
  );
  assertEquals(value[1], 5n);
});

Deno.test("BigUint64Array", () => {
  const value: ReadonlyBigUint64Array = new BigUint64Array(
    [4n, 5n, 6n],
  );
  assertEquals(value[1], 5n);
});

Deno.test("Date", () => {
  const date: ReadonlyDate = new Date("2024-10-11T00:09:41.781Z");
  const value = date[Symbol.toPrimitive]("number");
  assertEquals(value, 1728605381781);
});
