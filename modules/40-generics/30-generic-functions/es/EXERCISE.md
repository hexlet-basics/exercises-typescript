
Implementa la descripción del tipo genérico `MyArray`, que es un análogo del array de JavaScript. Ejemplo de uso de un objeto de este tipo:

```typescript
const coll: MyArray<number> = ...;
coll.push(1); // 1
coll.push(10); // 2
coll.push(99); // 3

const newColl = coll.filter((value) => value % 2 == 0);
console.log(newColl.items); // [10]
```

El tipo incluye dos métodos: [push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) y [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). `push()` recibe un valor del mismo tipo que los elementos de la colección; a diferencia del método de `Array`, acordamos que el parámetro es solo uno. `filter()` recibe un callback con los mismos parámetros que el método homónimo de `Array`: `value`, `index` y `array`. Los datos deben almacenarse en la propiedad `items`.

En cambio, los valores de retorno no coinciden del todo. `push()`, igual que en `Array`, devuelve la nueva longitud de la colección. `filter()`, por su parte, no devuelve un array, sino una nueva colección de tipo `MyArray<T>`; por eso, en el ejemplo anterior, el resultado del filtrado tiene la propiedad `items`.
