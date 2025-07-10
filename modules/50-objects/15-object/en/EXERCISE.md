
Implement a `extract(object, keys)` function that returns a new object with the specified keys. For example:

```typescript
const user = {
  name: 'Tirion',
  email: 'tirion@lanister.got',
  age: 35,
}

extract(user, ['name', 'age']); // { name: 'Tirion', age: 35 }
```
