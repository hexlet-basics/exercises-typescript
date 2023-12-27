Реализуйте объект по описанному типу `Form`. Поле `name.value` должно проходить валидацию, а поле `age` — нет.

```typescript
console.log(form.name.validator(form.name.value)); // true
console.log(form.age.validator(form.age.value)); // false
```
