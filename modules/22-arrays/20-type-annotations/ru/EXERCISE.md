
Реализуйте функцию `unique()`, которая убирает дубликаты из массива. Функция принимает на вход массив чисел и строк. Результатом работы функции должен быть новый массив, в котором сохраняется только первое вхождение каждого элемента. Порядок значений результата определяется порядком их появления в массиве.

```typescript
unique([9, 9, 3, 8, 8]); // [9, 3, 8]
unique(['twinkle', 'twinkle', 'little', 'bat']); // ['twinkle', 'little', 'bat']
unique([1, 1, 3, 'oops!']); // [1, 3, 'oops!']
```