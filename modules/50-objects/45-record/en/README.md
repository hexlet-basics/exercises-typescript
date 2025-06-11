
Objects with dynamic structure, when we add fields to them at runtime, are often used to build context or store data. Let's write an auxiliary type to build such an object:

```typescript
type Context<K extends string, V> = {
  [Key in K]: V;
}

const runApp = <C extends Context<string, unknown>>(ctx: C) => {};
```

The `Key` key will accept all values from `K` by brute force. In turn, `K` is a subset of `string` and `V` can be any. So here we have created our own type `Context` with string fields and an unknown type for the value.

This kind of construction, where we do not additionally define any specific fields with dynamic keys, is quite common. The built-in Utility Types provide a ready solution for this - `Record<Keys, Type>`. This generalized type takes a key type as its first argument and a value type as its second. Inside, everything is organized similarly as in our `Context` type:

```
type Rating = 0 | 1 | 2 | 3 | 4 | 5;
type SongsRating = Record<string, Rating>;

const songsRating: SongsRating = {
  ratata: 4,
}
```

With this type `SongsRating` we can specify an object type with an arbitrary key (song name) and a rating - a number from zero to five.

`Record` is more preferable when describing object types in TypeScript. It allows describing dynamic structures flexibly and concisely, and to use `Record` together with other data types.
