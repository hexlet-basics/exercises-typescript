En esta lección veremos el sistema de módulos de TypeScript, que se creó antes de la estandarización de los módulos ESM.

Por defecto, este sistema de módulos es compatible con los módulos de Node.js. Usa el mismo algoritmo para resolver las importaciones y exportaciones, y su sintaxis se parece a la de ESM. En él usamos las palabras clave `import`/`export` para importar en el módulo actual y exportar desde él, y además sigue siendo válido usar módulos CommonJS.

Como ejemplo, creemos dos archivos. Desde uno exportaremos una función y en el otro la importaremos:

```typescript
// @file helloWorld.ts
export default function helloWorld() {
  console.log("Hello, world!");
}

// @file main.ts
import helloWorld from "./helloWorld";
```

El sistema de módulos de TypeScript también admite la exportación/importación con nombre y la importación de todo lo exportado con `import * as`:

```typescript
// @file helloWorld
export function helloWorld() {}
export function helloWorldAgain() {}

// @file main
import { helloWorld, helloWorldAgain } from "./helloWorld";

// @file next
import * as hw from "./helloWorld";
hw.helloWorld();
```

## Importación de tipos

TypeScript, al igual que JavaScript, usa paquetes npm para las dependencias. Pero hay que recordar que algunos paquetes pueden no tener tipos. Por ejemplo, el paquete `lodash` no tiene tipos, así que al importar sus funciones TypeScript se quejará de que faltan los tipos.

Para resolver este problema, hay que instalar el paquete `@types/lodash`, que contiene los tipos de `lodash`.

Pero también ocurre lo contrario: por ejemplo, el paquete `type-fest` contiene solo tipos. Para crear un paquete así uno mismo y no importar por accidente la implementación de las funciones, hay que usar una sintaxis especial:

```typescript
// @file user.types.ts
export type User = { name: string };

// @file main.ts
import type { User } from "./user.types";
```

## Espacio de nombres (Namespace)

Los módulos resuelven el problema de las entidades heterogéneas y de las colisiones repartiendo el código en varios archivos. Para evitar colisiones dentro de un mismo archivo, se usa el mecanismo de espacios de nombres `namespace`. Supongamos que en un archivo necesitamos dos funciones `log()`. Una imprime el mensaje en la terminal y la otra lo agrega a un informe.

```typescript
namespace Terminal {
  export function log(message: string) {
    console.log(`terminal: ${message}`);
  }
}

namespace Report {
  export function log(message: string) {
    console.log(`report: ${message}`);
  }
}

Terminal.log("Hello, world!"); // terminal: Hello, world!
Report.log("Hello, world!"); // report: Hello, world!
```

En este ejemplo, cada función `log()` está declarada dentro de su propio espacio de nombres, por eso los nombres no entran en conflicto. Desde fuera, la función se llama a través del nombre del espacio, y solo está disponible si está marcada con `export`.

Este mecanismo es especialmente útil para los autores de bibliotecas y de paquetes de tipos `@types/`. Encierran todas las interfaces en un solo `namespace` con el mismo nombre que la biblioteca. Esto garantiza que no haya colisiones de nombres y facilita a los usuarios la fusión de interfaces. Hablaremos de esto último en una de las próximas lecciones del curso.
