
Implementa la función `makeTurn()`, que recibe la cadena `left` o `right` y mueve la tortuga hacia adelante o hacia atrás por un array unidimensional de tamaño fijo con cinco elementos. Si la tortuga sale de los límites del array, se lanza una excepción.

```typescript
const { makeTurn, state } = startGame();
console.log(state); // ['turtle', null, null, null, null]

makeTurn("left"); // ERROR

makeTurn("right");
makeTurn("right");
console.log(state); // [null, null, 'turtle', null, null]
```
