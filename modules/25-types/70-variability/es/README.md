Cuando asignamos un valor o pasamos argumentos en una llamada a una función, la verificación de tipos de TypeScript comprueba la compatibilidad de los tipos. Al pasar argumentos a una función, la verificación se realiza tanto para los tipos de los parámetros como para los tipos de retorno.

Imaginemos que queremos pasar una función que devuelve el tipo `number` como callback de una función de ordenación que espera que se devuelva `-1 | 0 | 1`. En ese caso obtendremos el error _Type 'number' is not assignable to type '0 | 1 | -1'_:

```typescript
type ComparatorCallback = (item1: number, item2: number) => -1 | 0 | 1;
declare function sort(arr: Array<number>, callback: ComparatorCallback): Array<number>;

const arr = [1, 2, 3];
const comparator = (item1: number, item2: number) => Math.sign(item1 - item2);
// (item1: number, item2: number) => number;

sort(arr, comparator); // Error: Type 'number' is not assignable to type '0 | 1 | -1'.
```

El conjunto de valores de la unión de los tres tipos literales `-1 | 0 | 1` es un subconjunto de `number`. Pero del error se puede deducir que el tipo de retorno debe ser el mismo o más estrecho. Este comportamiento de la verificación de tipos se llama **covarianza**.

Para resolver el problema con `ComparatorCallback`, tenemos que estrechar el tipo de retorno de la función `comparator` a `-1 | 0 | 1` o a uno más estrecho. Reescribamos el código sin `Math.sign` para devolver el tipo necesario:

```typescript
type ComparatorCallback = (item1: number, item2: number) => -1 | 0 | 1;
declare function sort(arr: Array<number>, callback: ComparatorCallback): Array<number>;

const arr = [1, 2, 3];
const comparator = (item1: number, item2: number) => {
  // (item1: number, item2: number) => -1 | 0 | 1;
  if (item1 === item2) {
    return 0;
  }

  return item1 > item2 ? 1 : -1;
};

sort(arr, comparator);
```

Ahora el código pasa la verificación de tipos. El tipo de retorno de `comparator` es más estrecho que el requerido en `ComparatorCallback`.

Para los argumentos de la función, la verificación de tipos se realiza en sentido inverso. Si pasamos una función que espera el tipo literal `1` en lugar de `number`, obtendremos el error `Type 'number' is not assignable to type '1'.`:

```typescript
type ComparatorCallback = (item1: number, item2: number) => -1 | 0 | 1;
declare function sort(arr: Array<number>, callback: ComparatorCallback): Array<number>;

const arr = [1, 2, 3];
const comparator = (item1: 1, item2: number) => Math.sign(item1 - item2) as -1 | 0 | 1;

sort(arr, comparator); // Type 'number' is not assignable to type '1'.
```

El tipo `1` es un subconjunto de `number`. Y en nuestro ejemplo pasamos a la función `sort` una función que espera un tipo más estrecho como entrada. También puedes notar que convertimos el tipo del valor de retorno a `-1 | 0 | 1` con la palabra clave `as`. Necesitamos una conversión descendente, ya que el tipado de `Math.sign` devuelve `number`.

Cuando pasamos argumentos a una función, los tipos esperados de los parámetros deben ser más amplios que los reales. Este comportamiento de la verificación de tipos se llama **contravarianza**.

Intenta explicar por tu cuenta el comportamiento de la verificación de tipos mediante la varianza en el siguiente ejemplo:

```typescript
type Formatter = (val: string) => string;

const formatToConcrete: Formatter = (): "test" => "test";
const formatToNumber: Formatter = (val: "1") => val; // Error!
```

<details>
<summary>Respuesta</summary>
  El tipo de los parámetros puede ser más amplio, y el tipo de salida, más estrecho.
  En el ejemplo, <code>formatToConcrete</code> no recibe ningún parámetro. Esto da un tipo más amplio que el <code>string</code> requerido. Y devuelve un tipo literal más estrecho. <code>formatToNumber</code> espera un tipo más estrecho como entrada, por eso aparece el error.
</details>

Si al trabajar con TypeScript tenemos en cuenta la herencia de JavaScript con su tipado pato, todo encaja.

Para que el código no falle con un error, basta con comprobar que existen los campos o métodos de los tipos necesarios. Y para obtener garantías en el mundo exterior, la variable debe cumplir las restricciones externas. Para ello, el tipo debe ser más estrecho o el mismo.
