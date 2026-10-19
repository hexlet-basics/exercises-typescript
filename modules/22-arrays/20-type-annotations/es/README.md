En esta lección veremos con más detalle las anotaciones de tipos.

## Uso de las anotaciones de tipos

En casos simples, el tipo de un array se define como el nombre del tipo seguido de corchetes, por ejemplo: `string[]`, `number[]`. Esta convención también se aplica a los alias de tipos:

```typescript
type User = {
  name: string;
};

// Al definir constantes y variables
const users: User[] = [];

// En la definición de funciones
function foo(users: User[]) {
  // ...
}
```

Aquí definimos un array cuyos elementos son objetos del tipo `User`. En un array así solo se pueden almacenar objetos que correspondan al tipo `User`.

En el caso de tipos compuestos, por ejemplo, si queremos usar una unión o la descripción de un objeto, se añaden paréntesis — `(Type)[]`:

```typescript
const users: { name: string }[] = [];
const users: (string | null)[] = [];
const users: (User | null | { name: string })[] = [];
```

Dentro de los paréntesis va la descripción del tipo, y después los corchetes.

Además, TypeScript ofrece otra sintaxis universal con la que se puede describir cualquier array. En esta notación, la descripción del tipo se ve así: `Array<Type>`. Aquí usamos corchetes angulares para indicar un tipo de dato genérico, donde `Type` representa el tipo de los elementos que contiene el array.

Veamos cómo se ve esto en el código:

```typescript
const users: Array<User> = [];
const users: Array<number> = [];

const users: Array<{ name: string }> = [];
const users: Array<string | null> = [];
```

Normalmente no se hace así. Donde se puede usar la forma más corta, se usa esa. La forma `Array` se necesita sobre todo para los genéricos, que veremos más adelante.

## Definición de un array vacío

Si definimos un array vacío sin indicar su tipo, su tipo será automáticamente `any[]`. A un array así se le puede agregar cualquier dato, incluidos arrays anidados:

```typescript
const items = [];
items.push(1);
items.push("wow");
items.push(["code-basics", "hexlet"]);
```

El código con `any` siempre funcionará, pero desactiva la verificación de tipos. Para que esto no ocurra, siempre hay que tipar explícitamente el array vacío:

```typescript
const items: Array<number> = [];
```
