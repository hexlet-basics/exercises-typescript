Al mapear tipos se pueden cambiar atributos de las propiedades, como la inmutabilidad (immutability) y la opcionalidad (optionality). Esto se hace con los modificadores correspondientes: `readonly` y `?`.

Para agregar o eliminar estos modificadores se usan los prefijos `+` o `-`. Si no se usa ningún prefijo, se asume que el modificador se agrega, es decir, el prefijo por defecto es `+`.

Hay ejemplos de uso de estos modificadores en los Utility Types:

```typescript
/**
 * Hace que todas las propiedades del tipo `T` sean opcionales,
 * es decir, agrega el atributo `?`.
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};

/**
 * Hace que todas las propiedades del tipo `T` sean obligatorias,
 * es decir, elimina el atributo `?`.
 */
type Required<T> = {
  [P in keyof T]-?: T[P];
};

/**
 * Hace que todas las propiedades del tipo `T` sean inmutables,
 * es decir, agrega el atributo `readonly`.
 */
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

De manera similar se puede escribir un tipo que haga mutables todas las propiedades de un tipo, es decir, que elimine el atributo `readonly`:

```typescript
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};
```

Gracias a estos tipos es más fácil crear tipos derivados de los que ya existen.

Por ejemplo, una aplicación puede tener un tipo `DefaultUser` para un usuario no autorizado, con todos los campos opcionales:

```typescript
type DefaultUser = {
  id?: string;
  firstName?: string;
  secondName?: string;
  email?: string;
};
```

A partir de él se puede crear un usuario autorizado con el tipo `Required`:

```typescript
type AuthorizedUser = Required<DefaultUser>;
```
