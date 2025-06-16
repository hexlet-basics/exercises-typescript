Implement an object of the described `Form` type. The `name.value` field should be validated, but the `age` field should not.

```typescript
console.log(form.name.validator(form.name.value)); // true
console.log(form.age.validator(form.age.value)); // false
```
