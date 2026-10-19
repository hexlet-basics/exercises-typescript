Imaginemos un programa que tiene un objeto de usuario. Este objeto se usa en todas partes. En esta situación, la descripción del tipo de este objeto se repetirá en cada definición de función:

```typescript
function doSomething(user: { firstName: string; pointsCount: number }) {}
function doSomethingElse(user: { firstName: string; pointsCount: number }) {}
function doSomethingAnother(user: { firstName: string; pointsCount: number }) {}
```

En primer lugar, aquí hay mucha duplicación. En segundo lugar, cambiar la estructura se vuelve mucho más difícil, porque habrá que corregir a mano todos los lugares donde aparece esta definición. En esta lección veremos cómo evitar estos problemas.

## Definimos un alias de tipo

Para no hacer el mismo trabajo una y otra vez, y encima a mano, TypeScript permite definir un alias (_alias_) para los tipos compuestos. Así no tendremos que repetirnos:

```javascript
type User = {
  firstName: string
  pointsCount: number
}
```

Ahora podemos hacer el reemplazo en todas las funciones:

```typescript
function doSomething(user: User) {
  // ...
}
```

Un alias no crea un nuevo tipo de datos. Es una forma abreviada de escribir la definición de un tipo. Por eso los siguientes ejemplos funcionarán sin problemas:

```typescript
const user = {
  firstName: "Mike",
  pointsCount: 1000,
};

// Ambas llamadas funcionan
doSomething(user);
doSomething({ firstName: "Bob", pointsCount: 1800 });
```

Aun así, los desarrolladores de TypeScript dicen "creamos un tipo" y no "creamos un alias de tipo". Por eso en este curso seguiremos el formato comúnmente aceptado.

Se pueden definir tipos para cualquier tipo de datos. Por ejemplo, para los simples:

```typescript
type SomeType = string;
```

Y también para los compuestos:

```typescript
// tipo union de tres valores posibles
type SomeType = string | number | null;

// Función
type Countable = (coll: number[]) => number;
```

## Objetos y funciones

La descripción del tipo de una función fuera de un objeto y dentro de él es diferente. Cuando la función se escribe por separado, se usa el formato de función de flecha:

```typescript
type Countable = (coll: number[]) => number;
```

Dentro del tipo que describe un objeto, el formato cambia al que se usa para las propiedades normales:

```typescript
type User = {
  firstName: string;
  pointsCount: number;
  count(coll: number[]): number;
};
```

Pero esto no se aplica a los callbacks que se pueden usar dentro:

```typescript
type User = {
  firstName: string;
  pointsCount: number;
  // Los tipos se toman como ejemplo
  count(coll: (v: string) => string): number;
};
```

En esta lección aprendimos a usar los alias de tipo. También vimos cómo definir un alias para los tipos compuestos.
