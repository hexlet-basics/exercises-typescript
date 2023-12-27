
Реализуйте функцию `sanitize()`, которая принимает на вход объект и массив ключей. Также она должна возвращать новый объект, но уже без указанных полей.

```typescript
const user = sanitize({
  name: 'John',
  password: '1q2w3e',
  token: 'test',
}, ['password', 'token']); // { name: string }

console.log(user); // => { name: 'John' }
```

Обратите внимание, что в выходном типе также не должно быть этих полей.
