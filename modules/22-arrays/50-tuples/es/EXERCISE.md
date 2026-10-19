
Crea y exporta el tipo `Point`, que describe un punto en el espacio compuesto por tres coordenadas: x, y, z.

Implementa la función `isTheSamePoint()`, que comprueba si dos puntos están en la misma posición. Dos puntos coinciden si coinciden todas sus coordenadas:

```typescript
const p1: Point = [1, 3, 4];
const p2: Point = [1, 3, 4];
const p3: Point = [0, 8, 4];

isTheSamePoint(p1, p2); // true
isTheSamePoint(p1, p3); // false
isTheSamePoint(p2, p3); // false
```
