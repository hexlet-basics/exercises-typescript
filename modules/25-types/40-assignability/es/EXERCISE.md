Implementa un objeto según el tipo `Form` descrito. El campo `name.value` debe pasar la validación, y el campo `age`, no.

```typescript
console.log(form.name.validator(form.name.value)); // true
console.log(form.age.validator(form.age.value)); // false
```
