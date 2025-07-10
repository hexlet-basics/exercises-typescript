
Create and export a `Point` type that describes a point in space consisting of three coordinates: x, y, z.

Implement the `isTheSamePoint()` function that checks two points to see if they are the same. Two points are the same if all their coordinates match:

```typescript
const p1: Point = [1, 3, 4];
const p2: Point = [1, 3, 4];
const p3: Point = [0, 8, 4];

isTheSamePoint(p1, p2); // true
isTheSamePoint(p1, p3); // false
isTheSamePoint(p2, p3); // false
```
