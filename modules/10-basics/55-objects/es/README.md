En esta lección veremos los tipos de objeto. Se componen de los tipos de todas las propiedades que contiene el objeto.

Los tipos se infieren automáticamente:

```typescript
// Tipo: { firstName: string; pointsCount: number; }
const user = {
  firstName: "Mike",
  pointsCount: 1000,
};

// No se puede cambiar el tipo de las propiedades
// Type 'number' is not assignable to type 'string'.
user.firstName = 7;
```

TypeScript no permite acceder a propiedades que no existen. Esto significa que la estructura de cualquier objeto debe definirse al inicializarlo:

```typescript
// Property 'age' does not exist on type '{ firstName: string; pointsCount: number; }'.
user.age = 100;
```

Para que una función reciba este objeto como parámetro, hay que indicar su estructura en la descripción de la función:

```typescript
// Las propiedades en la descripción del tipo se separan con punto y coma
function doSomething(user: { firstName: string; pointsCount: number }) {
  // ...
}
```

Ahora se puede pasar cualquier objeto que coincida en propiedades:

```typescript
doSomething({ firstName: "Alice", pointsCount: 2000 });
doSomething({ firstName: "Bob", pointsCount: 1800 });

// Esto no se puede
doSomething({ firstName: "Bob" });
// Y esto tampoco
doSomething({ firstName: "Bob", pointsCount: 1800, key: "another" });
```

Al igual que con los tipos de datos primitivos, `null` y `undefined` no están permitidos por defecto. Para cambiar este comportamiento, hay que agregar opcionalidad:

```typescript
// firstName puede ser undefined
// pointsCount puede ser null
function doSomething(user: { firstName?: string; pointsCount: number | null }) {
  // ...
}
```

Los objetos pueden ser herramientas útiles en el desarrollo de software.
