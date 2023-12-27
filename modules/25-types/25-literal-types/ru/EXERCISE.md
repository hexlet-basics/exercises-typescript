
Реализуйте функцию `makeTurn()`, которая принимает строку `left` или `right` и перемещает черепашку вперед-назад по одномерному массиву фиксированного размера с пятью элементами. Если черепашка выходит за пределы массива, то выбрасывается исключение.

```typescript
const { makeTurn, state } = startGame();
console.log(state); // ['turtle', null, null, null, null]

makeTurn('left') // ERROR

makeTurn('right');
makeTurn('right');
console.log(state); // [null, null, 'turtle', null, null]
```
