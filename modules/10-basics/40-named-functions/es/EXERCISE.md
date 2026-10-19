Implementa la función `getHiddenCard()`. Recibe un número de tarjeta de crédito de 16 dígitos en forma de cadena y devuelve su versión oculta. Esta versión puede usarse en un sitio web para mostrarla. Por ejemplo, si el número original de la tarjeta era _2034399002125581_, la versión oculta se ve así: *\*\*\*\*5581*.

Es decir, la función reemplaza los primeros 12 caracteres por asteriscos. La cantidad de asteriscos se regula con un segundo parámetro opcional. El valor predeterminado es 4.

```typescript
// La tarjeta de crédito se pasa como una cadena
getHiddenCard("1234567812345678", 2); // "**5678"
getHiddenCard("1234567812345678", 3); // "***5678"
getHiddenCard("1234567812345678"); // "****5678"
getHiddenCard("2034399002121100", 1); // "*1100"
```
