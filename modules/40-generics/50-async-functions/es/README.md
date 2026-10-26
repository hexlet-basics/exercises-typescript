En JavaScript, `Promise` es la forma más popular de trabajar con código asíncrono. Las promesas permiten evitar el callback hell y simplifican el trabajo con funciones asíncronas. TypeScript también admite la sintaxis habitual para trabajar con Promise en forma de async/await, además del tipado:

```typescript
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(42);
  }, 1000);
});
```

`Promise` es un genérico con el tipo que se devolverá si la ejecución termina con éxito. En el ejemplo anterior, ese tipo es `number`.

Para seguir trabajando con el mismo estilo con funciones que reciben un callback, podemos promisificarlas. Para ello hay que envolver la función en una `Promise`:

```typescript
const wait = (ms: number): Promise<number> => {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};
```

Tampoco es obligatorio describir el tipo del valor de retorno: TypeScript puede inferirlo a partir del tipo que pasamos a `Promise`. Además, cualquier función marcada como `async` devuelve automáticamente una `Promise`. El tipo del valor de retorno quedará envuelto en `Promise`:

```typescript
const getHours = async () => {
  return new Date().getHours();
};

const hoursPromise: Promise<number> = getHours();
```

Como un contenedor, `Promise` envuelve valores dentro de sí misma, por lo que podemos usar `await` para obtener el valor que contiene:

```typescript
const hours = await getHours();
```

En TypeScript, `await` se usa igual que en JavaScript.

Usar `await` fuera de una función se llama _top-level await_. Solo funciona en módulos ES, así que en `tsconfig.json` necesitas `"module": "nodenext"` (o `esnext`, `es2022`) y `"target"` `es2017` o superior. Con `"module": "commonjs"` el compilador se detiene con el error TS1378, y en ese caso `await` se escribe dentro de una función async.

A menudo se llama a una función asíncrona para cada elemento de un array, y entonces `map()` devuelve un array de promesas. Para reunirlo en una sola promesa sirve el método `Promise.all()`. Convierte `Promise<T>[]` en `Promise<T[]>`, así que después de `await` se obtiene un array de valores.

```typescript
const promises = [100, 200].map((ms) => wait(ms)); // Promise<number>[]
const delays = await Promise.all(promises); // [100, 200], tipo number[]
```

En este ejemplo, la función `wait()` se ejecuta para cada retardo, y `promises` guarda dos promesas. `Promise.all()` espera a que ambas se cumplan y devuelve sus resultados en el mismo orden en que estaban las promesas.

En resumen, `Promise` y `async/await` permiten escribir código asíncrono con un estilo síncrono, lo que simplifica mucho el trabajo con código asíncrono. TypeScript admite esta sintaxis y, gracias a los genéricos, nos permite usarla con toda la potencia del tipado.
