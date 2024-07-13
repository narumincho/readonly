# @narumincho/readonly

TypeScript readonly type

- ReadonlyURL
- ReadonlyURLSearchParams

## Example

```ts
const url = new URL("https://example.com");
func(url);
console.log(url); // https://example.com/aaa

const func = (url: URL): void => {
  url.pathname = "/aaa";
};
```

```ts
import type { ReadonlyURL } from "jsr:@narumincho/readonly";

const url = new URL("https://example.com");
func(url);
console.log(url); // https://example.com

const func = (url: ReadonlyURL): void => {
  url.pathname = "/aaa"; // Cannot assign to 'pathname' because it is a read-only property.
};
```

With `jsr:@narumincho/readonly`, URLs can be guaranteed not to be overwritten
