A veces necesitamos limitar el parámetro de entrada de una función al tipo «cualquier objeto». Por ejemplo, para una función que verifica la presencia de claves en un objeto. Existen varias maneras de hacer esta verificación y no todas funcionan como se esperaría.

Observa el siguiente ejemplo:

```typescript
// Se usa {} como tipo
function toString(obj: {}) {
  return obj.toString();
}

toString("wow"); // Ok!
toString(123); // Ok!
toString({}); // Ok!
```

El tipo de objeto vacío `{}` implica un objeto de cualquier estructura y limita el conjunto de todos los valores, a excepción de `null` y `undefined`. Una interfaz vacía funciona de la misma manera que un tipo de objeto vacío. Esto probablemente no es lo que esperábamos.

El tipo `Object` se parece a `{}`, pero ya tiene definidas las firmas de algunos métodos incorporados, por ejemplo `toString(): string`. `{}` no tiene esas firmas. Por eso, si redefinimos `toString`, TypeScript empieza a verificar el tipo de retorno:

```typescript
const foo: {} = {
  toString() {
    return 1; // Ok!
  },
};

const bar: Object = {
  toString() {
    return 1; // Error!
  },
};
```

La segunda definición de `bar` no funciona porque el tipo `Object` especifica que el método `toString()` debe devolver una cadena.

Si queremos trabajar con valores no primitivos, existe otro tipo para eso: `object`, con letra minúscula:

```typescript
function toString(obj: object) {
  return obj.toString();
}

toString("wow"); // Error!
toString(123); // Error!
toString({}); // Ok!
```

Con el tipo `object`, intentar acceder a las propiedades del objeto resultará en un error. Para esa tarea se utilizan otros mecanismos.

En las próximas lecciones estudiaremos enfoques como el tipo `Record` y los genéricos con `keyof` para trabajar con objetos de cualquier estructura. Mientras tanto, puedes usar métodos incorporados de JavaScript como `Object.entries()` y `Object.fromEntries()` para manipular objetos de tipo `object`.

Este es un ejemplo de extracción dinámica de claves de un objeto con estos métodos:

```typescript
const extract = (obj: object, keys: Array<string>): object => {
  const entries = Object.entries(obj).filter(([key]) => keys.includes(key));

  return Object.fromEntries(entries);
};
```

1. El método `Object.entries(obj)` convierte el objeto en un array de pares [clave, valor].
2. Luego, con el método `filter()`, dejamos solo los pares cuyas claves están en el array `keys`.
3. Por último, `Object.fromEntries(entries)` construye un nuevo objeto a partir de los pares filtrados.

Este enfoque permite trabajar fácilmente con objetos y filtrar claves a partir de datos dinámicos, incluso con el tipo `object`, que no da acceso directo a las propiedades.
