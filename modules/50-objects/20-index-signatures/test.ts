import { buildSalaryStatistics, EmployeeSalary } from '.';

test('buildSalaryStatistics', () => {
  const employees: EmployeeSalary = {
    mango: 100,
    poly: 50,
    ajax: 150,
  };

  const expected = {
    min: 50,
    max: 150,
    avg: 100,
  };

  expect(buildSalaryStatistics(employees)).toEqual(expected);

  employees.ironMan = 1000;
  expect(buildSalaryStatistics(employees)).toEqual({
    min: 50,
    max: 1000,
    avg: 325,
  });
});
