
Implementa la interfaz `EmployeeSalary`, donde la clave es el nombre (`string`) y el valor es el salario (`number`). También implementa la función `buildSalaryStatistics(employees: EmployeeSalary): SalaryStatistics`, que debe devolver el salario mínimo (campo `min`), el promedio (campo `avg`) y el más alto (campo `max`).

```typescript
const employees: EmployeeSalary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

employees.ironMan = 1000;

buildSalaryStatistics(employees); // { min: 50, max: 1000, avg: 325 }
```
