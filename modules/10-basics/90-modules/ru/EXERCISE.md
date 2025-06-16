
Реализуйте namespace `Company`, в котором экспортируется функция `isEmployeeEmail()`. Функция принимает почту и домен. Если е-мейл пользователя содержит указанный домен, то функция возвращает `true`:

```typescript
Company.isEmployeeEmail('tirion@hexlet.io', 'hexlet.io');
// true

Company.isEmployeeEmail('user@example.com', 'hexlet.io');
// false
```
