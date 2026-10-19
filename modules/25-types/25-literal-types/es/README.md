En programación hay situaciones en las que trabajamos con un conjunto limitado de valores de algún tipo, por ejemplo, con ciertas cadenas. Pueden ser datos de referencia, estados, etc. Así podría verse el estado de un pedido:

```text
Created
Paid
Shipped
Delivered
```

El código que trabaja con estos datos los guardará en una base de datos, los enviará y recibirá por la red y comprobará el estado del pedido. Si usamos un tipo general para estos datos, por ejemplo, `string`, surgen muchos problemas:

- El compilador no detectará errores tipográficos
- El compilador no detectará el uso de estados no válidos
- No podremos ver qué estados tenemos
- El autocompletado del editor no funcionará

Para resolver esta tarea, TypeScript admite el tipo literal. Los tipos literales solo están disponibles para `string`, `boolean`, `number` y `BigInt`:

```typescript
type Hexlet = "hexlet";
type One = 1;
type False = false;
type BigN = 100n;
```

Desde el punto de vista de la teoría de conjuntos, este tipo representa un conjunto que consta de un solo elemento. Y para el sistema de tipos es una restricción: a la variable no se le puede asignar nada más que el valor indicado:

```typescript
type TestValue = "test";
let test: TestValue = "test";

test = "string"; // Error: Type '"string"' is not assignable to type '"test"'.
```

## Unión de tipos literales

Usando la unión de tipos, podemos obtener un tipo que solo acepta los valores que necesitamos:

```typescript
type OrderStatus = "Created" | "Paid" | "Shipped" | "Delivered";
```

Los tipos literales también se pueden combinar con cualquier otro tipo. Así podemos obtener una restricción que abarca todos los estados y `false`:

```typescript
type OrderStatusFalse = OrderStatus | false;
```

## Enumeraciones de cadenas (String enums)

En la mayoría de los lenguajes este problema se resuelve mediante enumeraciones, que también se agregaron a TypeScript:

```typescript
enum OrderStatus {
  Created = "Created",
  Paid = "Paid",
  Shipped = "Shipped",
  Delivered = "Delivered",
}
```

Pero en TypeScript las enumeraciones no son del todo perfectas.

TypeScript es una capa sobre JavaScript que agrega tipos, pero no cambia el lenguaje en sí.

Con Enum no es así. Las enumeraciones son una construcción del lenguaje que sigue existiendo en el código después de traducirlo a JavaScript.

Por esta razón, algunos desarrolladores usan en su lugar Union Types, que permiten hacer prácticamente lo mismo con literales de cadena.

Aun así, se recomienda usar Enum en el código de aplicación, porque ofrece garantías adicionales de fiabilidad. Y en el código de bibliotecas, usar Union Types, porque es más flexible y ofrece posibilidades adicionales.

## Objetos literales

Al configurar bibliotecas, encontramos casos en los que se espera de nosotros una de varias cadenas. Por ejemplo, nos dan a elegir entre varias bases de datos:

```typescript
const dataSourceConfig = {
  type: "postgres", // También puede ser mysql
  host: "localhost",
  port: 5432,
};

const AppDataSource = new DataSource(dataSourceConfig);
```

Para describir estos objetos se usa el tipo de objetos literales, donde los campos se inicializan con un tipo literal o con una unión de ellos:

```typescript
type DataSourceOption = {
  type: "postgres" | "mysql";
  host: string;
  port: number;
};
```

Esto da a los autores de bibliotecas una herramienta adicional de documentación, y a los desarrolladores, un autocompletado excelente que los protege de errores en los argumentos que pasan.

## Conversión a tipo literal

En el caso de los objetos de configuración, a menudo no queremos que se modifiquen desde fuera y esperamos valores concretos en su interior. Aquí nos ayuda la conversión del tipo a literal mediante la Type Assertion `as const`:

```typescript
const ormConfig = {
  type: "mysql",
  host: "localhost",
  port: 5432,
} as const;
```

Como resultado obtenemos `readonly`: un tipo con campos inmutables y tipos literales en los valores. Esta técnica también se aplica a los arrays. Los convierte en tuplas, es decir, arrays de longitud fija. Y también quedan protegidos contra cambios.

La conversión también funciona con tipos simples, por ejemplo, con una cadena:

```typescript
const str = "test" as const;

type Str = typeof str; // 'test'
```
