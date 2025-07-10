
Implement the `CustomFile` class, which constructor is passed a file name and size in bytes or another file. Within the class, define an `toString()` method that should return a formatted string in the format `(copy) <file-name> (<size> bytes)`. `(copy)` should only be output if the file is a copy of another file.

```typescript
const file = new CustomFile({ name: 'open-world.jpeg', size: 1000 });
console.log(file.toString()); // open-world.jpeg (1000 bytes)

const file2 = new CustomFile(file);
console.log(file2.toString()); // (copy) open-world.jpeg (1000 bytes)

const file3 = new CustomFile(file2);
console.log(file2.toString()); // (copy) open-world.jpeg (1000 bytes)
```
