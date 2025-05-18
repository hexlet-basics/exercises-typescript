
Implement the `sanitize()` function that takes an object and an array of keys as input. It should also return a new object, but without the specified fields.

```typescript
const user = sanitize({
  name: 'John',
  password: '1q2w3e',
  token: 'test',
}, ['password', 'token']); // { name: string }

console.log(user); // => { name: 'John' }
```

Note that the output type should also not have these fields.
