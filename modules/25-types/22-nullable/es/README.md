En TypeScript, `null` y `undefined` no son simplemente valores. Son dos tipos que constan de un solo valor. Imagina que TypeScript funcionara igual que JavaScript. Entonces estos valores podrían pasarse en cualquier lugar, sin importar lo que se espere ahí: una cadena, un array, etc.

Todo iría bien hasta el momento de ejecutar el código. En ese momento obtendríamos un error, porque dentro de la función se esperaría un array y llegaría `null` o `undefined`. Este problema existe, por ejemplo, en JavaScript:

```javascript
function foo(value) {
  const upperValue = value.toUpperCase();
  // Resto de la lógica
}

foo(null); // Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')
```

En los lenguajes con tipado estático, donde `null` se usa como un tipo común para todo, la verificación de tipos no advierte nada. En ese caso aparece la excepción `NullPointerException`, una de las más memorables para todos los usuarios. Por eso el código empieza a llenarse de comprobaciones de `null`:

```java
public void doSomething(SomeObject obj) {
  if(obj != null) {
    obj.myMethod();
  }
}

doSomething(null);
```

Este ejemplo en Java muestra que `null` puede pasarse a cualquier lugar donde se espera un objeto. Por eso dentro de la función debemos comprobar que `obj` no sea igual a `null`. Si no hiciéramos esta comprobación, obtendríamos la excepción `NullPointerException`.

En TypeScript, con una configuración correcta (`strict`), esta comprobación está incorporada y el analizador estático advierte sobre el posible problema:

```typescript
function foo(value?: string | null) {
  const upperValue = value.toUpperCase(); // Object is possibly 'null' or 'undefined'.
  // Resto de la lógica
}
```

En este caso obtuvimos un error de compilación, porque `value` puede ser `null` o `undefined`.

Para resolverlo, hay que escribir la condición correspondiente o usar el operador `?.`. Esto permite evitar errores durante la ejecución del código:

```typescript
function foo(value?: string | null) {
  if (value !== null && value !== undefined) {
    const upperValue = value.toUpperCase(); // (parameter) value: string
  }
  // Resto de la lógica
}
```

Esto fue posible gracias a que los valores `null` y `undefined` se separaron en tipos propios. Con cada comprobación descartamos el conjunto de valores que no nos sirve y obtenemos una llamada segura al método. Estas comprobaciones también se llaman _Type Guards_ o diferenciación de tipos (_Differentiating Types_).
