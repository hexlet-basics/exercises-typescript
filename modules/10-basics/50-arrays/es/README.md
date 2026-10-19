En esta lección hablaremos sobre los arrays. TypeScript puede inferir su tipo, al igual que con los tipos de datos primitivos:

```typescript
const fruits = ["banana", "mango", "apple"];
// Todo funciona
const upperFruits = fruits.map((name) => name.toUpperCase());

// Y esto ya no funciona
// Property 'key' does not exist on type 'string'.
const upperFruits = fruits.map((name) => name.key);
```

Un **array** es un tipo de dato compuesto que representa un contenedor para otro tipo. Por ejemplo, un array puede ser un contenedor de cadenas o de números.

Para indicar este tipo se usan corchetes: `number[]`, `string[]`.

El array definido anteriormente se podría escribir así:

```typescript
const fruits: string[] = ["banana", "mango", "apple"];
```

De la misma manera se describen los tipos en la definición de funciones:

```typescript
function toUpperArray(items: string[]): string[] {
  return items.map((s) => s.toUpperCase());
}
```

En resumen, los arrays pueden ser herramientas útiles para trabajar con datos.
