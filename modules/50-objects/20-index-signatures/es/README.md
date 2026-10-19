En JavaScript, al crear objetos podemos usar distintos valores como claves: cadenas, números o símbolos. TypeScript ofrece exactamente las mismas posibilidades para sus tipos de objeto, y en esta lección aprenderemos a trabajar con ellos.

Durante el curso ya hemos trabajado con tipos de objeto e interfaces en los que los nombres de los campos están definidos de antemano. Ahora vamos a conocer la sintaxis para claves dinámicas:

```typescript
type dynamicKeysObject = {
  [key: string | number | symbol]: unknown;
};
```

Aquí hemos declarado el tipo de objeto `dynamicKeysObject`, en el que la clave puede ser cualquiera de los tipos de datos disponibles `key: string | number | symbol`. Intentemos indicar este tipo para una variable:

```typescript
const obj: dynamicKeysObject = {
  name: "John",
  age: 30,
  0: "zero",
  [Symbol("secret")]: "symbol",
};
```

Las claves dinámicas también se pueden usar junto con campos indicados explícitamente. En ese caso, las restricciones de los campos dinámicos también se aplican a ellos.

En el siguiente ejemplo necesitaremos el operador [satisfies](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator). Comprueba que el valor corresponde al tipo, pero no reemplaza con él el tipo que TypeScript infirió por sí mismo. Las dos formas que ya conocemos no lo hacen. Una anotación como `const theme: MyTheme = { ... }` reemplaza el tipo inferido por el declarado: el campo `palette.primary` pasaría a ser `'red' | 'green' | 'blue'`, y `spacing`, `unknown`. La conversión `as MyTheme` reemplaza el tipo de la misma manera, solo que en lugar de hacer una verificación completa nos cree sin comprobar. En cambio, `satisfies` hace la verificación y conserva los tipos inferidos exactos: `palette.primary` sigue siendo `'red'`, y `spacing.small`, un número:

```typescript
type MyTheme = {
  palette: {
    primary: "red" | "green" | "blue";
    [key: string]: string;
  };
  [key: string]: unknown;
};

const theme = {
  palette: {
    primary: "red",
  },
  spacing: {
    small: 8,
  },
} satisfies MyTheme;
```

En el ejemplo, indicamos explícitamente el tipo del campo `palette`, obtuvimos una verificación de tipo correcta con `satisfies` y, al mismo tiempo, dejamos suficiente libertad para ampliar el tema más adelante.

Las claves dinámicas en las interfaces tienen exactamente la misma sintaxis y el mismo comportamiento:

```typescript
interface MyTheme {
  palette: {
    primary: string;
  };
  [key: string]: unknown;
}
```

En las clases, las claves dinámicas se pueden usar para campos normales y para campos `static`:

```typescript
class Template {
  static [propName: string]: string | number;

  [key: string]: string;
}

Template.test = "test";

const template = new Template();
template.test = "test";
```

## Template String Literal

Las claves dinámicas son útiles cuando no conocemos todos los nombres posibles de los campos de un objeto, pero aun así queremos restringir su tipo. En TypeScript, el tipo de la clave también puede ser un literal de plantilla. Por ejemplo, intentemos declarar un tipo de oyente (listener) y exigir que todos sus métodos empiecen con la palabra `on`:

```typescript
type Listeners = {
  [key: `on${string}`]: (value: unknown) => void;
};

const streamListeners: Listeners = {
  onStart() {},
  onFinished() {},
};
```

El tipo literal ``on${string}`` nos dice que esperamos una cadena según el patrón «la cadena empieza con `on` y después sigue cualquier cadena». Esta técnica se llama _Template String Literal_ y ayuda a imponer restricciones al tipar cadenas.

En una aplicación web típica conocemos de antemano la estructura de la mayoría de los objetos. Por eso, las claves dinámicas se ven con más frecuencia en bibliotecas y funciones auxiliares, que veremos en las próximas lecciones.
