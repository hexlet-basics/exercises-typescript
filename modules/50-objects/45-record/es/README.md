Los objetos con estructura dinámica se usan a menudo para construir un contexto o almacenar datos. Por ejemplo, esto sucede cuando les agregamos campos durante la ejecución del programa. Vamos a escribir un tipo auxiliar para construir un objeto así:

```typescript
type Context<K extends string, V> = {
  [Key in K]: V;
};

const runApp = <C extends Context<string, unknown>>(ctx: C) => {};
```

La clave `Key` tomará uno por uno todos los valores de `K`. A su vez, `K` es un subconjunto de `string`, y `V` puede ser cualquier cosa. Así creamos nuestro propio tipo `Context` con campos de cadena y un tipo desconocido para el valor.

Esta construcción, en la que no definimos campos específicos adicionales junto a las claves dinámicas, es bastante común. Los Utility Types incorporados ofrecen una solución lista para esto: `Record<Keys, Type>`. Este tipo genérico recibe como primer argumento el tipo de la clave y como segundo, el tipo del valor. Por dentro funciona de manera similar a nuestro tipo `Context`:

```typescript
type Rating = 0 | 1 | 2 | 3 | 4 | 5;
type SongsRating = Record<string, Rating>;

const songsRating: SongsRating = {
  ratata: 4,
};
```

Con este tipo `SongsRating` podemos definir el tipo de un objeto con una clave arbitraria (el nombre de la canción) y una calificación: un número del cero al cinco.

Es preferible usar `Record` al describir tipos de objeto en TypeScript. Permite describir estructuras dinámicas de forma flexible y concisa, y combinar `Record` con otros tipos de datos.
