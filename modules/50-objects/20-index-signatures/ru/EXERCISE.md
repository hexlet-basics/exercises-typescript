
Реализуйте интерфейс `EmployeeSalary`, где ключом выступает имя (`string`), а значением — зарплата (`number`). Также реализуйте функцию `buildSalaryStatistics(employees: EmployeeSalary): SalaryStatistics`, которая должна возвращать минимальную (поле `min`), среднюю (поле `avg`) и самую высокую (поле `max`) зарплату.

```typescript
const employees: EmployeeSalary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

employees.ironMan = 1000;

buildSalaryStatistics(employees); // { min: 50, max: 1000, avg: 325 }
```
