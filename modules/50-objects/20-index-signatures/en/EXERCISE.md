
Implement the `EmployeeSalary` interface, where the key is the name (`string`) and the value is the salary (`number`). Also implement the function `buildSalaryStatistics(employees: EmployeeSalary): SalaryStatistics`, which should return the minimum (`min` field), average (`avg` field) and highest (`max` field) salary.

```typescript
const employees: EmployeeSalary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

employees.ironMan = 1000;

buildSalaryStatistics(employees); // { min: 50, max: 1000, avg: 325 }
```
