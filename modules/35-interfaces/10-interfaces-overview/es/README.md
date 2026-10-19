En esta lección hablaremos sobre las interfaces. Veremos qué son, para qué sirven y en qué casos conviene usarlas en lugar de los tipos.

## Qué es una interfaz

Una **interfaz** es una construcción del lenguaje TypeScript que se usa para describir objetos y funciones.

Veamos el siguiente ejemplo:

```typescript
interface IUser {
  firstName: string;
  pointsCount: number;
}

const user: IUser = {
  firstName: "Mark",
  pointsCount: 100,
};
```

En este fragmento creamos una interfaz e implementamos un objeto `user` basado en ella.

La interfaz se ve como una definición de tipo de objeto. Los tipos de objeto y las interfaces son intercambiables en casi todas las situaciones. Comparemos con el ejemplo anterior:

```typescript
type User = {
  firstName: string;
  pointsCount: number;
};

const user: User = {
  firstName: "Mark",
  pointsCount: 100,
};
```

Aquí implementamos el mismo objeto, pero esta vez basado en un tipo, no en una interfaz. Casi no hay diferencia.

Según la documentación de TypeScript, podemos elegir qué usar: un tipo o una interfaz. La elección depende de la situación. Entonces surge la pregunta: "¿Para qué se necesita una nueva construcción (las interfaces) si ya existen los tipos?".

## Cuándo usar interfaces

Aunque las interfaces y los tipos se parecen mucho, hay diferencias. Precisamente en ellas nos basamos al decidir qué usar en un caso concreto.

La principal característica de las interfaces está relacionada con las clases. Las clases que implementan interfaces contienen las propiedades y los métodos especificados en la interfaz que implementan:

```typescript
interface ICountable {
  count(): number;
}

class SchoolClass implements ICountable {
  // Aquí hay alguna lógica
  count(): number {
    // Es obligatorio crear este método, porque está especificado en la interfaz
  }
}

const sc = new SchoolClass();
// Devuelve el número de estudiantes en la clase
sc.count();
```

En este ejemplo implementamos una clase basada en una interfaz. Ahora, en todas las funciones donde los objetos se usan solo para contar la cantidad de algo dentro de ellos, se puede indicar `ICountable` en lugar de `SchoolClass`:

```typescript
// Y no function doSomething(obj: SchoolClass)
function doSomething(obj: ICountable) {
  // En algún lugar de dentro se llama
  obj.count();
}
```

Así, gracias a las interfaces, la función se vuelve más universal. Podemos pasar cualquier objeto que se ajuste a `ICountable`, no solo `SchoolClass`. En programación, esta capacidad se llama polimorfismo de subtipos ([Subtyping](https://en.wikipedia.org/wiki/Subtyping)).
