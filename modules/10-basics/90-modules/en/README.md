
In this lesson, let's look at the TypeScript module system, which predates the standardization of ESM modules.

By default, this module system is compatible with Node.js modules. It uses an identical algorithm for defining imports and exports, while being syntactically similar to ESM. In it, we use the `import`/`export` keywords to import into and export from the current module, while still validating the use of CommonJS modules.

For the example, let's create two files. We will export the function from one and import it in the other:

```typescript
// @file helloWorld.ts
export default function helloWorld() {
  console.log("Hello, world!");
}

// @file main.ts
import helloWorld from './helloWorld';
```

The TypeScript module system also supports named export/import and importing everything exported via `import * as`:

```typescript
// @file helloWorld
export function helloWorld() {}
export function helloWorldAgain() {}

// @file main
import { helloWorld, helloWorldAgain } from './helloWorld';

// @file next
import * as hw from './helloWorld';
hw.helloWorld();
```

## Type import

TypeScript uses npm packages for dependencies just like JavaScript. It is important to remember that some packages may not have types. For example, the `lodash` package has no types, so when importing its functions, TypeScript will crap on the lack of types.

To solve this problem, you need to install the `@types/lodash` package, which contains the types for `lodash`.

But the opposite is also true, for example, the `type-fest` package contains only types. To create such a package yourself and not accidentally import function implementations, you need to use a special syntax:

```typescript
// @file user.types.ts
export type User = { name: string };

// @file main.ts
import type { User } from './user.types';
```

## Namespace

The modules solve the problem of heterogeneous entities and collisions by spreading code across multiple files. To avoid collisions within a single file, the `namespace` mechanism is used:

```typescript
namespace Hello {
  export function helloWorld() {
      console.log("Hello, world!");
  }
}

const helloWorld = Hello.helloWorld();
```

This mechanism is most useful for authors of libraries and wrappers with `@types/`. They enclose all interfaces in a single `namespace` that matches the library name. This ensures that there are no name collisions and makes it easy for users to merge interfaces. We'll talk about the latter point in one of the next lessons of the course.
