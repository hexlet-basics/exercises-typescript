En esta lección aprenderemos a usar la sobrecarga de funciones.

## Uso de la sobrecarga de funciones

La **sobrecarga de funciones** es la capacidad de definir varias versiones de una misma función, cada una de las cuales recibe su propio conjunto de parámetros. Veamos un ejemplo:

```typescript
function concat(a: number, b: number): string;
function concat(a: string, b: string): string;

function concat(a: unknown, b: unknown): string {
  if (typeof a === "number" && typeof b === "number") {
    return `${a.toFixed()}${b.toFixed()}`;
  }

  return `${a}${b}`;
}

concat("one", "two"); // onetwo
concat(3, 5.34); // 35
concat(1.33, 10); // 110
```

Aquí se define una función `concat()`. Tiene dos versiones que realizan la concatenación, pero de manera diferente:

- La primera versión recibe dos números. Primero se descarta la parte decimal de los números y luego se concatenan
- La segunda versión recibe dos cadenas. Las cadenas se concatenan directamente

La implementación del comportamiento para ambas versiones se realiza en una tercera función con el mismo nombre. En este caso, la descripción de los parámetros debe ajustarse a cada versión de la función. En el ejemplo anterior, los tipos de los parámetros se definen como `unknown`. Esto permite llamar a la función tanto con cadenas como con números.

La rama que se sigue se determina mediante la comprobación de tipos. En el ejemplo anterior, basta con comprobar el tipo del primer parámetro, porque el segundo coincide con él en tipo. Esto lo garantizan el sistema de tipos y el compilador.

Para la sobrecarga no es obligatorio usar declaraciones de funciones. Lo mismo se puede hacer con una función de flecha:

```typescript
const concat: {
  (a: number, b: number): string;
  (a: string, b: string): string;
} = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return `${a.toFixed()}${b.toFixed()}`;
  }

  return `${a}${b}`;
}

// Usando alias
type Overloaded = {
  (a: number, b: number): string;
  (a: string, b: string): string;
}

const concat: Overloaded = (a, b) => {...}
```

En este caso, no es necesario especificar explícitamente los tipos de los parámetros dentro de la función.

La sobrecarga de funciones no se limita a dos versiones. Puede haber tantas como se quiera. Lo importante es que al final siempre se describe una función que es común en cuanto a los parámetros para todas las variantes. Dentro de ella se describe toda la lógica de cada variante.

Describamos la función `add()`, que puede recibir dos o tres números y devuelve su suma:

```typescript
function add(a: number, b: number, c: number): number;
function add(a: number, b: number): number;

// La firma se ajusta a todos los ejemplos anteriores
function add(a: number, b: number, c?: number): number {
  if (c === undefined) {
    return a + b;
  }

  return a + b + c;
}

add(1, 2); // 3
add(1, 2, 3); // 6
```

Las versiones pueden diferenciarse tanto en el número de parámetros como en el significado del primero de ellos. Supongamos que la función `formatPrice()` imprime un precio. Con un solo número indica rublos, y otra moneda se pasa como primer parámetro, antes del importe.

```typescript
function formatPrice(amount: number): string;
function formatPrice(currency: string, amount: number): string;

function formatPrice(first: number | string, second?: number): string {
  if (typeof first === "string") {
    return `${second} ${first}`;
  }

  return `${first} RUB`;
}

formatPrice(100); // 100 RUB
formatPrice("USD", 5); // 5 USD
```

En este ejemplo, el primer parámetro de la función común puede ser tanto el importe como la moneda, por eso se nombra según su posición (`first`) y recibe el tipo `number | string`. El segundo parámetro solo existe en la segunda versión, por eso en la función común es opcional. La rama la elige la comprobación `typeof first === "string"`, y dentro de ella `second` guarda el importe.

En los lenguajes estáticos, la sobrecarga de funciones se utiliza con bastante frecuencia, pero en la mayoría de ellos no funciona como en TypeScript. En esos lenguajes se crean varias funciones diferentes que, desde el punto de vista del programador, tienen el mismo nombre. Por eso allí no se necesita una función común. La lógica de cada variante se describe dentro de ella. Esto evita tener que implementar lógica condicional en el código.

```kotlin
// Ejemplo en Kotlin
fun main() {
    fun newYearCongratulate(name: String): String = "Hi $name! Happy New Year!"

    fun newYearCongratulate(
        year: Number,
        name: String,
    ): String = "Hi $name! Happy New Year $year!"

    println(newYearCongratulate("John")) // Hi John! Happy New Year!
    println(newYearCongratulate(2023, "Elon")) // Hi Elon! Happy New Year 2023!
}
```

¿Por qué TypeScript tiene esta implementación y qué problemas resuelve? Esto, como muchas otras cosas en TypeScript, es un intento de tener en cuenta todas las formas de escribir código en JavaScript y cubrirlas con tipos para escribir código con seguridad de tipos.

En JavaScript es habitual crear funciones que reciben distintos tipos de datos en distintas combinaciones. La sobrecarga de funciones permite describir este tipo de funciones en TypeScript; de lo contrario, habría que usar `any` y vigilar los tipos por tu cuenta.

Técnicamente, después de la transpilación a JavaScript queda una sola función: la que contiene el cuerpo.

La sobrecarga de funciones en TypeScript es un mecanismo que conviene usar cuando no hay otra opción. En la mayoría de los casos, en lugar de la sobrecarga se utilizan uniones o genéricos, de los que hablaremos más adelante.

La sobrecarga es necesaria cuando hay una dependencia entre los parámetros, por ejemplo, si ambos parámetros son cadenas o ambos son números.
