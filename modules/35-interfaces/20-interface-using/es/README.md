En esta lección veremos el uso de las interfaces. Funcionan de manera parecida a los tipos en TypeScript, aunque tienen sus propias particularidades.

## Extensión de una interfaz con campos adicionales

Si necesitas ampliar una interfaz con campos adicionales después de su inicialización, puedes volver a declarar la interfaz con nuevas propiedades. Este método se llama **fusión de declaraciones**:

```typescript
interface IUser {
  rating: number;
}

interface IUser {
  nickname: string;
  birthdate: number;
}

const sergey: IUser = {
  nickname: "Sergey",
  birthdate: 1990,
  rating: 1102,
};
```

Aquí creamos la interfaz `IUser` y luego, con fines demostrativos, la ampliamos con nuevas propiedades. Después creamos a partir de ella el objeto `Sergey`.

Veamos otra forma de trabajar con una interfaz.

## Extensión de una interfaz con otra interfaz

También podemos extender una interfaz creando otra interfaz que la herede:

```typescript
interface IStudent extends IUser {
  group: number;
}

const sergey: IStudent = {
  nickname: "Sergey",
  birthdate: 1990,
  rating: 1102,
  group: 2,
};
```

En este ejemplo creamos, a partir de nuestra interfaz anterior `IUser`, otra interfaz, `IStudent`, a la que añadimos la propiedad `group`. Así, la interfaz `IStudent` tiene todas las propiedades de `IUser` y todas las propiedades que indicamos al extenderla desde `IUser`, es decir, además, `group`.

Ahora veamos cómo trabajar con varias interfaces.

## Extensión de varias interfaces

Las interfaces también pueden extender varias otras interfaces a la vez:

```typescript
interface IUser {
  nickname: string;
  rating: number;
}

interface IEditor {
  courses: string[];
  canEdit: boolean;
}

interface IAuthor extends IUser, IEditor {
  team: string;
}

const sergey: IAuthor = {
  nickname: "Sergey",
  rating: 20,
  courses: ["typescript"],
  canEdit: true,
  team: "Hexlet College",
};
```

En el ejemplo anterior creamos una instancia basada en la interfaz `IAuthor`, que se creó extendiendo las interfaces `IUser` e `IEditor`. Esta instancia tomó todas las propiedades de estas interfaces y la propiedad que indicamos al crear la propia interfaz `IAuthor`.

## Creación de intersection types

TypeScript también nos permite crear tipos de intersección (_intersection types_) a partir de varias interfaces con el literal `&`:

```typescript
interface IOneWay {
  one: string;
}

interface IOrAnother {
  another: string;
}

type OneWayOrAnother = IOneWay & IOrAnother;

const example: OneWayOrAnother = {
  one: "A",
  another: "B",
};
```

Aquí creamos el tipo `OneWayOrAnother` a partir de dos interfaces con el literal `&`. Este tipo incluye todas las propiedades de esas interfaces.

No hay diferencias esenciales entre crear tipos de intersección y extender interfaces. Casi siempre estas acciones son intercambiables, así que es más bien una cuestión de comodidad. Pero hay excepciones: a veces la extensión de una interfaz [se comporta de manera diferente](https://stackoverflow.com/questions/52681316/difference-between-extending-and-intersecting-interfaces-in-typescript) a la creación de un tipo de intersección.

A veces no conocemos de antemano todas las propiedades que tendrá nuestra interfaz, pero sabemos qué pueden contener. En este caso conviene usar una firma de índice especial, que permite describir los tipos de los valores posibles:

```typescript
interface IPhoneBook {
  [index: string]: number;
}

const myNotePad: IPhoneBook = {
  ivan: 55531311,
  sergey: 55500110,
  mom: 55522111,
};
```

En el ejemplo anterior creamos una agenda telefónica con una firma de índice. Así no tuvimos que especificar muchas propiedades con nombre, sino indicar una sola vez el tipo de la clave y el tipo de su valor.

Por lo tanto, las interfaces son otra herramienta poderosa de TypeScript, junto con los tipos. Permiten describir nuestros datos de manera flexible. Las interfaces se extienden con facilidad y se combinan con otros tipos o interfaces.
