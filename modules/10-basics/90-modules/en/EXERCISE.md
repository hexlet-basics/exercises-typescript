
Implement namespace `Company` in which the `isEmployeeEmail()` function is exported. The function accepts an email and a domain. If the user's email contains the specified domain, the function returns `true`:

```typescript
Company.isEmployeeEmail('tirion@hexlet.io', 'hexlet.io');
// true

Company.isEmployeeEmail('user@example.com', 'hexlet.io');
// false
```
