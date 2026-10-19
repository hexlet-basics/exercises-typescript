En esta lección conoceremos las funciones anónimas. Normalmente se usan junto con las funciones de flecha en el mismo lugar donde se definen. Precisamente por eso TypeScript puede inferir los tipos de sus parámetros.

Al definir funciones anónimas, se omiten las indicaciones de tipo:

```typescript
const fruits = ["banana", "mango", "apple"];
const upperFruits = fruits.map((name) => name.toUpperCase());
// ['BANANA', 'MANGO', 'APPLE']
```

En este ejemplo, la función anónima es `(name) => name.toUpperCase()`. No tiene nombre y se pasa a `map()` directamente en el lugar de la llamada. TypeScript sabe que `fruits` es un array de cadenas, por eso el parámetro `name` recibe el tipo `string` sin anotación.

Este proceso se llama **tipado contextual** (_contextual typing_), porque el contexto en el que se define la función permite inferir los tipos de los parámetros de entrada. Como resultado, el código se ve igual que el código en JavaScript.

Si la función se define fuera de contexto, se le aplican las mismas reglas que a las funciones con nombre. Es decir, los tipos de los parámetros deben indicarse al definirla:

```typescript
const toUpper = (name: string): string => name.toUpperCase();
const upperFruits = fruits.map(toUpper);
```

En esta lección vimos cómo se definen las funciones anónimas y cómo se usan en distintos contextos. Las funciones anónimas pueden hacer que el código sea más legible y comprensible.
