En esta lección veremos los parámetros opcionales en funciones.

## Uso de parámetros opcionales en funciones

Los parámetros opcionales se utilizan en las funciones integradas de JavaScript cuando un parámetro no es obligatorio. Los parámetros opcionales se indican con un signo de interrogación después del nombre de la variable, antes de los dos puntos.

Por ejemplo, la función `split()` divide una cadena en un array de cadenas según un separador:

```typescript
function split(str: string, separator?: string);

split("hexlet");
split("hexlet,code-basics", ",");
```

En este caso, el tipo real de la variable `separator` será `string | undefined` (`string` o `undefined`).

Otra forma de definir un parámetro opcional es asignarle un valor por defecto:

```typescript
// Ya no hay signo de interrogación, porque hay un valor por defecto
function split(str: string, separator: string = ",") {
  // ...
}

split("hexlet");
split("hexlet,code-basics", ",");
```

Los desarrolladores intentan aplicar esta lógica a los callbacks, pero se encuentran con errores. Veamos por qué ocurre esto.

## Callback de una función

Imaginemos una función `filter()` que filtra arrays numéricos según un predicado pasado:

```typescript
// Parámetro index opcional
function filter(coll: number[], callback: (arg: number, index?: number) => boolean) {
  const result: number[] = [];
  coll.forEach((n, index) => {
    // Aquí se pasa al callback
    if (callback(n, index)) {
      result.push(n);
    }
  });
  return result;
}
```

Al igual que en el método integrado `filter()`, el callback de esta función recibe como segundo parámetro el índice del elemento del array que se está procesando. Normalmente no se usa, pero a veces el array se filtra basándose en los índices, y en ese caso se indica. Por eso marcamos este parámetro como opcional.

El problema de la definición anterior es que no funciona:

```typescript
// Se ejecuta sin errores
filter([1, 2], (n) => n > 1);
// index is possibly 'undefined'
filter([1, 2], (n, index) => index > n);
```

En este caso, el error indica que, por ser opcional, dentro del callback en teoría puede aparecer `undefined`. Aunque por el sentido esto no puede ocurrir, porque el índice siempre está definido.

Para resolver esta situación, hay que renunciar a la opcionalidad:

```typescript
function filter(coll: number[], callback: (arg: number, index: number) => boolean) {
  // ...
}
```

Si en JavaScript una función se llama con más parámetros de los definidos, los sobrantes se ignoran. TypeScript se comporta de la misma manera. Los callbacks con menos parámetros siempre pueden aparecer donde se esperan con más parámetros, siempre y cuando los tipos de los parámetros comunes coincidan.

En el ejemplo anterior, se pasa como argumento la función `(n) => n > 1`, y se llama como `callback(n, index)`. Esto hace que `index` se ignore, y no se produce ningún error de tipos.
