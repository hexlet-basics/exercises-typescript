
Implementa la descripción del tipo genérico `MyMap`, que es un análogo del array asociativo de JavaScript. El tipo recibe dos parámetros, el tipo de la clave y el tipo del valor, y debe funcionar con cualquier combinación de ellos. Ejemplo de uso de un objeto de este tipo:

```typescript
const map: MyMap<string, number> = ...;
map.set('one', 1);
map.set('two', 2);

map.get('one'); // 1
map.get('two'); // 2
map.get('three'); // undefined

const tags: MyMap<number, string[]> = ...;
tags.set(1, ['one']);
tags.get(1); // ['one']
```

El tipo incluye dos métodos. El método `set()` recibe una clave y un valor, y no devuelve nada. El método `get()` recibe una clave y devuelve el valor, o `undefined` si no hay ningún valor con esa clave. Los valores se almacenan dentro del objeto en la propiedad `values`, en forma de la clase [Map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) integrada en JavaScript.
