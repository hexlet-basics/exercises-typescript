Imagina que los genéricos desaparecieran del lenguaje. Entonces nos encontraríamos con código duplicado. Tendríamos que describir el mismo algoritmo muchas veces para distintos tipos de datos.

Tomemos como ejemplo la función `last()`, que devuelve el último elemento de un array. A continuación, su versión genérica:

```typescript
function last<T>(coll: T[]): T {
  return coll.at(-1);
}
```

Los genéricos también se pueden usar en funciones flecha:

```typescript
const last = <T>(coll: T[]): T => coll.at(-1);
```

Ahora intentemos implementar el mismo comportamiento con funciones normales. Para ello tendremos que crear una función para cada tipo. Además, el nombre de cada función debe ser único:

```typescript
function lastForNumberType(coll: number[]): number {
  return coll.at(-1);
}

function lastForStringType(coll: string[]): string {
  return coll.at(-1);
}

// Aquí van las definiciones para todos los demás tipos
```

¿Y si tenemos varios tipos? Entonces hay que calcular cuántas funciones hay que definir: multiplicar la cantidad de todos los tipos posibles por la cantidad de parámetros de tipo.

La implementación con una función sobrecargada simplifica la tarea. Al trabajar con ellas no tenemos que inventar nombres nuevos:

```typescript
function last(coll: number[]): number;
function last(coll: string[]): string;
// Aquí van las definiciones para todos los demás tipos

function last(coll: any[]): any {
  return coll.at(-1);
}
```

En el caso de TypeScript, ni siquiera se duplica la lógica, pero esto es una particularidad de TypeScript. En otros lenguajes con tipificación estática también habría que duplicar la lógica.

Sea cual sea la implementación que elijamos, se cumplen dos cosas:

- Los valores que se pasan no se usan de ninguna manera, solo se trasladan de un lugar a otro
- La lógica es siempre la misma y no hay construcciones condicionales según el tipo de datos

En Computer Science hay un término importante: **polimorfismo paramétrico**. Es la propiedad de una función que le permite procesar valores de distintos tipos de la misma manera, con un único algoritmo. Esto significa que los genéricos son la implementación del polimorfismo paramétrico en TypeScript.

El polimorfismo paramétrico tiene un papel importante en los lenguajes con tipificación estática, porque en ellos hay que indicar explícitamente los tipos de las funciones. Existe en casi todos los lenguajes de alto nivel con tipificación estática. En Java y C# también se llama genéricos. En C++ se usa el término «plantillas», pero el significado no cambia, aunque las plantillas de C++ son más que polimorfismo paramétrico.

En contraste con los lenguajes con tipificación estática están JavaScript, Python, Ruby, PHP y otros lenguajes con tipificación dinámica. En ellos los genéricos no hacen falta. En este tipo de lenguajes, cualquier algoritmo genérico funciona automáticamente con todos los tipos de datos.
