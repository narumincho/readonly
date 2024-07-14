import type {
  ReadonlyUint8Array,
  ReadonlyURL,
  ReadonlyURLSearchParams,
} from "./mod.ts";
import { assertEquals } from "jsr:@std/assert";

Deno.test("ReadonlyURL", () => {
  const url: ReadonlyURL = new URL("https://example.com");
  assertEquals(url.href, "https://example.com/");
});

Deno.test("ReadonlyURLSearchParams", () => {
  const url: ReadonlyURLSearchParams = new URLSearchParams(
    "a=3&b=4&c=5",
  );
  assertEquals(url.size, 3);
});

Deno.test("ReadonlyUint8Array", () => {
  const uint8Array: ReadonlyUint8Array = new Uint8Array(
    [4, 5, 6],
  );
  assertEquals(uint8Array[1], 5);
});
