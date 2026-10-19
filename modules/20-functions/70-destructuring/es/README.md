En esta lección veremos la desestructuración en la definición de funciones.

## Uso de la desestructuración

La **desestructuración** es un mecanismo que desempaqueta el objeto pasado como argumento y asigna sus partes a variables locales de la función. En JavaScript se ve así:

```javascript
// Definición normal
const f = (user) => {
  console.log(user.firstName, user.age);
};

// Objeto desestructurado
const f = ({ firstName, age }) => {
  console.log(firstName, age);
};

const user = { firstName: "Smith", age: 30 };
f(user); // => 'Smith', 30
```

El objeto desestructurado se parece visualmente a los parámetros de una función. Sin embargo, sigue siendo un objeto, por lo que en TypeScript su tipo se describe después de la llave de cierre:

```typescript
// Definición normal
function f(user: { firstName: string; age: number }) {
  console.log(user.firstName, user.age);
}

// Objeto desestructurado
function f({ firstName, age }: { firstName: string; age: number }) {
  console.log(firstName, age);
}
```

Aquí describimos el tipo del objeto dentro del parámetro de la función y lo desestructuramos de inmediato.

Si sacamos la definición del tipo a un alias, podemos hacer el código más corto:

```typescript
type User = {
  firstName: string;
  age: number;
};

function foo({ firstName, age }: User) {
  console.log(firstName, age);
}
```

Este mismo tipo `User` se podrá usar también en otros lugares.

Lo mismo se aplica a los arrays:

```typescript
// Definición normal
function foo(point: number[]) {
  console.log(point);
}

// Array desestructurado
function foo([x, y]: number[]) {
  console.log(x, y);
}

type Point = number[];

// Con alias
function foo([x, y]: Point) {
  console.log(x, y);
}
```

La desestructuración es conveniente cuando dentro de la función hay que usar varias propiedades de un objeto o elementos de un array. En ese caso, puedes extraerlos directamente en los parámetros de la función, en lugar de escribir `user.firstName` o `point[0]` dentro del cuerpo de la función.
