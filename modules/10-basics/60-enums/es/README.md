En esta lección conoceremos las enumeraciones. Esta construcción del lenguaje permite crear un conjunto de nombres y luego acceder a ellos.

## Uso de las enumeraciones

Las enumeraciones se usan en lugar de cadenas para valores constantes:

```typescript
enum OrderStatus {
  Created,
  Paid,
  Shipped,
  Delivered,
}

const order = {
  items: 3,
  status: OrderStatus.Created,
};
```

El ejemplo más común de uso de las enumeraciones es almacenar distintos estados. Pero también hay otros casos. Por ejemplo, con ellas es fácil y cómodo almacenar y consultar distintos datos de referencia:

- Direcciones de movimiento
- Puntos cardinales
- Días de la semana
- Meses

```typescript
enum CardinalDirection {
  North,
  South,
  East,
  West,
}

const direction = CardinalDirection.North;
```

Una enumeración es a la vez un valor y un tipo. Se puede indicar como tipo en los parámetros de una función:

```typescript
setStatus(status: OrderStatus)
```

Además, después de la compilación las enumeraciones se convierten en un objeto de JavaScript en el que a cada valor le corresponde una propiedad. Esta propiedad es de tipo `number` y empieza desde `0`:

```typescript
const status = OrderStatus.Created;
console.log(status); // 0
```

Esto permite usar cómodamente los métodos estándar, por ejemplo, `Object.keys` y `Object.values`:

```typescript
const statuses = Object.keys(OrderStatus);
console.log(statuses); // ['0', '1', '2', '3', 'Created', 'Paid', 'Shipped', 'Delivered']
```

Entre las claves vemos los números `'0', '1', '2', '3'`. El compilador crea estas claves numéricas automáticamente, y el objeto creado se ve así:

```typescript
console.log(OrderStatus); // =>
// {
//   '0': 'Created',
//   '1': 'Paid',
//   '2': 'Shipped',
//   '3': 'Delivered',
//   'Created': 0,
//   'Paid': 1,
//   'Shipped': 2,
//   'Delivered': 3
// }
```

Pero se puede evitar la creación de claves adicionales si se indican valores de cadena:

```typescript
enum OrderStatus {
  Created = "0",
  Paid = "1",
  Shipped = "2",
  Delivered = "3",
}

const statuses = Object.keys(OrderStatus);
console.log(statuses); // ['Created', 'Paid', 'Shipped', 'Delivered']

console.log(OrderStatus); // =>
// {
//   'Created': '0',
//   'Paid': '1',
//   'Shipped': '2',
//   'Delivered': '3'
// }
```

## ¿Para qué sirven las enumeraciones?

Usar enum hace que el código sea más legible y fácil de mantener, porque en lugar de números o cadenas mágicas se usan nombres claros y comprensibles. Además, ayuda a evitar algunos errores. Veámoslo con un ejemplo.

Supongamos que necesitamos describir distintos niveles de acceso de un usuario en el sistema.

Sin enum, podría verse así:

```typescript
if (user.accessLevel === "admin") {
  // hacemos algo importante
}
```

Con enum, el código se vuelve más estructurado y comprensible:

```typescript
enum AccessLevel {
  Admin,
  Editor,
  User,
}

const user = { name: "Kirill Mokevnin", accessLevel: AccessLevel.Admin };

if (user.accessLevel === AccessLevel.Admin) {
  // acciones del administrador
}
```

En este ejemplo, AccessLevel es un enum que define tres posibles niveles de acceso. Al usar valores del enum, TypeScript ofrece autocompletado y verificación de tipos, lo que hace que el código sea más seguro y cómodo de desarrollar.

## Conclusiones

En esta lección aprendimos cómo y para qué se usan las enumeraciones. También vimos que se pueden indicar como tipo en los parámetros de una función.
