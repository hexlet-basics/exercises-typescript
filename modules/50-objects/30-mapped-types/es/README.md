A veces, al trabajar con tipos de objeto, necesitamos evitar la duplicación de campos y reutilizar los que ya existen. En ese caso se puede usar el mecanismo de búsqueda de tipos _Lookup Types_:

```typescript
interface Person {
  name: string;
  age: number;
  location?: {
    country: string;
    city: string;
  };
}

interface PersonDetails {
  location: Person["location"];
}
```

La construcción `Type[Key]` se ve y funciona igual que obtener el valor de un objeto por su clave en JavaScript. La única diferencia es que aquí el acceso con punto no funciona.

Además, Lookup Types permite obtener la unión de tipos de un objeto a partir de varias claves conocidas, unidas con la barra vertical `|`:

```typescript
type User = {
  id: number;
  name: string;
  email: string;
};

type UserFields = User["id" | "name" | "email"]; // string | number
```

Para obtener la unión de todas las claves de un objeto, puedes usar el operador `keyof`.

Simplifiquemos nuestro ejemplo:

```typescript
type User = {
  id: number;
  name: string;
  email: string;
};

type UserFields = User[keyof User]; // string | number
```

Veamos cómo no duplicar todos los campos de un tipo de objeto en otro tipo. Para esto se usan dos tipos auxiliares:

- `Pick<Type, Keys>` — crea un tipo de objeto con las claves `Keys` de `Type`
- `Omit<Type, Keys>` — crea un tipo de objeto del que se excluyen las claves `Keys` de `Type`

Así se ve en la práctica:

```typescript
interface Person {
  name: string;
  age: number;
  location?: string;
}

const details: Pick<Person, "name" | "age"> = {
  name: "John",
  age: 42,
};

const details2: Omit<Person, "location"> = {
  name: "John",
  age: 42,
};
```

En este ejemplo obtenemos el mismo tipo como resultado tanto de `Pick<Person, 'name' | 'age'>` como de `Omit<Person, 'location'>`.

Todos los Utility Types de TypeScript están escritos con construcciones incorporadas. Ya hemos estudiado suficientes conceptos de TypeScript para empezar a entenderlos. Veamos cómo están implementados con el ejemplo del tipo `Pick`:

```typescript
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

En el código anterior vemos el tipo `Pick<T, K>`. Es un genérico con dos parámetros: `T` y `K`. Sobre `K` también impusimos la restricción `extends keyof T`, para que el parámetro `K` contenga una enumeración de claves de `T`.

Luego, con el operador `in` se recorren todos los elementos de la enumeración. Cada elemento obtenido se convierte en una clave. Para su valor buscamos el tipo correspondiente en el tipo de objeto `T[P]`.

Los operadores `keyof` (_Lookup Types_) e `in` (_Mapped Types_) suelen ir juntos. Con `keyof` obtenemos acceso a todos los nombres de las propiedades de un tipo de objeto, y gracias a `in` podemos recorrer todas las propiedades en un ciclo. Estas dos operaciones son clave para crear tus propios tipos auxiliares al trabajar con tipos de objeto.
