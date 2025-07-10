
In this lesson, we will learn how to use type annotations.

## Using type annotations

In simple cases, the array type is defined as the type name and square brackets after it, e.g.: `string[]`, `number[]`. This scheme works with type aliases as well:

```typescript
type User = {
  name: string
};

// When defining constants and variables
const users: User[] = [];

// In function definition
function foo(users: User[]) {
  // ...
}
```

Here, we define an array whose elements are objects of `User` type. In such an array we can store only objects that correspond to the `User` type.

In case of composite types, for example, if we want to use union or description of an object, we add parentheses - `(Type)[]`:

```typescript
const users: ({ name: string })[] = [];
const users: (string | null)[] = [];
const users: (User | null | { name: string })[] = [];
```

Inside the parentheses is a description of the type, followed by square brackets.

TypeScript also provides another syntax, which is described as `Array<Type>`. It is universal - you can use it to describe any array. The type is described in this entry between the less and greater signs:

```typescript
const users: Array<User> = [];
const users: Array<number> = [];
const users: Array<User> = [];

const users: Array<{ name: string }> = [];
const users: Array<string | null> = [];
```

But usually this syntax is not used. The shorter version is used when it's possible. The `Array` form is needed primarily for generics, which we will consider later.

## Defining an empty array

If you define an empty array and do not specify a type, its type will automatically become `any[]`. Any data can be added to such an array, including nested arrays:

```typescript
const items = [];
items.push(1);
items.push('wow');
items.push(['code-basics', 'hexlet']);
```

The code with `any` will always work, but it turns off type checking. To avoid this, you should always explicitly type an empty array:

```typescript
const items: Array<number> = [];
```
