
Реализуйте функцию `extract(object, keys)`, которая возвращает новый объект с указанными ключами. Например:

```typescript
const user = {
  name: 'Tirion',
  email: 'tirion@lanister.got',
  age: 35,
}

extract(user, ['name', 'age']); // { name: 'Tirion', age: 35 }
```
