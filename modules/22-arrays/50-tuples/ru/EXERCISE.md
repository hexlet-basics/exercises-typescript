
Создайте и экспортируйте тип `Point`, который описывает точку в пространстве, состоящую из трех координат: x, y, z.

Реализуйте функцию `isTheSamePoint()`, которая проверяет две точки на их одинаковое расположение. Две точки совпадают, если совпадают все их координаты:

```typescript
const p1: Point = [1, 3, 4];
const p2: Point = [1, 3, 4];
const p3: Point = [0, 8, 4];

isTheSamePoint(p1, p2); // true
isTheSamePoint(p1, p3); // false
isTheSamePoint(p2, p3); // false
```
