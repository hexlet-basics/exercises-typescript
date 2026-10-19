Normalmente los arrays pueden cambiar de tamaño y contener cero o más valores. Por eso, un array vacío `[]` es un valor válido para arrays de cualquier tipo.

Sin embargo, a veces los arrays actúan como una versión simplificada de un objeto, en la que la cantidad de valores y su orden están estrictamente definidos. Por ejemplo, con un array así se puede representar un punto en el plano: `[x, y]`.

Estos arrays sirven para ahorrar caracteres cuando hay que crear muchos datos iguales, por ejemplo, para las pruebas.

En TypeScript, estos arrays se llaman tuplas, y las conoceremos en esta lección.

## Uso de tuplas

Las tuplas tienen su propia sintaxis de definición. Por ejemplo, veamos la representación de un punto:

```typescript
const point: [number, number] = [1, 3];
// Se puede cambiar
point[0] = 4;

// Acceder a un índice inexistente provoca un error
point[3]; // Error!

// No se puede crear un índice con un tipo que no coincide
const point2: [number, number] = [1, "x"]; // Error!
```

Las tuplas tienen una cantidad fija de elementos, por lo que sería lógico que el mismo comportamiento se aplicara a `push()` o `pop()`. Después de todo, si definimos una tupla de dos elementos, debe haber exactamente dos elementos.

En la práctica, el siguiente código funcionará:

```typescript
point.push(10);
console.log(point); // [4, 3, 10];
```

Este comportamiento se mantiene por [compatibilidad hacia atrás](https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array). La recomendación general es no intentar cambiar el tamaño de una tupla.

Las tuplas pueden estar formadas por elementos de distintos tipos:

```typescript
type HTTPResponse = [number, string];

// El orden de definición es importante
const response: HTTPResponse = [404, "Page is not found"];
// Esto no funcionará ['Page is not found', 404]
```

Algunos de ellos pueden ser opcionales. En ese caso, los elementos opcionales deben ir al final de la tupla:

```typescript
type HTTPResponse = [number, string?];

const response1: HTTPResponse = [500];
const response2: HTTPResponse = [201, "Created"];
```

En el ejemplo anterior, el primer elemento del array siempre debe ser un número, y el segundo, una cadena o puede no estar.

Si creas variables para tuplas y usas un alias, hay que indicarlo explícitamente. De lo contrario, desde el punto de vista de TypeScript se creará un array normal:

```typescript
// Tendrá el tipo (string | number)[]
const response = [201, "Created"];
```
