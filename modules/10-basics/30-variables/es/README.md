En esta lección veremos en qué se diferencian TypeScript y JavaScript en el manejo de variables. Analizaremos qué es la inferencia de tipos y para qué sirve en programación. También descubriremos por qué en TypeScript no es necesario indicar manualmente el tipo de las variables.

## Inferencia de tipos

Las variables y constantes en TypeScript se definen de la misma manera que en JavaScript:

```typescript
const age = 10;

const company = "Hexlet";
const user = {
  firstName: "Miro",
};
const fruits = ["apple", "banana"];
```

Sin embargo, TypeScript realiza un trabajo adicional en segundo plano. Asocia automáticamente la variable o constante con el tipo de datos del valor inicial. En programación, este proceso se llama **inferencia de tipos**.

El tipo de una variable no puede cambiar:

```typescript
let age = 10;
// Todo bien, el tipo sigue siendo el mismo (Number)
age = 11.1;

// Type 'string' is not assignable to type 'number'.
age = "some string"; // Error!
```

Si intentamos pasar esta variable a un método que espera otro tipo, también se producirá un error:

```typescript
// Argument of type 'number' is not assignable to parameter
// of type '(substring: string, ...args: any[])
"hexlet".replace("xl", age);
```

El tipado estático impone una restricción a los arrays. Solo pueden contener datos de un mismo tipo:

```typescript
const items = [1, 2, 3];
items.push(4); // Todo bien

// Argument of type 'string' is not assignable to parameter of type 'number'.
items.push("code-basics"); // Error!
```

Con los objetos la situación es aún más estricta. En TypeScript no solo no se puede cambiar el tipo de las propiedades de un objeto, tampoco se pueden agregar propiedades nuevas dinámicamente:

```typescript
const user = {
  firstName: "Miro",
};

// Property 'lastName' does not exist on type '{ firstName: string; }'.
user.lastName = "Smith";
```

## Indicación explícita del tipo

TypeScript permite indicar explícitamente el tipo de las variables. Pero en la práctica rara vez hace falta hacerlo a mano, porque la inferencia de tipos funciona automáticamente:

```typescript
const name: string = "Alice";
const count: number = 100;
const canPlay: boolean = true;
```

## Null

Por defecto, en TypeScript las variables solo pueden contener el tipo indicado, sin excepciones. Por ejemplo, no podemos asignarles `null`:

```typescript
let age = 30;
age = null; // Error!
```

Este comportamiento nos protege de muchos errores relacionados con la falta de comprobaciones de `null`. Sin embargo, a veces `null` es un valor válido. En ese caso se usa un tipo especial llamado Union Type:

```typescript
let age: number | null = 30;
age = null;
```

Aquí indicamos que el tipo de la variable `age` es `number | null`. Se lee así: "número o null".

Union Type es un concepto interesante y cómodo que veremos con más detalle más adelante.

En esta lección conocimos las variables en TypeScript. Vimos en qué se diferencia TypeScript de JavaScript en el manejo de variables. Además, entendimos por qué en TypeScript no hace falta indicar manualmente el tipo de las variables.
