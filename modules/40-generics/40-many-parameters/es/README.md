Los genéricos, al igual que las funciones normales, pueden tener varios parámetros de tipo. En esta lección veremos este tipo de genéricos.

El principio de funcionamiento de los genéricos no cambia con la cantidad de parámetros. Lo único a lo que hay que prestar atención es a los nombres:

```typescript
type Double<T, U> = {
  first: T;
  second: U;
};

const value: Double<string, number> = {
  first: "code-basics",
  second: 1,
};
```

## Inferencia del tipo a partir de los argumentos de una función

Imagina que necesitamos llamar a una función con varios parámetros. Los argumentos están representados por genéricos. Por ejemplo, la función `join()` se puede describir así:

```typescript
function join<T, U>(coll1: (T | U)[], coll2: U[]): (T | U)[] {
  return coll1.concat(coll2);
}

join<number, string>([1, 2], ["one", "two"]); // [1, 2, 'one', 'two']

join<string, string>(["first", "second"], ["one", "two"]); // ['first', 'second', 'one', 'two']
```

Pero TypeScript simplifica la tarea y permite no indicar los tipos de todos los parámetros:

```typescript
join([1, 2], ["one", "two"]); // [1, 2, 'one', 'two']
```

TypeScript inferirá por sí mismo los tipos de los parámetros de la función. Esto se llama inferencia del tipo a partir de los argumentos de una función. En este caso, TypeScript inferirá los tipos `number` y `string` para los parámetros `T` y `U`, respectivamente.

Si el argumento es un literal de cadena, el parámetro de tipo se infiere como el tipo literal de esa cadena. Lo veremos con la función `either()`, que devuelve el valor o, si no existe, una alternativa de respaldo.

```typescript
function either<T, U>(value: T, fallback: U): T | U {
  return value ?? fallback;
}

const result = either(undefined, "default"); // tipo "default" | undefined
```

En este ejemplo, `T` se infiere como `undefined` y `U` como `"default"`, por lo que `result` recibe el tipo `"default" | undefined`.

En las próximas lecciones conoceremos los genéricos integrados en TypeScript que tienen dos parámetros. En la programación real, este tipo de genéricos aparece a menudo en el código de aplicaciones, por ejemplo, en React.
