import type {
  ReadonlyInt16Array,
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
