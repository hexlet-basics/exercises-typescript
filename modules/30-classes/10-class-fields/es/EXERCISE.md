
Implementa la clase `CustomFile`, cuyo constructor recibe un objeto con los campos: `name`, el nombre del archivo, y `size`, el tamaño en bytes. Guarda los valores recibidos en campos públicos con los mismos nombres: `name` (cadena) y `size` (número). Deben estar accesibles desde fuera como propiedades del objeto.

Además, dentro de la clase define el método `toString()`, que debe devolver una cadena con el formato `<file-name> (<size> bytes)`.

```typescript
const file = new CustomFile({ name: "open-world.jpeg", size: 1000 });

console.log(file.name); // open-world.jpeg
console.log(file.size); // 1000
console.log(file.toString()); // open-world.jpeg (1000 bytes)
```
