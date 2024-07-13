import type { ReadonlyURL, ReadonlyURLSearchParams } from "./mod.ts";
import { assertEquals } from "jsr:@std/assert";

Deno.test("url", () => {
  const url: ReadonlyURL = new URL("https://example.com");
  assertEquals(url.href, "https://example.com/");
});

Deno.test("searchParams", () => {
  const url: ReadonlyURLSearchParams = new URLSearchParams(
    "a=3&b=4&c=5",
  );
  assertEquals(url.size, 3);
});
