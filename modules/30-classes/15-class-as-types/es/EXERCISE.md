
Implementa la clase `CustomFile`, cuyo constructor recibe un objeto con el nombre del archivo y el tamaño en bytes, o bien otro archivo. Como en la lección anterior, `name` y `size` siguen siendo campos públicos y están accesibles desde fuera, pero la marca de copia no debe exponerse: guárdala en un campo privado.

Dentro de la clase define el método `toString()`, que debe devolver una cadena con el formato `(copy) <file-name> (<size> bytes)`. `(copy)` debe mostrarse solo si el archivo es una copia de otro archivo.

```typescript
const file = new CustomFile({ name: "open-world.jpeg", size: 1000 });
console.log(file.toString()); // open-world.jpeg (1000 bytes)

const file2 = new CustomFile(file);
console.log(file2.toString()); // (copy) open-world.jpeg (1000 bytes)

const file3 = new CustomFile(file2);
console.log(file2.toString()); // (copy) open-world.jpeg (1000 bytes)
```
